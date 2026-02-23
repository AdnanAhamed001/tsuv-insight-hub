import PageLayout from "@/components/layout/PageLayout";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, User } from "lucide-react";

const blogPosts = [
  {
    title: "How Early-Stage Startups Can Build a Winning Go-To-Market Strategy",
    excerpt: "A strong GTM strategy is the difference between a startup that scales and one that stalls. Here's how to build yours from scratch.",
    date: "Feb 20, 2026",
    author: "TSUV Team",
    category: "Strategy",
  },
  {
    title: "Understanding Equity Dilution: A Founder's Guide",
    excerpt: "Equity dilution is inevitable — but understanding how it works ensures you retain meaningful ownership as you raise capital.",
    date: "Feb 15, 2026",
    author: "TSUV Team",
    category: "Finance",
  },
  {
    title: "5 Metrics Every Investor Looks At Before Writing a Cheque",
    excerpt: "From burn multiple to LTV/CAC ratio, these are the numbers that move the needle in fundraising conversations.",
    date: "Feb 10, 2026",
    author: "TSUV Team",
    category: "Fundraising",
  },
  {
    title: "The Power of Community in Bharat's Startup Ecosystem",
    excerpt: "Why founder communities are becoming the most valuable asset for early-stage startups across India.",
    date: "Feb 5, 2026",
    author: "TSUV Team",
    category: "Ecosystem",
  },
  {
    title: "From Idea to MVP: Lessons from Our Incubation Cohort",
    excerpt: "Real stories and practical takeaways from startups that went from napkin sketches to market-ready products.",
    date: "Jan 28, 2026",
    author: "TSUV Team",
    category: "Incubation",
  },
  {
    title: "Why Unit Economics Matter More Than Revenue in Year One",
    excerpt: "Revenue is vanity, profit is sanity — but unit economics is clarity. Here's why founders should obsess over them early.",
    date: "Jan 20, 2026",
    author: "TSUV Team",
    category: "Finance",
  },
];

const Blog = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="hero-gradient section-padding py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <h1 className="mb-4 font-display text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl">
            Blog
          </h1>
          <p className="max-w-2xl text-lg text-primary-foreground/80">
            Insights, strategies, and stories from the frontlines of Bharat's startup ecosystem.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, i) => (
              <article
                key={i}
                className="group flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="mb-3 inline-block self-start rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {post.category}
                </span>
                <h2 className="mb-2 font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="mb-4 flex-1 text-sm text-muted-foreground">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-3 w-3" /> {post.date}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <User className="h-3 w-3" /> {post.author}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Blog;
