import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import tsuvLogo from "@/assets/tsuv-logo.svg";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Program", path: "/program" },
  { name: "Investor Hub", path: "/investor-hub" },
  { name: "Portfolio", path: "/portfolio" },
  {
    name: "Resources",
    path: "/resources",
    dropdown: [
      { name: "All Resources", path: "/resources" },
      { name: "Tools — Calculators & Financial Models", path: "/resources/tools" },
      { name: "Assessments — Readiness & Health Checks", path: "/resources/assessments" },
      { name: "Reports — Market Insights & Case Studies", path: "/resources/reports" },
      { name: "PR Activity — Press Mentions & Awards", path: "/resources/pr-activity" },
      { name: "Videos — Demo Days & Masterclasses", path: "/resources/videos" },
      { name: "Podcasts — Interviews & Ecosystem Audio", path: "/resources/podcasts" },
    ],
  },
  { name: "About Us", path: "/about" },
  { name: "People", path: "/people" },
  { name: "Blog", path: "/blog" },
  { name: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        <Link to="/" className="flex items-center">
          <img src={tsuvLogo} alt="The StepUp Ventures" className="h-10" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div
                key={link.path}
                className="relative"
                onMouseEnter={() => setOpenDropdown(link.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={link.path}
                  className={`inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    location.pathname.startsWith(link.path)
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground/70 hover:bg-muted hover:text-foreground"
                  }`}
                >
                  {link.name}
                  <ChevronDown className="h-3 w-3" />
                </Link>
                {openDropdown === link.name && (
                  <div className="absolute left-0 top-full z-50 w-64 rounded-lg border border-border bg-card py-2 shadow-lg">
                    {link.dropdown.map((sub) => (
                      <Link
                        key={sub.path}
                        to={sub.path}
                        className="block px-4 py-2 text-sm text-foreground/80 hover:bg-muted hover:text-foreground"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.path}
                to={link.path}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground/70 hover:bg-muted hover:text-foreground"
                }`}
              >
                {link.name}
              </Link>
            )
          )}
        </div>

        {/* CTA */}
        <Link
          to="/apply"
          className="hidden rounded-md bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground hover:bg-secondary/90 lg:inline-flex"
        >
          Apply
        </Link>

        {/* Mobile Toggle */}
        <button className="rounded-md p-2 text-foreground lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-border bg-background px-4 py-4 lg:hidden">
          {navLinks.map((link) => (
            <div key={link.path}>
              <Link
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block rounded-md px-3 py-2 text-sm font-medium ${
                  location.pathname === link.path
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground/70 hover:bg-muted"
                }`}
              >
                {link.name}
              </Link>
              {link.dropdown && (
                <div className="ml-4 space-y-1">
                  {link.dropdown.slice(1).map((sub) => (
                    <Link
                      key={sub.path}
                      to={sub.path}
                      onClick={() => setIsOpen(false)}
                      className="block rounded-md px-3 py-1.5 text-xs text-muted-foreground hover:bg-muted hover:text-foreground"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
