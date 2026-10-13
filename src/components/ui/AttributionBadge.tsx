import React from 'react';
import { AttributionType } from '../../types/portfolio';

interface AttributionBadgeProps {
  type: AttributionType;
  className?: string;
  size?: 'sm' | 'md';
}

export const AttributionBadge: React.FC<AttributionBadgeProps> = ({ type, className = '', size = 'sm' }) => {
  const getBadgeConfig = () => {
    switch (type) {
      case 'M3 Hive product':
        return {
          label: 'M3 Hive Product',
          detail: 'Active Flagship',
          classes: 'bg-accent-wash text-accent border-accent/25'
        };
      case 'M3 Hive company project':
        return {
          label: 'M3 Hive Project',
          detail: 'Documented Delivery',
          classes: 'bg-accent-wash/60 text-accent border-accent/20'
        };
      case '360 Technologies company portfolio':
        return {
          label: '360 Technologies',
          detail: 'Historical Portfolio',
          classes: 'bg-canvas-subtle text-ink-muted border-line'
        };
      case 'Atif I. Malik — role confirmed':
        return {
          label: 'Atif I. Malik',
          detail: 'Executive Role',
          classes: 'bg-canvas-editorial text-ink border-line'
        };
    }
  };

  const config = getBadgeConfig();
  const sizeClasses = size === 'sm' ? 'text-xs px-2.5 py-0.5' : 'text-xs px-3 py-1';

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border font-sans font-medium transition-colors ${sizeClasses} ${config.classes} ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />
      <span>{config.label}</span>
      <span className="opacity-40">·</span>
      <span className="opacity-75 text-[11px] font-normal">{config.detail}</span>
    </span>
  );
};
