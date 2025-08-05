"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { FaEye, FaEdit, FaTrash, FaPlus } from "react-icons/fa"

const Dashboard = () => {
    const [filter, setFilter] = useState('published');

    const sessions = [
        {
            _id: "507f1f77bcf86cd799439011",
            user_id: "507f1f77bcf86cd799439012",
            title: "Morning Sun Salutation",
            tags: ["yoga", "morning", "beginner"],
            json_file_url: "/uploads/sessions/morning-yoga.json",
            status: "published",
            created_at: "2024-01-15T08:30:00.000Z",
            updated_at: "2024-01-16T10:15:00.000Z",
            isPublished: true
        },
        {
            _id: "507f1f77bcf86cd799439013",
            user_id: "507f1f77bcf86cd799439012",
            title: "Breathing for Anxiety",
            tags: ["breathing", "anxiety", "stress-relief"],
            json_file_url: "/uploads/sessions/breathing-anxiety.json",
            status: "draft",
            created_at: "2024-01-10T14:20:00.000Z",
            updated_at: "2024-01-12T09:45:00.000Z",
            isPublished: false
        },
        {
            _id: "507f1f77bcf86cd799439014",
            user_id: "507f1f77bcf86cd799439012",
            title: "Evening Meditation for Sleep",
            tags: ["meditation", "sleep", "relaxation"],
            json_file_url: "/uploads/sessions/evening-meditation.json",
            status: "published",
            created_at: "2024-01-05T19:00:00.000Z",
            updated_at: "2024-01-08T11:30:00.000Z",
            isPublished: true
        },
        {
            _id: "507f1f77bcf86cd799439015",
            user_id: "507f1f77bcf86cd799439012",
            title: "Power Vinyasa Flow",
            tags: ["yoga", "vinyasa", "advanced"],
            json_file_url: "/uploads/sessions/power-vinyasa.json",
            status: "draft",
            created_at: "2024-01-20T16:45:00.000Z",
            updated_at: "2024-01-20T16:45:00.000Z",
            isPublished: false
        }
    ]

    const filteredSessions = sessions.filter(session =>
        filter === 'published' ? session.isPublished : !session.isPublished
    );


    return (
        <div className="p-6 max-w-4xl mx-auto bg-gradient-to-br from-gray-50 to-emerald-200">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-900">My Sessions</h1>
                <div className="flex justify-center items-center mb-6">
                    <Link
                        href="/sessions/my"
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                    >
                        <FaPlus className="mr-2" />
                        New Session
                    </Link>
                </div>
            </div >

            {/* Sessions List */}
            < div className="space-y-4" >
                {/* Toggle Bar: Sessions & Drafts */}
                < div className="flex bg-gray-100 text-black p-1 rounded-lg" >
                    <button
                        onClick={() => setFilter('published')}
                        className={`flex-1 py-2 px-4 rounded-md text-sm font-medium cursor-pointer ${filter === 'published'
                            ? 'bg-white shadow'
                            : 'text-gray-500 hover:bg-gray-50'
                            }`}
                    >
                        Sessions
                    </button>
                    <button
                        onClick={() => setFilter('draft')}
                        className={`flex-1 py-2 px-4 rounded-md text-sm font-medium cursor-pointer ${filter === 'draft'
                            ? 'bg-white shadow'
                            : 'text-gray-500 hover:bg-gray-50'
                            }`}
                    >
                        Drafts
                    </button>
                </div >

                {/* Filtered Session List */}
                {
                    filteredSessions.map(session => (
                        <div
                            key={session._id}
                            className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
                        >
                            <div className="flex justify-between items-start">
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                                        {session.title}
                                    </h3>

                                    <div className="flex items-center space-x-3 mb-2">
                                        <span
                                            className={`px-2 py-1 rounded text-xs font-medium ${session.isPublished
                                                ? 'bg-green-100 text-green-700'
                                                : 'bg-yellow-100 text-yellow-700'
                                                }`}
                                        >
                                            {session.isPublished ? 'Published' : 'Draft'}
                                        </span>

                                        <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">
                                            {session.status}
                                        </span>

                                        <div className="flex space-x-1">
                                            {session.tags.slice(0, 3).map((tag, index) => (
                                                <span
                                                    key={index}
                                                    className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="text-sm text-gray-500 space-y-1">
                                        <p>Created: {new Date(session.created_at).toLocaleDateString()}</p>
                                        <p>Updated: {new Date(session.updated_at).toLocaleDateString()}</p>
                                        <p className="text-xs text-blue-600">
                                            File: {session.json_file_url}
                                        </p>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="flex space-x-2 ml-4">
                                    <button className="p-2 text-gray-500 hover:text-blue-500 hover:bg-blue-50 rounded">
                                        <FaEye />
                                    </button>
                                    <button className="p-2 text-gray-500 hover:text-green-500 hover:bg-green-50 rounded">
                                        <FaEdit />
                                    </button>
                                    <button className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-50 rounded">
                                        <FaTrash />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div >

        </div >
    )
}

export default Dashboard