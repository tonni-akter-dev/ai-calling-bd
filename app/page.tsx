import HeroBanner from "./(home)/Banner";
import { CtaSection } from "./(home)/CtaSection";
import { FaqSection } from "./(home)/FaqSection";
import { FeaturesSection } from "./(home)/FeaturesSection";
import { PricingSection } from "./(home)/Pricing";
import { WhyUsSection } from "./(home)/WhyUsSection";

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
