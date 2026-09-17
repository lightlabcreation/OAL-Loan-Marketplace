import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { OmpLayout } from './layouts/OmpLayout';

// 8 Core OfferUp Marketplace Pages
import { HomePage } from './pages/marketplace/HomePage';
import { ForSalePage } from './pages/marketplace/ForSalePage';
import { AiCarsTrucksPage } from './pages/marketplace/AiCarsTrucksPage';
import { ServicesPage } from './pages/marketplace/ServicesPage';
import { JobFinderPage } from './pages/marketplace/JobFinderPage';
import { RealEstatePage } from './pages/marketplace/RealEstatePage';
import { BusinessForSalePage } from './pages/marketplace/BusinessForSalePage';
import { LookingForPage } from './pages/marketplace/LookingForPage';
import { MyFavPage } from './pages/marketplace/MyFavPage';
import { PostAdWizardPage } from './pages/marketplace/PostAdWizardPage';
import { ListingDetailPage } from './pages/marketplace/ListingDetailPage';
import { LoginPage } from './pages/auth/LoginPage';
import { MemberDashboardPage } from './pages/member/MemberDashboardPage';

// 21 OMP Auto Suite Modules (From Client DOCX Scope)
import { OmpMarketplace } from './pages/omp/marketplace/OmpMarketplace';
import { VehicleListingDetail } from './pages/omp/marketplace/VehicleListingDetail';
import { VerifiedDealerDashboard } from './pages/omp/verification/VerifiedDealerDashboard';
import { DealerVerificationFlow } from './pages/omp/verification/DealerVerificationFlow';
import { FeedSync } from './pages/omp/inventory/FeedSync';
import { TopLeadIndicator } from './pages/omp/leads/TopLeadIndicator';
import { VinScanner } from './pages/omp/inventory/VinScanner';
import { MarketPricing } from './pages/omp/inventory/MarketPricing';
import { TitleSearch } from './pages/omp/inventory/TitleSearch';
import { ReconCenter } from './pages/omp/inventory/ReconCenter';
import { PhotoGenius } from './pages/omp/media/PhotoGenius';
import { AiPostmaster } from './pages/omp/marketing/AiPostmaster';
import { WebBuilder } from './pages/omp/marketing/WebBuilder';
import { DealCalculator } from './pages/omp/desking/DealCalculator';
import { UnifiedInbox } from './pages/omp/crm/UnifiedInbox';
import { AiReceptionist } from './pages/omp/crm/AiReceptionist';
import { LenderMarketplace } from './pages/omp/financing/LenderMarketplace';
import { AutoESign } from './pages/omp/deals/AutoESign';
import { BhphSuite } from './pages/omp/bhph/BhphSuite';
import { RoiDashboard } from './pages/omp/finance/RoiDashboard';
import { CostManagement } from './pages/omp/finance/CostManagement';
import { CentralOffice } from './pages/omp/executive/CentralOffice';
import { TeamPermissions } from './pages/omp/executive/TeamPermissions';
import { OmpMobileView } from './pages/omp/mobile/OmpMobileView';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<OmpLayout />}>
            {/* 1. 8 Core Marketplace Category Routes */}
            <Route path="/marketplace" element={<HomePage />} />
            <Route path="/for-sale" element={<ForSalePage />} />
            <Route path="/cars-trucks" element={<AiCarsTrucksPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/jobs" element={<JobFinderPage />} />
            <Route path="/real-estate" element={<RealEstatePage />} />
            <Route path="/businesses" element={<BusinessForSalePage />} />
            <Route path="/looking-for" element={<LookingForPage />} />
            <Route path="/my-fav" element={<MyFavPage />} />
            <Route path="/post-ad" element={<PostAdWizardPage />} />
            <Route path="/listing/:id" element={<ListingDetailPage />} />
            <Route path="/member/dashboard" element={<MemberDashboardPage />} />

            {/* 2. All 21 OMP Auto Suite Modules (Complete Previous Work) */}
            <Route path="/omp/marketplace" element={<OmpMarketplace />} />
            <Route path="/omp/marketplace/:id" element={<VehicleListingDetail />} />
            <Route path="/omp/verified-dealer" element={<VerifiedDealerDashboard />} />
            <Route path="/omp/verify" element={<DealerVerificationFlow />} />
            <Route path="/omp/feed-sync" element={<FeedSync />} />
            <Route path="/omp/top-leads" element={<TopLeadIndicator />} />
            <Route path="/omp/vin-scanner" element={<VinScanner />} />
            <Route path="/omp/market-pricing" element={<MarketPricing />} />
            <Route path="/omp/title-search" element={<TitleSearch />} />
            <Route path="/omp/recon-center" element={<ReconCenter />} />
            <Route path="/omp/photo-genius" element={<PhotoGenius />} />
            <Route path="/omp/postmaster" element={<AiPostmaster />} />
            <Route path="/omp/web-builder" element={<WebBuilder />} />
            <Route path="/omp/desking/calculator" element={<DealCalculator />} />
            <Route path="/omp/crm/inbox" element={<UnifiedInbox />} />
            <Route path="/omp/crm/ai-receptionist" element={<AiReceptionist />} />
            <Route path="/omp/financing/lenders" element={<LenderMarketplace />} />
            <Route path="/omp/deals/e-sign" element={<AutoESign />} />
            <Route path="/omp/bhph/suite" element={<BhphSuite />} />
            <Route path="/omp/finance/roi" element={<RoiDashboard />} />
            <Route path="/omp/finance/costs" element={<CostManagement />} />
            <Route path="/omp/executive/central-office" element={<CentralOffice />} />
            <Route path="/omp/executive/permissions" element={<TeamPermissions />} />
            <Route path="/omp/mobile" element={<OmpMobileView />} />
          </Route>

          {/* Standalone Fullscreen Login Gateway (Entry point & Role switcher) */}
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />

          {/* Catch-all fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
