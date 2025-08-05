"use client"
import React, { useEffect, useState } from 'react'

const SessionPage = () => {
    const [sessions, setSessions] = useState([]);

    useEffect(() => {
        fetch('/api/sessions')
            .then(res => res.json())
            .then(data => {
                const published = data.filter(session => session.status === 'published');
                setSessions(published);
            });
    }, []);


    return (
        <div className="bg-emerald-500 p-6 max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Public Wellness Sessions</h1>
            <ul className="space-y-3">
                {sessions.map(session => (
                    <li key={session._id} className="p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                        {session.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SessionPage;
