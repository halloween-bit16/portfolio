'use client';
import { useState } from 'react';

export default function ContactModal({ onClose }) {
  const [from, setFrom] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showConfirm, setShowConfirm] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSend = () => {
    setShowThankYou(true);
    setFrom('');
    setEmail('');
    setMessage('');
  };

  const handleDelete = () => {
    setFrom('');
    setEmail('');
    setMessage('');
    setShowConfirm(false);
  };

  return (
    <div className="absolute top-24 left-1/4 w-[650px] bg-gray-100 border-2 border-gray-700 shadow-xl">
      <div className="flex justify-between items-center bg-blue-600 text-white px-3 py-2">
        <h2 className="font-semibold">New Message</h2>
        <button
          onClick={onClose}
          className="hover:bg-red-500 px-2 text-sm font-bold"
        >
          X
        </button>
      </div>

      <div className="bg-white p-3 text-sm">
        <div className="flex items-center mb-2">
          <label className="w-16 font-semibold">From:</label>
          <input
            type="text"
            placeholder="Enter name..."
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="flex-1 border px-2 py-1 text-xs"
          />
        </div>
        <div className="flex items-center mb-2">
          <label className="w-16 font-semibold">Email:</label>
          <input
            type="text"
            placeholder="example@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 border px-2 py-1 text-xs"
          />
        </div>
      </div>

      <div className="p-3 bg-white">
        <textarea
          rows={8}
          placeholder="Write your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full border p-2 text-sm"
        ></textarea>
      </div>

      <div className="flex justify-between bg-gray-200 border-t px-3 py-2">
        <div>
          <button
            onClick={handleSend}
            className="bg-blue-600 text-white px-3 py-1 text-sm font-medium mr-2 hover:bg-blue-700"
          >
            Send
          </button>
          <button className="bg-gray-300 px-3 py-1 text-sm font-medium hover:bg-gray-400">
            Save Draft
          </button>
        </div>
        <div className="flex gap-2">
          <button className="bg-gray-300 px-2 py-1 text-xs hover:bg-gray-400">
            📎 Attach
          </button>
          <button
            onClick={() => setShowConfirm(true)}
            className="bg-gray-300 px-2 py-1 text-xs hover:bg-gray-400"
          >
            🗑️ Delete
          </button>
        </div>
      </div>

      {showConfirm && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <div className="bg-white border-2 border-gray-600 w-64">
            <div className="bg-blue-600 px-3 py-2 border-b border-gray-400">
              <h3 className="font-semibold text-white text-sm">Confirm Delete</h3>
            </div>
            <div className="p-3 text-sm">
              <p>Are you sure you want to delete?</p>
              <div className="flex justify-end gap-2 mt-3">
                <button
                  onClick={handleDelete}
                  className="bg-red-500 text-white px-2 py-1 text-xs hover:bg-red-600"
                >
                  Yes
                </button>
                <button
                  onClick={() => setShowConfirm(false)}
                  className="bg-gray-300 px-2 py-1 text-xs hover:bg-gray-400"
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showThankYou && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <div className="bg-white border-2 border-gray-600 w-64">
            <div className="bg-blue-600 px-3 py-2 border-b border-gray-400">
              <h3 className="font-semibold text-white text-sm">Message Sent</h3>
            </div>
            <div className="p-3 text-sm">
              <p>Thank you for your message!</p>
              <div className="flex justify-end mt-3">
                <button
                  onClick={() => setShowThankYou(false)}
                  className="bg-blue-600 text-white px-3 py-1 text-xs hover:bg-blue-700"
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
