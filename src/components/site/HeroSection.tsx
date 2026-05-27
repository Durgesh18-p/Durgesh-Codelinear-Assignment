import { Button } from '@/components/ui/Button';
import { Heading } from '@/components/ui/Heading';
import { Container } from '@/components/shared/Container';
import { HeroVisual } from '@/components/site/HeroVisual';
import { TrustedBy } from '@/components/site/TrustedBy';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#000D12] pb-16 pt-28 text-white sm:pb-24 sm:pt-[14.125rem] lg:min-h-screen lg:pb-20">
      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(29rem,35.125rem)] lg:gap-[5.75rem]">
          <div className="max-w-[36.5rem]">
            <Heading as="h1" size="hero" className="max-w-[36.25rem] text-[#EAF3F8]">
              The new foundation of modern banking
            </Heading>
            <p className="mt-6 max-w-[28rem] text-base leading-[1.32] tracking-[-0.03em] text-[#B8C3C9]">
              We drive innovation and growth, provide seamless customer experience and operational excellence
            </p>
            <div id="contact" className="mt-[3.375rem] flex flex-col gap-4 sm:flex-row sm:gap-5">
              <Button>Request Demo</Button>
              <Button variant="outline">Contact Us</Button>
            </div>
          </div>

          <HeroVisual />
        </div>

        <TrustedBy />
      </Container>
    </section>
  );
}
