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
    <div className={`mb-16 ${align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-4xl'} ${className}`}>
      {eyebrow && (
        <div className="font-editorial-eyebrow mb-4 flex items-center gap-3">
          <span>[{eyebrow}]</span>
          <span className="h-px flex-1 max-w-[60px] bg-neutral-800" />
        </div>
      )}
      <h2 className="font-editorial-heading text-3xl sm:text-4xl lg:text-5xl text-white tracking-tighter">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base sm:text-lg text-neutral-400 font-editorial-body leading-relaxed max-w-3xl">
          {description}
        </p>
      )}
    </div>
  );
};
