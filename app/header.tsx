'use client'

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { Authenticated, Unauthenticated } from "convex/react";
import Image from "next/image";


export function Header() {
    return (
        <nav className="bg-slate-900 py-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white flex items-center gap-x-2">
                    <Image src="/bigbrain.svg" className="" width={30} height={30} alt="BigBrain" />
                    BigBrain
                </div>
                <div>
                <Unauthenticated>
        <SignInButton />
      </Unauthenticated>
      <Authenticated>
        
        <div className="flex gap-4">
        <ModeToggle />
        <UserButton />
        </div>
      </Authenticated>
                </div>
            </div>
            
        </nav>
    )
}