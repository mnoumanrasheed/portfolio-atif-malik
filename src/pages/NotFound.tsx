import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-[75vh] flex items-center justify-center py-20 px-4 bg-black text-white">
      <div className="max-w-xl mx-auto text-center space-y-8">
        <div className="font-mono text-xs uppercase tracking-widest text-neutral-500">
          [ 404 / ROUTE NOT FOUND ]
        </div>

        <h1 className="font-editorial-heading text-7xl sm:text-8xl text-white tracking-tighter">
          404
        </h1>

        <p className="font-editorial-heading text-2xl text-neutral-200 uppercase tracking-tight">
          The requested page does not exist in this portfolio.
        </p>

        <p className="text-sm text-neutral-400 font-editorial-body max-w-md mx-auto leading-relaxed">
          Please check the URL or use the navigation below to return to the executive overview, priority products, or collaboration pathways.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Button to="/" variant="primary" size="md" icon={<ArrowLeft className="w-4 h-4" />}>
            Return to Overview
          </Button>
          <Button to="/m3-hive" variant="secondary" size="md">
            Explore M3 Hive
          </Button>
          <Button to="/contact" variant="outline" size="md">
            Direct Contact
          </Button>
        </div>
      </div>
    </div>
  );
};
