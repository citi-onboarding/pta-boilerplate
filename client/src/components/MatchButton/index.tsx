"use client"

import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

type ButtonProps = {
    matchStatus?: "availableMatch" | "inMatch" | "closedMatch";
};

export default function MatchButton({ matchStatus = "availableMatch" }: ButtonProps) {
    const router = useRouter();
    const handleClick = () => {
        if (matchStatus === "availableMatch") {
            router.push("/GameCreation");
        } else {
            router.push("/ExploreMatches");
        }
    }

    let buttonText = "Entrar";
    let buttonStyle = "bg-greenButton hover:bg-greenButtonHover";
    let customProps = "w-80 h-12 rounded-2xl shadow-lg shadow-b";

    if (matchStatus === "closedMatch") {
        buttonStyle = "bg-grayButton cursor-not-allowed drop-shadow-lg shadow-gray-900";
    } else if (matchStatus === "inMatch") {
        buttonText = "Sair";
        buttonStyle = "bg-redButton hover:bg-redButtonHover";
    }

    return (
        <Button onClick={handleClick} className={`${buttonStyle} ${customProps}`} disabled={matchStatus === "closedMatch"}>
            <span className="text-white font-bold text-xl font-barlow">{buttonText}</span>
        </Button>
    );
}