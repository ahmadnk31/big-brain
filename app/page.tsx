'use client'

import { api } from "@/convex/_generated/api";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { Authenticated, Unauthenticated, useMutation, useQuery } from "convex/react";
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/ui/mode-toggle";


export default function Home() {
  const createDocument = useMutation(api.documents.createDocument);
  const documents=useQuery(api.documents.getDocuments)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
    </main>
  );
}
