import { useState } from "react";
import ToolLayout from "@/components/tools/ToolLayout";
import { Link } from "react-router-dom";

const sections = [
  {
    name: "Problem Strength",
    questions: [
      "Is the problem clearly defined in one sentence?",
      "Is the problem painful or urgent for customers?",
      "Does the problem occur frequently?",
      "Are customers actively looking for solutions?",
      "Have you personally experienced or deeply studied the problem?",
    ],
  },
  {
    name: "Target Customer Clarity",
    questions: [
      "Can you clearly define your ideal customer?",
      "Is the target audience specific (not broad like 'everyone')?",
      "Can you reach them through identifiable channels?",
      "Have you spoken to at least 10 potential customers?",
    ],
  },
  {
    name: "Market Opportunity",
    questions: [
      "Is the market growing?",
      "Is the market large enough to scale?",
      "Are customers willing to pay?",
      "Are there existing competitors validating demand?",
    ],
  },
  {
    name: "Differentiation & Advantage",
    questions: [
      "Do you have a unique value proposition?",
      "Is your solution meaningfully better than alternatives?",
      "Do you have any unfair advantage (network, expertise, access)?",
      "Is the solution scalable beyond local geography?",
    ],
  },
  {
    name: "Execution Readiness",
    questions: [
      "Do you have skills to build the MVP?",
      "Do you have a co-founder or team?",
      "Are you committed full-time to building this?",
    ],
  },
];

const getStrength = (score: number) => {
  if (score <= 30) return { label: "High Risk Idea", color: "text-destructive" };
  if (score <= 50) return { label: "Needs Strong Validation", color: "text-secondary" };
  if (score <= 70) return { label: "Promising but Unproven", color: "text-secondary" };
  if (score <= 85) return { label: "Strong Opportunity", color: "text-primary" };
  return { label: "High-Potential Venture", color: "text-green-600" };
};

const IdeaValidator = () => {
  const totalQ = sections.reduce((a, s) => a + s.questions.length, 0);
  const [scores, setScores] = useState<number[]>(new Array(totalQ).fill(0));
  const [submitted, setSubmitted] = useState(false);

  const updateScore = (i: number, v: number) => { const n = [...scores]; n[i] = v; setScores(n); };
  const totalScore = scores.reduce((a, b) => a + b, 0);
  const strength = getStrength(totalScore);

  let qIdx = 0;
  const sectionScores = sections.map((s) => {
    const sum = scores.slice(qIdx, qIdx + s.questions.length).reduce((a, b) => a + b, 0);
    qIdx += s.questions.length;
    return { name: s.name, score: sum, max: s.questions.length * 5 };
  });

  let globalIdx = 0;

  return (
    <ToolLayout title="Startup Idea Validator Quiz" description="Test idea strength before building. For idea-stage founders and pre-MVP startups." breadcrumb="Idea Validator">
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
          <button onClick={() => setSubmitted(true)} className="w-full rounded-md bg-secondary px-6 py-3 font-semibold text-secondary-foreground hover:bg-secondary/90">Validate My Idea</button>
        </div>
      ) : (
        <div className="mx-auto max-w-2xl space-y-6">
          <div className="rounded-xl bg-primary/10 p-8 text-center">
            <span className="block text-sm text-muted-foreground">Total Score</span>
            <span className="font-display text-5xl font-bold text-primary">{totalScore}</span><span className="text-lg text-muted-foreground"> / 100</span>
            <p className={`mt-2 font-display text-lg font-semibold ${strength.color}`}>{strength.label}</p>
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
          <div className="rounded-lg bg-muted p-4 text-center text-sm">
            {totalScore >= 70 ? <p>🎯 Consider <Link to="/apply" className="font-semibold text-primary underline">applying to StepUp</Link>.</p>
              : totalScore >= 50 ? <p>🔨 Build your MVP and validate before applying.</p>
              : <p>📘 Use our <Link to="/resources" className="font-semibold text-primary underline">Founder Playbook</Link> before proceeding.</p>}
          </div>
          <button onClick={() => { setSubmitted(false); setScores(new Array(totalQ).fill(0)); }} className="w-full rounded-md border border-border px-6 py-2 text-sm hover:bg-muted">Retake Quiz</button>
        </div>
      )}
    </ToolLayout>
  );
};

export default IdeaValidator;
