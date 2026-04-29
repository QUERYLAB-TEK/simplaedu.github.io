import { useEffect } from "react";
import { SiteHeader } from "@/components/landing/SiteHeader";
import { Hero } from "@/components/landing/Hero";
import { QuestionStrip } from "@/components/landing/QuestionStrip";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { ModulesSection } from "@/components/landing/ModulesSection";
import { AudienceSection } from "@/components/landing/AudienceSection";
import { WhyUsSection } from "@/components/landing/WhyUsSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { FaqSection } from "@/components/landing/FaqSection";
import { InterestSection } from "@/components/landing/InterestSection";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { useReveal } from "@/hooks/useReveal";

const Index = () => {
  useReveal();

  useEffect(() => {
    document.title = "SimplaEdu | Gestão escolar simples para escolas de Goiânia";
  }, []);

  return (
    <div id="top" className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <WhyUsSection />
        <QuestionStrip />
        <ProblemSection />
        <ModulesSection />
        <AudienceSection />
        <PricingSection />
        <FaqSection />
        <InterestSection />
      </main>
      <SiteFooter />
    </div>
  );
};

export default Index;
