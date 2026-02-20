import PageLayout from "@/components/layout/PageLayout";
import { User } from "lucide-react";

interface Person {
  name: string;
  role: string;
  desc: string;
  category: "leadership" | "coach" | "mentor";
}

const people: Person[] = [
  { name: "Dr. Ebaad Momin", role: "Managing Partner", desc: "15 years experience in Private Banking, Private Equity, and Investment Banking. PhD in Islamic Finance.", category: "leadership" },
  { name: "Mohammed Mohin Shaikh", role: "Partner", desc: "18 years experience in Energy industry and Investment Banking.", category: "leadership" },
  { name: "Salman Mohammed", role: "Partner", desc: "15+ years experience in Telco and Enterprise (IT) as a Digital Transformation consultant.", category: "leadership" },
  { name: "Mohamed Yunus, CA", role: "Financial Advisor", desc: "15 years experience in Financial Management, Fund Raising, Global Taxation, and International Trade.", category: "leadership" },
  { name: "Tariq Syed", role: "Coach", desc: "12 years of experience in Innovation Consulting, Startup Accelerator & Fund Management.", category: "coach" },
  { name: "Sameer Ahmed", role: "Coach", desc: "Over two decades of experience helping major organizations worldwide build large scale secure applications.", category: "coach" },
  { name: "Tabish Sangrar", role: "Mentor", desc: "Award-winning business-focused Global Technology Leader, CIO & IT Leader.", category: "mentor" },
  { name: "Raja Singh", role: "Mentor", desc: "10+ years of experience leading Tech and Traditional sectors; Honorary Mentor of Change with Government of India.", category: "mentor" },
];

const PersonCard = ({ person }: { person: Person }) => (
  <div className="tool-card flex flex-col items-center text-center">
    <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
      <User className="h-10 w-10 text-primary" />
    </div>
    <h3 className="font-display text-base font-semibold">{person.name}</h3>
    <span className="mb-2 text-xs font-semibold uppercase tracking-wider text-secondary">{person.role}</span>
    <p className="text-xs text-muted-foreground">{person.desc}</p>
  </div>
);

const People = () => {
  const leadership = people.filter((p) => p.category === "leadership");
  const coaches = people.filter((p) => p.category === "coach");
  const mentors = people.filter((p) => p.category === "mentor");

  return (
    <PageLayout>
      <section className="hero-gradient section-padding py-20">
        <div className="mx-auto max-w-7xl">
          <h1 className="mb-4 font-display text-4xl font-bold text-primary-foreground md:text-5xl">PEOPLE</h1>
          <p className="max-w-3xl text-lg text-primary-foreground/80">
            The Minds Behind the Momentum — Meet the experienced executive team, coaches, and highly accomplished mentors driving The StepUp Ventures.
          </p>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-center font-display text-3xl font-bold">Core Leadership Team</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {leadership.map((p) => <PersonCard key={p.name} person={p} />)}
          </div>
        </div>
      </section>

      {/* Coaches */}
      <section className="section-padding bg-tsuv-surface">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-center font-display text-3xl font-bold">Coaches</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coaches.map((p) => <PersonCard key={p.name} person={p} />)}
          </div>
        </div>
      </section>

      {/* Mentors */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-center font-display text-3xl font-bold">Mentors</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {mentors.map((p) => <PersonCard key={p.name} person={p} />)}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default People;
