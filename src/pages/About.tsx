import { Download, MapPin, GraduationCap, Target, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import headshot from "@/assets/headshot.jpg";

const timelineEvents = [
  {
    year: "2018",
    title: "Computer Engineering at KNUST",
    description: "Started my academic journey in technology at Kwame Nkrumah University of Science and Technology, Ghana.",
  },
  {
    year: "2020",
    title: "Transition to Medicine",
    description: "Made the bold decision to pursue medicine, driven by a desire to directly impact human health.",
  },
  {
    year: "2021",
    title: "Medical Studies in Cuba",
    description: "Began medical training in Cuba, gaining unique perspectives on healthcare in low-resource settings.",
  },
  {
    year: "2024",
    title: "AI in Healthcare Research",
    description: "Initiated research on AI barriers in low-resource healthcare and precision cardiology.",
  },
  {
    year: "2025",
    title: "Youth Vision Assembly Speaker",
    description: "Presented on AI in healthcare at the YVA Summit in Amsterdam, Netherlands.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <span className="text-accent text-sm font-medium tracking-wider uppercase">About Me</span>
              <h1 className="section-heading mt-2">
                A Journey from Technology to Medicine
              </h1>
              <p className="text-muted-foreground mt-6 leading-relaxed">
                I am Abdul-Rashid Dasana Abdulai, a medical student currently training in Cuba with a background 
                in computer engineering from KNUST, Ghana. My unique path has shaped my vision of healthcare - 
                one where cutting-edge AI meets compassionate medicine.
              </p>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                From the streets of Tamale to the lecture halls of Havana and the summit stages of Amsterdam, 
                my journey has been defined by a relentless pursuit of knowledge and a commitment to making 
                healthcare accessible to underserved communities.
              </p>
              <Button asChild className="mt-6 bg-accent hover:bg-accent/90 text-accent-foreground">
                <a href="https://drive.google.com/file/d/13fBPe2it9Lrn4u2nKoxXb3pPaEa0-xSB/view" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </a>
              </Button>
            </div>
            
            <div className="flex justify-center animate-fade-up delay-200">
              <img
                src={headshot}
                alt="Abdul-Rashid Dasana Abdulai"
                className="w-80 h-80 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Target className="h-12 w-12 text-accent mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">My Mission</h2>
            <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
              To harness the power of artificial intelligence and precision medicine to transform healthcare 
              delivery in low-resource settings, ensuring that geography and socioeconomic status no longer 
              determine the quality of care one receives.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="section-heading">Academic Journey</h2>
            <p className="text-muted-foreground mt-4">Key milestones in my path to becoming a physician-researcher</p>
          </div>

          <div className="max-w-3xl mx-auto">
            {timelineEvents.map((event, index) => (
              <div
                key={event.year}
                className="relative pl-8 pb-10 last:pb-0 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute left-0 top-0 w-px h-full bg-border last:bg-transparent" />
                <div className="absolute left-0 top-0 w-2 h-2 -translate-x-[3px] rounded-full bg-accent" />
                
                <div className="glass-card rounded-lg p-6">
                  <span className="text-accent font-semibold">{event.year}</span>
                  <h3 className="text-lg font-semibold text-foreground mt-1">{event.title}</h3>
                  <p className="text-muted-foreground mt-2">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Long-term Goals */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="section-heading">Long-term Goals</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="glass-card rounded-xl p-8 animate-fade-up">
              <GraduationCap className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-xl font-semibold text-foreground">PhD in Computational Medicine</h3>
              <p className="text-muted-foreground mt-3">
                Pursuing advanced research in AI-driven precision medicine, with a focus on developing 
                algorithms that work effectively in diverse, low-resource populations.
              </p>
            </div>

            <div className="glass-card rounded-xl p-8 animate-fade-up delay-200">
              <Heart className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-xl font-semibold text-foreground">Healthcare Innovation in Africa</h3>
              <p className="text-muted-foreground mt-3">
                Building sustainable health-tech solutions that address the unique challenges faced by 
                healthcare systems across the African continent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <MapPin className="h-8 w-8 text-accent mx-auto mb-4" />
          <p className="text-muted-foreground">
            Currently based in <span className="text-foreground font-medium">Cuba</span> • 
            Originally from <span className="text-foreground font-medium">Tamale, Ghana</span>
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default About;
