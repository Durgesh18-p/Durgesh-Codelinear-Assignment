import { HeroSection } from '@/components/site/HeroSection';
import { Navbar } from '@/components/site/Navbar';
import { SolutionsSection } from '@/components/site/SolutionsSection';
import { CoreBankingSection } from '@/components/site/CoreBankingSection';
import { EfficientCoreSection } from '@/components/site/EfficientCoreSection';
import { PaperlessCtaSection } from '@/components/site/PaperlessCtaSection';
import { DigitalBankingSection } from '@/components/site/DigitalBankingSection';
import { CaseStudiesSection } from '@/components/site/CaseStudiesSection';
import { InsightsSection } from '@/components/site/InsightsSection';
import { FinalCtaSection } from '@/components/site/FinalCtaSection';
import { Footer } from '@/components/site/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#000D12]">
      <Navbar />
      <HeroSection />
      <SolutionsSection />
      <CoreBankingSection />
      <EfficientCoreSection />
      <PaperlessCtaSection />
      <DigitalBankingSection />
      <InsightsSection />
      <CaseStudiesSection />
      <FinalCtaSection />
      <Footer />
    </main>
  );
}
