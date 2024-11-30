"use client"
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

type ButtonProps = {
    matchStatus?: "availableMatch" | "inMatch" | "closedMatch";
};

export default function EnterMatchButton({ matchStatus = "availableMatch" }: ButtonProps) {
    //Controle de rotas
    const router = useRouter();
    const handleClick = () => {
        if (matchStatus === "availableMatch") {
            router.push("/dashboard");//Quando o botão estiver ativo, no caso button-green
        } else {
            router.push("/dashboard"); //Quando o botão for vermelho, acredito qu volte pra a tela anterior.
        }
    }

    //Estabelecendo os parâmetros de default
    let buttonText = "Entrar";
    let buttonStyle = "bg-greenButton hover:bg-greenButtonHover";
    let customProps = "w-80 h-12 rounded-lg shadow-lg shadow-b";

    if (matchStatus === "closedMatch") {
        buttonStyle = "bg-grayButton cursor-not-allowed";
    } else if (matchStatus === "inMatch") {
        buttonText = "Sair";
        buttonStyle = "bg-redButton hover:bg-red-700";
    }

    return (
        <Button onClick={handleClick} className={`${buttonStyle} ${customProps}`} disabled={matchStatus === "closedMatch"}>
            <span className="text-white font-bold text-xl font-barlow">{buttonText}</span>
        </Button>
    );
}