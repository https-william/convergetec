import { type ReactNode, type ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

export type ButtonVariant = 'primary' | 'secondary' | 'inverted';

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
    'bg-blue text-offwhite hover:bg-cyan hover:text-navy shadow-sm',
  secondary:
    'bg-transparent border border-navy text-navy hover:bg-navy hover:text-offwhite',
  inverted:
    'bg-offwhite text-navy hover:bg-navy hover:text-offwhite shadow-md',
};

export default function Button(props: ButtonProps) {
  const {
    children,
    variant = 'primary',
    className = '',
    ...rest
  } = props;

  const baseClasses =
    'inline-flex items-center justify-center font-semibold text-center transition-all duration-150 ease-out hover:scale-[1.03] active:scale-[0.98] rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2 no-underline';

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
