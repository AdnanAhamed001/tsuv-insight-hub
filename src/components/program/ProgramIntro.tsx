const ProgramIntro = () => (
  <section className="section-padding">
    <div className="mx-auto max-w-7xl grid gap-10 md:grid-cols-2 items-center">
      {/* Left: Image placeholder */}
      <div className="rounded-xl bg-muted aspect-[4/3] flex items-center justify-center overflow-hidden">
        <img
          src="/placeholder.svg"
          alt="TSUV Incubation Program"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Right: Text */}
      <div>
        <p className="mb-4 text-base text-muted-foreground leading-relaxed">
          TSUV works with startups over a <strong className="text-foreground">3-month period</strong> to help them refine their product and pitch to culminate in demo day presentations.
        </p>
        <p className="mb-4 text-base text-muted-foreground leading-relaxed">
          StepUp Ventures will continue with other seed investors to help the startup scale its journey to scale.
        </p>
        <p className="mb-4 text-base text-muted-foreground leading-relaxed">
          Our incubation program will mentor founders build and validate their idea to product-market fit, followed by financial readiness.
        </p>
        <p className="text-base text-muted-foreground leading-relaxed">
          Our in-house team of coaches and mentors help startups navigate the program in their quest to grow and improve their business.
        </p>
      </div>
    </div>
  </section>
);

export default ProgramIntro;
