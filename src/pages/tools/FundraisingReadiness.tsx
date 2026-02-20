import { useState } from "react";
import ToolLayout from "@/components/tools/ToolLayout";
import { Link } from "react-router-dom";

const sections = [
  {
    name: "Traction",
    questions: [
      "Do you have paying customers?",
      "Is revenue growing month-over-month?",
      "Do you have at least 3 months of revenue data?",
      "Is churn rate below 10% monthly?",
      "Do you have strong customer testimonials or case studies?",
    ],
  },
  {
    name: "Metrics Clarity",
    questions: [
      "Do you know your Customer Acquisition Cost (CAC)?",
      "Do you know your Customer Lifetime Value (LTV)?",
      "Is LTV greater than 3x CAC?",
      "Do you track monthly recurring revenue (MRR)?",
    ],
  },
  {
    name: "Financial Preparation",
    questions: [
      "Do you have a 12–18 month financial projection?",
      "Do you have a clear fund utilization plan?",
      "Do you understand your runway post-funding?",
      "Do you have audited or clean financial records?",
    ],
  },
  {
    name: "Investor Materials",
    questions: [
      "Is your pitch deck complete?",
      "Do you have a data room prepared?",
      "Do you have a clear problem-solution narrative?",
      "Do you have a defined target investor list?",
    ],
  },
  {
    name: "Team & Structure",
    questions: [
      "Are founders fully committed full-time?",
      "Is equity structure clean and clear?",
      "Are all legal compliances completed?",
    ],
  },
];

const getReadiness = (score: number) => {
  if (score <= 35) return { label: "Not Ready", color: "text-destructive", bg: "bg-destructive/10" };
  if (score <= 55) return { label: "Early Preparation", color: "text-secondary", bg: "bg-secondary/10" };
  if (score <= 75) return { label: "Pre-Seed Ready", color: "text-secondary", bg: "bg-secondary/20" };
  if (score <= 90) return { label: "Seed Ready", color: "text-primary", bg: "bg-primary/10" };
  return { label: "Investor Ready", color: "text-green-600", bg: "bg-green-50" };
};

const FundraisingReadiness = () => {
  const totalQuestions = sections.reduce((a, s) => a + s.questions.length, 0);
  const [scores, setScores] = useState<number[]>(new Array(totalQuestions).fill(0));
  const [submitted, setSubmitted] = useState(false);

  const updateScore = (idx: number, val: number) => {
    const n = [...scores]; n[idx] = val; setScores(n);
  };

  const totalScore = scores.reduce((a, b) => a + b, 0);
  const readiness = getReadiness(totalScore);

  let qIdx = 0;
  const sectionScores = sections.map((s) => {
    const sum = scores.slice(qIdx, qIdx + s.questions.length).reduce((a, b) => a + b, 0);
    qIdx += s.questions.length;
    return { name: s.name, score: sum, max: s.questions.length * 5 };
  });

  const getInsights = () => {
    const insights: string[] = [];
    if (sectionScores[0].score < 10) insights.push("Investors need early traction. Focus on revenue validation.");
    if (sectionScores[1].score < 10) insights.push("Understand CAC and LTV before raising.");
    if (sectionScores[3].score < 10) insights.push("Strengthen pitch deck and data room.");
    return insights;
  };

  let globalIdx = 0;

  return (
    <ToolLayout title="Fundraising Readiness Score" description="Evaluate whether your startup is ready to raise capital. This tool is investor-grade." breadcrumb="Fundraising Readiness">
      {!submitted ? (
        <div className="mx-auto max-w-3xl space-y-8">
          {sections.map((section) => (
            <div key={section.name}>
              <h3 className="mb-4 font-display text-lg font-semibold">{section.name}</h3>
              <div className="space-y-3">
                {section.questions.map((q) => {
                  const idx = globalIdx++;
                  return (
                    <div key={idx} className="rounded-lg border border-border bg-card p-4">
                      <p className="mb-2 text-sm">{q}</p>
                      <div className="flex gap-2">
                        {[0, 1, 2, 3, 4, 5].map((v) => (
                          <button key={v} onClick={() => updateScore(idx, v)} className={`h-9 w-9 rounded-md text-sm font-semibold transition-colors ${scores[idx] === v ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}>{v}</button>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
          <button onClick={() => setSubmitted(true)} className="w-full rounded-md bg-secondary px-6 py-3 font-semibold text-secondary-foreground hover:bg-secondary/90">Get My Readiness Score</button>
        </div>
      ) : (
        <div className="mx-auto max-w-2xl space-y-6">
          <div className={`rounded-xl p-8 text-center ${readiness.bg}`}>
            <span className="block text-sm text-muted-foreground">Total Score</span>
            <span className="font-display text-5xl font-bold text-primary">{totalScore}</span><span className="text-lg text-muted-foreground"> / 100</span>
            <p className={`mt-2 font-display text-lg font-semibold ${readiness.color}`}>{readiness.label}</p>
          </div>
          <div className="space-y-2">
            {sectionScores.map((s) => (
              <div key={s.name} className="flex items-center gap-3">
                <span className="w-40 text-sm text-muted-foreground">{s.name}</span>
                <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden"><div className="h-full bg-secondary rounded-full" style={{ width: `${(s.score / s.max) * 100}%` }} /></div>
                <span className="text-sm font-semibold w-12 text-right">{s.score}/{s.max}</span>
              </div>
            ))}
          </div>
          {getInsights().length > 0 && (
            <div className="rounded-lg border border-secondary/30 bg-secondary/10 p-4">
              <h4 className="mb-2 font-display text-sm font-semibold">Insights</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">{getInsights().map((i, idx) => <li key={idx}>• {i}</li>)}</ul>
            </div>
          )}
          <div className="rounded-lg bg-muted p-4 text-center text-sm">
            {totalScore >= 76 ? <p>🎯 You may qualify for <Link to="/investor-hub" className="font-semibold text-primary underline">StepUp Investor Connect</Link>.</p>
              : totalScore >= 56 ? <p>📋 <Link to="/apply" className="font-semibold text-primary underline">Apply to StepUp Incubation</Link> for readiness support.</p>
              : <p>📘 Explore our <Link to="/resources" className="font-semibold text-primary underline">Fundraising resources</Link> before applying.</p>}
          </div>
          <button onClick={() => { setSubmitted(false); setScores(new Array(totalQuestions).fill(0)); }} className="w-full rounded-md border border-border px-6 py-2 text-sm hover:bg-muted">Retake Assessment</button>
        </div>
      )}
    </ToolLayout>
  );
};

export default FundraisingReadiness;
