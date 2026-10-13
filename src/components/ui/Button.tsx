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
    sm: 'text-xs px-4 py-2 gap-2 tracking-wide font-medium',
    md: 'text-xs sm:text-sm px-6 py-3 gap-2.5 tracking-wide font-medium',
    lg: 'text-sm sm:text-base px-8 py-4 gap-3 tracking-wide font-semibold'
  };

  const variantClasses = {
    primary:
      'bg-white text-black border border-white hover:bg-neutral-200 transition-colors duration-200',
    secondary:
      'bg-black text-white border border-white/20 hover:border-white hover:bg-neutral-950 transition-colors duration-200',
    outline:
      'bg-transparent text-neutral-300 border border-neutral-800 hover:border-neutral-400 hover:text-white transition-colors duration-200',
    ghost:
      'bg-transparent text-neutral-400 hover:text-white hover:bg-neutral-900/50 transition-colors duration-200'
  };

  const baseClasses = `inline-flex items-center justify-center font-sans uppercase tracking-[0.08em] transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white disabled:opacity-40 disabled:pointer-events-none rounded-none ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

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
