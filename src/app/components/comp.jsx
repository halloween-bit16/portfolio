'use client';

export default function Comp({ onClose }) {
  return (
    <div className="absolute top-20 left-1/4 w-[600px] bg-gray-100 border-2 border-gray-700 shadow-xl">
      
      <div className="flex justify-between items-center bg-blue-600 text-white px-3 py-2">
        <h2 className="font-semibold">My Computer</h2>
        <button
          onClick={onClose}
          className="hover:bg-red-500 px-2 rounded font-bold text-sm"
        >
          X
        </button>
      </div>

      <div className="p-4 grid grid-cols-2 gap-6">
        
        <div>
          <h3 className="font-semibold mb-2 text-lg">About Me</h3>
          <p className="text-sm mb-1"><span className="font-bold">Name:</span> Ruchi Pawar</p>
          <p className="text-sm mb-1"><span className="font-bold">Role:</span> Web Developer</p>
          <p className="text-sm mb-1"><span className="font-bold">Interests:</span> Webdev, Cybersecurity, Writing</p>
          <p className="text-sm"><span className="font-bold">College:</span> MIT Manipal</p>
        </div>

        
        <div className="bg-white border shadow-sm p-3">
          <h3 className="font-semibold mb-2">System Properties</h3>
          <p className="text-xs"><span className="font-bold">OS:</span> Windows XP Clone</p>
          <p className="text-xs"><span className="font-bold">Start Data:</span> 16 July 2025</p>
          <p className="text-xs"><span className="font-bold">CPU:</span> Intel Core i7</p>
          <p className="text-xs"><span className="font-bold">Memory:</span> 16GB</p>
          <p className="text-xs"><span className="font-bold">Disk:</span> 512GB SSD</p>
        </div>
      </div>
    </div>
  );
}
