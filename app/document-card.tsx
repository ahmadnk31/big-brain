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

export function DocumentCard({document}: {document: Doc<'documents'>}){

    return(
        <Card>
            <CardHeader>
                <CardTitle>{document.title}</CardTitle>
            </CardHeader>
            <CardFooter>
                <div className="flex gap-x-4">
                    <Button variant={"secondary"}>View</Button>
                </div>
            </CardFooter>
        </Card>
    )
}