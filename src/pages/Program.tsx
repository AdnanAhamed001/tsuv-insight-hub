import PageLayout from "@/components/layout/PageLayout";
import ProgramHero from "@/components/program/ProgramHero";
import ProgramIntro from "@/components/program/ProgramIntro";
import ProgramJourney from "@/components/program/ProgramJourney";
import ProgramCTAStrip from "@/components/program/ProgramCTAStrip";
import ProgramDetails from "@/components/program/ProgramDetails";
import ProgramTestimonials from "@/components/program/ProgramTestimonials";
import ProgramCohort from "@/components/program/ProgramCohort";
import ProgramNewsletter from "@/components/program/ProgramNewsletter";
import ProgramFAQ from "@/components/program/ProgramFAQ";

const Program = () => {
  return (
    <PageLayout>
      <ProgramHero />
      <ProgramIntro />
      <ProgramJourney />
      <ProgramCTAStrip />
      <ProgramDetails />
      <ProgramTestimonials />
      <ProgramCohort />
      <ProgramNewsletter />
      <ProgramFAQ />
    </PageLayout>
  );
};

export default Program;
