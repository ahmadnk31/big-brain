'use client'

import { SignInButton, UserButton } from "@clerk/nextjs";
import { Authenticated, Unauthenticated,AuthLoading } from "convex/react";
import { LoaderCircle } from "lucide-react";
export function HeaderActions(){
    return(
        <>
        <Unauthenticated>
        <SignInButton />
      </Unauthenticated>
      <Authenticated>
        <UserButton />
      </Authenticated>
        <AuthLoading>
            <LoaderCircle className="text-white animate-spin" />
        </AuthLoading>
        </>
    )
}