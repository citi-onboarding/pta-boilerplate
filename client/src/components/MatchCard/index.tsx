"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { UsersRound } from "lucide-react";

interface MatchCardProps {
  gameName: string;
  description: string;
  date: string;
  time: string;
  status: string;
  participants: number;
}

export default function MatchCard({
  gameName,
  description,
  date,
  time,
  status,
  participants,
}: MatchCardProps) {
  const router = useRouter();

  const getStatusClass = () => {
    switch (status) {
      case "full":
        return "bg-purpleCard";
      case "joinable":
        return "bg-blueCard";
      case "closed":
        return "bg-grayCard";
      case "playing":
        return "bg-greenCard";
      default:
        return "bg-grayCard";
    }
  };

  return (
    <Card
      onClick={() => router.push("/gameDetails")}
      className={`w-56 cursor-pointer shadow-gray-500 shadow font-barlow border-none rounded-2xl text-darkGray ${getStatusClass()}`}
    >
      <CardHeader className="space-y-2 p-4 pb-2">
        <CardTitle className="text-darkGray font-medium text-sm">{gameName}</CardTitle>
        <CardDescription className="font-light text-darkGray text-sm">
          {description}
        </CardDescription>
      </CardHeader>

      <div className="flex gap-12 p-4 pt-0">
        <CardContent className="font-light p-0">
          <span className="text-darkGray flex text-sm">
            {date} | {time}
          </span>
        </CardContent>

        <CardFooter className="flex font-light gap-1 p-0 ml-auto">
          <span className="font-light text-darkGray text-sm">{participants}</span>
          <UsersRound className="stroke-darkGray w-5" />
        </CardFooter>
      </div>
    </Card>
  );
}
