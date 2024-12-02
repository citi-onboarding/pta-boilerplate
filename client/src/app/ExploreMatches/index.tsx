import { CreateButton } from "@/components/CreateButton";
import MatchCard from "@/components/MatchCard";
import Topbar from "@/components/topbar";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function ExploreMatches() {
    return (
      <div className="h-[100vh]">
        <Topbar backArrow={false}/>
        <div className="flex flex-col p-12 h-[calc(100vh-64px)]">
            <h1 className="text-2xl text-black font-barlow font-normal mb-16">
            Próximas partidas
            </h1>
            <ScrollArea className="w-full h-fit rounded-md border-none p-0">
              <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-4">
                <MatchCard status={"closed"}/>
                <MatchCard status={"full"}/>
                <MatchCard status={"joinable"}/>
                <MatchCard status={"playing"}/>

                <MatchCard status={"closed"}/>
                <MatchCard status={"full"}/>
                <MatchCard status={"joinable"}/>
                <MatchCard status={"playing"}/>

                <MatchCard status={"closed"}/>
                <MatchCard status={"full"}/>
                <MatchCard status={"joinable"}/>
                <MatchCard status={"playing"}/>

                <MatchCard status={"closed"}/>
                <MatchCard status={"full"}/>
                <MatchCard status={"joinable"}/>
                <MatchCard status={"playing"}/>

                <MatchCard status={"closed"}/>
                <MatchCard status={"full"}/>
                <MatchCard status={"joinable"}/>
                <MatchCard status={"playing"}/>

                <MatchCard status={"closed"}/>
                <MatchCard status={"full"}/>
                <MatchCard status={"joinable"}/>
                <MatchCard status={"playing"}/>

                <MatchCard status={"closed"}/>
                <MatchCard status={"full"}/>
                <MatchCard status={"joinable"}/>
                <MatchCard status={"playing"}/>
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
            <div className="flex justify-end mt-8">
              <CreateButton/>
            </div>
        </div>
      </div>
    );
  }