import { type ReactNode, type ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

export type ButtonVariant = 'primary' | 'secondary' | 'inverted' | 'glow';

interface BaseButtonProps {
  children?: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}

interface LinkButtonProps extends BaseButtonProps {
  to: string;
  onClick?: () => void;
  type?: never;
  disabled?: never;
}

interface RegularButtonProps
  extends BaseButtonProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  to?: never;
}

export type ButtonProps = LinkButtonProps | RegularButtonProps;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-navy text-white hover:bg-[#12295F] border border-navy/20 dark:bg-blue dark:border-blue/30 dark:hover:bg-[#006fd6] shadow-xs active:bg-[#09173D]',
  glow:
    'bg-blue text-white hover:bg-[#006fd6] border border-blue/20 shadow-xs active:bg-[#005fb8]',
  secondary:
    'bg-white border border-slate-200 text-navy hover:bg-slate-50 hover:border-slate-300 dark:bg-slate-800 dark:border-slate-700 dark:text-white dark:hover:bg-slate-700 shadow-xs active:bg-slate-100',
  inverted:
    'bg-white text-navy hover:bg-slate-100 border border-transparent shadow-xs dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800',
};

export default function Button(props: ButtonProps) {
  const {
    children,
    variant = 'primary',
    className = '',
    ...rest
  } = props;

  const baseClasses =
    'inline-flex items-center justify-center font-medium text-center transition-colors duration-150 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 no-underline';

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`.trim();

  if ('to' in props && props.to) {
    const { to, onClick } = props;
    return (
      <Link to={to} onClick={onClick} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  const { type = 'button', disabled, onClick } = props as RegularButtonProps;

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={combinedClasses}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
