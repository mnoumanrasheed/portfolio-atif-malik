import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: React.ReactNode;
  showArrow?: boolean;
  isExternal?: boolean;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  ariaLabel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
  showArrow = false,
  isExternal = false,
  type = 'button',
  disabled = false,
  ariaLabel
}) => {
  const sizeClasses = {
    sm: 'text-xs px-4 py-2 gap-2 tracking-normal font-semibold',
    md: 'text-xs sm:text-sm px-5 py-2.5 gap-2.5 tracking-normal font-semibold',
    lg: 'text-sm sm:text-base px-7 py-3.5 gap-3 tracking-normal font-bold'
  };

  const variantClasses = {
    primary:
      'bg-brand text-white border border-brand hover:bg-brand-hover hover:border-brand-hover shadow-sm hover:shadow-md transition-all duration-200',
    secondary:
      'bg-white text-ink border border-line hover:border-brand hover:text-brand shadow-soft transition-all duration-200',
    outline:
      'bg-transparent text-ink border border-line hover:border-brand hover:text-brand hover:bg-brand-wash/50 transition-colors duration-200',
    ghost:
      'bg-transparent text-ink-body hover:text-brand hover:bg-brand-wash/50 transition-colors duration-200'
  };

  const baseClasses = `inline-flex items-center justify-center font-display transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 disabled:opacity-40 disabled:pointer-events-none rounded-pill ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
      {showArrow && (
        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
      )}
      {isExternal && !showArrow && (
        <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`group ${baseClasses}`} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={`group ${baseClasses}`}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        aria-label={ariaLabel}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`group ${baseClasses}`}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
};
