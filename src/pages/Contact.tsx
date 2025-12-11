import { useState } from "react";
import { Mail, Linkedin, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <span className="text-accent text-sm font-medium tracking-wider uppercase">Get in Touch</span>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mt-4">
            Let's Connect
          </h1>
          <p className="text-primary-foreground/70 mt-6 max-w-2xl mx-auto">
            Whether you're interested in research collaboration, have questions about my work, 
            or just want to say hello — I'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="animate-fade-up">
              <h2 className="text-2xl font-semibold text-foreground mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <a
                  href="mailto:blaseeru@gmail.com"
                  className="glass-card rounded-xl p-6 flex items-center gap-4 hover:shadow-lg transition-shadow"
                >
                  <div className="p-3 bg-accent/10 rounded-full text-accent">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium text-foreground">blaseeru@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card rounded-xl p-6 flex items-center gap-4 hover:shadow-lg transition-shadow"
                >
                  <div className="p-3 bg-accent/10 rounded-full text-accent">
                    <Linkedin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">LinkedIn</p>
                    <p className="font-medium text-foreground">Connect on LinkedIn</p>
                  </div>
                </a>

                <div className="glass-card rounded-xl p-6 flex items-center gap-4">
                  <div className="p-3 bg-accent/10 rounded-full text-accent">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium text-foreground">Cuba (Originally from Ghana)</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-accent/10 border border-accent/20 rounded-xl">
                <h3 className="font-semibold text-foreground mb-2">Open for Opportunities</h3>
                <p className="text-muted-foreground text-sm">
                  I'm actively seeking PhD positions and research fellowships in computational medicine, 
                  AI in healthcare, and precision medicine. Feel free to reach out about potential opportunities.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-up delay-200">
              <h2 className="text-2xl font-semibold text-foreground mb-6">Send a Message</h2>
              
              <form onSubmit={handleSubmit} className="glass-card rounded-xl p-6 space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium text-foreground block mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-foreground block mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      className="bg-background"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="text-sm font-medium text-foreground block mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="What's this about?"
                    required
                    className="bg-background"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-medium text-foreground block mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message..."
                    rows={5}
                    required
                    className="bg-background resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
