'use client';

import { Button } from "@/components/ui/button"
import { Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function CreateButton() {
    const router = useRouter();
    
    const handleClick = () => {
        router.push('/dashboard');
    };

    return (
        <Button onClick={handleClick} className=" self-end hover:bg-greenButtonHover [&_svg]:size-10 flex items-center justify-center h-screen rounded-2xl h-15 px-0 py-0 p-2 bg-greenButton">
            <Plus className="stroke-1 stroke-backgroud"/> 
        </Button>
    );
}