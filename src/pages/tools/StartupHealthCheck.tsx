import { useState } from "react";
import ToolLayout from "@/components/tools/ToolLayout";
import { Link } from "react-router-dom";

const sections = [
  {
    name: "Product",
    questions: [
      "Is the problem clearly defined and specific?",
      "Have you built an MVP or working prototype?",
      "Have real users tested the product?",
      "Do you track product usage or retention metrics?",
    ],
  },
  {
    name: "Market",
    questions: [
      "Have you clearly defined your Ideal Customer Profile (ICP)?",
      "Have you validated demand through customer interviews?",
      "Do you understand your competitors?",
      "Is your target market large enough to scale?",
    ],
  },
  {
    name: "Team",
    questions: [
      "Are all founders working full-time?",
      "Does the team have complementary skills?",
      "Is there clear founder role clarity?",
      "Does the team have relevant domain experience?",
    ],
  },
  {
    name: "Financial Health",
    questions: [
      "Do you track monthly burn rate?",
      "Do you understand your unit economics?",
      "Do you have revenue or signed customers?",
      "Do you have at least 6 months of runway?",
    ],
  },
  {
    name: "Growth & Traction",
    questions: [
      "Do you have a defined customer acquisition strategy?",
      "Have you tested at least one growth channel?",
      "Do you track CAC (Customer Acquisition Cost)?",
      "Do you track LTV (Customer Lifetime Value)?",
    ],
  },
];

const getStage = (score: number) => {
  if (score <= 30) return { label: "Idea Stage", color: "text-destructive" };
  if (score <= 50) return { label: "Early Validation", color: "text-secondary" };
  if (score <= 70) return { label: "Product-Market Fit Stage", color: "text-secondary" };
  if (score <= 85) return { label: "Growth Ready", color: "text-primary" };
  return { label: "Fundraising Ready", color: "text-green-600" };
};

const StartupHealthCheck = () => {
  const [scores, setScores] = useState<number[]>(new Array(20).fill(0));
  const [submitted, setSubmitted] = useState(false);

  const updateScore = (idx: number, val: number) => {
    const newScores = [...scores];
    newScores[idx] = val;
    setScores(newScores);
  };

  const totalScore = scores.reduce((a, b) => a + b, 0);
  const stage = getStage(totalScore);

  const sectionScores = sections.map((s, si) => {
    const start = si * 4;
    return scores.slice(start, start + s.questions.length).reduce((a, b) => a + b, 0);
  });

  const getInsights = () => {
    const insights: string[] = [];
    if (sectionScores[0] < 10) insights.push("Focus on strengthening product validation before fundraising.");
    if (sectionScores[3] < 10) insights.push("Improve financial clarity and runway planning.");
    if (sectionScores[2] < 10) insights.push("Consider strengthening founding team structure.");
    return insights;
  };

  return (
    <ToolLayout title="Startup Health Check / Readiness Scorecard" description="Evaluate overall startup maturity across Product, Market, Team, Financial, and Growth." breadcrumb="Health Check">
      {!submitted ? (
        <div className="mx-auto max-w-3xl space-y-8">
          {sections.map((section, si) => (
            <div key={section.name}>
              <h3 className="mb-4 font-display text-lg font-semibold">{section.name}</h3>
              <div className="space-y-3">
                {section.questions.map((q, qi) => {
                  const idx = si * 4 + qi;
                  return (
                    <div key={idx} className="rounded-lg border border-border bg-card p-4">
                      <p className="mb-2 text-sm">{q}</p>
                      <div className="flex gap-2">
                        {[0, 1, 2, 3, 4, 5].map((v) => (
                          <button
                            key={v}
                            onClick={() => updateScore(idx, v)}
                            className={`h-9 w-9 rounded-md text-sm font-semibold transition-colors ${scores[idx] === v ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}
                          >{v}</button>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
          <button onClick={() => setSubmitted(true)} className="w-full rounded-md bg-secondary px-6 py-3 font-semibold text-secondary-foreground hover:bg-secondary/90">
            Get My Score
          </button>
        </div>
      ) : (
        <div className="mx-auto max-w-2xl space-y-6">
          <div className="rounded-xl bg-primary/10 p-8 text-center">
            <span className="block text-sm text-muted-foreground">Total Score</span>
            <span className="font-display text-5xl font-bold text-primary">{totalScore}</span>
            <span className="text-lg text-muted-foreground"> / 100</span>
            <p className={`mt-2 font-display text-lg font-semibold ${stage.color}`}>{stage.label}</p>
          </div>

          <div className="space-y-2">
            <h3 className="font-display text-lg font-semibold">Section Breakdown</h3>
            {sections.map((s, i) => (
              <div key={s.name} className="flex items-center gap-3">
                <span className="w-32 text-sm text-muted-foreground">{s.name}</span>
                <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-secondary rounded-full transition-all" style={{ width: `${(sectionScores[i] / 20) * 100}%` }} />
                </div>
                <span className="text-sm font-semibold w-12 text-right">{sectionScores[i]}/20</span>
              </div>
            ))}
          </div>

          {getInsights().length > 0 && (
            <div className="rounded-lg border border-secondary/30 bg-secondary/10 p-4">
              <h4 className="mb-2 font-display text-sm font-semibold">Insights</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                {getInsights().map((i, idx) => <li key={idx}>• {i}</li>)}
              </ul>
            </div>
          )}

          <div className="rounded-lg bg-muted p-4 text-center text-sm">
            {totalScore >= 70 ? (
              <p>🎯 You may qualify for <Link to="/apply" className="font-semibold text-primary underline">StepUp incubation</Link>.</p>
            ) : (
              <p>📘 Explore our <Link to="/resources" className="font-semibold text-primary underline">Founder resources</Link> before applying.</p>
            )}
          </div>

          <button onClick={() => { setSubmitted(false); setScores(new Array(20).fill(0)); }} className="w-full rounded-md border border-border px-6 py-2 text-sm hover:bg-muted">
            Retake Assessment
          </button>
        </div>
      )}
    </ToolLayout>
  );
};

export default StartupHealthCheck;
