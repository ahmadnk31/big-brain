'use client'

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useMutation, useQuery } from "convex/react";



export default function DocumentPage({
    params
}:{params: {documentId: Id<"documents">}}) {
    const {documentId}=params;
  const document=useQuery(api.documents.getDocument,{
    documentId:documentId
  })
  if(!document) return <div>You don't have access to view this document.</div>
  return (
    <main className="container py-4">
      <div className="flex justify-between items-center mb-4">
      <h1 className=" text-2xl font-bold tracking-tighter">
        {document?.title}
      </h1>
      </div>
      <div className="flex gap-4 h-[400px]">
        <div className="bg-gray-200 p-4 rounded flex-1 h-full">
            {document.documentUrl&&<iframe className="text-white w-full h-full" src={document.documentUrl}/>}
        </div>
        <div className="w-[300px] bg-gray-200 rounded">

        </div>
      </div>
    </main>
  );
}
