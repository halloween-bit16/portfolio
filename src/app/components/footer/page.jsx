import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-[#c1c0c1] fixed bottom-0 left-0 w-full border-2 border-[#fefffe]">
      <div className="flex flex-row">
        <div className="h-17 p-3">
          <button className="bg-[#c1c0c1] flex justify-start items-center p-2 border-2 border-t-[#fefffe] border-l-[#fefffe] gap-3">
            <Image src="/assets/start.png" alt="start" width={20} height={20} />
            Start
          </button>
        </div>
        <button className="bg-[#d3d1d3] border-2 w-90 h-11 mt-3 border-b-[#fefffe] border-r-[#fefffe] flex justify-start items-center px-3">
            <p>Welcome!</p>
        </button>
      </div>
    </div>
  );
}
