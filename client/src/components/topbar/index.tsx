"use client";

import { useRouter } from "next/navigation"

import { Button } from "../ui/button";
import { ChevronLeft } from 'lucide-react';

export default function Topbar({ backArrow }: { backArrow: boolean }) {
    const router = useRouter();

    const handleBack = () => {
        router.back();
    }

    return (
        <div className="topbar flex flex-row justify-start items-center w-full h-16 bg-white shadow-sm">
            {backArrow && (
                <Button onClick={handleBack} className="flex flex-row bg-white bg-opacity-0 border-none shadow-none [&_svg]:size-8 p-2 hover:bg-white hover:bg-opacity-0">
                    <ChevronLeft className="text-black" />
                </Button>
            )}
        </div>
    );
}
