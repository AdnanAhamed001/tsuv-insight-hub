import { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactUs = () => {
  const [form, setForm] = useState({ type: "", name: "", phone: "", email: "", expertise: "", message: "" });

  const inputClass = "w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary";

  const ecosystemPartners = ["100X.VC", "Fluid Ventures", "Cognitive", "Klub", "Anicut", "Peak XV"];
  const servicePartners = ["AWS", "Paytm", "Freshworks", "Twilio", "Miro"];

  return (
    <PageLayout>
      <section className="hero-gradient section-padding py-20">
        <div className="mx-auto max-w-7xl">
          <h1 className="mb-4 font-display text-4xl font-bold text-primary-foreground md:text-5xl">CONTACT US</h1>
          <p className="max-w-3xl text-lg text-primary-foreground/80">
            Let's Build Bharat Together — We are always looking for driven founders, strategic investors, and passionate mentors. Reach out to see how we can collaborate.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-2 text-center font-display text-2xl font-bold">Register Your Interest</h2>
          <p className="mb-8 text-center text-sm text-muted-foreground">
            We are happy to work with interns or people/organizations who are enthusiastic about helping startups grow.
          </p>
          <div className="space-y-4">
            <select className={inputClass} value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}>
              <option value="">Type (Individual / Organization)</option>
              <option>Individual</option>
              <option>Organization</option>
            </select>
            <input className={inputClass} placeholder="Full Name *" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            <input className={inputClass} placeholder="Phone *" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
            <input type="email" className={inputClass} placeholder="Email *" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            <input className={inputClass} placeholder="Your Area of Expertise / Work *" value={form.expertise} onChange={(e) => setForm({ ...form, expertise: e.target.value })} />
            <textarea rows={4} className={inputClass} placeholder="What would you like to offer / collaborate on? *" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
            <button className="w-full rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary/90">
              Submit
            </button>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="section-padding bg-tsuv-surface">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <h3 className="mb-4 text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground">Ecosystem Partners</h3>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {ecosystemPartners.map((p) => (
                <div key={p} className="rounded-lg border border-border bg-card px-5 py-2 text-sm font-semibold text-foreground shadow-sm">{p}</div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground">Service Partners</h3>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {servicePartners.map((p) => (
                <div key={p} className="rounded-lg border border-border bg-card px-5 py-2 text-sm font-semibold text-foreground shadow-sm">{p}</div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ContactUs;
