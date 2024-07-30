import { zodResolver } from "@hookform/resolvers/zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";

const emailSchema = z.object({
    email: z.string().min(3).max(50),
})

type InputSchema = z.infer<typeof emailSchema>

const EmailForm = () => {
    const form = useForm<InputSchema>({
        resolver: zodResolver(emailSchema),
        defaultValues: {
            email: '',
        }
    });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (values: InputSchema) => {
    const { email } = values;
    setIsSubmitting(true);
    console.log(email)
    form.reset();
    setIsSubmitting(false);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Enter your email..." {...field} type="email" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button size={"sm"} disabled={isSubmitting}>Submit</Button>
      </form>
    </Form>
  )
}

export default EmailForm;