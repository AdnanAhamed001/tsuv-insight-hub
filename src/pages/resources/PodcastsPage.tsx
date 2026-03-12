import PageLayout from "@/components/layout/PageLayout";
import { Link } from "react-router-dom";
import { Headphones } from "lucide-react";

const PodcastsPage = () => (
  <PageLayout>
    <section className="hero-gradient section-padding py-16 md:py-20 bg-[url('https://images.unsplash.com/photo-1589903308904-1010c2294adc?auto=format,compress&fit=crop&q=30&w=800')] bg-cover bg-center bg-blend-multiply bg-primary/90">
      <div className="mx-auto max-w-7xl">
        <div className="mb-2 flex items-center gap-2 text-xs text-primary-foreground/60">
          <Link to="/" className="hover:text-primary-foreground">Home</Link>
          <span>/</span>
          <Link to="/resources" className="hover:text-primary-foreground">Resources</Link>
          <span>/</span>
          <span className="text-primary-foreground">Podcasts</span>
        </div>
        <h1 className="mb-2 font-display text-3xl font-bold text-primary-foreground md:text-4xl">
          Podcasts — <span className="text-secondary">Interviews & Ecosystem Audio</span>
        </h1>
        <p className="max-w-2xl text-sm text-primary-foreground/70">
          Conversations with the executive team, coaches, and successful founders.
        </p>
      </div>
    </section>

    <section className="section-padding">
      <div className="mx-auto max-w-7xl text-center">
        <Headphones className="mx-auto mb-4 h-16 w-16 text-secondary" />
        <h2 className="mb-2 font-display text-xl font-bold">Audio Content Coming Soon</h2>
        <p className="text-sm text-muted-foreground">Conversations with the executive team, coaches, and successful founders.</p>
      </div>
    </section>
  </PageLayout>
);

export default PodcastsPage;
