import Image from 'next/image';
import { Heading } from '@/components/ui/Heading';
import { LearnMoreLink } from '@/components/ui/LearnMoreLink';

export interface SolutionCardProps {
  title: string;
  icon: string;
  copy: string;
  tag?: string;
  href?: string;
}

export function SolutionCard({ title, icon, copy, tag, href = '#' }: SolutionCardProps) {
  return (
    <article className="relative max-w-[17.5rem]">
      {tag ? (
        <span className="absolute right-0 top-[1.7rem] text-sm font-medium uppercase tracking-[-0.02em] text-[#E9F4F9]/55">
          {tag}
        </span>
      ) : null}
      <Image src={icon} alt="" width={47} height={49} className="h-[42px] w-auto" />
      <Heading as="h3" size="body" className="mt-7 text-[1.375rem] leading-[1.2] tracking-normal">
        {title}
      </Heading>
      <p className="body-copy-muted mt-8 tracking-normal">{copy}</p>
      <div className="mt-8">
        <LearnMoreLink href={href} className="blue-action-link font-medium leading-none tracking-[-0.02em]" />
      </div>
    </article>
  );
}
