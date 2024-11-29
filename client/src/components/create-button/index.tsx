import { Button } from "@/components/ui/button"

import { Plus } from 'lucide-react';

//falta o padding e aumentar o ícone

export function ButtonDemo() {
  return (
    <div className="flex items-center justify-center h-screen">
        <Button className="flex items-center justify-center h-screen border border-black rounded-2xl w-16 h-16 p-0 bg-verdeciti">
            <Plus className="border border-black stroke-brancociti"/> 
        </Button>
    </div>
)
}