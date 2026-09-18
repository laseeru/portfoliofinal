import { profile } from "@/content";

const Footer = () => (
  <footer className="border-t border-border py-10">
    <div className="page-container flex flex-col gap-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
      <p>
        © {new Date().getFullYear()} {profile.name}, MD
      </p>
      <ul className="flex gap-6">
        <li>
          <a className="link" href={`mailto:${profile.email}`}>
            Email
          </a>
        </li>
        <li>
          <a className="link" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </li>
        <li>
          <a className="link" href={profile.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
