'use client'

import { api } from "@/convex/_generated/api";
import { useMutation, useQuery } from "convex/react";
import { Button } from "@/components/ui/button"
import { DocumentCard } from "./document-card";
import { Skeleton } from "@/components/skeleton";
import CreateDocumentButton from "./upload-document-button";


export default function Home() {
  const createDocument = useMutation(api.documents.createDocument);
  const documents=useQuery(api.documents.getDocuments)
  return (
    <main className="container">
      <div className="flex justify-between items-center mb-4">
      <h1 className=" text-2xl font-bold tracking-tighter">My Documents</h1>
      <CreateDocumentButton />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4">
      {
        documents?documents.map((document)=>(
          <DocumentCard key={document._id} document={document} />
        )):<Skeleton />
      }
      </div>
    </main>
  );
}
