"use client";
import Image from "next/image";
import Footer from "./components/footer/page";
import { useState } from "react";
import Comp from "./components/comp";
import Cmd from "./components/cmd";
import Contact from "./components/contact";
import Work from "./components/work";
import Internet from "./components/internet";

export default function Home() {
  const [selectedApp, setSelectedApp] = useState(null);
  const closeApp = () => setSelectedApp(null);

  return (
    <div className="min-h-screen bg-[#008181] relative overflow-hidden">
      <div className="flex justify-start items-start">
        <section className="flex flex-col justify-start items-center p-10 gap-10 mt-11">
          <div
            onClick={() => setSelectedApp("comp")}
            className="flex flex-col items-center gap-2 text-white cursor-pointer"
          >
            <Image
              src="/assets/my_comp.png"
              alt="Computer"
              width={35}
              height={35}
            />
            <p>My Computer</p>
          </div>

          <div
            onClick={() => setSelectedApp("work")}
            className="flex flex-col items-center gap-2 cursor-pointer text-white"
          >
            <Image
              src="/assets/folder.png"
              alt="Folder"
              width={35}
              height={35}
            />
            <p>Work</p>
          </div>

          <div 
          onClick={() => setSelectedApp("internet")}
          className="flex flex-col items-center gap-2 cursor-pointer text-white">
            <Image
              src="/assets/network.png"
              alt="Globe"
              width={35}
              height={35}
            />
            <p>Internet</p>
          </div>

          <div
            onClick={() => setSelectedApp("contact")}
            className="flex flex-col items-center gap-2 text-white cursor-pointer"
          >
            <Image src="/assets/email.png" alt="email" width={35} height={35} />
            <p>Contact</p>
          </div>

          <div
            onClick={() => setSelectedApp("cmd")}
            className="flex flex-col items-center gap-2 text-white cursor-pointer"
          >
            <Image src="/assets/cmd.png" alt="CMD" width={35} height={35} />
            <p>Command Prompt</p>
          </div>
        </section>
      </div>

      {selectedApp === "comp" && <Comp onClose={closeApp} />}
      {selectedApp === "contact" && <Contact onClose={closeApp} />}
      {selectedApp === "cmd" && <Cmd onClose={closeApp} />}
      {selectedApp === "work" && <Work onClose={closeApp} />}
      {selectedApp === "internet" && <Internet onClose={closeApp} />}
      <Footer />
    </div>
  );
}
