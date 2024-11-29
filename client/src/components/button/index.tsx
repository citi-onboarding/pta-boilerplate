"use client"
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

type ButtonProps = {
    buttonColor?: "Green" | "Grey" | "Red";
};

export default function EnterMatchButton({ buttonColor = "Green" }: ButtonProps) {
    const router = useRouter();
    const handleClick = () => {
        if (buttonColor === "Green") {
            router.push("/dashboard");//Quando o botão estiver ativo, no caso verde
        } else {
            router.back(); //Quando o botão for vermelho, acredito qu volte pra a tela anterior.
        }
    }

    //Estabelecendo os parâmetros de default
    let buttonText = "Entrar";
    let buttonStyle = "bg-green-500 hover:bg-green-700";
    let customProps = "w-80 h-12 rounded-lg shadow-lg shadow-b";

    if (buttonColor === "Grey") {
        buttonStyle = "bg-gray-300";
    } else if (buttonColor === "Red") {
        buttonText = "Sair";
        buttonStyle = "bg-red-500 hover:bg-red-700";
    }

    return (
        <Button onClick={handleClick} className={`${buttonStyle} ${customProps}`} disabled={buttonColor === "Grey"}>
            <span className="text-white font-bold text-xl font-barlow">{buttonText}</span>
        </Button>
    );
}