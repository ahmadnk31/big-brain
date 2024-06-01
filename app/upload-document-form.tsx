"use client"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useMutation } from "convex/react"
import { api } from "@/convex/_generated/api"
import { Loader2 } from "lucide-react"
import { fork } from "child_process"
import { cn } from "@/lib/utils"
import { LoadingButton } from "@/components/loading-button"
 
const formSchema = z.object({
  title: z.string().min(5).max(100),
})


export function UploadDocumentForm({onUpload}:{onUpload:()=>void}){
    const createDocument=useMutation(api.documents.createDocument)
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          title: "",
        },
      })
      async function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        //sleep for 2 seconds
        await new Promise((resolve)=>setTimeout(resolve,2000))

        await createDocument({title:values.title})
        console.log(values)
        onUpload()
      }
    return(
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Expense response..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <LoadingButton 
            isLoading={form.formState.isSubmitting}
            loadingText="Uploading...">Upload</LoadingButton>
        </form>
      </Form>
    )
}