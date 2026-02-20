import { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";

interface Company {
  name: string;
  desc: string;
  sector: string;
  stage: string;
  cohort: string;
}

const companies: Company[] = [
  { name: "E-Waste Social", desc: "Connecting you to the nearest recycler through auctioning routing recyclers.", sector: "CleanTech & Sustainability", stage: "Early Revenue", cohort: "TSUV COHORT 22" },
  { name: "DoseTap", desc: "Smart pill box and medication adherence tracking.", sector: "HealthTech & MedTech", stage: "Early Revenue", cohort: "TSUV COHORT 22" },
  { name: "NewBoo", desc: "Chemical-free, washable, waterproof diapers.", sector: "E-Commerce & Retail", stage: "Early Revenue", cohort: "TSUV COHORT 22" },
  { name: "Digital Jockey", desc: "Nurturing students in new-generation startups and SMEs.", sector: "EdTech", stage: "MVP / Pre-Revenue", cohort: "TSUV COHORT 21" },
  { name: "PinkyMind", desc: "Mental healthcare startup with listener quick chat.", sector: "HealthTech & MedTech", stage: "MVP / Pre-Revenue", cohort: "TSUV COHORT 21" },
  { name: "Kamikala", desc: "Social impact venture supporting traditional craftspeople.", sector: "Social Impact", stage: "Early Revenue", cohort: "TSUV COHORT 21" },
  { name: "Unique Creations Software", desc: "Low bandwidth video conferencing for SME sector.", sector: "SaaS & Enterprise", stage: "Seed Funded", cohort: "TSUV COHORT 20" },
  { name: "SMB Kart", desc: "No-coding SAAS automated E-Com platform.", sector: "SaaS & Enterprise", stage: "Early Revenue", cohort: "TSUV COHORT 20" },
  { name: "Pioneers In Vet Diagnostics", desc: "Doorstep veterinary laboratory services.", sector: "HealthTech & MedTech", stage: "Early Revenue", cohort: "TSUV COHORT 20" },
  { name: "BlueGreens", desc: "Smart hydroponic solutions for urban farming.", sector: "AgriTech", stage: "MVP / Pre-Revenue", cohort: "TSUV COHORT 20" },
  { name: "BidWheelz", desc: "Inventory-free automobile auction portal.", sector: "E-Commerce & Retail", stage: "Seed Funded", cohort: "TSUV COHORT 19" },
  { name: "BeFriends", desc: "Best caretaking and companion services platform.", sector: "Social Impact", stage: "MVP / Pre-Revenue", cohort: "TSUV COHORT 19" },
];

const sectorOptions = ["All Sectors", "AgriTech", "HealthTech & MedTech", "SaaS & Enterprise", "E-Commerce & Retail", "CleanTech & Sustainability", "EdTech", "Social Impact"];
const stageOptions = ["All Stages", "MVP / Pre-Revenue", "Early Revenue", "Seed Funded", "Series A+"];

const Portfolio = () => {
  const [sectorFilter, setSectorFilter] = useState("All Sectors");
  const [stageFilter, setStageFilter] = useState("All Stages");

  const filtered = companies.filter((c) => {
    if (sectorFilter !== "All Sectors" && c.sector !== sectorFilter) return false;
    if (stageFilter !== "All Stages" && c.stage !== stageFilter) return false;
    return true;
  });

  const pillClass = (active: boolean) =>
    `cursor-pointer rounded-full px-4 py-1.5 text-xs font-semibold transition-colors ${active ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"}`;

  return (
    <PageLayout>
      <section className="hero-gradient section-padding py-16">
        <div className="mx-auto max-w-7xl">
          <h1 className="mb-2 font-display text-4xl font-bold text-primary-foreground">PORTFOLIO COMPANIES</h1>
          <p className="max-w-3xl text-primary-foreground/80">
            Backing Bharat's most resilient founders. Explore the 65+ category-defining startups that have accelerated their growth through The StepUp Ventures.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 z-40 border-b border-border bg-background/95 px-4 py-4 backdrop-blur lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-4">
            <div>
              <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Sector</span>
              <div className="flex flex-wrap gap-1">
                {sectorOptions.map((s) => (
                  <span key={s} className={pillClass(sectorFilter === s)} onClick={() => setSectorFilter(s)}>{s}</span>
                ))}
              </div>
            </div>
            <div>
              <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Stage</span>
              <div className="flex flex-wrap gap-1">
                {stageOptions.map((s) => (
                  <span key={s} className={pillClass(stageFilter === s)} onClick={() => setStageFilter(s)}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((c) => (
              <div key={c.name} className="tool-card flex flex-col">
                <div className="mb-3 flex h-16 items-center justify-center rounded-md bg-muted">
                  <span className="font-display text-lg font-bold text-primary">{c.name.charAt(0)}</span>
                </div>
                <div className="mb-2 flex flex-wrap gap-1">
                  <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">{c.sector}</span>
                  <span className="rounded-full bg-secondary/20 px-2 py-0.5 text-[10px] font-semibold text-secondary">{c.stage}</span>
                </div>
                <h3 className="mb-1 font-display text-base font-semibold">{c.name}</h3>
                <span className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">{c.cohort}</span>
                <p className="flex-1 text-xs text-muted-foreground">{c.desc}</p>
                <button className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-secondary">
                  Know More <ExternalLink size={12} />
                </button>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="py-12 text-center text-muted-foreground">No companies match the selected filters.</p>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground text-center">
        <h2 className="mb-4 font-display text-3xl font-bold">Ready to join this list?</h2>
        <Link to="/program" className="inline-flex items-center gap-2 rounded-md bg-secondary px-6 py-3 font-semibold text-secondary-foreground hover:bg-secondary/90">
          Apply for the Next Cohort <ArrowRight size={16} />
        </Link>
      </section>
    </PageLayout>
  );
};

export default Portfolio;
