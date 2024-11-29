'use client';

import { Button } from "@/components/ui/button"

import { Plus } from 'lucide-react';

import { useRouter } from 'next/navigation';

export function ButtonDemo() {

    const router = useRouter();

    const handleClick = () => {
    router.push('/dashboard');
    };

  return (
    <div className="flex items-center justify-center h-screen">
        <Button onClick={handleClick} className=" hover:bg-greenButtonHover [&_svg]:size-12 flex items-center justify-center h-screen rounded-2xl w-16 h-16 p-0 bg-greenButton">
            <Plus className="stroke-1 stroke-whiteButton"/> 
        </Button>
    </div>
)
}