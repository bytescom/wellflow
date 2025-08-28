"use client";
import { useState, useEffect, useRef, useCallback } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MySession = () => {
  const [sessionData, setSessionData] = useState({
    title: '',
    tags: [],
    json_file_url: '',
    status: 'draft'
  });
  const [tagInput, setTagInput] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDraftSaving, setIsDraftSaving] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  const [error, setError] = useState('');
  const [autoSaveStatus, setAutoSaveStatus] = useState('');
  const autoSaveTimer = useRef(null);
  const lastSavedData = useRef({});
  const saveInProgress = useRef(false);

  const hasUnsavedChanges = JSON.stringify({
    title: sessionData.title,
    tags: sessionData.tags,
    json_file_url: sessionData.json_file_url
  }) !== JSON.stringify(lastSavedData.current);

  const handleSave = useCallback(async (status, isAutoSave = false) => {
    // Double check to prevent race conditions
    if (saveInProgress.current || (isAutoSave && !hasUnsavedChanges)) {
      return;
    }

    // Set the flag immediately to prevent concurrent calls
    saveInProgress.current = true;

    if (autoSaveTimer.current) clearTimeout(autoSaveTimer.current);
    
    setIsSubmitting(true);
    if (status === 'draft') {
      setIsDraftSaving(true);
    } else {
      setIsPublishing(true);
    }
    setError('');

    try {
      const payload = { ...sessionData, status };

      const res = await fetch('http://localhost:3001/api/sessions/my', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const contentType = res.headers.get('content-type');
      if (!contentType?.includes('application/json')) {
        throw new Error(await res.text() || 'Invalid response from server');
      }

      const data = await res.json();

      if (res.ok) {
        lastSavedData.current = {
          title: sessionData.title,
          tags: sessionData.tags,
          json_file_url: sessionData.json_file_url
        };

        if (isAutoSave) {
          setAutoSaveStatus('Draft auto-saved');
          setTimeout(() => setAutoSaveStatus(''), 2000);
        } else {
          toast.success(`Session ${status} successfully!`);
          // Redirect to dashboard after successful save/publish
          setTimeout(() => {
            window.location.href = '/dashboard'; // Change this to your dashboard route
          }, 1000); // Small delay to show the success toast
        }
      } else {
        throw new Error(data.error || 'Failed to save session');
      }
    } catch (err) {
      setError(err.message || 'Unexpected error');
      if (!isAutoSave) toast.error(err.message);
    } finally {
      setIsSubmitting(false);
      setIsDraftSaving(false);
      setIsPublishing(false);
      saveInProgress.current = false;
    }
  }, [sessionData, hasUnsavedChanges]);

  useEffect(() => {
    if (autoSaveTimer.current) clearTimeout(autoSaveTimer.current);

    if (hasUnsavedChanges && !isSubmitting && !saveInProgress.current) {
      autoSaveTimer.current = setTimeout(() => {
        handleSave('draft', true);
      }, 30000); // 30s
    }

    return () => clearTimeout(autoSaveTimer.current);
  }, [sessionData, isSubmitting, handleSave, hasUnsavedChanges]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSessionData(prev => ({ ...prev, [name]: value }));
  };

  const handleAddTag = (e) => {
    e.preventDefault();
    const tag = tagInput.trim().replace(/^#/, '');
    if (tag && !sessionData.tags.includes(tag)) {
      setSessionData(prev => ({ ...prev, tags: [...prev.tags, tag] }));
      setTagInput('');
    }
  };

  const handleRemoveTag = (tag) => {
    setSessionData(prev => ({ ...prev, tags: prev.tags.filter(t => t !== tag) }));
  };

  const handleSaveDraft = async () => {
    // Prevent multiple clicks
    if (isDraftSaving || saveInProgress.current) {
      return;
    }
    await handleSave('draft', false);
  };

  const handlePublish = async () => {
    // Prevent multiple clicks
    if (isPublishing || saveInProgress.current || !sessionData.title) {
      return;
    }
    await handleSave('published', false);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-50 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Create New Session</h1>

      {error && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4 rounded">
          <p className="font-medium">Error</p>
          <p>{error}</p>
        </div>
      )}

      {autoSaveStatus && (
        <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 mb-4 rounded">
          <p>{autoSaveStatus}</p>
        </div>
      )}

      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Title *</label>
          <input
            type="text"
            name="title"
            value={sessionData.title}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:ring-2"
            placeholder="Enter session title"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">JSON File URL</label>
          <input
            type="url"
            name="json_file_url"
            value={sessionData.json_file_url}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:ring-2"
            placeholder="https://example.com/data.json"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Tags</label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleAddTag(e)}
              className="flex-1 px-4 py-2 border rounded-md"
              placeholder="Type a tag and press Enter"
            />
            <button
              type="button"
              onClick={handleAddTag}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Add
            </button>
          </div>

          {sessionData.tags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {sessionData.tags.map(tag => (
                <div key={tag} className="flex items-center bg-blue-100 px-3 py-1 rounded-full">
                  <span className="text-blue-800 font-medium">#{tag}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveTag(tag)}
                    className="ml-2 text-blue-600 hover:text-blue-800"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex justify-end gap-4 pt-4">
          <button
            type="button"
            onClick={handleSaveDraft}
            disabled={isDraftSaving || saveInProgress.current}
            className={`px-4 py-2 border rounded-md transition-colors ${
              isDraftSaving || saveInProgress.current
                ? 'bg-gray-200 cursor-not-allowed opacity-50'
                : 'hover:bg-gray-100'
            }`}
          >
            {isDraftSaving ? 'Saving Draft...' : 'Save as Draft'}
          </button>
          <button
            type="button"
            onClick={handlePublish}
            disabled={isPublishing || saveInProgress.current || !sessionData.title}
            className={`px-4 py-2 text-white rounded-md transition-colors ${
              isPublishing || saveInProgress.current || !sessionData.title
                ? 'bg-green-400 cursor-not-allowed opacity-50'
                : 'bg-green-600 hover:bg-green-700'
            }`}
          >
            {isPublishing ? 'Publishing...' : 'Publish'}
          </button>
        </div>
      </form>

      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};

export default MySession;