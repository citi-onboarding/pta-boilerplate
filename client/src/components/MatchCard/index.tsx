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

    <div className="flex items-center justify-center h-screen">
      <Card className="shadow-gray-500 shadow bg-purple font-barlow border-none rounded-2xl text-darkGray">

        <CardHeader className="space-y-2 p-4 pb-2">
          <CardTitle className="text-darkGray font-medium text-sm">Minecraft</CardTitle>
          <CardDescription className="font-light text-darkGray text-sm">Discord</CardDescription>
        </CardHeader>


        <div className="flex gap-12 p-4 pt-0">
          <CardContent className="font-light p-0">
            <span className="text-darkGray flex text-sm">06/07/2023 | 19h</span>
          </CardContent>

          <CardFooter className=" flex font-light gap-1 p-0">
            <span className="font-light text-darkGray text-sm">05</span>
            <UsersRound className="stroke-darkGray w-5"/>
          </CardFooter>
        
        </div>

      </Card>
    </div>
  );
}
