'use client';
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

// Definição de tipo para as props
interface MatchCardProps {
  status: "full" | "joinable" | "closed" | "playing";
}

export default function MatchCard({ status }: MatchCardProps) {
  const router = useRouter();

  // Função para tratar clique
  const handleClick = () => {
     {router.push("/dashboard");}
  };

  // Função para obter a classe CSS com base no status
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
    <div className="flex items-center justify-center h-screen">
      <Card 
        onClick={handleClick}
        className={`cursor-pointer shadow-gray-500 shadow font-barlow border-none rounded-2xl text-darkGray ${getStatusClass()}`}
      >
        <CardHeader className="space-y-2 p-4 pb-2">
          <CardTitle className="text-darkGray font-medium text-sm">
            Minecraft
          </CardTitle>
          <CardDescription className="font-light text-darkGray text-sm">
            Discord
          </CardDescription>
        </CardHeader>

        <div className="flex gap-12 p-4 pt-0">
          <CardContent className="font-light p-0">
            <span className="text-darkGray flex text-sm">06/07/2023 | 19h</span>
          </CardContent>

          <CardFooter className="flex font-light gap-1 p-0">
            <span className="font-light text-darkGray text-sm">05</span>
            <UsersRound className="stroke-darkGray w-5" />
          </CardFooter>
        </div>
      </Card>
    </div>
  );
}