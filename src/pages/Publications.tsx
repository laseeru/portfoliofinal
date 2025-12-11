import { FileText, ExternalLink, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";

const publications = [
  {
    type: "Abstract",
    title: "Barriers to AI Implementation in Low-Resource Healthcare Settings: A Cuban Perspective",
    authors: "Abdulai, A.D., et al.",
    venue: "In preparation",
    year: "2025",
  },
];

const conferences = [
  {
    title: "AI in Healthcare: Bridging the Gap in Low-Resource Settings",
    event: "Youth Vision Assembly Summit 2025",
    location: "Amsterdam, Netherlands",
    date: "January 2025",
    type: "Keynote Presentation",
  },
];

const Publications = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <span className="text-accent text-sm font-medium tracking-wider uppercase">Publications & Conferences</span>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mt-4">
            Academic Contributions
          </h1>
          <p className="text-primary-foreground/70 mt-6 max-w-2xl mx-auto">
            Sharing knowledge and insights through publications, presentations, and international conferences.
          </p>
        </div>
      </section>

      {/* Publications */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-4 mb-8">
            <FileText className="h-8 w-8 text-accent" />
            <h2 className="text-2xl font-semibold text-foreground">Publications & Manuscripts</h2>
          </div>

          {publications.length > 0 ? (
            <div className="space-y-6">
              {publications.map((pub, index) => (
                <article
                  key={index}
                  className="glass-card rounded-xl p-6 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <Badge variant="secondary" className="mb-3">{pub.type}</Badge>
                      <h3 className="text-lg font-semibold text-foreground">{pub.title}</h3>
                      <p className="text-muted-foreground mt-2">{pub.authors}</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {pub.venue} • {pub.year}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="glass-card rounded-xl p-12 text-center">
              <p className="text-muted-foreground">Publications coming soon...</p>
            </div>
          )}

          <div className="mt-8 p-6 bg-accent/10 border border-accent/20 rounded-xl">
            <p className="text-foreground">
              <strong>Note:</strong> Several manuscripts are currently in preparation. 
              Check back for updates on upcoming publications.
            </p>
          </div>
        </div>
      </section>

      {/* Conferences */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-4 mb-8">
            <Calendar className="h-8 w-8 text-accent" />
            <h2 className="text-2xl font-semibold text-foreground">Conferences & Presentations</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {conferences.map((conf, index) => (
              <article
                key={index}
                className="glass-card rounded-xl p-6 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Badge className="bg-accent text-accent-foreground mb-4">{conf.type}</Badge>
                <h3 className="text-xl font-semibold text-foreground">{conf.title}</h3>
                <p className="text-accent font-medium mt-2">{conf.event}</p>
                <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {conf.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {conf.date}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="section-heading">Recognition & Awards</h2>
          </div>

          <div className="max-w-2xl mx-auto space-y-4">
            <div className="glass-card rounded-lg p-6 flex items-center gap-4 animate-fade-up">
              <div className="text-4xl">🏆</div>
              <div>
                <h3 className="font-semibold text-foreground">Youth Vision Assembly 2025 Selected Speaker</h3>
                <p className="text-sm text-muted-foreground">International platform for young leaders in healthcare</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Publications;
