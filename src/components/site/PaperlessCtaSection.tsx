import { Button } from '@/components/ui/Button';
import { Heading } from '@/components/ui/Heading';
import { Container } from '@/components/shared/Container';

export function PaperlessCtaSection() {
  return (
    <section className="section-dark py-16 sm:py-20 lg:py-[7.9375rem]">
      <Container>
        <div className="relative min-h-[26.6875rem] overflow-hidden rounded-[27px] bg-[linear-gradient(99.21deg,#031E2A_-12.22%,#000D12_59.26%)] px-6 py-12 sm:px-10 lg:px-[4.125rem] lg:py-[7.25rem]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[15.5rem] top-[-2.4rem] select-none text-[26rem] font-normal leading-none tracking-[-0.09em] text-transparent opacity-60 [-webkit-text-stroke:1px_rgba(0,180,253,0.28)] lg:text-[32.2rem]"
          >
            CB7
          </div>

          <div className="relative z-10 grid gap-10 lg:grid-cols-[minmax(30rem,39rem)_minmax(24rem,1fr)] lg:items-center">
            <div>
              <Heading className="max-w-[38rem] text-[clamp(2.75rem,5vw,3.3125rem)]">
                Take the full advantage of going paper-less now.
              </Heading>
              <p className="body-copy mt-8 max-w-[37rem] text-[#E9F4F9]/75">
                CB7 helps your financial institution improve the client experience, automate and optimize procedures,
                simplify banking operations
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:justify-end lg:gap-10">
              <Button variant="outline" className="min-w-[13.125rem] border-[#E9F4F9] px-[3.1875rem]">
                Contact Us
              </Button>
              <Button className="min-w-[13.125rem] px-[3.1875rem]">Request Demo</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
