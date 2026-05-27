import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'outline';
type ButtonSize = 'default' | 'compact';

interface ButtonOwnProps {
  className?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & ButtonOwnProps & {
  href?: never;
};

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & ButtonOwnProps & {
  href: string;
};

type Props = ButtonProps | ButtonLinkProps;

interface ButtonClassOptions {
  className?: string;
  size?: ButtonSize;
  variant?: 'primary' | 'outline';
}

const variants = {
  primary:
    'bg-[linear-gradient(98deg,#12B7F5_0%,#0037D7_100%)] text-white shadow-[0_14px_32px_rgba(0,67,215,0.22)] hover:translate-y-[-1px] hover:shadow-[0_18px_38px_rgba(0,67,215,0.3)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300',
  outline:
    'border border-white/85 bg-transparent text-white hover:translate-y-[-1px] hover:bg-white/8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white',
};

const sizes = {
  default: 'h-12 min-w-[13.125rem] rounded-lg px-8 text-[0.9375rem] sm:h-[3.0625rem]',
  compact: 'h-9 rounded-[10px] px-8 text-xs',
};

function buttonClasses({ className = '', size = 'default', variant = 'primary' }: ButtonClassOptions) {
  return cn(
    'inline-flex items-center justify-center font-mono font-normal uppercase leading-[1.3] tracking-normal transition duration-200 ease-out',
    sizes[size],
    variants[variant],
    className,
  );
}

export function Button(props: ButtonLinkProps): JSX.Element;
export function Button(props: ButtonProps): JSX.Element;
export function Button(props: Props) {
  if (typeof (props as ButtonLinkProps).href === 'string') {
    const { className = '', size = 'default', variant = 'primary', ...anchorProps } = props as ButtonLinkProps;

    return <a className={buttonClasses({ className, size, variant })} {...anchorProps} />;
  }

  const { className = '', size = 'default', variant = 'primary', ...buttonProps } = props as ButtonProps;

  return (
    <button
      className={buttonClasses({ className, size, variant })}
      {...buttonProps}
    />
  );
}
