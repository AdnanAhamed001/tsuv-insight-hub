import { useState } from "react";
import { Linkedin } from "lucide-react";

/**
 * TO ADD PHOTOS: Place images in public/images/team/ and public/images/mentors/
 * Use kebab-case filenames matching the `image` field below.
 */

const team = [
  { name: "Dr. Ebaad Momin", linkedin: "https://www.linkedin.com/in/ebaad-momin-a8435324/", image: "dr-ebaad-momin.jpg" },
  { name: "Mohammed Mohin Shaikh", linkedin: "https://www.linkedin.com/in/mahammed-mohin-98306311/", image: "mohammed-mohin-shaikh.jpg" },
  { name: "Salman Mohammed", linkedin: "https://www.linkedin.com/in/salman-mohammed-b05a497/", image: "salman-mohammed.jpg" },
  { name: "Mohamed Yunus, CA", linkedin: "https://www.linkedin.com/in/mohamed-yunus-55571195", image: "mohamed-yunus.jpg" },
  { name: "Tariq Syed", linkedin: "https://www.linkedin.com/in/tariqahmedsyed/", image: "tariq-syed.jpg" },
  { name: "Sameer Ahmed", linkedin: "", image: "sameer-ahmed.jpg" },
  { name: "Tabish Sangrar", linkedin: "https://www.linkedin.com/in/tabish-sangrar/", image: "tabish-sangrar.jpg" },
  { name: "Raja Singh", linkedin: "https://www.linkedin.com/in/rsbhurji/", image: "raja-singh.jpg" },
];

const mentors = [
  { name: "Anand Vijay Jha", linkedin: "https://www.linkedin.com/in/anandvijayjha/", image: "anand-vijay-jha.jpg" },
  { name: "Anshu Aanand", linkedin: "https://www.linkedin.com/in/anshuaanandofficial/", image: "anshu-aanand.jpg" },
  { name: "Arijit Bhattacharyya", linkedin: "https://www.linkedin.com/in/arijitbhattacharyya/", image: "arijit-bhattacharyya.jpg" },
  { name: "Dr. Harvinder Popli", linkedin: "https://www.linkedin.com/in/harvinder-popli-6ab9b115/", image: "dr-harvinder-popli.jpg" },
  { name: "Ebhin Ephram", linkedin: "", image: "ebhin-ephram.jpg" },
  { name: "Florian Oberhofer", linkedin: "https://www.linkedin.com/in/flooberhofer/", image: "florian-oberhofer.jpg" },
  { name: "Rahul Anand", linkedin: "https://www.linkedin.com/in/rahul-anand-66835b1/", image: "rahul-anand.jpg" },
  { name: "Qais Mujeeb", linkedin: "https://www.linkedin.com/in/moqaism/", image: "qais-mujeeb.jpg" },
  { name: "Shivam Ahuja", linkedin: "https://www.linkedin.com/in/ahujashivam/", image: "shivam-ahuja.jpg" },
  { name: "Vidhya Ramasubban", linkedin: "", image: "vidhya-ramasubban.jpg" },
  { name: "Hemant Mishra", linkedin: "https://www.linkedin.com/in/hemant-mishra-vc/", image: "hemant-mishra.jpg" },
  { name: "Malini Parmar", linkedin: "https://www.linkedin.com/in/maliniparmar/", image: "malini-parmar.jpg" },
  { name: "Neetii Makkar", linkedin: "", image: "neetii-makkar.jpg" },
];

const PersonCard = ({ person, imageDir }: { person: { name: string; linkedin: string; image: string }; imageDir: string }) => {
  const initials = person.name.split(" ").map((n) => n[0]).slice(0, 2).join("");
  const imageSrc = `/images/${imageDir}/${person.image}`;

  return (
    <div className="group relative flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center shadow-sm transition-all duration-300 hover:shadow-lg hover:border-secondary">
      <div className="mb-4 h-20 w-20 overflow-hidden rounded-full border-2 border-border bg-muted shadow-sm transition-all duration-300 group-hover:border-secondary group-hover:shadow-md">
        <img
          src={imageSrc}
          alt={person.name}
          className="h-full w-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
            (e.target as HTMLImageElement).nextElementSibling?.classList.remove("hidden");
          }}
        />
        <div className="hidden flex h-full w-full items-center justify-center bg-gradient-to-br from-primary to-primary/80">
          <span className="font-display text-2xl font-bold text-primary-foreground">{initials}</span>
        </div>
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
};

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
            <PersonCard key={p.name} person={p} imageDir={tab === "team" ? "team" : "mentors"} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;
