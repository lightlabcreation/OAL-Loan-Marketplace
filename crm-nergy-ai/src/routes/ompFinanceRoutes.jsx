import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { OmpLayout } from '../layouts/OmpLayout';

// Developer 3 Pages
import { CentralOffice } from '../pages/omp/executive/CentralOffice';
import { TeamPermissions } from '../pages/omp/executive/TeamPermissions';
import { UnifiedInbox } from '../pages/omp/crm/UnifiedInbox';
import { AiReceptionist } from '../pages/omp/crm/AiReceptionist';
import { DealCalculator } from '../pages/omp/desking/DealCalculator';
import { LenderMarketplace } from '../pages/omp/financing/LenderMarketplace';
import { AutoESign } from '../pages/omp/deals/AutoESign';
import { RoiDashboard } from '../pages/omp/finance/RoiDashboard';
import { CostManagement } from '../pages/omp/finance/CostManagement';
import { BhphSuite } from '../pages/omp/bhph/BhphSuite';
import { OmpMobileView } from '../pages/omp/mobile/OmpMobileView';

// Developer 2 Pages
import { DealerVerificationFlow } from '../pages/omp/verification/DealerVerificationFlow';
import { VerifiedDealerDashboard } from '../pages/omp/verification/VerifiedDealerDashboard';
import { FeedSync } from '../pages/omp/inventory/FeedSync';
import { TopLeadIndicator } from '../pages/omp/leads/TopLeadIndicator';
import { OmpMarketplace } from '../pages/omp/marketplace/OmpMarketplace';
import { VehicleListingDetail } from '../pages/omp/marketplace/VehicleListingDetail';
import { VinScanner } from '../pages/omp/inventory/VinScanner';
import { MarketPricing } from '../pages/omp/inventory/MarketPricing';
import { TitleSearch } from '../pages/omp/inventory/TitleSearch';
import { ReconCenter } from '../pages/omp/inventory/ReconCenter';
import { PhotoGenius } from '../pages/omp/media/PhotoGenius';
import { AiPostmaster } from '../pages/omp/marketing/AiPostmaster';
import { WebBuilder } from '../pages/omp/marketing/WebBuilder';

export const getOmpFinanceRoutes = () => (
  <Route path="/omp" element={<OmpLayout />}>
    <Route index element={<Navigate to="/omp/executive/central-office" replace />} />
    
    {/* Executive & RBAC */}
    <Route path="executive/central-office" element={<CentralOffice />} />
    <Route path="executive/permissions" element={<TeamPermissions />} />

    {/* Omnichannel CRM & AI Phone Receptionist */}
    <Route path="crm/inbox" element={<UnifiedInbox />} />
    <Route path="crm/ai-receptionist" element={<AiReceptionist />} />

    {/* Desking, Financing & E-Sign */}
    <Route path="desking/calculator" element={<DealCalculator />} />
    <Route path="financing/lenders" element={<LenderMarketplace />} />
    <Route path="deals/e-sign" element={<AutoESign />} />

    {/* Profitability, Cost Tracking & In-House BHPH */}
    <Route path="finance/roi" element={<RoiDashboard />} />
    <Route path="finance/costs" element={<CostManagement />} />
    <Route path="bhph/suite" element={<BhphSuite />} />

    {/* Mobile Lot App */}
    <Route path="mobile" element={<OmpMobileView />} />

    {/* Developer 2 Modules */}
    <Route path="verify" element={<DealerVerificationFlow />} />
    <Route path="verified-dealer" element={<VerifiedDealerDashboard />} />
    <Route path="feed-sync" element={<FeedSync />} />
    <Route path="top-leads" element={<TopLeadIndicator />} />
    <Route path="marketplace" element={<OmpMarketplace />} />
    <Route path="marketplace/:id" element={<VehicleListingDetail />} />
    <Route path="vin-scanner" element={<VinScanner />} />
    <Route path="market-pricing" element={<MarketPricing />} />
    <Route path="title-search" element={<TitleSearch />} />
    <Route path="recon-center" element={<ReconCenter />} />
    <Route path="photo-genius" element={<PhotoGenius />} />
    <Route path="postmaster" element={<AiPostmaster />} />
    <Route path="web-builder" element={<WebBuilder />} />

    {/* Catch-all redirect */}
    <Route path="*" element={<Navigate to="/omp/executive/central-office" replace />} />
  </Route>
);
