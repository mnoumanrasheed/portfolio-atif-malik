import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { ScrollToTop } from './ScrollToTop';
import { ExecutivePreloader } from '../components/ui/ExecutivePreloader';

// Lazy loading routes for optimal bundle splitting and performance
const Home = lazy(() => import('../pages/Home').then(m => ({ default: m.Home })));
const About = lazy(() => import('../pages/About').then(m => ({ default: m.About })));
const Expertise = lazy(() => import('../pages/Expertise').then(m => ({ default: m.Expertise })));
const Ventures = lazy(() => import('../pages/Ventures').then(m => ({ default: m.Ventures })));
const M3Hive = lazy(() => import('../pages/M3Hive').then(m => ({ default: m.M3Hive })));
const NourDoc = lazy(() => import('../pages/Products/NourDoc').then(m => ({ default: m.NourDoc })));
const LeadHiveAI = lazy(() => import('../pages/Products/LeadHiveAI').then(m => ({ default: m.LeadHiveAI })));
const SmartAnimal = lazy(() => import('../pages/Products/SmartAnimal').then(m => ({ default: m.SmartAnimal })));
const Work = lazy(() => import('../pages/Work').then(m => ({ default: m.Work })));
const Technologies360 = lazy(() => import('../pages/Technologies360').then(m => ({ default: m.Technologies360 })));
const Collaboration = lazy(() => import('../pages/Collaboration').then(m => ({ default: m.Collaboration })));
const Insights = lazy(() => import('../pages/Insights').then(m => ({ default: m.Insights })));
const Contact = lazy(() => import('../pages/Contact').then(m => ({ default: m.Contact })));
const NotFound = lazy(() => import('../pages/NotFound').then(m => ({ default: m.NotFound })));

const LoadingFallback = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
    <div className="relative flex items-center justify-center">
      <div className="h-10 w-10 rounded-full border-2 border-[#286252]/20 border-t-[#286252] animate-spin" />
    </div>
    <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#286252] font-semibold">
      Loading...
    </span>
  </div>
);

export const App: React.FC = () => {
  return (
    <>
      <ExecutivePreloader />
      <ScrollToTop />
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="expertise" element={<Expertise />} />
            <Route path="ventures" element={<Ventures />} />
            <Route path="m3-hive" element={<M3Hive />} />
            <Route path="products/nourdoc" element={<NourDoc />} />
            <Route path="products/leadhive-ai" element={<LeadHiveAI />} />
            <Route path="products/smart-animal" element={<SmartAnimal />} />
            <Route path="work" element={<Work />} />
            <Route path="360-technologies" element={<Technologies360 />} />
            <Route path="collaboration" element={<Collaboration />} />
            <Route path="insights" element={<Insights />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

