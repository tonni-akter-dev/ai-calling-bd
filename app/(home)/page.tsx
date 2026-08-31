import HeroBanner from "./Banner";
import { CtaSection } from "./CtaSection";
import { FaqSection } from "./FaqSection";
import { FeaturesSection } from "./FeaturesSection";
import { PricingSection } from "./Pricing";
import { WhyUsSection } from "./WhyUsSection";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <FeaturesSection />
      <WhyUsSection />
      <PricingSection />
      <FaqSection/>
      <CtaSection/>
    </>
  );
}
