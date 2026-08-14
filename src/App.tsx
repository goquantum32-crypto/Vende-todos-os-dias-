import React, { useState } from 'react';
import { PageConfig } from './types';
import { defaultConfig } from './data/landingData';
import { HeaderHero } from './components/HeaderHero';
import { PainPoints } from './components/PainPoints';
import { SolutionBenefits } from './components/SolutionBenefits';
import { EbookStructure } from './components/EbookStructure';
import { TargetAudience } from './components/TargetAudience';
import { SocialProof } from './components/SocialProof';
import { PricingOffer } from './components/PricingOffer';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { StickyMobileCTA } from './components/StickyMobileCTA';
import { ScriptPreviewModal } from './components/ScriptPreviewModal';
import { SellerConfigModal } from './components/SellerConfigModal';
import { LiveSalesNotifications } from './components/LiveSalesNotifications';

// Generated official ebook cover image asset
import ebookCoverOfficial from './assets/images/ebook_cover_official_1786568328498.jpg';

export default function App() {
  const [config, setConfig] = useState<PageConfig>(defaultConfig);
  const [isScriptModalOpen, setIsScriptModalOpen] = useState(false);
  const [isSellerModalOpen, setIsSellerModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 selection:bg-amber-300 selection:text-slate-950">
      
      {/* HERO HEADER SECTION */}
      <HeaderHero
        config={config}
        onOpenScriptPreview={() => setIsScriptModalOpen(true)}
        ebookCoverImage={ebookCoverOfficial}
      />

      {/* PAIN / PROBLEM SECTION */}
      <PainPoints />

      {/* SOLUTION & BENEFITS SECTION */}
      <SolutionBenefits
        config={config}
        onOpenScriptPreview={() => setIsScriptModalOpen(true)}
      />

      {/* EBOOK STRUCTURE & CHAPTERS INDEX */}
      <EbookStructure />

      {/* TARGET AUDIENCE SECTION */}
      <TargetAudience />

      {/* SOCIAL PROOF / TESTIMONIALS SECTION */}
      <SocialProof />

      {/* OFFER / PRICE SECTION */}
      <PricingOffer config={config} />

      {/* FAQ SECTION */}
      <FAQSection config={config} />

      {/* FOOTER SECTION */}
      <Footer
        config={config}
        onOpenSellerConfig={() => setIsSellerModalOpen(true)}
      />

      {/* STICKY MOBILE BUY BUTTON */}
      <StickyMobileCTA config={config} />

      {/* REAL-TIME SALES NOTIFICATIONS */}
      <LiveSalesNotifications />

      {/* SCRIPT SAMPLE PREVIEW MODAL */}
      <ScriptPreviewModal
        isOpen={isScriptModalOpen}
        onClose={() => setIsScriptModalOpen(false)}
        config={config}
      />

      {/* SELLER CONFIGURATION & HTML DOWNLOAD MODAL */}
      <SellerConfigModal
        isOpen={isSellerModalOpen}
        onClose={() => setIsSellerModalOpen(false)}
        config={config}
        onSaveConfig={(newConfig) => setConfig(newConfig)}
      />

    </div>
  );
}
