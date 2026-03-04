import { useState } from "react";
import { Linkedin } from "lucide-react";

const team = [
  { name: "Dr. Ebaad Momin", linkedin: "https://www.linkedin.com/in/ebaad-momin-a8435324/" },
  { name: "Mohammed Mohin Shaikh", linkedin: "https://www.linkedin.com/in/mahammed-mohin-98306311/" },
  { name: "Salman Mohammed", linkedin: "https://www.linkedin.com/in/salman-mohammed-b05a497/" },
  { name: "Mohamed Yunus, CA", linkedin: "https://www.linkedin.com/in/mohamed-yunus-55571195" },
  { name: "Tariq Syed", linkedin: "https://www.linkedin.com/in/tariqahmedsyed/" },
  { name: "Sameer Ahmed", linkedin: "" },
  { name: "Tabish Sangrar", linkedin: "https://www.linkedin.com/in/tabish-sangrar/" },
  { name: "Raja Singh", linkedin: "https://www.linkedin.com/in/rsbhurji/" },
];

const mentors = [
  { name: "Anand Vijay Jha", linkedin: "https://www.linkedin.com/in/anandvijayjha/" },
  { name: "Anshu Aanand", linkedin: "https://www.linkedin.com/in/anshuaanandofficial/" },
  { name: "Arijit Bhattacharyya", linkedin: "https://www.linkedin.com/in/arijitbhattacharyya/" },
  { name: "Dr. Harvinder Popli", linkedin: "https://www.linkedin.com/in/harvinder-popli-6ab9b115/" },
  { name: "Ebhin Ephram", linkedin: "https://www.linkedin.com/in/flooberhofer/" },
  { name: "Florian Oberhofer", linkedin: "https://www.linkedin.com/in/flooberhofer/" },
  { name: "Rahul Anand", linkedin: "https://www.linkedin.com/in/rahul-anand-66835b1/" },
  { name: "Qais Mujeeb", linkedin: "https://www.linkedin.com/in/moqaism/" },
  { name: "Shivam Ahuja", linkedin: "https://www.linkedin.com/in/ahujashivam/" },
  { name: "Vidhya Ramasubban", linkedin: "" },
  { name: "Hemant Mishra", linkedin: "https://www.linkedin.com/in/hemant-mishra-vc/" },
  { name: "Malini Parmar", linkedin: "https://www.linkedin.com/in/maliniparmar/" },
  { name: "Neetii Makkar", linkedin: "" },
];

const PersonCard = ({ person }: { person: { name: string; linkedin: string } }) => (
  <div className="group relative flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center shadow-sm transition-all duration-300 hover:shadow-lg hover:border-secondary">
    <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/80">
      <span className="font-display text-2xl font-bold text-primary-foreground">
        {person.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
      </span>
    </div>
    <h3 className="font-display text-sm font-semibold">{person.name}</h3>
    {person.linkedin && (
      <a
        href={person.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground opacity-0 transition-all duration-300 group-hover:opacity-100 hover:bg-secondary hover:text-secondary-foreground"
        aria-label={`${person.name} LinkedIn`}
      >
        <Linkedin size={16} />
      </a>
    )}
  </div>
);

const MeetTheTeam = () => {
  const [tab, setTab] = useState<"team" | "mentors">("team");
  const people = tab === "team" ? team : mentors;

  return (
    <section className="section-padding bg-tsuv-surface">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 text-center font-display text-3xl font-bold">
          Meet The <span className="text-secondary">Team</span>
        </h2>

        {/* Tabs */}
        <div className="mb-10 flex justify-center gap-2">
          {(["team", "mentors"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`rounded-md px-6 py-2.5 text-sm font-semibold capitalize transition-colors ${
                tab === t
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {people.map((p) => (
            <PersonCard key={p.name} person={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;
