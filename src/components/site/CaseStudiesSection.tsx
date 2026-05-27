import Image from 'next/image';
import { Container } from '@/components/shared/Container';
import { Button } from '@/components/ui/Button';
import { Heading } from '@/components/ui/Heading';

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

function ViewAllLink() {
  return (
    <a
      href="#"
      className="group blue-action-link"
    >
      <span className="underline-link-label">
        View All
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

function CaseStudyVisual({ faded = false }: { faded?: boolean }) {
  return (
    <div
      className={[
        'grid h-full min-h-[20.5rem] grid-cols-2 gap-6 rounded-lg bg-[#07193C] p-7',
        faded ? 'opacity-25' : '',
      ].join(' ')}
    >
      {Array.from({ length: 4 }).map((_, index) => (
        <Image
          key={index}
          src="/assets/insight-mark.svg"
          alt=""
          width={139}
          height={139}
          className="h-full max-h-[8.75rem] w-full object-contain"
        />
      ))}
    </div>
  );
}

function CaseStudyCard({ muted = false }: { muted?: boolean }) {
  return (
    <article
      className={[
        'grid min-h-[27.375rem] w-full rounded-[18px] bg-[#01141B] p-6 lg:w-[63.4375rem]',
        'md:grid-cols-[26.375rem_1fr] md:gap-[4.875rem]',
        muted ? 'opacity-35' : '',
      ].join(' ')}
    >
      <CaseStudyVisual faded={muted} />
      <div className="mt-8 flex flex-col md:mt-0 md:py-[1.875rem]">
        <p className="eyebrow">
          Getting Started
        </p>
        <Heading as="h3" size="sectionSmall" className="mt-5 max-w-[26rem] text-[2.5rem]">
          How we help brand reach out to more people
        </Heading>
        <div className="mt-9 flex items-center gap-2 text-[1.375rem] font-bold leading-[1.3] text-[#E9F4F9]/45">
          <span className="flex h-[1.875rem] w-[1.875rem] items-center justify-center rounded-full bg-[#E9F4F9]/45 text-[#01141B]">
            <span className="text-[1rem] leading-none">&#9889;</span>
          </span>
          Zoomerr
        </div>
        <div className="mt-auto pt-9">
          <ReadMoreButton />
        </div>
      </div>
    </article>
  );
}

function CarouselControls() {
  return (
    <div className="flex items-center justify-center gap-[1.875rem]">
      <Button
        type="button"
        aria-label="Previous case study"
        variant="outline"
        size="compact"
        className="h-[2.625rem] min-w-0 w-[2.625rem] rounded-full border-[#00B4FD] px-0 text-[1.625rem] leading-none text-[#00B4FD] hover:bg-[#00B4FD]/10"
      >
        &larr;
      </Button>
      <div className="flex items-center gap-2" aria-hidden="true">
        <span className="h-3 w-3 rounded-full border border-[#00B4FD]/45" />
        <span className="h-3 w-[2.375rem] rounded-full bg-[#00B4FD]/55" />
        <span className="h-3 w-3 rounded-full border border-[#00B4FD]/45" />
        <span className="h-3 w-3 rounded-full border border-[#00B4FD]/45" />
      </div>
      <Button
        type="button"
        aria-label="Next case study"
        variant="outline"
        size="compact"
        className="h-[2.625rem] min-w-0 w-[2.625rem] rounded-full border-[#00B4FD] px-0 text-[1.625rem] leading-none text-[#00B4FD] hover:bg-[#00B4FD]/10"
      >
        &rarr;
      </Button>
    </div>
  );
}

export function CaseStudiesSection() {
  return (
    <section className="section-dark overflow-hidden pb-20 pt-[2.6875rem]">
      <Container>
        <Heading className="mx-auto max-w-[29rem] text-center">
          Our Case Studies
        </Heading>

        <div className="relative mx-auto mt-[4.5rem] h-auto max-w-[74.625rem] lg:h-[32.0625rem]">
          <div className="pointer-events-none absolute left-[-5.625rem] top-8 hidden lg:block">
            <CaseStudyCard muted />
          </div>
          <div className="pointer-events-none absolute right-[-5.625rem] top-8 hidden lg:block">
            <CaseStudyCard muted />
          </div>
          <div className="relative z-10 mx-auto max-w-[63.4375rem]">
            <CaseStudyCard />
          </div>
        </div>

        <div className="mx-auto mt-8 grid max-w-[74.625rem] items-center gap-8 sm:grid-cols-[1fr_auto_1fr]">
          <div className="hidden sm:block" />
          <CarouselControls />
          <div className="flex justify-center sm:justify-end">
            <ViewAllLink />
          </div>
        </div>
      </Container>
    </section>
  );
}
