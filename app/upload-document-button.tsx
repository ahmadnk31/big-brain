'use client'

import { Button } from "@/components/ui/button"
import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Upload} from "lucide-react";
import { UploadDocumentForm } from "./upload-document-form";
import React from "react";
  

export default function UploadDocumentButton() {
    const [isOpen, setIsOpen] = React.useState(false)
 
  return (
    <main className="p-24">
     <Dialog onOpenChange={setIsOpen} open={isOpen}>
  <DialogTrigger asChild>
  <Button className="flex items-center gap-2">
    <Upload className="size-5 justify-center"/>
    Upload document</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Upload a document</DialogTitle>
      <DialogDescription>
        Upload a team document for your team to search over.
      </DialogDescription>
    </DialogHeader>
    <UploadDocumentForm onUpload={()=>setIsOpen(false)}/>
  </DialogContent>
  
</Dialog>
    </main>
  );
}
