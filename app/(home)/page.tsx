import HeroBanner from "./components/Banner";
import BenefitsComparison from "./components/BenefitsComparison";
// import ContactBilling from "./components/ContactBilling";
import HomeStats from "./components/HomeStats";
import HowItWorks from "./components/HowItWorks";
import Industries from "./components/Industries";
import ProblemSolution from "./components/ProblemSolution";
import TrustSection from "./components/TrustSection";
// import StatsSection from "./components/StatsSection";
import { CtaSection } from "./CtaSection";
import { FaqSection } from "./FaqSection";
// import { FeaturesSection } from "./FeaturesSection";
import { PricingSection } from "./Pricing";
// import { WhyUsSection } from "./WhyUsSection";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <HomeStats />
      <ProblemSolution />
      <HowItWorks/>
      {/* <FeaturesSection /> */}
      {/* <ContactBilling/> */}
      <Industries />
      <BenefitsComparison />
      <TrustSection/>
      {/* <WhyUsSection /> */}
      <PricingSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
