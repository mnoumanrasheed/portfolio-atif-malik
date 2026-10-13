import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { ScrollToTop } from './ScrollToTop';

// Lazy loading routes for optimal bundle splitting and performance
const Home = lazy(() => import('../pages/Home').then(m => ({ default: m.Home })));
const About = lazy(() => import('../pages/About').then(m => ({ default: m.About })));
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
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="flex items-center gap-3 font-mono text-xs text-cyan-soft">
      <span className="h-2 w-2 rounded-full bg-cyan-brand animate-ping" />
      <span>Loading Executive Portfolio Module...</span>
    </div>
  </div>
);

export const App: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
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

