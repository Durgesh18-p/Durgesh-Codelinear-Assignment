import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface StickyColumnProps {
  children: ReactNode;
  className?: string;
}

export function StickyColumn({ children, className = '' }: StickyColumnProps) {
  return <div className={cn('lg:sticky lg:top-24 lg:self-start', className)}>{children}</div>;
}
