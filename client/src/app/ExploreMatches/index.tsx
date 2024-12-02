import { CreateButton } from "@/components/CreateButton";
import MatchCard from "@/components/MatchCard";
import Topbar from "@/components/Topbar";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function ExploreMatches() {
    return (
      <div>
        <Topbar backArrow={false}/>
        <div className="flex flex-col mx-16 my-12 h-full">
            <h1 className="mb-16 text-2xl text-black font-barlow font-normal">
            Próximas partidas
            </h1>
            <ScrollArea className="w-full rounded-md border p-2 mb-8">
              <div className="flex flex-wrap gap-8 justify-around">
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
            <CreateButton/>
        </div>
      </div>
    );
  }