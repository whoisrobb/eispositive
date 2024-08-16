import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea"
import { DialogUploader } from "./dialog-upload"

const allowedFileTypes = ['image/jpeg', 'image/png', 'video/mp4']; // Add more as needed
const maxFileSize = 5 * 1024 * 1024; // 5MB
const VALUES = ["Facebook", "Instagram", "X", "Friend/Family", "Other"] as const;

const FormSchema = z.object({
    firstName: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    lastName: z.string().optional(),
    email: z.string().email(),
    file: z
        .instanceof(File)
        .refine((file) => allowedFileTypes.includes(file.type), {
            message: 'Invalid file type. Only JPEG, PNG, and MP4 files are allowed.',
        })
        .refine((file) => file.size <= maxFileSize, {
            message: `File size must be less than ${maxFileSize / (1024 * 1024)}MB.`,
        }),
    description: z.string().min(3).max(1024),
    reference: z.enum(VALUES)
})

/*
first name
last name
email
description
file
reference - FB, IG, X (Twitter), Friend/Family, Other 
*/

const ShareForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
        firstName: "",
        lastName: "",
        description: "",
        email: "",
        reference: "Facebook"
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-2">

        <div className="flex items-center gap-2">
            <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>First name</FormLabel>
                        <FormControl>
                            <Input placeholder="John" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            
            <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Last name (<span className="italic">Optional</span>)</FormLabel>
                        <FormControl>
                            <Input placeholder="Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </div>

        <div className="flex items-end gap-2">
            <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                            <Input className="w-full" placeholder="you@youremail.com" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />

            <FormField
                control={form.control}
                name="reference"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>How did you hear from us?</FormLabel>
                    <FormControl>

                    <Select onValueChange={field.onChange}>
                        <SelectTrigger>
                            <SelectValue className="w-full" placeholder="Facebook" />
                        </SelectTrigger>
                        <SelectContent>
                            {VALUES.map((val) => (
                                <SelectItem className="w-full" value={val} key={val}>{val}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />

            <DialogUploader className="h-9" />
        </div>

        <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Short description</FormLabel>
                    <FormControl>
                        <Textarea className="w-full" placeholder="Enter a short description" {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default ShareForm