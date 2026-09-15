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

    {/* Catch-all redirect */}
    <Route path="*" element={<Navigate to="/omp/executive/central-office" replace />} />
  </Route>
);
