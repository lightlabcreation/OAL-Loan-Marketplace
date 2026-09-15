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
  Menu,
  X,
  Store,
  Layers,
  CheckCircle2,
  Activity,
  Car,
  ShoppingBag,
  RefreshCw,
  Target,
  Camera,
  Wrench,
  Share2,
  Globe
} from 'lucide-react';
import { ToastContainer } from '../components/ui/Toast';

export const OmpLayout = () => {
  const [selectedStore, setSelectedStore] = useState('all');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const stores = [
    { id: 'all', name: '🏢 All Locations (Consolidated)', city: 'National Umbrella', activeUnits: 142 },
    { id: 'dallas', name: '📍 Dallas Central Motors', city: 'Dallas, TX', activeUnits: 58 },
    { id: 'houston', name: '📍 Houston North Auto Mall', city: 'Houston, TX', activeUnits: 49 },
    { id: 'austin', name: '📍 Austin West Dealership', city: 'Austin, TX', activeUnits: 35 },
  ];

  const currentStoreObj = stores.find((s) => s.id === selectedStore) || stores[0];

  const navItems = [
    {
      group: 'Marketplace & Verified Dealers',
      items: [
        { path: '/omp/marketplace', label: 'OfferUp Marketplace (O-01)', icon: ShoppingBag, tag: 'B2C/B2B' },
        { path: '/omp/verified-dealer', label: 'Verified Dealer Hub (V-02)', icon: ShieldCheck, tag: 'ADP Tier' },
        { path: '/omp/verify', label: 'Dealer Onboarding (V-01)', icon: CheckCircle2, tag: '4-Step' },
        { path: '/omp/feed-sync', label: 'DMS Feed Sync (V-03)', icon: RefreshCw, tag: 'Auto' },
        { path: '/omp/top-leads', label: 'AI Top Lead Radar (N-01)', icon: Target, badge: 'AI Hot' },
      ],
    },
    {
      group: 'Pillar 1: Stock The Lot',
      items: [
        { path: '/omp/vin-scanner', label: 'VIN Scanner & Bookout (E-02)', icon: Camera, tag: 'Optical' },
        { path: '/omp/market-pricing', label: 'AI RealPrice™ AIMP (E-03)', icon: TrendingUp, tag: 'Matrix' },
        { path: '/omp/title-search', label: 'NMVTIS Title & Lien (E-04)', icon: FileSignature, tag: '50-State' },
        { path: '/omp/recon-center', label: 'Recon & Repair ROM (E-05)', icon: Wrench, tag: 'Cost' },
      ],
    },
    {
      group: 'Pillar 2: Attract Buyers',
      items: [
        { path: '/omp/photo-genius', label: 'PhotoGenius AI Media (E-06)', icon: Sparkles, tag: '3D Walk' },
        { path: '/omp/postmaster', label: 'AI Postmaster Social (E-07)', icon: Share2, tag: 'Syndicate' },
        { path: '/omp/web-builder', label: 'Dealer WebBuilder (E-08)', icon: Globe, tag: 'Instant' },
      ],
    },
    {
      group: 'Pillar 4: Executive & Multi-Store',
      items: [
        { path: '/omp/executive/central-office', label: 'Central Office (E-01)', icon: Building2, tag: 'Umbrella' },
        { path: '/omp/executive/permissions', label: 'Team Roles & RBAC (E-19)', icon: ShieldCheck, tag: 'Security' },
      ],
    },
    {
      group: 'Pillar 3: Omnichannel & AI CRM',
      items: [
        { path: '/omp/crm/inbox', label: 'Unified Inbox (E-11)', icon: Inbox, badge: '5 New' },
        { path: '/omp/crm/ai-receptionist', label: 'AI Receptionist (E-12)', icon: PhoneCall, tag: '24/7 AI' },
      ],
    },
    {
      group: 'Pillar 3: Desking & Deals',
      items: [
        { path: '/omp/desking/calculator', label: '60s Deal Calculator (E-13)', icon: Calculator, tag: '4-Square' },
        { path: '/omp/financing/lenders', label: 'Auto Loans Pool (E-14)', icon: Landmark, tag: 'OAL Net' },
        { path: '/omp/deals/e-sign', label: 'Digital E-Sign (E-15)', icon: FileSignature, tag: 'Paperless' },
      ],
    },
    {
      group: 'Pillar 4: Profit & In-House BHPH',
      items: [
        { path: '/omp/finance/roi', label: 'ROI Profit Matrix (E-16)', icon: TrendingUp, tag: 'Realtime' },
        { path: '/omp/finance/costs', label: 'Receipt & Cost (E-17)', icon: Receipt, tag: 'VIN Cost' },
        { path: '/omp/bhph/suite', label: 'BHPH Management (E-18)', icon: Wallet, badge: '$14.2k Due' },
      ],
    },
    {
      group: 'Mobile & Field App',
      items: [
        { path: '/omp/mobile', label: 'Mobile Dealer View (E-20)', icon: Smartphone, tag: 'Lot App' },
      ],
    },
  ];

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#090d16', color: '#f1f5f9', overflow: 'hidden', fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Top Header */}
      <header style={{ height: '64px', borderBottom: '1px solid rgba(255,255,255,0.08)', backgroundColor: 'rgba(15, 23, 42, 0.85)', backdropFilter: 'blur(16px)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 1.25rem', zIndex: 30, flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ display: 'none', background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer', padding: '0.25rem' }}
            className="omp-mobile-toggle"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', cursor: 'pointer' }} onClick={() => navigate('/omp/marketplace')}>
            <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'linear-gradient(135deg, #0284c7 0%, #38bdf8 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 16px rgba(56,189,248,0.35)' }}>
              <Car size={20} color="#ffffff" />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontWeight: 800, fontSize: '1.05rem', letterSpacing: '-0.02em', background: 'linear-gradient(to right, #ffffff, #93c5fd)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  OMP DEALS & MARKETPLACE
                </span>
                <span style={{ fontSize: '0.65rem', padding: '0.1rem 0.45rem', borderRadius: '9999px', backgroundColor: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', border: '1px solid rgba(56, 189, 248, 0.3)', fontWeight: 700 }}>
                  ⚡ UNIFIED AUTO DMS
                </span>
              </div>
              <span style={{ fontSize: '0.72rem', color: '#64748b' }}>OfferUp Marketplace, Verified Dealers, Desking & Lot Operations</span>
            </div>
          </div>
        </div>

        {/* Store Location Switcher & Quick Navigation */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'rgba(30, 41, 59, 0.8)', border: '1px solid rgba(255,255,255,0.1)', padding: '0.35rem 0.75rem', borderRadius: '10px' }}>
            <Store size={16} color="#38bdf8" />
            <select
              value={selectedStore}
              onChange={(e) => setSelectedStore(e.target.value)}
              style={{ background: 'transparent', border: 'none', color: '#f8fafc', fontSize: '0.85rem', fontWeight: 600, outline: 'none', cursor: 'pointer' }}
            >
              {stores.map((s) => (
                <option key={s.id} value={s.id} style={{ backgroundColor: '#0f172a', color: '#f8fafc' }}>
                  {s.name} ({s.activeUnits} Units)
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={() => navigate('/crm/dashboard')}
            style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#94a3b8', padding: '0.4rem 0.8rem', borderRadius: '8px', fontSize: '0.8rem', fontWeight: 500, cursor: 'pointer', transition: 'all 0.2s' }}
            onMouseOver={(e) => (e.currentTarget.style.color = '#38bdf8')}
            onMouseOut={(e) => (e.currentTarget.style.color = '#94a3b8')}
          >
            <Layers size={14} /> Back to CRM
          </button>
        </div>
      </header>

      {/* Main Body */}
      <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
        {/* Left Sidebar Navigation */}
        <aside
          style={{
            width: '260px',
            backgroundColor: 'rgba(15, 23, 42, 0.65)',
            borderRight: '1px solid rgba(255,255,255,0.06)',
            backdropFilter: 'blur(12px)',
            display: 'flex',
            flexDirection: 'column',
            overflowY: 'auto',
            padding: '1rem 0.75rem',
            gap: '1.25rem',
            flexShrink: 0,
          }}
        >
          {navItems.map((group, gIdx) => (
            <div key={gIdx}>
              <div style={{ fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#64748b', fontWeight: 700, padding: '0 0.5rem 0.4rem 0.5rem' }}>
                {group.group}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                {group.items.map((item, iIdx) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.path;
                  return (
                    <NavLink
                      key={iIdx}
                      to={item.path}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0.55rem 0.75rem',
                        borderRadius: '8px',
                        textDecoration: 'none',
                        fontSize: '0.82rem',
                        fontWeight: isActive ? 600 : 500,
                        backgroundColor: isActive ? 'rgba(56, 189, 248, 0.12)' : 'transparent',
                        color: isActive ? '#38bdf8' : '#cbd5e1',
                        borderLeft: isActive ? '3px solid #38bdf8' : '3px solid transparent',
                        transition: 'all 0.15s ease',
                      }}
                      onMouseOver={(e) => {
                        if (!isActive) e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.04)';
                      }}
                      onMouseOut={(e) => {
                        if (!isActive) e.currentTarget.style.backgroundColor = 'transparent';
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                        <Icon size={16} color={isActive ? '#38bdf8' : '#94a3b8'} />
                        <span>{item.label}</span>
                      </div>
                      {item.badge && (
                        <span style={{ fontSize: '0.65rem', padding: '0.1rem 0.4rem', borderRadius: '6px', backgroundColor: '#ef4444', color: '#fff', fontWeight: 700 }}>
                          {item.badge}
                        </span>
                      )}
                      {item.tag && !item.badge && (
                        <span style={{ fontSize: '0.65rem', padding: '0.1rem 0.35rem', borderRadius: '4px', backgroundColor: 'rgba(255,255,255,0.06)', color: '#94a3b8' }}>
                          {item.tag}
                        </span>
                      )}
                    </NavLink>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Quick Stats Ticker Bottom */}
          <div style={{ marginTop: 'auto', padding: '0.75rem', borderRadius: '10px', background: 'linear-gradient(180deg, rgba(30, 41, 59, 0.5) 0%, rgba(15, 23, 42, 0.8) 100%)', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
              <span style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Active Lot Inventory</span>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#38bdf8' }}>{currentStoreObj.activeUnits} Cars</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '0.7rem', color: '#94a3b8' }}>MTD Gross Profit</span>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#10b981' }}>+$128,450</span>
            </div>
          </div>
        </aside>

        {/* Content Outlet Area */}
        <main style={{ flex: 1, overflowY: 'auto', backgroundColor: '#090d16', padding: '1.5rem', boxSizing: 'border-box' }}>
          <Outlet context={{ selectedStore, currentStoreObj }} />
        </main>
      </div>

      <ToastContainer />
    </div>
  );
};
