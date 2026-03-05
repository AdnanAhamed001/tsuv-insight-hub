import { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";

/**
 * TO ADD TEAM/MENTOR PHOTOS:
 * 1. Add images to: public/images/team/ (for team) or public/images/mentors/ (for mentors)
 * 2. Name them using kebab-case of the person's name, e.g.:
 *    - dr-ebaad-momin.jpg
 *    - mohammed-mohin-shaikh.jpg
 * 3. Update the `image` field below with the filename
 */

interface Person {
  name: string;
  role: string;
  linkedin?: string;
  image?: string; // filename only, e.g. "dr-ebaad-momin.jpg"
}

const teamMembers: Person[] = [
  { name: "Dr. Ebaad Momin", role: "Managing Partner", linkedin: "https://www.linkedin.com/in/ebaad-momin-a8435324/", image: "dr-ebaad-momin.jpg" },
  { name: "Mohammed Mohin Shaikh", role: "Partner", linkedin: "https://www.linkedin.com/in/mahammed-mohin-98306311/", image: "mohammed-mohin-shaikh.jpg" },
  { name: "Salman Mohammed", role: "Partner", linkedin: "https://www.linkedin.com/in/salman-mohammed-b05a497/", image: "salman-mohammed.jpg" },
  { name: "Mohamed Yunus, CA", role: "Financial Advisor", linkedin: "https://www.linkedin.com/in/mohamed-yunus-55571195", image: "mohamed-yunus.jpg" },
  { name: "Tariq Syed", role: "Coach", linkedin: "https://www.linkedin.com/in/tariqahmedsyed/", image: "tariq-syed.jpg" },
  { name: "Sameer Ahmed", role: "Coach", image: "sameer-ahmed.jpg" },
  { name: "Tabish Sangrar", role: "Mentor", linkedin: "https://www.linkedin.com/in/tabish-sangrar/", image: "tabish-sangrar.jpg" },
  { name: "Raja Singh", role: "Mentor", linkedin: "https://www.linkedin.com/in/rsbhurji/", image: "raja-singh.jpg" },
];

const mentors: Person[] = [
  { name: "Anand Vijay Jha", role: "Mentor", linkedin: "https://www.linkedin.com/in/anandvijayjha/", image: "anand-vijay-jha.jpg" },
  { name: "Anshu Aanand", role: "Mentor", linkedin: "https://www.linkedin.com/in/anshuaanandofficial/", image: "anshu-aanand.jpg" },
  { name: "Arijit Bhattacharyya", role: "Mentor", linkedin: "https://www.linkedin.com/in/arijitbhattacharyya/", image: "arijit-bhattacharyya.jpg" },
  { name: "Dr. Harvinder Popli", role: "Mentor", linkedin: "https://www.linkedin.com/in/harvinder-popli-6ab9b115/", image: "dr-harvinder-popli.jpg" },
  { name: "Ebhin Ephram", role: "Mentor", image: "ebhin-ephram.jpg" },
  { name: "Florian Oberhofer", role: "Mentor", linkedin: "https://www.linkedin.com/in/flooberhofer/", image: "florian-oberhofer.jpg" },
  { name: "Rahul Anand", role: "Mentor", linkedin: "https://www.linkedin.com/in/rahul-anand-66835b1/", image: "rahul-anand.jpg" },
  { name: "Qais Mujeeb", role: "Mentor", linkedin: "https://www.linkedin.com/in/moqaism/", image: "qais-mujeeb.jpg" },
  { name: "Shivam Ahuja", role: "Mentor", linkedin: "https://www.linkedin.com/in/ahujashivam/", image: "shivam-ahuja.jpg" },
  { name: "Vidhya Ramasubban", role: "Mentor", image: "vidhya-ramasubban.jpg" },
  { name: "Hemant Mishra", role: "Mentor", linkedin: "https://www.linkedin.com/in/hemant-mishra-vc/", image: "hemant-mishra.jpg" },
  { name: "Malini Parmar", role: "Mentor", linkedin: "https://www.linkedin.com/in/maliniparmar/", image: "malini-parmar.jpg" },
  { name: "Neetii Makkar", role: "Mentor", image: "neetii-makkar.jpg" },
];

const PersonCard = ({ person, imageDir }: { person: Person; imageDir: string }) => {
  const initials = person.name.split(" ").map((n) => n[0]).slice(0, 2).join("");
  const imageSrc = person.image ? `/images/${imageDir}/${person.image}` : null;

  return (
    <div className="tool-card group relative flex flex-col items-center text-center">
      {/* Photo or Placeholder */}
      <div className="mb-4 h-28 w-28 overflow-hidden rounded-full border-2 border-border bg-muted shadow-md transition-all duration-300 group-hover:border-secondary group-hover:shadow-lg group-hover:shadow-secondary/20">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={person.name}
            className="h-full w-full object-cover"
            onError={(e) => {
              // If image not found, show initials
              (e.target as HTMLImageElement).style.display = "none";
              (e.target as HTMLImageElement).nextElementSibling?.classList.remove("hidden");
            }}
          />
        ) : null}
        <div className={`flex h-full w-full items-center justify-center bg-gradient-to-br from-primary to-primary/80 ${imageSrc ? "hidden" : ""}`}>
          <span className="font-display text-2xl font-bold text-primary-foreground">{initials}</span>
        </div>
      </div>

      <h3 className="font-display text-base font-semibold">{person.name}</h3>
      <span className="mb-2 text-xs font-semibold uppercase tracking-wider text-secondary">{person.role}</span>

      {person.linkedin && (
        <a
          href={person.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute right-4 top-4 rounded-full bg-primary/10 p-2 opacity-0 transition-opacity group-hover:opacity-100 hover:bg-primary/20"
        >
          <Linkedin className="h-4 w-4 text-primary" />
        </a>
      )}
    </div>
  );
};

const People = () => {
  const [activeTab, setActiveTab] = useState<"team" | "mentors">("team");

  return (
    <PageLayout>
      <section className="hero-gradient section-padding py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-2 flex items-center gap-2 text-xs text-primary-foreground/60">
            <Link to="/" className="hover:text-primary-foreground">Home</Link>
            <span>/</span>
            <span className="text-primary-foreground">People</span>
          </div>
          <h1 className="mb-4 font-display text-4xl font-bold text-primary-foreground md:text-5xl">PEOPLE</h1>
          <p className="max-w-3xl text-lg text-primary-foreground/80">
            The Minds Behind the Momentum — Meet the experienced executive team, coaches, and highly accomplished mentors driving The StepUp Ventures.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="relative">
            <div className="pointer-events-none absolute -left-4 top-0 hidden select-none lg:block">
              <span className="font-display text-8xl font-bold uppercase tracking-widest text-muted-foreground/5 [writing-mode:vertical-lr]">
                {activeTab === "team" ? "FOUNDER" : "MENTOR"}
              </span>
            </div>

            <div className="mb-8 flex justify-center gap-2">
              <button onClick={() => setActiveTab("team")} className={`rounded-md px-6 py-2.5 text-sm font-semibold transition-colors ${activeTab === "team" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}>
                Team
              </button>
              <button onClick={() => setActiveTab("mentors")} className={`rounded-md px-6 py-2.5 text-sm font-semibold transition-colors ${activeTab === "mentors" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}>
                Mentors
              </button>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {(activeTab === "team" ? teamMembers : mentors).map((p) => (
                <PersonCard key={p.name} person={p} imageDir={activeTab === "team" ? "team" : "mentors"} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default People;
