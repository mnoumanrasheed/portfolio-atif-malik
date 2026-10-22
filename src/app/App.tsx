import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { ScrollToTop } from './ScrollToTop';
import { ExecutivePreloader } from '../components/ui/ExecutivePreloader';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Expertise } from '../pages/Expertise';
import { Ventures } from '../pages/Ventures';
import { M3Hive } from '../pages/M3Hive';
import { NourDoc } from '../pages/Products/NourDoc';
import { LeadHiveAI } from '../pages/Products/LeadHiveAI';
import { SmartAnimal } from '../pages/Products/SmartAnimal';
import { Work } from '../pages/Work';
import { Technologies360 } from '../pages/Technologies360';
import { Collaboration } from '../pages/Collaboration';
import { Insights } from '../pages/Insights';
import { Contact } from '../pages/Contact';
import { NotFound } from '../pages/NotFound';

export const App: React.FC = () => {
  return (
    <>
      <ExecutivePreloader />
      <ScrollToTop />
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
    </>
  );
};

