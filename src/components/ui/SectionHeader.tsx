import React from 'react';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  description,
  align = 'left',
  className = ''
}) => {
  return (
    <div className={`mb-12 sm:mb-16 ${align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-4xl'} ${className}`}>
      {eyebrow && (
        <div className={`mb-3.5 flex items-center ${align === 'center' ? 'justify-center' : 'justify-start'}`}>
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-wash text-brand text-xs font-bold uppercase tracking-wider border border-brand/15 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink tracking-tight leading-[1.12]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-ink-body leading-relaxed max-w-3xl">
          {description}
        </p>
      )}
    </div>
  );
};
