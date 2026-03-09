import { useState } from "react";
import { Mail } from "lucide-react";

const ProgramNewsletter = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <section className="section-padding bg-muted/50">
      <div className="mx-auto max-w-2xl text-center">
        <Mail className="mx-auto mb-4 h-10 w-10 text-secondary" />
        <h2 className="mb-2 font-display text-2xl font-bold">Subscribe to get latest information on TSUV</h2>
        <p className="mb-6 text-sm text-muted-foreground">Stay updated with cohort announcements, founder stories, and ecosystem news.</p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="flex-1 rounded-md border border-border bg-card px-4 py-2.5 text-sm focus:border-secondary focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 rounded-md border border-border bg-card px-4 py-2.5 text-sm focus:border-secondary focus:outline-none"
          />
          <button className="rounded-md bg-secondary px-6 py-2.5 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-secondary/90">
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProgramNewsletter;
