import { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactUs = () => {
  const [form, setForm] = useState({ type: "", name: "", phone: "", email: "", expertise: "", message: "" });
  const inputClass = "w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary";

  return (
    <PageLayout>
      <section className="hero-gradient section-padding py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-2 flex items-center gap-2 text-xs text-primary-foreground/60">
            <Link to="/" className="hover:text-primary-foreground">Home</Link>
            <span>/</span>
            <span className="text-primary-foreground">Contact Us</span>
          </div>
          <h1 className="mb-4 font-display text-4xl font-bold text-primary-foreground md:text-5xl">CONTACT US</h1>
          <p className="max-w-3xl text-lg text-primary-foreground/80">
            Let's Build Bharat Together — We are always looking for driven founders, strategic investors, and passionate mentors.
          </p>
        </div>
      </section>

      {/* Google Maps Embed */}
      <section className="section-padding bg-tsuv-surface">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-2xl border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.1234!2d77.6090!3d13.0310!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAyJzAwLjAiTiA3N8KwMzYnMzAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="StepUp Ventures Location - Bengaluru"
            />
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-secondary" /> #669F, 3rd Floor, AMG Towers, HBR Layout, Bangalore – 560043</span>
            <span className="inline-flex items-center gap-2"><Mail className="h-4 w-4 text-secondary" /> info@thestepupventures.com</span>
          </div>
        </div>
      </section>

      {/* Work With Us Form */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div>
              <h2 className="mb-4 font-display text-2xl font-bold">WORK WITH US</h2>
              <p className="text-sm text-muted-foreground">
                We are happy to work with interns or people or organizations who are enthusiastic on working and helping startups grow.
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                If you think you can work and you have it in you or if you would like to collaborate with us in this space, then register your interest here. We will get back to you as soon as possible to discuss over a cup of coffee.
              </p>
            </div>
            <div className="space-y-4">
              <input className={inputClass} placeholder="Name *" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              <input type="email" className={inputClass} placeholder="Email *" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              <input className={inputClass} placeholder="Phone *" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
              <select className={inputClass} value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}>
                <option value="">Individual / Organization</option>
                <option>Individual</option>
                <option>Organization</option>
              </select>
              <input className={inputClass} placeholder="Your Area of Expertise / Work" value={form.expertise} onChange={(e) => setForm({ ...form, expertise: e.target.value })} />
              <textarea rows={4} className={inputClass} placeholder="What would you like to offer / collaborate on?" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
              <button className="w-full rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary/90">Submit</button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ContactUs;
