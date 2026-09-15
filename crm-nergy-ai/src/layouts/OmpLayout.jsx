import React, { useState } from 'react';
import { Outlet, NavLink, useNavigate, useLocation } from 'react-router-dom';
import {
  Building2,
  Inbox,
  PhoneCall,
  Calculator,
  Landmark,
  FileSignature,
  TrendingUp,
  Receipt,
  Wallet,
  ShieldCheck,
  Smartphone,
  ChevronDown,
  Sparkles,
  Store,
  Layers,
  CheckCircle2,
  Activity,
  Car,
  ShieldAlert,
  ShoppingBag,
  Cpu,
  Camera,
  Share2,
  Globe,
  Sliders,
  DollarSign
} from 'lucide-react';
import { Topbar } from './components/Topbar';
import { Drawer } from '../components/ui/Drawer';
import { ToastContainer } from '../components/ui/Toast';
import { useResponsive } from '../hooks/useResponsive';

export const OmpLayout = () => {
  const { isMobile, isTablet } = useResponsive();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(isTablet);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [selectedStore, setSelectedStore] = useState('all');
  const location = useLocation();
  const navigate = useNavigate();

  const handleToggleSidebar = () => {
    if (isMobile) {
      setIsMobileDrawerOpen((prev) => !prev);
    } else {
      setIsSidebarCollapsed((prev) => !prev);
    }
  };

  const stores = [
    { id: 'all', name: '🏢 All Locations (Consolidated)', city: 'National Umbrella', activeUnits: 142 },
    { id: 'dallas', name: '📍 Dallas Central Motors', city: 'Dallas, TX', activeUnits: 58 },
    { id: 'houston', name: '📍 Houston North Auto Mall', city: 'Houston, TX', activeUnits: 49 },
    { id: 'austin', name: '📍 Austin West Dealership', city: 'Austin, TX', activeUnits: 35 },
  ];

  const currentStoreObj = stores.find((s) => s.id === selectedStore) || stores[0];

  const navGroups = [
    {
      title: 'Auto Dealer Platform',
      items: [
        { path: '/omp/verified-dealer', label: 'Verified Dealer Hub', icon: ShieldCheck, tag: 'ADP' },
        { path: '/omp/marketplace', label: 'OfferUp Marketplace', icon: ShoppingBag, tag: 'Local' },
        { path: '/omp/top-leads', label: 'Top Lead Indicator (AI)', icon: Sparkles, badge: 'Hot' },
        { path: '/omp/feed-sync', label: 'DMS Inventory Sync', icon: Car, tag: 'Feed' },
      ],
    },
    {
      title: 'Desking & Sales CRM',
      items: [
        { path: '/omp/desking/calculator', label: '60s Deal Calculator', icon: Calculator, tag: '4-Square' },
        { path: '/omp/crm/inbox', label: 'Unified Omnichannel Inbox', icon: Inbox, badge: '5' },
        { path: '/omp/crm/ai-receptionist', label: '24/7 AI Receptionist', icon: PhoneCall, tag: 'Voice AI' },
        { path: '/omp/financing/lenders', label: 'Auto Loans Marketplace', icon: Landmark, tag: 'OAL' },
        { path: '/omp/deals/e-sign', label: 'Digital E-Sign Jackets', icon: FileSignature, tag: 'Legal' },
      ],
    },
    {
      title: 'In-House BHPH & Profit',
      items: [
        { path: '/omp/bhph/suite', label: 'BHPH Collections Suite', icon: Wallet, badge: '$14k' },
        { path: '/omp/finance/roi', label: 'ROI Profit Dashboard', icon: TrendingUp, tag: 'Gross' },
        { path: '/omp/finance/costs', label: 'Receipt & Cost Ledger', icon: Receipt, tag: 'VIN Cost' },
      ],
    },
    {
      title: 'Executive & Multi-Store',
      items: [
        { path: '/omp/executive/central-office', label: 'Central Office Umbrella', icon: Building2, tag: 'Franchise' },
        { path: '/omp/executive/permissions', label: 'Team Roles & RBAC', icon: ShieldAlert, tag: 'Security' },
        { path: '/omp/mobile', label: 'Smartphone Lot App', icon: Smartphone, tag: 'Field App' },
      ],
    },
  ];

  return (
    <div
      style={{
        height: '100vh',
        maxHeight: '100vh',
        width: '100vw',
        maxWidth: '100vw',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'var(--background)',
        color: 'var(--text-primary)',
        overflow: 'hidden',
        fontFamily: 'Inter, system-ui, sans-serif',
      }}
    >
      {/* Exact Same Topbar as CRM nErgy AI (Same Logo, Same User, Same Search & Controls) */}
      <Topbar onToggleSidebar={handleToggleSidebar} product="crm" />

      {/* Sub-Header Bar with Store Switcher & Module Ticker */}
      <div
        style={{
          height: '46px',
          borderBottom: '1px solid var(--border)',
          backgroundColor: 'var(--surface)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 1.25rem',
          flexShrink: 0,
          zIndex: 15,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.82rem', fontWeight: 700, color: 'var(--primary)' }}>
            <Car size={16} />
            <span>OMP DEALS AUTO SUITE</span>
          </div>
          <span style={{ fontSize: '0.7rem', padding: '0.1rem 0.45rem', borderRadius: '9999px', backgroundColor: 'var(--primary-subtle, rgba(2, 132, 199, 0.1))', color: 'var(--primary)', fontWeight: 700 }}>
            ⚡ Dealer Essentials & OfferUp DMS
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {/* Store Switcher */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', backgroundColor: 'var(--background)', border: '1px solid var(--border)', padding: '0.25rem 0.65rem', borderRadius: '6px' }}>
            <Store size={14} color="var(--primary)" />
            <select
              value={selectedStore}
              onChange={(e) => setSelectedStore(e.target.value)}
              style={{ background: 'transparent', border: 'none', color: 'var(--text-primary)', fontSize: '0.78rem', fontWeight: 600, outline: 'none', cursor: 'pointer' }}
            >
              {stores.map((s) => (
                <option key={s.id} value={s.id} style={{ backgroundColor: 'var(--surface)', color: 'var(--text-primary)' }}>
                  {s.name} ({s.activeUnits} Cars)
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={() => navigate('/crm/dashboard')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              backgroundColor: 'var(--background)',
              border: '1px solid var(--border)',
              color: 'var(--text-secondary)',
              padding: '0.3rem 0.65rem',
              borderRadius: '6px',
              fontSize: '0.75rem',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            <Layers size={13} /> Back to CRM Home
          </button>
        </div>
      </div>

      {/* Main Body Shell */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          overflow: 'hidden',
          height: 'calc(100vh - var(--topbar-height) - 46px)',
          maxHeight: 'calc(100vh - var(--topbar-height) - 46px)',
        }}
      >
        {/* Unified Light/Consistent Left Sidebar */}
        <aside
          style={{
            width: isSidebarCollapsed ? '72px' : '260px',
            backgroundColor: 'var(--surface)',
            borderRight: '1px solid var(--border)',
            display: 'flex',
            flexDirection: 'column',
            overflowY: 'auto',
            padding: '0.85rem 0.6rem',
            gap: '1rem',
            flexShrink: 0,
            transition: 'width 0.2s ease',
          }}
        >
          {navGroups.map((group, gIdx) => (
            <div key={gIdx} style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
              {!isSidebarCollapsed && (
                <div style={{ fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-tertiary)', fontWeight: 700, padding: '0 0.5rem 0.25rem 0.5rem' }}>
                  {group.title}
                </div>
              )}
              {group.items.map((item, iIdx) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path || location.pathname.startsWith(item.path);
                return (
                  <NavLink
                    key={iIdx}
                    to={item.path}
                    title={isSidebarCollapsed ? item.label : undefined}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: isSidebarCollapsed ? 'center' : 'space-between',
                      padding: '0.5rem 0.65rem',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      fontSize: '0.82rem',
                      fontWeight: isActive ? 600 : 500,
                      backgroundColor: isActive ? 'var(--primary-subtle, rgba(2, 132, 199, 0.1))' : 'transparent',
                      color: isActive ? 'var(--primary)' : 'var(--text-secondary)',
                      borderLeft: !isSidebarCollapsed && isActive ? '3px solid var(--primary)' : '3px solid transparent',
                      transition: 'all 0.15s ease',
                    }}
                    onMouseOver={(e) => {
                      if (!isActive) e.currentTarget.style.backgroundColor = 'var(--background)';
                    }}
                    onMouseOut={(e) => {
                      if (!isActive) e.currentTarget.style.backgroundColor = 'transparent';
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                      <Icon size={17} color={isActive ? 'var(--primary)' : 'var(--text-secondary)'} />
                      {!isSidebarCollapsed && <span>{item.label}</span>}
                    </div>
                    {!isSidebarCollapsed && item.badge && (
                      <span style={{ fontSize: '0.65rem', padding: '0.1rem 0.4rem', borderRadius: '4px', backgroundColor: '#ef4444', color: '#fff', fontWeight: 700 }}>
                        {item.badge}
                      </span>
                    )}
                    {!isSidebarCollapsed && item.tag && !item.badge && (
                      <span style={{ fontSize: '0.65rem', padding: '0.1rem 0.35rem', borderRadius: '4px', backgroundColor: 'var(--background)', color: 'var(--text-tertiary)', border: '1px solid var(--border)' }}>
                        {item.tag}
                      </span>
                    )}
                  </NavLink>
                );
              })}
            </div>
          ))}

          {/* Lot Stats Mini Summary */}
          {!isSidebarCollapsed && (
            <div style={{ marginTop: 'auto', padding: '0.75rem', borderRadius: '8px', backgroundColor: 'var(--background)', border: '1px solid var(--border)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: 'var(--text-secondary)' }}>
                <span>Store Inventory</span>
                <span style={{ fontWeight: 700, color: 'var(--primary)' }}>{currentStoreObj.activeUnits} Cars</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                <span>MTD Profit</span>
                <span style={{ fontWeight: 700, color: '#10b981' }}>+$128.4k</span>
              </div>
            </div>
          )}
        </aside>

        {/* Main Content Area */}
        <main
          style={{
            flex: 1,
            height: '100%',
            overflowY: 'auto',
            overflowX: 'hidden',
            backgroundColor: 'var(--background)',
            padding: '1.5rem',
            boxSizing: 'border-box',
          }}
        >
          <Outlet context={{ selectedStore, currentStoreObj }} />
        </main>
      </div>

      <ToastContainer />
    </div>
  );
};
