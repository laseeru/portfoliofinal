import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ArrowUpRight, FileText } from "lucide-react";
import Layout from "@/components/Layout";
import { CaseStudy, Section, StudyHeading } from "@/components/Section";
import CertificateDialog from "@/components/CertificateDialog";
import ContactForm from "@/components/ContactForm";
import {
  CV_URL,
  courses,
  education,
  experience,
  gmdcai,
  heroFacts,
  implementationStudy,
  institutionalContribution,
  interests,
  languages,
  medestudia,
  mentorship,
  path,
  presentations,
  profile,
  publications,
  recognition,
  skills,
  type PublicationStatus,
} from "@/content";

const statusStyles: Record<PublicationStatus, string> = {
  Published: "border-accent/40 bg-accent/10 text-accent",
  "Under review": "border-border text-muted-foreground",
  Submitted: "border-border text-muted-foreground",
};

const ExternalLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="link inline-flex items-center gap-1 font-medium">
    {children}
    <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
    <span className="sr-only">(opens in a new tab)</span>
  </a>
);

const Index = () => {
  const { hash } = useLocation();

  // Scroll to the section when arriving via a redirected legacy URL (e.g. /about → /#about).
  useEffect(() => {
    if (!hash) return;
    // Wait for web fonts so layout has settled before measuring the target's position.
    document.fonts.ready.then(() => document.getElementById(hash.slice(1))?.scrollIntoView());
  }, [hash]);

  return (
    <Layout>
      {/* Hero */}
      <section id="top" aria-labelledby="hero-heading" className="py-16 md:py-24">
        <div className="page-container grid items-center gap-12 md:grid-cols-[1fr_auto] lg:gap-20">
          <div className="max-w-2xl">
            <p className="eyebrow">{profile.roles.join(" · ")}</p>
            <h1 id="hero-heading" className="mt-5 font-serif text-[2.6rem] font-medium leading-[1.05] tracking-tight text-foreground sm:text-6xl">
              {profile.name}
            </h1>
            <p className="mt-5 font-serif text-xl italic text-accent sm:text-2xl">{profile.tagline}</p>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{profile.summary}</p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a href="#research" className="btn-primary">
                Research and projects
              </a>
              <a href={CV_URL} target="_blank" rel="noopener" className="btn-outline">
                <FileText aria-hidden="true" className="h-4 w-4" />
                View CV
              </a>
              <a href="#contact" className="link text-sm font-medium sm:ml-2">
                Get in touch
              </a>
            </div>
          </div>

          <div className="mx-auto w-56 sm:w-64 md:w-72 lg:w-80">
            <img
              src="/images/portrait.jpg"
              alt={`Portrait of ${profile.name}`}
              width={733}
              height={1100}
              fetchPriority="high"
              className="aspect-[4/5] w-full rounded-sm object-cover object-top"
            />
          </div>
        </div>

        <div className="page-container">
          <dl className="mt-14 grid gap-6 border-t border-border pt-8 sm:grid-cols-3">
            {heroFacts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">{fact.label}</dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-foreground">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* About */}
      <Section
        id="about"
        index="01"
        title="About"
        intro="I trained as an engineer before I trained as a doctor. My work sits where the two meet: how AI can be built, evaluated and adopted responsibly in health systems with limited resources."
      >
        <div className="grid gap-12 xl:grid-cols-[1fr_17rem]">
          <div className="max-w-2xl space-y-5 text-[1.05rem] leading-relaxed text-foreground/90">
            <p>
              I studied Computer Engineering at Kwame Nkrumah University of Science and Technology in Ghana before moving to Havana to study
              medicine at the Universidad de Ciencias Médicas de La Habana. I graduated as a Doctor of Medicine in July 2026 with a GPA of
              4.8/5.0 and the Título de Oro.
            </p>
            <p>
              I kept programming throughout medical school, and over time the two fields became one line of work. Training where
              connections are slow, many AI services are unavailable and resources are stretched kept raising one question for me. The issue
              was not whether a model performs well on a benchmark. It was whether it can be adopted safely and usefully where care
              actually happens.
            </p>
            <p>
              I now approach that question from several directions. I research the barriers to AI adoption in Cuban healthcare and medical
              education. I build tools such as MedEstudia around real constraints. I evaluate large language models for clinical reasoning,
              and I help colleagues build the capacity to develop these tools themselves.
            </p>
          </div>

          <aside aria-label="Research interests">
            <h3 className="eyebrow">Interests</h3>
            <ul className="mt-4 space-y-2 text-sm text-foreground">
              {interests.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </div>

        <h3 className="eyebrow mt-16">Path</h3>
        <ol className="mt-5 max-w-3xl divide-y divide-border border-y border-border">
          {path.map((step) => (
            <li key={step.title} className="grid gap-1 py-4 sm:grid-cols-[6.5rem_1fr] sm:gap-6">
              <p className="font-mono text-sm text-accent sm:pt-0.5">{step.period}</p>
              <p>
                <span className="font-medium text-foreground">{step.title}</span>
                <span className="text-muted-foreground"> — {step.detail}</span>
              </p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Research */}
      <Section
        id="research"
        index="02"
        title="Research"
        intro="My research asks what it takes for AI to be adopted responsibly in health systems with limited infrastructure, and what medical education needs in order to prepare for it."
      >
        <article aria-labelledby="study-implementation">
          <StudyHeading id="study-implementation" title={implementationStudy.title} meta={implementationStudy.meta} />
          <CaseStudy rows={implementationStudy.rows} />
        </article>

        <article aria-labelledby="study-capacity" className="mt-20">
          <StudyHeading id="study-capacity" title={institutionalContribution.title} meta={institutionalContribution.meta} />
          <CaseStudy rows={institutionalContribution.rows} />
        </article>

        <p className="mt-12 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Related work includes a literature review on artificial intelligence in maternal-fetal medicine, covering prenatal diagnosis and
          risk prediction, which is now under review (see <a href="#publications" className="link">Publications</a>).
        </p>
      </Section>

      {/* Projects */}
      <Section id="projects" index="03" title="Projects">
        <article aria-labelledby="project-medestudia">
          <StudyHeading id="project-medestudia" title={medestudia.title} meta={medestudia.meta} subtitle={medestudia.subtitle} />

          <div className="mb-8 flex flex-wrap gap-x-6 gap-y-2">
            <ExternalLink href={medestudia.url}>Visit MedEstudia</ExternalLink>
            <ExternalLink href={medestudia.source}>Source code</ExternalLink>
          </div>

          <figure className="mb-10 grid gap-4 sm:grid-cols-2">
            <img
              src="/images/medestudia-1.jpg"
              alt="MedEstudia home screen with the Generate MCQs, Quick Quiz and Explain Topic tools"
              width={1600}
              height={902}
              loading="lazy"
              decoding="async"
              className="w-full rounded-sm border border-border"
            />
            <img
              src="/images/medestudia-2.jpg"
              alt="MedEstudia Explain Topic screen with a field for entering a medical topic"
              width={1600}
              height={762}
              loading="lazy"
              decoding="async"
              className="w-full self-start rounded-sm border border-border"
            />
            <figcaption className="text-sm text-muted-foreground sm:col-span-2">MedEstudia interface, shown here in English.</figcaption>
          </figure>

          <CaseStudy rows={[...medestudia.rows, { label: "Technology", body: medestudia.stack.join(" · ") }]} />
        </article>

        <article aria-labelledby="project-gmdcai" className="mt-20">
          <StudyHeading id="project-gmdcai" title={gmdcai.title} meta={gmdcai.meta} subtitle={gmdcai.subtitle} />
          <CaseStudy rows={gmdcai.rows} />
        </article>
      </Section>

      {/* Publications */}
      <Section id="publications" index="04" title="Publications">
        <ol className="space-y-8">
          {publications.map((pub) => (
            <li key={pub.title} className="grid gap-3 sm:grid-cols-[1fr_auto] sm:gap-8">
              <div className="max-w-3xl">
                <p className="text-sm text-muted-foreground">
                  {pub.authors} ({pub.year})
                </p>
                <p className="mt-1 font-serif text-xl leading-snug text-foreground" lang="es">
                  {pub.title}
                </p>
                {pub.translation && <p className="mt-1 text-sm italic text-muted-foreground">{pub.translation}</p>}
                <p className="mt-1 text-sm text-foreground/80">{pub.venue}</p>
              </div>
              <p className="sm:pt-1">
                <span className={`inline-block whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-medium ${statusStyles[pub.status]}`}>
                  {pub.status}
                </span>
              </p>
            </li>
          ))}
        </ol>

        <h3 className="eyebrow mt-16">Presentations</h3>
        <ul className="mt-5 divide-y divide-border border-y border-border">
          {presentations.map((p) => (
            <li key={p.event} className="grid gap-1 py-5 sm:grid-cols-[1fr_auto] sm:gap-8">
              <div>
                <p className="font-medium text-foreground">{p.event}</p>
                <p className="text-sm text-muted-foreground">{p.place}</p>
                <p className="mt-2 text-[0.975rem] leading-relaxed text-foreground/90">{p.detail}</p>
              </div>
              <p className="text-sm text-muted-foreground sm:pt-0.5">{p.date}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Experience */}
      <Section id="experience" index="05" title="Experience">
        <div className="space-y-10">
          {experience.map((job) => (
            <div key={job.role} className="grid gap-2 sm:grid-cols-[1fr_auto] sm:gap-8">
              <div className="max-w-3xl">
                <h3 className="text-lg font-medium text-foreground">{job.role}</h3>
                <p className="text-muted-foreground">{job.org}</p>
                <ul className="mt-3 space-y-1.5 text-[0.975rem] leading-relaxed text-foreground/90">
                  {job.points.map((point) => (
                    <li key={point} className="relative pl-4 before:absolute before:left-0 before:top-[0.7em] before:h-px before:w-2 before:bg-accent">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="order-first text-sm text-muted-foreground sm:order-none sm:pt-1">{job.period}</p>
            </div>
          ))}
          <div className="grid gap-2 sm:grid-cols-[1fr_auto] sm:gap-8">
            <div>
              <h3 className="text-lg font-medium text-foreground">{mentorship.title}</h3>
              <p className="text-muted-foreground">{mentorship.org}</p>
            </div>
          </div>
        </div>

        <h3 className="eyebrow mt-16">Education</h3>
        <ul className="mt-5 divide-y divide-border border-y border-border">
          {education.map((ed) => (
            <li key={ed.degree} className="grid gap-1 py-5 sm:grid-cols-[1fr_auto] sm:gap-8">
              <div>
                <p className="font-medium text-foreground">{ed.degree}</p>
                <p className="text-sm text-muted-foreground">{ed.org}</p>
                {ed.note && <p className="mt-1 text-sm text-accent">{ed.note}</p>}
              </div>
              <p className="order-first text-sm text-muted-foreground sm:order-none">{ed.period}</p>
            </li>
          ))}
        </ul>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_16rem]">
          <div>
            <h3 className="eyebrow">Skills</h3>
            <dl className="mt-5 grid gap-6 sm:grid-cols-2">
              {skills.map((s) => (
                <div key={s.group}>
                  <dt className="font-medium text-foreground">{s.group}</dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.items.join(" · ")}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <h3 className="eyebrow">Languages</h3>
            <dl className="mt-5 space-y-2 text-sm">
              {languages.map((l) => (
                <div key={l.name} className="flex justify-between gap-4 border-b border-border pb-2">
                  <dt className="text-foreground">{l.name}</dt>
                  <dd className="text-muted-foreground">{l.level}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <h3 className="eyebrow mt-16">Continuing education</h3>
        <ul className="mt-5 space-y-3 text-sm">
          {courses.map((c) => (
            <li key={c.title} className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <span>
                <span className="text-foreground">{c.title}</span>
                <span className="text-muted-foreground"> · {c.issuer}, {c.date}</span>
              </span>
              <a href={c.verify} target="_blank" rel="noopener noreferrer" className="link shrink-0 text-muted-foreground">
                Verify<span className="sr-only"> {c.title} certificate (opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      </Section>

      {/* Recognition */}
      <Section id="recognition" index="06" title="Recognition">
        <ul className="divide-y divide-border border-y border-border">
          {recognition.map((r) => (
            <li key={r.title} className="grid gap-1 py-5 sm:grid-cols-[6.5rem_1fr_auto] sm:gap-6">
              <p className="font-mono text-sm text-muted-foreground sm:pt-0.5">{r.year}</p>
              <div>
                <p className="font-medium text-foreground">{r.title}</p>
                <p className="text-sm text-muted-foreground">{r.issuer}</p>
              </div>
              {r.certificate && (
                <div className="sm:pt-0.5">
                  <CertificateDialog title={r.title} src={r.certificate.src} alt={r.certificate.alt} />
                </div>
              )}
            </li>
          ))}
        </ul>
      </Section>

      {/* Contact */}
      <Section
        id="contact"
        index="07"
        title="Contact"
        intro="I'm open to research collaborations, fellowships and roles in medical AI, digital health and health-systems implementation."
      >
        <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr]">
          <dl className="space-y-5">
            <div>
              <dt className="eyebrow">Email</dt>
              <dd className="mt-1">
                <a href={`mailto:${profile.email}`} className="link text-lg">
                  {profile.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow">Elsewhere</dt>
              <dd className="mt-1 flex flex-wrap gap-x-6 gap-y-1">
                <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
                <ExternalLink href={profile.github}>GitHub</ExternalLink>
              </dd>
            </div>
            <div>
              <dt className="eyebrow">CV</dt>
              <dd className="mt-1">
                <a href={CV_URL} target="_blank" rel="noopener" className="link">
                  Download CV (PDF)
                </a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow">Location</dt>
              <dd className="mt-1 text-foreground">
                {profile.location} · from {profile.origin}
              </dd>
            </div>
          </dl>

          <ContactForm />
        </div>
      </Section>
    </Layout>
  );
};

export default Index;
