import { Code, Stethoscope, Brain, Database, BookOpen, Globe } from "lucide-react";
import Layout from "@/components/Layout";

const technicalSkills = [
  { name: "Python", level: 75, icon: <Code className="h-5 w-5" /> },
  { name: "LLMs & Prompt Engineering", level: 70, icon: <Brain className="h-5 w-5" /> },
  { name: "Machine Learning Foundations", level: 60, icon: <Database className="h-5 w-5" /> },
  { name: "Medical Data Annotation", level: 80, icon: <Database className="h-5 w-5" /> },
  { name: "AI Ethics & Bias Awareness", level: 85, icon: <Brain className="h-5 w-5" /> },
  { name: "Bioinformatics (Beginner)", level: 40, icon: <Code className="h-5 w-5" /> },
];

const clinicalSkills = [
  { name: "Internal Medicine Foundations", level: 75, icon: <Stethoscope className="h-5 w-5" /> },
  { name: "Epidemiology", level: 70, icon: <Globe className="h-5 w-5" /> },
  { name: "Public Health", level: 80, icon: <Globe className="h-5 w-5" /> },
  { name: "Research Writing", level: 85, icon: <BookOpen className="h-5 w-5" /> },
  { name: "Literature Review Analysis", level: 80, icon: <BookOpen className="h-5 w-5" /> },
  { name: "Clinical Data Interpretation", level: 70, icon: <Stethoscope className="h-5 w-5" /> },
];

const tools = [
  "Python", "Jupyter", "Git", "LaTeX", "Zotero", "SPSS", "Google Scholar", "PubMed", "ChatGPT/LLMs"
];

const Skills = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <span className="text-accent text-sm font-medium tracking-wider uppercase">Expertise</span>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mt-4">
            Skills & Tools
          </h1>
          <p className="text-primary-foreground/70 mt-6 max-w-2xl mx-auto">
            A unique blend of technical and clinical competencies enabling me to bridge 
            the gap between AI research and healthcare practice.
          </p>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-4 mb-8">
            <Code className="h-8 w-8 text-accent" />
            <h2 className="text-2xl font-semibold text-foreground">Technical Skills</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {technicalSkills.map((skill, index) => (
              <div
                key={skill.name}
                className="glass-card rounded-xl p-6 animate-fade-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-accent/10 rounded-lg text-accent">
                      {skill.icon}
                    </div>
                    <span className="font-medium text-foreground">{skill.name}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-accent rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Skills */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-4 mb-8">
            <Stethoscope className="h-8 w-8 text-accent" />
            <h2 className="text-2xl font-semibold text-foreground">Clinical & Academic Skills</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {clinicalSkills.map((skill, index) => (
              <div
                key={skill.name}
                className="glass-card rounded-xl p-6 animate-fade-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-accent/10 rounded-lg text-accent">
                      {skill.icon}
                    </div>
                    <span className="font-medium text-foreground">{skill.name}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-accent rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="section-heading">Tools & Technologies</h2>
            <p className="text-muted-foreground mt-4">Software and platforms I use regularly</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {tools.map((tool, index) => (
              <div
                key={tool}
                className="px-6 py-3 bg-secondary rounded-full text-foreground font-medium animate-fade-up hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="section-heading">Languages</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {[
              { lang: "English", level: "Fluent", flag: "🇬🇧" },
              { lang: "Spanish", level: "Fluent", flag: "🇪🇸" },
              { lang: "Dagbani", level: "Native", flag: "🇬🇭" },
            ].map((item, index) => (
              <div
                key={item.lang}
                className="glass-card rounded-xl p-6 text-center w-40 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl mb-2">{item.flag}</div>
                <h3 className="font-semibold text-foreground">{item.lang}</h3>
                <p className="text-sm text-muted-foreground">{item.level}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Skills;
