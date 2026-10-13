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
          code: 'PROD',
          label: 'M3 Hive Product',
          tag: 'ACTIVE DIRECTION'
        };
      case 'M3 Hive company project':
        return {
          code: 'CORP',
          label: 'M3 Hive Project',
          tag: 'DOCUMENTED'
        };
      case '360 Technologies company portfolio':
        return {
          code: 'HIST',
          label: '360 Technologies',
          tag: 'HISTORICAL ARCHIVE'
        };
      case 'Atif I. Malik — role confirmed':
        return {
          code: 'EXEC',
          label: 'Atif I. Malik',
          tag: 'CONFIRMED ROLE'
        };
    }
  };

  const config = getBadgeConfig();

  return (
    <span
      className={`inline-flex items-center gap-2 border border-white/20 bg-black font-mono tracking-wider transition-colors uppercase ${
        size === 'sm' ? 'text-[10px] px-2.5 py-1' : 'text-xs px-3.5 py-1.5'
      } text-white ${className}`}
    >
      <span className="text-neutral-400 font-semibold">[{config.code}]</span>
      <span className="font-medium text-neutral-200">{config.label}</span>
      <span className="h-2 w-px bg-white/20" />
      <span className="text-[9px] text-neutral-400 font-mono">{config.tag}</span>
    </span>
  );
};
