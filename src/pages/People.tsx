import { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Link } from "react-router-dom";
import { User, Linkedin } from "lucide-react";

interface Person {
  name: string;
  role: string;
  linkedin?: string;
}

const teamMembers: Person[] = [
  { name: "Dr. Ebaad Momin", role: "Managing Partner", linkedin: "https://www.linkedin.com/in/ebaad-momin-a8435324/" },
  { name: "Mohammed Mohin Shaikh", role: "Partner", linkedin: "https://www.linkedin.com/in/mahammed-mohin-98306311/" },
  { name: "Salman Mohammed", role: "Partner", linkedin: "https://www.linkedin.com/in/salman-mohammed-b05a497/" },
  { name: "Mohamed Yunus, CA", role: "Financial Advisor", linkedin: "https://www.linkedin.com/in/mohamed-yunus-55571195" },
  { name: "Tariq Syed", role: "Coach", linkedin: "https://www.linkedin.com/in/tariqahmedsyed/" },
  { name: "Sameer Ahmed", role: "Coach" },
  { name: "Tabish Sangrar", role: "Mentor", linkedin: "https://www.linkedin.com/in/tabish-sangrar/" },
  { name: "Raja Singh", role: "Mentor", linkedin: "https://www.linkedin.com/in/rsbhurji/" },
];

const mentors: Person[] = [
  { name: "Anand Vijay Jha", role: "Mentor", linkedin: "https://www.linkedin.com/in/anandvijayjha/" },
  { name: "Anshu Aanand", role: "Mentor", linkedin: "https://www.linkedin.com/in/anshuaanandofficial/" },
  { name: "Arijit Bhattacharyya", role: "Mentor", linkedin: "https://www.linkedin.com/in/arijitbhattacharyya/" },
  { name: "Dr. Harvinder Popli", role: "Mentor", linkedin: "https://www.linkedin.com/in/harvinder-popli-6ab9b115/" },
  { name: "Ebhin Ephram", role: "Mentor" },
  { name: "Florian Oberhofer", role: "Mentor", linkedin: "https://www.linkedin.com/in/flooberhofer/" },
  { name: "Rahul Anand", role: "Mentor", linkedin: "https://www.linkedin.com/in/rahul-anand-66835b1/" },
  { name: "Qais Mujeeb", role: "Mentor", linkedin: "https://www.linkedin.com/in/moqaism/" },
  { name: "Shivam Ahuja", role: "Mentor", linkedin: "https://www.linkedin.com/in/ahujashivam/" },
  { name: "Vidhya Ramasubban", role: "Mentor" },
  { name: "Hemant Mishra", role: "Mentor", linkedin: "https://www.linkedin.com/in/hemant-mishra-vc/" },
  { name: "Malini Parmar", role: "Mentor", linkedin: "https://www.linkedin.com/in/maliniparmar/" },
  { name: "Neetii Makkar", role: "Mentor" },
];

const PersonCard = ({ person }: { person: Person }) => (
  <div className="tool-card group relative flex flex-col items-center text-center">
    <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
      <User className="h-10 w-10 text-primary" />
    </div>
    <h3 className="font-display text-base font-semibold">{person.name}</h3>
    <span className="mb-2 text-xs font-semibold uppercase tracking-wider text-secondary">{person.role}</span>
    {person.linkedin && (
      <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="absolute right-4 top-4 rounded-full bg-primary/10 p-2 opacity-0 transition-opacity group-hover:opacity-100 hover:bg-primary/20">
        <Linkedin className="h-4 w-4 text-primary" />
      </a>
    )}
  </div>
);

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

      {/* Tabs */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="relative">
            {/* Vertical Side Text */}
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
                <PersonCard key={p.name} person={p} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default People;
