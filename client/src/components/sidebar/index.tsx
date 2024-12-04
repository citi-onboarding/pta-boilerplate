"use client";

import Image from "next/image";
import { logoCITiWhite } from "@/assets";
import { useRouter } from "next/navigation";

import { Button } from "../ui/button";
import { Gamepad2, CircleUserRound } from 'lucide-react';
 
export default function Sidebar() {
  const router = useRouter();
  
  return (
    <div className="flex flex-col h-full items-center justify-between bg-backgroundSidebar w-72 p-6">

      <div className="flex flex-col items-center gap-4 py-7">
        <Image src={logoCITiWhite} alt="Logo" className="itens-center w-30 h-auto mb-4"/>

        <Button onClick={() => router.push("/ExploreMatches")} className="flex items-center justify-start w-56 h-11 px-4 bg-white bg-opacity-40 [&_svg]:size-8 hover:bg-black/20 hover:shadow-xl">
          <Gamepad2 color="white"/>
          <span className="text-white font-bold text-base font-barlow">Explorar Partidas</span>
        </Button>

        <Button onClick={() => router.push("/Profile")} className="flex items-center justify-start w-56 h-11 px-4 bg-white bg-opacity-40 [&_svg]:size-8 hover:bg-black/20 hover:shadow-xl">
          <CircleUserRound color="white"/> 
          <span className="text-white font-bold text-base font-barlow">Perfil</span>
        </Button>
      </div>

      <div className="flex flex-row items-center gap-2">
        <p className="text-white text-sm font-barlow">
          Made with <strong>&lt; &#x0002F; &gt;</strong> and{" "}<strong>&hearts;</strong> by{" "}
        </p>
        <Image src={logoCITiWhite} alt="Logo" className="w-10 h-auto" />
      </div>
    </div>
  );
}