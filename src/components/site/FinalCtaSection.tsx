import { Button } from '@/components/ui/Button';
import { Heading } from '@/components/ui/Heading';
import { Container } from '@/components/shared/Container';

export function FinalCtaSection() {
  return (
    <section className="section-dark">
      <Container className="flex min-h-[19.75rem] flex-col justify-center gap-10 py-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:py-0">
        <div>
          <Heading className="max-w-[38rem] text-[clamp(2.75rem,5vw,3.3125rem)]">
            Take the full advantage of going paper-less now.
          </Heading>
          <p className="body-copy-muted mt-8 max-w-[29rem]">
            CB7 helps your financial institution improve the client experience, automate and optimize procedures,
            simplify banking operations
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row lg:gap-10">
          <Button variant="outline" className="h-[3.0625rem] min-w-[13rem] rounded-[10px] border-[#E9F4F9] px-[3.6875rem]">
            Contact Us
          </Button>
          <Button className="h-[3.0625rem] min-w-[13.125rem] rounded-[10px] !bg-[linear-gradient(106.53deg,#00B4FD_-5.68%,#003ACE_86.98%)] px-[3.1875rem]">
            Request Demo
          </Button>
        </div>
      </Container>
    </section>
  );
}
