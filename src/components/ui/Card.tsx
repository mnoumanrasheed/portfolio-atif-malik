import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  elevated?: boolean;
  hoverEffect?: boolean;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverEffect = true,
  onClick
}) => {
  return (
    <div
      onClick={onClick}
      className={`relative overflow-hidden bg-mono-900 border border-neutral-800 transition-colors duration-200 ${
        hoverEffect ? 'hover:border-neutral-500 hover:bg-neutral-950' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};
