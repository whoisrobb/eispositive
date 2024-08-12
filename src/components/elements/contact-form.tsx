import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { useMediaQuery } from "usehooks-ts"
import { ArrowRightIcon } from "@radix-ui/react-icons"
import { useState } from "react"
import { Textarea } from "../ui/textarea"

export const ContactForm = () => {
  const [open, setOpen] = useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
            <Button
                variant="expandIcon"
                Icon={ArrowRightIcon}
                iconPlacement="right"
            >
                Contact
            </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-4xl font-anton font-[300]">Get in Touch with E+</DialogTitle>
            <DialogDescription>
            We're here to listen, support, and connect. Share your thoughts, questions, or stories with us, and let's continue spreading positivity together.
            </DialogDescription>
          </DialogHeader>
          <ProfileForm />
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
            <Button
                variant="expandIcon"
                Icon={ArrowRightIcon}
                iconPlacement="right"
            >
                Contact
            </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle className="text-4xl font-anton font-[300]">Get in Touch with E+</DrawerTitle>
          <DrawerDescription>
            We're here to listen, support, and connect. Share your thoughts, questions, or stories with us, and let's continue spreading positivity together.
          </DrawerDescription>
        </DrawerHeader>
        <ProfileForm />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

const contactFormSchema = z.object({
    firstName: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    lastName: z.string().optional(),
    email: z.string().email({ message: "Invalid email address" }),
    message: z.string().min(3).max(1024)
})

type ContactFormProps = z.infer<typeof contactFormSchema>

const ProfileForm = () => {
    const form = useForm<ContactFormProps>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {

        }
    });

    const onSubmit = (values: ContactFormProps) => {
        console.log(values)
    }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 px-4">

        <div className="flex items-center justify-between gap-2">
            <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>First name</FormLabel>
                        <FormControl>
                            <Input placeholder="John" className="text-base" {...field} />
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
                        <FormLabel>Last name <span className="italic">(Optional)</span> </FormLabel>
                        <FormControl>
                            <Input placeholder="Doe" className="text-base" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </div>

        <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                        <Input placeholder="you@yourcompany.com" type="email" className="text-base" {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />

        <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Your message</FormLabel>
                    <FormControl>
                        <Textarea placeholder="Message" className="text-base" {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
        <Button type="submit" className="w-full">Submit</Button>
      </form>
    </Form>
  )
}
