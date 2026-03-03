import PageLayout from "@/components/layout/PageLayout";
import { Link } from "react-router-dom";
import { TrendingUp } from "lucide-react";

const articles = [
  { title: "E Waste Social: A B2B Recycling Revolution", desc: "Often, recycling and repurposing are viewed by companies as tedious..." },
  { title: "New Age Smart Pill Box Innovation", desc: "As per WHO, the majority of the 50% of patients who do not take..." },
  { title: "BeFriends: Best Caretaking Platform", desc: "Stress and tension have become pervasive in modern life..." },
  { title: "Ezee Notes: Your Study Partner", desc: "Be it school or college, students never show interest in studying..." },
];

const PRActivityPage = () => (
  <PageLayout>
    <section className="hero-gradient section-padding py-16 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-2 flex items-center gap-2 text-xs text-primary-foreground/60">
          <Link to="/" className="hover:text-primary-foreground">Home</Link>
          <span>/</span>
          <Link to="/resources" className="hover:text-primary-foreground">Resources</Link>
          <span>/</span>
          <span className="text-primary-foreground">PR Activity</span>
        </div>
        <h1 className="mb-2 font-display text-3xl font-bold text-primary-foreground md:text-4xl">
          PR Activity — <span className="text-secondary">Press Mentions & Awards</span>
        </h1>
        <p className="max-w-2xl text-sm text-primary-foreground/70">
          Press coverage, announcements, media features, and ecosystem recognition.
        </p>
      </div>
    </section>

    <section className="section-padding">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {articles.map((a, i) => (
            <div key={i} className="tool-card group cursor-pointer">
              <TrendingUp className="mb-3 h-6 w-6 text-secondary" />
              <h3 className="mb-2 font-display text-sm font-semibold group-hover:text-secondary">{a.title}</h3>
              <p className="mb-3 text-xs text-muted-foreground">{a.desc}</p>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary group-hover:text-secondary">Open Article →</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  </PageLayout>
);

export default PRActivityPage;
