import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Heading } from '@/components/ui/Heading';
import { Container } from '@/components/shared/Container';

function ReadMoreButton() {
  return (
    <Button
      href="#"
      variant="outline"
      size="compact"
      className="w-full border-[#E9F4F9]/50 text-[#E9F4F9]/45 hover:border-[#E9F4F9]/80 hover:text-[#E9F4F9]"
    >
      Read More
    </Button>
  );
}

function InsightMeta() {
  return (
    <div className="mt-4 flex items-center gap-4 text-sm leading-[1.3] text-[#64A8C4]">
      <span>David Grohl</span>
      <time dateTime="2024-08-17">17/08/24</time>
    </div>
  );
}

function SmallInsightCard() {
  return (
    <article className="flex min-h-[19.875rem] flex-col rounded-[18px] bg-[#01141B] p-8">
      <p className="eyebrow">
        Getting Started
      </p>
      <Heading as="h3" size="card" className="mt-4 max-w-[18.1rem]">
        How to transition from a traditional to a digital bank
      </Heading>
      <InsightMeta />
      <div className="mt-auto">
        <ReadMoreButton />
      </div>
    </article>
  );
}

function FeaturedInsightCard() {
  return (
    <article className="grid min-h-[19.875rem] rounded-[18px] bg-[#01141B] p-6 sm:grid-cols-[18.4375rem_1fr] sm:gap-8">
      <div className="grid min-h-[16.6875rem] grid-cols-2 gap-6 rounded-lg bg-[#07193C] p-7">
        {Array.from({ length: 4 }).map((_, index) => (
          <Image
            key={index}
            src="/assets/insight-mark.svg"
            alt=""
            width={98}
            height={98}
            className="h-[6.125rem] w-[6.125rem]"
          />
        ))}
      </div>
      <div className="mt-8 flex flex-col sm:mt-0 sm:py-4">
        <p className="eyebrow">
          Getting Started
        </p>
        <Heading as="h3" size="card" className="mt-4 max-w-[18.1rem]">
          How to transition from a traditional to a digital bank
        </Heading>
        <InsightMeta />
        <div className="mt-auto pt-8">
          <ReadMoreButton /> 
        </div>
      </div>
    </article>
  );
}

function ReadAllInsightsLink() {
  return (
    <a
      href="#"
      className="group blue-action-link"
    >
      <span className="underline-link-label">
        Read All Insights
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

export function InsightsSection() {
  return (
    <section className="section-dark relative overflow-hidden py-16 sm:py-20">
      <Image
        src="/assets/insights-blue-blur.svg"
        alt=""
        width={557}
        height={557}
        aria-hidden="true"
        className="pointer-events-none absolute left-[58.23px] top-[160.23px] z-0 h-[556.7720947265625px] w-[556.7720947265625px]"
      />
      <Container>
        <div className="relative z-10 grid gap-12 lg:grid-cols-[29rem_minmax(38rem,41.875rem)] lg:gap-[8.125rem]">
          <div>
            <Heading size="sectionSmall" className="max-w-[29rem]">
              Get yourself up-to-speed on all the things happening in fintech
            </Heading>
            <Button variant="outline" className="mt-[3.375rem] min-w-[11.875rem] border-[#E9F4F9] px-[3.6875rem]">
              Insights
            </Button>
          </div>

          <div>
            <FeaturedInsightCard />
            <div className="mt-[2.125rem] grid gap-[1.875rem] sm:grid-cols-2">
              <SmallInsightCard />
              <SmallInsightCard />
            </div>
            <div className="mt-6 flex justify-end">
              <ReadAllInsightsLink />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
