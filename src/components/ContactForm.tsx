import { FormEvent, useState } from "react";

const FORMSPREE_URL = "https://formspree.io/f/mvznvlgz";

type Status = "idle" | "sending" | "sent" | "error";

const fieldClass =
  "mt-1.5 block w-full rounded-sm border border-input bg-background px-3 py-2.5 text-base text-foreground placeholder:text-muted-foreground/70 focus-visible:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30";

const ContactForm = () => {
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <form action={FORMSPREE_URL} method="POST" onSubmit={onSubmit} className="space-y-5" aria-label="Contact form">
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <input type="hidden" name="_subject" value="Portfolio contact form" />

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-foreground">
          Name
          <input name="name" required autoComplete="name" className={fieldClass} />
        </label>
        <label className="block text-sm font-medium text-foreground">
          Email
          <input name="_replyto" type="email" required autoComplete="email" className={fieldClass} />
        </label>
      </div>
      <label className="block text-sm font-medium text-foreground">
        Message
        <textarea name="message" required rows={5} className={`${fieldClass} resize-y`} />
      </label>

      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" className="btn-primary" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
        <p role="status" aria-live="polite" className="text-sm">
          {status === "sent" && <span className="text-accent">Thank you, your message has been sent.</span>}
          {status === "error" && (
            <span className="text-destructive">
              Something went wrong. Please email me directly instead.
            </span>
          )}
        </p>
      </div>
    </form>
  );
};

export default ContactForm;
