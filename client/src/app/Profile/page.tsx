"use client"
import Topbar from "@/components/topbar";

import * as React from "react"
import { cn } from "@/lib/utils"
import { format } from 'date-fns'
import { CalendarFold } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "../../components/ui/input"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover" 
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


export default function ProfilePage() {

    const [date, setDate] = React.useState<Date>()

    const handleSearch = () => {
        //GET do backend...
    }

    return (
        <div className="h-screen font-barlow">
            <Topbar backArrow={false}/>
            <div className="flex flex-col justify-start p-10">
                <span className="text-4xl font-medium text-gray-800 mb-8">  Qual o username? </span>
                <div className="flex flex-row gap-5 items-center mb-36">
                    <Input className="w-80 h-14 border-2 rounded px-5 bg-white text-gray-500 placeholder:text-lg" placeholder="lorem Ipsum" />
                    <Button onClick={handleSearch} className="w-28 h-12 bg-backgroundSidebar text-white font-medium text-lg rounded-2xl shadow-lg hover:bg-blue-500">Buscar</Button>
                </div>

                <Tabs defaultValue="1" className="w-full border-t-2 h-fit">
                    <TabsList className="gap-4 px-12">
                        <TabsTrigger value="1" className="px-9 py-2 text-lg bg-green-50 font-medium border-2 rounded-t-xl data-[state=active]:border-b-background -translate-y-[42px] rounded-b-none shadow-none focus:ring-0 focus:outline-none z-10">Partidas</TabsTrigger>
                        <TabsTrigger value="2" className="px-9 py-2 text-lg bg-green-50 font-medium border-2 rounded-t-xl data-[state=active]:border-b-0 -translate-y-[42px] rounded-b-none shadow-none focus:ring-0 focus:outline-none focus-visible:ring-0">Histórico</TabsTrigger>
                    </TabsList>

                    <TabsContent value="1">
                        <div className="flex flex-row justify-around">
                            <span className="text-4xl font-medium text-gray-800 mb-8">  Histórico de Partidas </span>
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
                    </TabsContent>
                    <TabsContent value="2">Change your password here.</TabsContent>
                </Tabs>

            </div>
        </div>
    );
}