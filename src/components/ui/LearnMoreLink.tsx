import type { AnchorHTMLAttributes, ReactNode } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface LearnMoreLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: ReactNode;
  className?: string;
}

export function LearnMoreLink({
  children = 'Learn More',
  className = '',
  href = '#',
  ...props
}: LearnMoreLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        'group inline-flex items-center gap-2 font-mono text-sm uppercase tracking-normal transition duration-200 ease-out',
        className,
      )}
      {...props}
    >
      <span>{children}</span>
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
