import { Link } from "react-router-dom";
import { ArrowRight, FileText, Mail, Database, Brain, Network, Award, ExternalLink, Github, Linkedin, Microscope, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center hero-gradient pt-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(174_72%_40%_/_0.1),_transparent_50%)]" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left space-y-6 animate-fade-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
                Building AI tools for <span className="text-accent">students</span> and <span className="text-accent">patients</span> in low-resource settings.
              </h1>
              
              <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl mx-auto lg:mx-0">
                I’m Abdul-Rashid Dasana Abdulai — an MD candidate in Havana using clinical AI to make medical education and healthcare more accessible, starting with Cuba.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium">
                  <a href="#featured">
                    View my work
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  <a href="/AbdulRashid_CV.pdf" target="_blank" rel="noopener noreferrer">
                    <FileText className="mr-2 h-5 w-5" />
                    Download CV
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end animate-fade-up delay-200">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-accent/30 to-transparent rounded-full blur-2xl" />
                <img alt="Abdul-Rashid Dasana Abdulai" className="relative w-72 h-72 md:w-96 md:h-96 object-cover object-top rounded-full border-4 border-primary-foreground/20 shadow-2xl" src="/lovable-uploads/cf79140a-49df-48f8-905f-3fafd00c323b.png" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-6">
              <h2 className="section-heading">About Me</h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  I’m a final-year medical student at the University of Medical Sciences in Havana, working at the intersection of clinical medicine, AI, and global health.
                </p>
                <p>
                  Most AI tools don’t work well — or at all — in Cuba. Internet is slow, models are blocked, and students often rely on outdated or inaccessible textbooks. I build lightweight, constraint-aware tools that actually work in this environment.
                </p>
                <p>
                  Recently, I placed 3rd in the Monash Global Medical AI Challenge with MedEstudia, an AI study assistant tailored to Cuban medical students and powered by DeepSeek to bypass local model restrictions. I’m now exploring ways to scale this work across other low-resource settings.
                </p>
              </div>
            </div>
            
            <div className="md:col-span-1">
              <div className="glass-card rounded-xl p-6 space-y-4">
                <h3 className="text-xl font-semibold text-foreground border-b border-border/50 pb-2">At a glance</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="block text-muted-foreground">Location</span>
                    <span className="font-medium text-foreground">Havana, Cuba</span>
                  </div>
                  <div>
                    <span className="block text-muted-foreground">Focus</span>
                    <span className="font-medium text-foreground">Clinical AI, Medical Education, Low-resource Healthcare</span>
                  </div>
                  <div>
                    <span className="block text-muted-foreground">Currently</span>
                    <span className="font-medium text-foreground">MD Candidate & MedEstudia Founder</span>
                  </div>
                  <div>
                    <span className="block text-muted-foreground">Looking for</span>
                    <span className="font-medium text-foreground">Research positions / PhD opportunities in Clinical AI and Global Health</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project Section */}
      <section id="featured" className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="section-heading">Featured Project</h2>
          </div>
          
          <div className="glass-card rounded-2xl overflow-hidden border border-accent/20">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-8 md:p-12 space-y-6 flex flex-col justify-center bg-card/50">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-accent text-accent-foreground hover:bg-accent/90">3rd Place Winner</Badge>
                    <span className="text-sm text-muted-foreground">Monash Global Medical AI Challenge 2025</span>
                  </div>
                  <h3 className="text-3xl font-bold text-foreground">MedEstudia</h3>
                  <p className="text-xl text-accent font-medium mt-1">AI Medical Study Assistant for Cuban Students</p>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  MedEstudia is an AI-powered web app that helps preclinical Cuban medical students study more effectively, even with unstable internet and blocked models. It generates Cuban-context MCQs, quick quizzes, and structured explanations based on local guidelines. Under the hood, it uses DeepSeek as the core LLM because it’s one of the few models that runs reliably from Cuba, wrapped in a lightweight, offline-tolerant front-end.
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Key Features:</h4>
                  <ul className="space-y-1 text-muted-foreground list-disc list-inside">
                    <li>Generate MCQs on any medical topic with explanations</li>
                    <li>5-question Quick Quiz mode for fast revision</li>
                    <li>Explain Topic mode for structured, guideline-aligned summaries</li>
                    <li>Local score tracking stored in the browser (no login needed)</li>
                    <li>Designed for constrained networks and partially offline use</li>
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {["Next.js", "TypeScript", "Tailwind CSS", "DeepSeek API"].map(tag => (
                    <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                  ))}
                </div>
              </div>
              
              <div className="relative min-h-[400px] lg:min-h-full bg-secondary/20 flex items-center justify-center p-8">
                 {/* Placeholder for screenshots */}
                 <div className="grid grid-cols-1 gap-4 w-full max-w-md">
                    <div className="bg-background border border-border rounded-lg shadow-xl aspect-video flex items-center justify-center text-muted-foreground">
                        {/* TODO: Add MedEstudia Screenshot 1 */}
                        <span>App Screenshot 1</span>
                    </div>
                    <div className="bg-background border border-border rounded-lg shadow-xl aspect-video flex items-center justify-center text-muted-foreground translate-x-8 -mt-12 hidden md:flex">
                        {/* TODO: Add MedEstudia Screenshot 2 */}
                        <span>App Screenshot 2</span>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Projects Section */}
      <section id="projects" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="section-heading">Other Projects</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="glass-card border-border/50 bg-card/50 hover:bg-card/80 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Microscope className="h-5 w-5 text-accent" />
                  Globin Suite
                </CardTitle>
                <CardDescription>AI Diagnostics for Low-Cost Devices</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  AI-assisted diagnostic tools (e.g., smartphone-based malaria and breast-cancer screening) aimed at resource-limited clinics in Africa.
                </p>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2">
                 <Badge variant="outline" className="text-xs">Healthcare</Badge>
                 <Badge variant="outline" className="text-xs">AI</Badge>
              </CardFooter>
            </Card>
            
            <Card className="glass-card border-border/50 bg-card/50 hover:bg-card/80 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Network className="h-5 w-5 text-accent" />
                  Nasari
                </CardTitle>
                <CardDescription>Micro-VC for African Student Founders</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Micro-funding and AI tooling for young African builders: $100–$250 grants, mentorship, and rapid MVP sprints.
                </p>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2">
                 <Badge variant="outline" className="text-xs">VC</Badge>
                 <Badge variant="outline" className="text-xs">Startups</Badge>
              </CardFooter>
            </Card>
            
            <Card className="glass-card border-border/50 bg-card/50 hover:bg-card/80 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5 text-accent" />
                  Cowrie
                </CardTitle>
                <CardDescription>Payments & Agents</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Infrastructure experiments around enabling AI agents to safely handle on-chain payments with guardrails.
                </p>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2">
                 <Badge variant="outline" className="text-xs">Blockchain</Badge>
                 <Badge variant="outline" className="text-xs">AI Agents</Badge>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section id="awards" className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="section-heading">Awards & Recognition</h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex gap-4 items-start p-6 glass-card rounded-xl">
              <div className="bg-accent/20 p-3 rounded-full shrink-0">
                <Award className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Monash Global Medical AI Challenge 2025 – 3rd Place</h3>
                <p className="text-muted-foreground mt-1">For MedEstudia – solo founder finalist among teams from 19+ countries.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-2xl">
          <h2 className="section-heading mb-6">Let's Connect</h2>
          <p className="text-lg text-muted-foreground mb-8">
            If you’re working on clinical AI, global health, or med-ed tools — I’d love to talk.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              {/* TODO: Add real email */}
              <a href="mailto:placeholder@email.com">
                <Mail className="mr-2 h-5 w-5" />
                Email Me
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              {/* TODO: Add real LinkedIn URL */}
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
            <Button asChild variant="ghost" size="lg">
              {/* TODO: Add real GitHub URL */}
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
