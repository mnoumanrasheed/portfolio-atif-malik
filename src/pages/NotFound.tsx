import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-28 pb-20 px-4 bg-canvas text-ink">
      <div className="max-w-xl mx-auto text-center space-y-6">
        <div className="eyebrow text-accent justify-center">
          Route Not Found
        </div>

        <h1 className="font-display font-bold text-7xl sm:text-8xl text-ink tracking-tight">
          404
        </h1>

        <p className="font-display font-semibold text-2xl text-ink">
          The requested page does not exist in this portfolio.
        </p>

        <p className="text-sm sm:text-base text-ink-muted max-w-md mx-auto leading-relaxed">
          Please check the URL or use the navigation below to return to the executive overview, priority products, or collaboration pathways.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
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
