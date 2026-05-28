import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type HeadingSize = 'hero' | 'section' | 'sectionSmall' | 'card' | 'body';

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: HeadingLevel;
  children: ReactNode;
  size?: HeadingSize;
}

const sizes: Record<HeadingSize, string> = {
  hero: 'text-[clamp(3.25rem,6vw,4.6875rem)] leading-[1.07] tracking-[-0.045em]',
  section: 'text-[clamp(2.625rem,5vw,3.3125rem)] leading-[1.2] tracking-[-0.01em]',
  sectionSmall: 'text-[2.3125rem] leading-[1.2] tracking-[-0.01em]',
  card: 'text-[1.6875rem] leading-[1.2]',
  body: 'text-base leading-[1.3]',
};

export function Heading({ as: Component = 'h2', children, className = '', size = 'section', ...props }: HeadingProps) {
  return (
    <Component className={cn('font-normal', sizes[size], className)} {...props}>
      {children}
    </Component>
  );
}
