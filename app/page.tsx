'use client'

import { api } from "@/convex/_generated/api";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { Authenticated, Unauthenticated, useMutation, useQuery } from "convex/react";


export default function Home() {
  const createDocument = useMutation(api.documents.createDocument);
  const documents=useQuery(api.documents.getDocuments)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Unauthenticated>
        <SignInButton />
      </Unauthenticated>
      <Authenticated>
        <UserButton />
        <button 
        aria-label="click me" 
        type="button"
        onClick={()=>createDocument({title:'hello'})}
        >click me</button>
        {
          documents?.map((doc)=>(
            <div key={doc._id}>{doc.title}</div>
          ))
        }
      </Authenticated>
    </main>
  );
}
