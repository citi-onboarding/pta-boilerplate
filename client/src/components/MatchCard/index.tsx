import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


import { UsersRound } from 'lucide-react';

export default function MatchCard() {
  return (
    <Card className="bg-purple font-barlow border w-60 h-28 rounded-2xl">

      <CardHeader>
        <CardTitle className="size-3.5 font-medium border border-black text-base">Minecraft</CardTitle>
        <CardDescription className=" size-3.5 border border-black text-darkGray text-base">Discord</CardDescription>
      </CardHeader>


      <div className="display-flex gap-12">
        <CardContent className="font-light">
          <span className=" size-3.5 border border-black text-base">06/07/2023 | 19h</span>
        </CardContent>

        <CardFooter className="font-light gap-1">
          <span className=" size-3.5 border border-black text-base">5</span>
          <UsersRound className="border border-black w-6"/>
        </CardFooter>
      
      </div>

    </Card>

  );
}
