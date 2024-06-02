


import { ModeToggle } from "@/components/ui/mode-toggle";

import Image from "next/image";
import { HeaderActions } from "./header-actions";
import Link from "next/link";


export function Header() {
    return (
        <nav className="bg-slate-900 py-4">
            <div className="container mx-auto flex justify-between items-center">
                <div >
                    <Link href="/" className="text-white flex items-center gap-x-2">
                    <Image src="/bigbrain.svg" className="" width={30} height={30} alt="BigBrain" />
                    BigBrain
                    </Link>
                </div>
                <div className="flex gap-x-4 items-center">
                <ModeToggle />
                <HeaderActions />
                </div>
            </div>
            
        </nav>
    )
}