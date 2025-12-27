import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";

const projects = [
  {
    id: 1,
    title: "AI Barriers Research (Cuban Clinics)",
    summary: "Research on barriers to implementing AI-powered diagnostics in low-resource Cuban clinical settings. Survey + interview instruments (Spanish/English). Focus: infrastructure, workflow fit, trust, training, governance. Goal: practical mitigation strategies, not theory only.",
    tags: ["AI", "Global Health", "Clinical Research"],
    status: "Ongoing",
  },
  {
    id: 2,
    title: "Precision Cardiology / Precision Medicine Drafts",
    summary: "Exploring feasible pathways for precision medicine and AI decision support under data and resource constraints. Translational framing: what's realistic now vs later. Emphasis on feasibility, evaluation, and adoption realities.",
    tags: ["Precision Medicine", "Cardiology", "Literature Review"],
    status: "Ongoing",
  },
  {
    id: 3,
    title: "GMDC AI Exam Assistant",
    summary: "Developing an AI-powered study tool to help Ghanaian medical students prepare for licensing examinations through intelligent question generation and feedback.",
    tags: ["AI", "Medical Education", "EdTech"],
    status: "In Development",
  },
  {
    id: 4,
    title: "Youth Vision Assembly 2025: AI in Healthcare",
    summary: "Presented on the transformative potential of artificial intelligence in healthcare at the international YVA Summit in Amsterdam, Netherlands.",
    tags: ["Public Speaking", "AI", "Global Health"],
    status: "Completed",
  },
  {
    id: 5,
    title: "BioDesign / Fundora Work",
    summary: "BioDesign-driven problem framing and instrument design for healthcare innovation. Unmet-needs framing (Problem–Population–Payer–Outcome). Avoiding solution bias; defining measurable outcomes. Supporting research instrumentation and evaluation plans.",
    tags: ["BioDesign", "Innovation", "Healthcare"],
    status: "Ongoing",
  },
];

const Research = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <span className="text-accent text-sm font-medium tracking-wider uppercase">Research & Projects</span>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mt-4">
            Building the Future of<br />Healthcare
          </h1>
          <p className="text-primary-foreground/70 mt-6 max-w-2xl mx-auto">
            My research focuses on bridging AI and healthcare, with particular emphasis on 
            making advanced medical technologies accessible in low-resource settings.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <article
                key={project.id}
                className="glass-card rounded-xl p-6 hover:shadow-xl transition-all duration-300 flex flex-col animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <Badge
                    variant={project.status === "Completed" ? "default" : "secondary"}
                    className={project.status === "Completed" ? "bg-accent text-accent-foreground" : ""}
                  >
                    {project.status}
                  </Badge>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3 line-clamp-2">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground flex-1 mb-4 line-clamp-3">
                  {project.summary}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-secondary rounded-full text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Button variant="ghost" size="sm" className="w-fit group">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Collaborate */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="section-heading">Interested in Collaborating?</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            I'm always open to research collaborations, especially in areas related to AI in healthcare, 
            precision medicine, and global health equity.
          </p>
          <Button asChild className="mt-8 bg-accent hover:bg-accent/90">
            <Link to="/contact">
              Get in Touch
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Research;
