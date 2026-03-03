import { Link } from "react-router-dom";
import tsuvLogo from "@/assets/tsuv-logo.svg";

const socialLinks = [
  { name: "LinkedIn", url: "https://www.linkedin.com/company/the-step-up-ventures/", icon: "in" },
  { name: "Instagram", url: "https://www.instagram.com/thestepupventures/", icon: "ig" },
  { name: "Facebook", url: "https://www.facebook.com/p/The-StepUp-Ventures-100063871641779/", icon: "fb" },
  { name: "Twitter", url: "https://twitter.com/step_ventures", icon: "tw" },
  { name: "F6S", url: "http://www.f6s.com/tsuv4/apply", icon: "f6s" },
];

const Footer = () => {
  return (
    <footer className="hero-gradient text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div className="lg:col-span-1">
            <img src={tsuvLogo} alt="TSUV" className="mb-4 h-10 brightness-0 invert" />
            <p className="text-sm text-primary-foreground/70">
              The StepUp Ventures plans to connect Bharat with the rest of the world. It endeavours to ignite the entrepreneurial spirit in the youth of Bharat, thus contributing in creation of the 5 Trillion Dollar economy.
            </p>
            {/* Social Media */}
            <div className="mt-4 flex gap-3">
              {socialLinks.map((s) => (
                <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-foreground/10 text-xs font-bold text-primary-foreground/70 transition-colors hover:bg-secondary hover:text-secondary-foreground" title={s.name}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Our Pages */}
          <div>
            <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-secondary">Our Pages</h4>
            <ul className="space-y-2 text-sm">
              {[
                { name: "Apply", path: "/apply" },
                { name: "About Us", path: "/about" },
                { name: "People", path: "/people" },
                { name: "Program", path: "/program" },
                { name: "Contact Us", path: "/contact" },
              ].map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-primary-foreground/70 transition-colors hover:text-secondary">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-secondary">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/faq" className="text-primary-foreground/70 transition-colors hover:text-secondary">FAQ Page</Link></li>
              <li><Link to="/disclaimer" className="text-primary-foreground/70 transition-colors hover:text-secondary">Disclaimer</Link></li>
              <li><Link to="/privacy-policy" className="text-primary-foreground/70 transition-colors hover:text-secondary">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-secondary">Get the Latest from TSV</h4>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter email address"
                className="flex-1 rounded-md border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-2 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:border-secondary focus:outline-none"
              />
              <button className="rounded-md bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-secondary/90">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-2 border-t border-primary-foreground/10 pt-6 text-center text-sm text-primary-foreground/50 sm:flex-row sm:justify-between">
          <span>© 2022 THE STEPUP VENTURE. All rights reserved.</span>
          <div className="flex gap-4">
            <Link to="/disclaimer" className="hover:text-secondary">Legal</Link>
            <Link to="/privacy-policy" className="hover:text-secondary">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
