import React from 'react';

export default async function SessionDetail({ params }) {
  const { id } = params;

  const res = await fetch(`${process.env.API_BASE_URL}/api/sessions/${id}`);
  const session = await res.json();

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded shadow mt-10">
      <h1 className="text-2xl font-bold mb-4">{session.title}</h1>
      <p className="mb-2 text-sm text-gray-600">
        {session.isPublished ? 'Published' : 'Draft'} • Created: {new Date(session.created_at).toLocaleDateString()}
      </p>
      <div className="text-gray-800 mb-2">
        Tags: {session.tags.join(', ')}
      </div>
      <p className="text-blue-500 text-sm">JSON File: {session.json_file_url}</p>
    </div>
  );
}
