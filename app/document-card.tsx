import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { api } from "@/convex/_generated/api";
import { Doc } from "@/convex/_generated/dataModel"
import { Eye } from "lucide-react";
import Link from "next/link";

export function DocumentCard({document}: {document: Doc<'documents'>}){
    return(
        <Card>
            <CardHeader>
                <CardTitle>{document.title}</CardTitle>
            </CardHeader>
            <CardFooter>
                    <Button variant={"secondary"} >
                        <Link href={`/documents/${document._id}`} className="flex justify-center gap-1">
                        <Eye className="size-5"/> View
                        </Link>
                        </Button>
            </CardFooter>
        </Card>
    )
}