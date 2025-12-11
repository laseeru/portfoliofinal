import { Link } from "react-router-dom";
import { ArrowRight, FileText, Mail, Microscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import headshot from "@/assets/headshot.jpg";
const Index = () => {
  return <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center hero-gradient">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(174_72%_40%_/_0.1),_transparent_50%)]" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left space-y-6 animate-fade-up">
              <div className="inline-block">
                <span className="text-accent text-sm font-medium tracking-wider uppercase">
                  Welcome to my portfolio
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
                Abdul-Rashid<br />
                <span className="text-accent">Dasana Abdulai</span>
              </h1>
              
              <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl mx-auto lg:mx-0">
                Medical Student • AI in Healthcare Researcher • Global Health Innovator
              </p>
              
              <p className="text-primary-foreground/70 max-w-lg mx-auto lg:mx-0">
                Bridging the gap between artificial intelligence and healthcare delivery in low-resource settings. 
                Passionate about precision medicine and making quality healthcare accessible to all.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium">
                  <Link to="/research">
                    <Microscope className="mr-2 h-5 w-5" />
                    Research Work
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <FileText className="mr-2 h-5 w-5" />
                    View CV
                  </a>
                </Button>
                <Button asChild variant="ghost" size="lg" className="text-primary-foreground hover:bg-primary-foreground/10">
                  <Link to="/contact">
                    <Mail className="mr-2 h-5 w-5" />
                    Contact Me
                  </Link>
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

      {/* Quick Stats */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[{
            number: "2+",
            label: "Research Projects"
          }, {
            number: "YVA",
            label: "2025 Speaker"
          }, {
            number: "Cuba",
            label: "Medical Training"
          }, {
            number: "AI×Health",
            label: "Focus Area"
          }].map((stat, index) => <div key={stat.label} className="text-center animate-fade-up" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <div className="text-3xl md:text-4xl font-bold text-accent">{stat.number}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="section-heading">Areas of Focus</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              My work sits at the intersection of medicine, artificial intelligence, and global health equity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[{
            title: "AI in Healthcare",
            description: "Developing and evaluating AI tools for clinical decision support in resource-limited settings.",
            icon: "🤖"
          }, {
            title: "Precision Medicine",
            description: "Researching personalized approaches to cardiovascular disease management in diverse populations.",
            icon: "🎯"
          }, {
            title: "Global Health",
            description: "Working to bridge healthcare disparities through innovative technology solutions.",
            icon: "🌍"
          }].map((area, index) => <div key={area.title} className="glass-card rounded-xl p-6 hover:shadow-xl transition-all duration-300 animate-fade-up" style={{
            animationDelay: `${index * 150}ms`
          }}>
                <div className="text-4xl mb-4">{area.icon}</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{area.title}</h3>
                <p className="text-muted-foreground">{area.description}</p>
              </div>)}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/about" className="group">
                Learn more about my journey
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>;
};
export default Index;