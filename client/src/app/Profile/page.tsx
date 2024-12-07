"use client"
import Topbar from "@/components/topbar";
import MatchCard from "@/components/MatchCard";
import { CreateButton } from "@/components/CreateButton";

import * as React from "react"
import { cn } from "@/lib/utils"
import { format } from 'date-fns'
import { CalendarFold } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "../../components/ui/input"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover" 
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"


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


export default function ProfilePage() {

    const [date, setDate] = React.useState<Date>()

    const handleSearch = () => {
        //GET do backend...
    }

    return (
        <div className="h-screen font-barlow">
            <Topbar backArrow={false}/>
            <div className="flex flex-col justify-start p-10 h-[calc(100vh-64px)] overflow-y-scroll">
                <span className="text-4xl font-medium text-gray-800 mb-8">  Qual o username? </span>
                <div className="flex flex-row gap-5 items-center mb-28">
                    <input className="w-80 h-12 rounded-lg px-5 bg-white text-gray-500 border border-gray-300 placeholder:text-lg focus:outline-none focus:border-backgroundSidebar focus:bg-backgroundSidebar/20 hover:border-gray-400" placeholder="lorem Ipsum" />
                    <Button onClick={handleSearch} className="w-28 h-12 bg-backgroundSidebar text-white font-medium text-lg rounded-2xl shadow-lg hover:bg-[#1fb8f9]">Buscar</Button>
                </div>
                <Tabs defaultValue="1" className="w-full border-t-2 h-fit">
                    <TabsList className="gap-4 px-12">
                        <TabsTrigger value="1" className="px-9 py-2 text-lg bg-green-50 font-medium border-2 rounded-t-xl data-[state=active]:border-b-background -translate-y-[42px] rounded-b-none shadow-none focus:ring-0 focus:outline-none z-10">Partidas</TabsTrigger>
                        <TabsTrigger value="2" className="px-9 py-2 text-lg bg-green-50 font-medium border-2 rounded-t-xl data-[state=active]:border-b-0 -translate-y-[42px] rounded-b-none shadow-none focus:ring-0 focus:outline-none focus-visible:ring-0">Histórico</TabsTrigger>
                    </TabsList>

{/* ----------------------------------------------Partidas-------------------------------------------------------*/}
                    <TabsContent value="1">
                        <div className="flex flex-col px-0">
                            <div className="flex flex-row justify-between gap-4 ml-0">
                                <span className="text-4xl font-medium text-gray-800 mb-8">Partidas Abertas</span>
                                <div className="flex flex-row gap-4"> 

                                    <Popover>
                                        <PopoverTrigger asChild >
                                            <Button  className={cn("flex flex-row gap-6 h-14 justify-around px-4 bg-white font-normal border-2 shadow-none [&_svg]:size-6",!date && "text-muted-foreground hover:bg-white hover:border-gray-400")}>
                                            {date ? format(date, "dd/MM/yyyy") : <span>dd/mm/aaaa</span>}
                                            <CalendarFold className="text-black stroke-black stroke-2" />
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0">
                                            <Calendar
                                            mode="single"
                                            selected={date}
                                            onSelect={setDate}
                                            initialFocus
                                            />
                                        </PopoverContent>
                                    </Popover>

                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button  className={cn("flex flex-row gap-6 h-14 justify-around px-4 bg-white font-normal border-2 shadow-none [&_svg]:size-6",!date && "text-muted-foreground hover:bg-white hover:border-gray-400")}>
                                            {date ? format(date, "dd/MM/yyyy") : <span>dd/mm/aaaa</span>}
                                            <CalendarFold className="text-black stroke-black stroke-2" />
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0">
                                            <Calendar
                                            mode="single"
                                            selected={date}
                                            onSelect={setDate}
                                            initialFocus
                                            />
                                        </PopoverContent>
                                    </Popover>

                                </div>
                            </div>

                            <ScrollArea className="h-auto whitespace-nowrap rounded-md">
                                    <div className="flex flex-row gap-4 w-96 py-2 px-1">
                                    {matches.filter((match) => match.status === 'joinable').length === 0 ? (
                                        <div className="flex justify-center items-center">
                                            <span className="font-medium text-2xl">Não há partidas</span>
                                        </div>
                                    ) : (
                                        matches.filter((match) => match.status === 'joinable').map((match, index) => (
                                            <MatchCard
                                                key={index}
                                                gameName={match.gameName}
                                                description={match.description}
                                                date={match.date}
                                                time={match.time}
                                                status={match.status}
                                                participants={match.participants}/>)))}
                                    </div>
                                <ScrollBar orientation="horizontal" />
                            </ScrollArea>
                            <span className="text-4xl font-medium text-gray-800 mt-10 mb-8">Partidas Fechadas</span>
                              <ScrollArea className="h-auto whitespace-nowrap rounded-md">
                                      <div className="flex flex-row gap-4 w-96 py-2 px-1">
                                        {matches.filter((match) => match.status === 'full').length === 0 ? (
                                            <div className="flex justify-center items-center">
                                                <span className="font-medium text-2xl">Não há partidas</span>
                                            </div>
                                        ) : (
                                            matches.filter((match) => match.status === 'full').map((match, index) => (
                                                <MatchCard
                                                    key={index}
                                                    gameName={match.gameName}
                                                    description={match.description}
                                                    date={match.date}
                                                    time={match.time}
                                                    status={match.status}
                                                    participants={match.participants}/>)))}
                                      </div>
                                  <ScrollBar orientation="horizontal" />
                              </ScrollArea>
                            <div className="flex justify-end mt-2">
                              <CreateButton />
                            </div>
                          <div/>                 
                        </div>
                    </TabsContent>
{/* ----------------------------------------------Histórico-------------------------------------------------------*/}
                    <TabsContent value="2">
                    <div className="flex flex-col px-0">
                            <div className="flex flex-row justify-between gap-4 ml-0">
                                <span className="text-4xl font-medium text-gray-800 mb-8">Histórico de Partidas</span>
                                <div className="flex flex-row gap-4"> 

                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button  className={cn("flex flex-row gap-6 h-14 justify-around px-4 bg-white font-normal border-2 shadow-none [&_svg]:size-6",!date && "text-muted-foreground")}>
                                            {date ? format(date, "dd/MM/yyyy") : <span>dd/mm/aaaa</span>}
                                            <CalendarFold className="text-black stroke-black stroke-2" />
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0">
                                            <Calendar
                                            mode="single"
                                            selected={date}
                                            onSelect={setDate}
                                            initialFocus
                                            />
                                        </PopoverContent>
                                    </Popover>

                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button  className={cn("flex flex-row gap-6 h-14 justify-around px-4 bg-white font-normal border-2 shadow-none [&_svg]:size-6",!date && "text-muted-foreground")}>
                                            {date ? format(date, "dd/MM/yyyy") : <span>dd/mm/aaaa</span>}
                                            <CalendarFold className="text-black stroke-black stroke-2" />
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0">
                                            <Calendar
                                            mode="single"
                                            selected={date}
                                            onSelect={setDate}
                                            initialFocus
                                            />
                                        </PopoverContent>
                                    </Popover>

                                </div>
                            </div>
                            <ScrollArea className="h-auto whitespace-nowrap rounded-md">
                                    <div className="flex flex-row gap-4 w-96 py-2 px-1">
                                    {matches.filter((match) => match.status === 'closed').length === 0 ? (
                                        <div className="flex justify-center items-center">
                                            <span className="font-medium text-2xl">Não há partidas</span>
                                        </div>
                                    ) : (
                                        matches.filter((match) => match.status === 'closed').map((match, index) => (
                                            <MatchCard
                                                key={index}
                                                gameName={match.gameName}
                                                description={match.description}
                                                date={match.date}
                                                time={match.time}
                                                status={match.status}
                                                participants={match.participants}
                                            />
                                        ))
                                    )}
                                    </div>
                            <ScrollBar orientation="horizontal" />
                            </ScrollArea>
                        </div>
                    </TabsContent>
                </Tabs>

            </div>
        </div>
    );
}