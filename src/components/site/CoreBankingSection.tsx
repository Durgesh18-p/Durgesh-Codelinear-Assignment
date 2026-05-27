import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Heading } from '@/components/ui/Heading';
import { Container } from '@/components/shared/Container';

function LearnMoreLink() {
  return (
    <a
      href="#"
      className="group inline-flex items-center gap-2 text-sm font-medium uppercase leading-none tracking-[-0.02em] text-[#00B4FD]"
    >
      <span className="relative pb-2 after:absolute after:bottom-0 after:left-0 after:h-px after:w-[32.58px] after:bg-[#00B4FD]">
        Learn More
      </span>
      <Image
        src="/assets/solutions/arrow-right.svg"
        alt=""
        width={13}
        height={12}
        className="arrow-hover"
      />
    </a>
  );
}

export function CoreBankingSection() {
  return (
    <section className="section-dark relative overflow-hidden py-20 lg:min-h-[619px] lg:py-0">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-3.5rem] top-[7.5rem] select-none text-[24rem] font-normal leading-none tracking-[-0.08em] text-transparent opacity-55 [-webkit-text-stroke:1px_rgba(0,180,253,0.22)] lg:text-[33.75rem]"
      >
        CB7
      </div>

      <Container className="relative z-10 grid gap-12 lg:min-h-[619px] lg:grid-cols-[minmax(28rem,39rem)_minmax(32rem,1fr)] lg:items-center lg:gap-[5.75rem]">
        <div className="max-w-[38rem] lg:pt-3">
          <Heading className="max-w-[20.5rem] text-[clamp(2.25rem,10vw,3.3125rem)] sm:max-w-none">
            A complete cloud-based core banking.
          </Heading>
          <p className="body-copy-muted mt-6 max-w-[21rem] leading-[1.35] tracking-[-0.02em]">
            Faster time to market with our cloud-based core banking services
          </p>
          <div className="mt-9">
            <Button className="min-w-[13.125rem] px-[3.1875rem]">Request Demo</Button>
          </div>
          <div className="mt-5">
            <LearnMoreLink />
          </div>
        </div>

        <div className="relative min-h-[18rem] lg:absolute lg:left-[64.4%] lg:top-[5rem] lg:h-[29rem] lg:w-[39.75rem]">
          <Image
            src="/assets/core-banking-dashboard.svg"
            alt="AML dashboard preview"
            width={571}
            height={462}
            className="h-auto w-[39.75rem] max-w-none"
            priority={false}
          />
        </div>
      </Container>
    </section>
  );
}
