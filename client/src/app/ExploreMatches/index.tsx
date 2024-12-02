import { CreateButton } from "@/components/CreateButton";
import MatchCard from "@/components/MatchCard";
import Topbar from "@/components/topbar";

export default function ExploreMatches() {
    return (
      <div>
        <Topbar backArrow={false}/>
        <div className="flex flex-col mx-16 my-12">
            <h1 className="mb-16 text-2xl text-black font-barlow font-normal">
            Próximas partidas
            </h1>
            <div className="gap-8 grid grid-cols-4 mb-8">
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
            <CreateButton/>
        </div>
      </div>
    );
  }