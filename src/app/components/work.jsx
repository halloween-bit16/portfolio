"use client";

import { useState } from "react";

export default function MyWorkModal({ onClose }) {
  const [openStory, setOpenStory] = useState(false);

  return (
    <>
     
      <div className="absolute top-20 left-1/4 w-[700px] bg-gray-100 border-2 border-gray-700 shadow-xl">
        <div className="flex justify-between items-center bg-blue-600 text-white px-3 py-2 text-sm">
          <h2 className="font-bold">My Work</h2>
          <a
            onClick={onClose}
            className="hover:bg-red-500 px-2 text-sm font-bold"
          >
            X
          </a>
        </div>

        <div className="p-4 bg-white text-sm space-y-3">
          
          <div className="border border-gray-400 p-2 bg-gray-50">
            <h3 className="font-semibold text-blue-800 mb-1">📜 Certificate</h3>
            <p>Acheiver of Scholar's Scholarship.</p>
            <p>Completed Pre-Security, TryHackMe.</p>
          </div>

          <div className="border border-gray-400 p-2 bg-gray-50">
            <h3 className="font-semibold text-blue-800 mb-1">💻 Projects</h3>
            <ul className="list-disc ml-6">
              <li>
                <a
                  href="https://tunezmusic1.netlify.app/"
                  target="_blank"
                  className="text-blue-700 underline hover:text-blue-900"
                >
                  Tunez.exe
                </a>{" "}
                – Music catalogue web app.
              </li>
              <li>
                <a
                  href="https://lazylatte.netlify.app/"
                  target="_blank"
                  className="text-blue-700 underline hover:text-blue-900"
                >
                  LazyLatte.exe
                </a>{" "}
                – Fictional Coffee shop website.
              </li>
            </ul>
          </div>

          <div className="border border-gray-400 p-2 bg-gray-50">
            <h3 className="font-semibold text-blue-800 mb-1">📖 Writing</h3>
            <a
                target="_blank"
                href="https://medium.com/@ruchi3110pawar/guilt-and-shame-94a9f20baf1c" 
              className="text-blue-700 underline hover:text-blue-900">
              Guilt_and_Shame.txt
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
