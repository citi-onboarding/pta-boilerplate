"use client";

import { CreateButton } from "@/components/CreateButton";
import MatchCard from "@/components/MatchCard";
import Topbar from "@/components/topbar";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const matches = [
  { gameName: "Minecraft", description: "Discord", date: "06/07/2023", time: "19h", status: "closed", participants: 5 },
  { gameName: "League of Legends", description: "Discord", date: "07/07/2023", time: "20h", status: "full", participants: 10 },
  { gameName: "Valorant", description: "Discord", date: "08/07/2023", time: "18h", status: "joinable", participants: 8 },
  { gameName: "CS:GO", description: "Discord", date: "09/07/2023", time: "21h", status: "playing", participants: 12 },
  { gameName: "Fortnite", description: "Discord", date: "10/07/2023", time: "17h", status: "joinable", participants: 6 },
  { gameName: "Overwatch", description: "Discord", date: "11/07/2023", time: "22h", status: "full", participants: 9 },
  { gameName: "Apex Legends", description: "Discord", date: "12/07/2023", time: "16h", status: "playing", participants: 15 },
  { gameName: "PUBG", description: "Discord", date: "13/07/2023", time: "20h", status: "closed", participants: 11 },
  { gameName: "Dota 2", description: "Discord", date: "14/07/2023", time: "19h", status: "joinable", participants: 7 },
  { gameName: "Among Us", description: "Discord", date: "15/07/2023", time: "18h", status: "playing", participants: 10 },
  { gameName: "Rocket League", description: "Discord", date: "16/07/2023", time: "21h", status: "full", participants: 6 },
  { gameName: "Fall Guys", description: "Discord", date: "17/07/2023", time: "15h", status: "joinable", participants: 8 },
  { gameName: "Call of Duty", description: "Discord", date: "18/07/2023", time: "23h", status: "closed", participants: 14 },
  { gameName: "Destiny 2", description: "Discord", date: "19/07/2023", time: "19h", status: "playing", participants: 12 },
  { gameName: "Warframe", description: "Discord", date: "20/07/2023", time: "18h", status: "joinable", participants: 9 },
  { gameName: "Genshin Impact", description: "Discord", date: "21/07/2023", time: "17h", status: "full", participants: 4 },
  { gameName: "The Sims", description: "Discord", date: "22/07/2023", time: "20h", status: "closed", participants: 2 },
  { gameName: "Stardew Valley", description: "Discord", date: "23/07/2023", time: "14h", status: "joinable", participants: 3 },
  { gameName: "Hearthstone", description: "Discord", date: "24/07/2023", time: "18h", status: "playing", participants: 6 },
  { gameName: "Rainbow Six", description: "Discord", date: "25/07/2023", time: "20h", status: "full", participants: 8 },
];

export default function ExploreMatches() {
  return (
    <div className="h-screen">
      <Topbar backArrow={false} />
      <div className="flex flex-col p-12 h-[calc(100vh-64px)]">
        <h1 className="text-2xl text-black font-barlow font-normal mb-16">
          Próximas partidas
        </h1>
          {matches.length > 0 ? (
            <ScrollArea className="w-full h-full rounded-md border-none p-0 mb-8">
              <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-4 p-1">
                {matches.map((match, index) => (
                  <MatchCard
                    key={index}
                    gameName={match.gameName}
                    description={match.description}
                    date={match.date}
                    time={match.time}
                    status={match.status}
                    participants={match.participants}
                  />
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          ) : (
            <div className="flex justify-center items-center h-full mb-16">
              <span className="text-center font-barlow text-gray-800 text-2xl font-light">Sem partidas disponíveis</span>
            </div>
          )}
        <div className="flex justify-end">
          <CreateButton />
        </div>
      </div>
    </div>
  );
}