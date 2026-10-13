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
  elevated = false,
  hoverEffect = true,
  onClick
}) => {
  return (
    <div
      onClick={onClick}
      className={`relative overflow-hidden bg-white border border-line rounded-card transition-all duration-200 ${
        elevated ? 'shadow-card' : 'shadow-soft'
      } ${
        hoverEffect ? 'hover:border-accent/50 hover:shadow-card' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};
