import { ReactNode } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface ToolLayoutProps {
  title: string;
  description: string;
  breadcrumb: string;
  children: ReactNode;
  cta?: { text: string; link: string };
}

const ToolLayout = ({ title, description, breadcrumb, children, cta }: ToolLayoutProps) => {
  return (
    <PageLayout>
      {/* Header */}
      <section className="border-b border-border bg-tsuv-surface px-4 py-4 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-2 flex items-center gap-2 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link to="/resources" className="hover:text-primary">Resources</Link>
            <span>/</span>
            <span>Startup Tools</span>
            <span>/</span>
            <span className="text-foreground">{breadcrumb}</span>
          </div>
          <h1 className="mb-1 font-display text-2xl font-bold md:text-3xl">{title}</h1>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">{children}</div>
      </section>

      {/* CTA */}
      {cta && (
        <section className="section-padding bg-primary text-center text-primary-foreground">
          <h2 className="mb-4 font-display text-2xl font-bold">{cta.text}</h2>
          <Link to={cta.link} className="inline-flex items-center gap-2 rounded-md bg-secondary px-6 py-3 font-semibold text-secondary-foreground hover:bg-secondary/90">
            Get Started <ArrowRight size={16} />
          </Link>
        </section>
      )}
    </PageLayout>
  );
};

export default ToolLayout;
