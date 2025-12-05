import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import bgImage from "@assets/generated_images/single_beam_of_light_in_darkness.png";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name is required." }),
  company: z.string().min(2, { message: "Company is required." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().optional(),
  projectType: z.string({ required_error: "Please select a project type." }),
  description: z.string().min(10, { message: "Please describe your project." }),
});

export function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      description: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    window.location.href = `mailto:info@highbeam.digital?subject=Inquiry from ${values.name} - ${values.company}&body=Name: ${values.name}%0D%0ACompany: ${values.company}%0D%0AEmail: ${values.email}%0D%0APhone: ${values.phone || 'N/A'}%0D%0AProject Type: ${values.projectType}%0D%0A%0D%0ADescription:%0D%0A${values.description}`;
    toast({
      title: "Opening Email Client",
      description: "Drafting your inquiry to info@highbeam.digital",
    });
    form.reset();
  }

  return (
    <Section id="contact" className="bg-black pb-32 relative overflow-hidden">
       {/* Background Image */}
       <div className="absolute inset-0 z-0 opacity-50">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        <img src={bgImage} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let’s Build Your Next Experience</h2>
            <p className="text-xl text-zinc-400">
                Tell us about your event, your brand, and the feeling you want people to remember.
            </p>
        </div>

        <div className="bg-zinc-900/50 p-8 md:p-12 border border-zinc-800">
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                    <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel className="text-zinc-300">Name</FormLabel>
                        <FormControl>
                            <Input placeholder="John Doe" {...field} className="bg-black border-zinc-800 text-white h-12 focus-visible:ring-primary" />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel className="text-zinc-300">Company</FormLabel>
                        <FormControl>
                            <Input placeholder="Your Company" {...field} className="bg-black border-zinc-800 text-white h-12 focus-visible:ring-primary" />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel className="text-zinc-300">Email</FormLabel>
                        <FormControl>
                            <Input placeholder="john@example.com" {...field} className="bg-black border-zinc-800 text-white h-12 focus-visible:ring-primary" />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel className="text-zinc-300">Phone (Optional)</FormLabel>
                        <FormControl>
                            <Input placeholder="+1 (555) 000-0000" {...field} className="bg-black border-zinc-800 text-white h-12 focus-visible:ring-primary" />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <FormField
                    control={form.control}
                    name="projectType"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel className="text-zinc-300">Project Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                            <SelectTrigger className="bg-black border-zinc-800 text-white h-12 focus:ring-primary">
                                <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-black border-zinc-800 text-white">
                            <SelectItem value="interactive">Interactive Experience</SelectItem>
                            <SelectItem value="immersive">Immersive Installation</SelectItem>
                            <SelectItem value="web">Web Experience</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                        </Select>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                </div>

                <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel className="text-zinc-300">Project Description</FormLabel>
                    <FormControl>
                        <Textarea 
                            placeholder="Tell us about your vision..." 
                            className="bg-black border-zinc-800 text-white min-h-[150px] focus-visible:ring-primary resize-none"
                            {...field} 
                        />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />

                <Button type="submit" className="w-full bg-primary text-black font-bold h-14 text-lg hover:bg-white hover:scale-[1.01] transition-all rounded-none">
                    Send Inquiry
                </Button>
            </form>
            </Form>
        </div>
      </div>
    </Section>
  );
}
