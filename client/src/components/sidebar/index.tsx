import Image from "next/image";
import { logoBranco } from "@/assets";

import { Button } from "../ui/button";
import { Gamepad2, CircleUserRound } from 'lucide-react';
 
export default function Sidebar() {
  return (
    <div className="sidebar flex flex-col h-full items-center justify-between bg-backsidebar w-64">

      <div className="sidebar_UpSide flex flex-col items-center gap-4 py-7">
        <Image src={logoBranco} alt="Logo" className="itens-center w-30 h-auto mb-4"/>

        <Button className="flex items-center justify-start w-56 h-11 px-4 bg-white bg-opacity-40 [&_svg]:size-8">
          <Gamepad2 color="white"/>
          <span className="text-white font-bold text-base font-barlow">Explorar Partidas</span>
        </Button>

        <Button className="flex items-center justify-start w-56 h-11 px-4 bg-white bg-opacity-40 [&_svg]:size-8 ">
          <CircleUserRound color="white"/> 
          <span className="text-white font-bold text-base font-barlow">Perfil</span>
        </Button>
      </div>

      <div className="sidebar_footer flex flex-row items-center gap-2 p-4">
        <p className="text-white text-sm font-barlow">
          Made with <strong>&lt; &#x0002F; &gt;</strong> and{" "}<strong>&hearts;</strong> by{" "}
        </p>
        <Image src={logoBranco} alt="Logo" className="w-10 h-auto" />
      </div>
    </div>
  );
}