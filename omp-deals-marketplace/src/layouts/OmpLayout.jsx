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
  RefreshCw,
  Target,
  Camera,
  Wrench,
  Share2,
  Globe,
  Sun,
  Moon,
  Briefcase,
  Home,
  Building,
  Search,
  Heart,
  User,
  LogOut,
  MapPin,
  Truck
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { OmpAiAgentModal } from '../components/OmpAiAgentModal';
import { PoliceSafeSpotsModal } from '../components/PoliceSafeSpotsModal';
import { ShippingCalculatorModal } from '../components/ShippingCalculatorModal';

export const OmpLayout = () => {
  const { currentUser, logout, theme, toggleTheme, selectedLocation, selectedRadius, myFavList } = useAuth();
  const [selectedStore, setSelectedStore] = useState('all');
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);
  const [isSafeSpotsOpen, setIsSafeSpotsOpen] = useState(false);
  const [isShippingOpen, setIsShippingOpen] = useState(false);

  const stores = [
    { id: 'all', name: '🏢 All Locations (Consolidated)', city: 'National Umbrella', activeUnits: 142 },
    { id: 'dallas', name: '📍 Dallas Central Motors', city: 'Dallas, TX', activeUnits: 58 },
    { id: 'houston', name: '📍 Houston North Auto Mall', city: 'Houston, TX', activeUnits: 49 },
    { id: 'austin', name: '📍 Austin West Dealership', city: 'Austin, TX', activeUnits: 35 },
  ];

  const navGroups = [
    {
      group: '8 Core Marketplace Categories (OfferUp)',
      items: [
        { path: '/for-sale', label: '1. For Sale (General Items)', icon: ShoppingBag, tag: 'All Items' },
        { path: '/cars-trucks', label: '2. AI Cars & Trucks', icon: Car, tag: 'Taxonomy' },
        { path: '/services', label: '3. Local Services', icon: Wrench, tag: '30+ Pros' },
        { path: '/jobs', label: '4. Job Finder', icon: Briefcase, tag: '35 Domains' },
        { path: '/real-estate', label: '5. Real Estate', icon: Home, tag: 'Rent/Buy' },
        { path: '/businesses', label: '6. Business For Sale', icon: Building, tag: 'Turnkey' },
        { path: '/looking-for', label: '7. Looking For', icon: Search, tag: 'Wanted' },
        { path: '/my-fav', label: '8. MyFav & OMP AI Agent', icon: Heart, badge: myFavList.length },
      ],
    },
    {
      group: 'Marketplace & Verified Dealers',
      items: [
        { path: '/omp/marketplace', label: 'OfferUp Marketplace', icon: ShoppingBag, tag: 'B2C/B2B' },
        { path: '/omp/verified-dealer', label: 'Verified Dealer Hub', icon: ShieldCheck, tag: 'ADP' },
        { path: '/omp/verify', label: 'Dealer Onboarding', icon: CheckCircle2, tag: '4-Step' },
        { path: '/omp/feed-sync', label: 'DMS Feed Sync', icon: RefreshCw, tag: 'Auto' },
        { path: '/omp/top-leads', label: 'AI Top Lead Radar', icon: Target, badge: 'AI Hot' },
      ],
    },
    {
      group: 'Stock The Lot & Recon',
      items: [
        { path: '/omp/vin-scanner', label: 'VIN Scanner & Bookout', icon: Camera, tag: 'Optical' },
        { path: '/omp/market-pricing', label: 'AI RealPrice™ Matrix', icon: TrendingUp, tag: 'Matrix' },
        { path: '/omp/title-search', label: 'NMVTIS Title & Lien', icon: FileSignature, tag: '50-State' },
        { path: '/omp/recon-center', label: 'Recon & Repair ROM', icon: Wrench, tag: 'Cost' },
        { path: '/omp/photo-genius', label: 'PhotoGenius AI Media', icon: Sparkles, tag: '3D Walk' },
        { path: '/omp/postmaster', label: 'AI Postmaster Social', icon: Share2, tag: 'Syndicate' },
        { path: '/omp/web-builder', label: 'Dealer WebBuilder', icon: Globe, tag: 'Instant' },
      ],
    },
    {
      group: 'Desking & Sales CRM',
      items: [
        { path: '/omp/desking/calculator', label: '60s Deal Calculator', icon: Calculator, tag: '4-Square' },
        { path: '/omp/crm/inbox', label: 'Unified Omnichannel Inbox', icon: Inbox, badge: '5' },
        { path: '/omp/crm/ai-receptionist', label: '24/7 AI Receptionist', icon: PhoneCall, tag: 'Voice AI' },
        { path: '/omp/financing/lenders', label: 'Auto Loans Marketplace', icon: Landmark, tag: 'OAL' },
        { path: '/omp/deals/e-sign', label: 'Digital E-Sign Jackets', icon: FileSignature, tag: 'Legal' },
      ],
    },
    {
      group: 'In-House BHPH & Profit',
      items: [
        { path: '/omp/bhph/suite', label: 'BHPH Collections Suite', icon: Wallet, badge: '$14k' },
        { path: '/omp/finance/roi', label: 'ROI Profit Dashboard', icon: TrendingUp, tag: 'Gross' },
        { path: '/omp/finance/costs', label: 'Receipt & Cost Ledger', icon: Receipt, tag: 'VIN Cost' },
      ],
    },
    {
      group: 'Executive & Multi-Store',
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
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'var(--background)',
        color: 'var(--text-primary)',
        overflow: 'hidden',
        fontFamily: 'Inter, system-ui, sans-serif',
      }}
    >
      {/* 1. TOPBAR */}
      <header
        style={{
          height: '60px',
          borderBottom: '1px solid var(--border)',
          backgroundColor: 'var(--surface)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 20px',
          flexShrink: 0,
          zIndex: 50,
        }}
      >
        {/* Brand */}
        <NavLink to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #0284c7 0%, #38bdf8 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              boxShadow: '0 2px 10px rgba(2, 132, 199, 0.35)',
            }}
          >
            <ShoppingBag size={20} />
          </div>
          <div>
            <div style={{ fontSize: '17px', fontWeight: 900, color: 'var(--text-primary)', lineHeight: 1 }}>
              OMP DEALS AUTO SUITE
            </div>
            <div style={{ fontSize: '10px', fontWeight: 700, color: '#0284c7', textTransform: 'uppercase', marginTop: '2px' }}>
              AI Marketplace & Dealer DMS
            </div>
          </div>
        </NavLink>

        {/* Action Tools */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            onClick={() => setIsAiModalOpen(true)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              background: 'linear-gradient(135deg, #0284c7, #38bdf8)',
              color: '#ffffff',
              border: 'none',
              padding: '7px 14px',
              borderRadius: '8px',
              fontSize: '12px',
              fontWeight: 700,
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(2, 132, 199, 0.3)',
            }}
          >
            <Sparkles size={14} />
            <span>Ask OMP AI</span>
          </button>

          <button
            onClick={() => setIsSafeSpotsOpen(true)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              backgroundColor: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              color: '#10b981',
              padding: '6px 12px',
              borderRadius: '8px',
              fontSize: '12px',
              fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            <ShieldCheck size={14} />
            <span>1,600+ Safe Spots</span>
          </button>

          <button
            onClick={() => setIsShippingOpen(true)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              backgroundColor: 'var(--surface-secondary)',
              border: '1px solid var(--border)',
              color: 'var(--text-primary)',
              padding: '6px 12px',
              borderRadius: '8px',
              fontSize: '12px',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            <Truck size={14} color="#0284c7" />
            <span>Shipping</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-secondary)',
              cursor: 'pointer',
              padding: '6px',
            }}
            title="Toggle Theme"
          >
            {theme === 'light' ? <Moon size={16} /> : <Sun size={16} color="#fbbf24" />}
          </button>

          {/* User Role / Logout */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', borderLeft: '1px solid var(--border)', paddingLeft: '12px' }}>
            <NavLink
              to="/login"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '12px',
                fontWeight: 700,
                color: 'var(--text-primary)',
                backgroundColor: 'var(--surface-secondary)',
                padding: '6px 12px',
                borderRadius: '8px',
                textDecoration: 'none',
              }}
            >
              <User size={14} color="#0284c7" />
              <span>{currentUser.roleName.split(' ')[0]}</span>
            </NavLink>
          </div>
        </div>
      </header>

      {/* 2. SUBHEADER WITH DEALER STORE SWITCHER */}
      <div
        style={{
          height: '46px',
          borderBottom: '1px solid var(--border)',
          backgroundColor: 'var(--surface-secondary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 20px',
          flexShrink: 0,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '12.5px', fontWeight: 700, color: '#0284c7' }}>
            <Car size={15} />
            <span>DEALER ESSENTIALS & OFFERUP DMS</span>
          </div>
          <span style={{ fontSize: '11px', padding: '2px 8px', borderRadius: '9999px', backgroundColor: 'rgba(2, 132, 199, 0.12)', color: '#0284c7', fontWeight: 700 }}>
            ⚡ 184 DMS Lot Vehicles
          </span>
        </div>

        {/* Store Switcher */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Store size={14} color="#0284c7" />
          <select
            value={selectedStore}
            onChange={(e) => setSelectedStore(e.target.value)}
            style={{
              backgroundColor: 'var(--surface)',
              border: '1px solid var(--border)',
              padding: '4px 10px',
              borderRadius: '6px',
              color: 'var(--text-primary)',
              fontSize: '12px',
              fontWeight: 600,
              outline: 'none',
              cursor: 'pointer',
            }}
          >
            {stores.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name} ({s.activeUnits} Cars)
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* 3. BODY (SIDEBAR + OUTLET) */}
      <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
        {/* Master Sidebar */}
        <aside
          style={{
            width: '270px',
            backgroundColor: 'var(--surface)',
            borderRight: '1px solid var(--border)',
            display: 'flex',
            flexDirection: 'column',
            overflowY: 'auto',
            flexShrink: 0,
            padding: '12px',
          }}
        >
          {navGroups.map((grp, gIdx) => (
            <div key={gIdx} style={{ marginBottom: '18px' }}>
              <div style={{ fontSize: '10.5px', fontWeight: 800, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.06em', padding: '4px 8px 6px' }}>
                {grp.group}
              </div>
              {grp.items.map((item) => {
                const Icon = item.icon;
                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    style={({ isActive }) => ({
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '8px 10px',
                      borderRadius: '8px',
                      fontSize: '12.5px',
                      fontWeight: isActive ? 700 : 500,
                      backgroundColor: isActive ? 'rgba(2, 132, 199, 0.12)' : 'transparent',
                      color: isActive ? '#0284c7' : 'var(--text-primary)',
                      textDecoration: 'none',
                      marginBottom: '2px',
                    })}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      <Icon size={15} style={{ flexShrink: 0 }} />
                      <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.label}</span>
                    </div>
                    {item.badge && (
                      <span style={{ fontSize: '10px', backgroundColor: '#ef4444', color: '#fff', padding: '1px 5px', borderRadius: '4px', fontWeight: 800 }}>
                        {item.badge}
                      </span>
                    )}
                    {item.tag && (
                      <span style={{ fontSize: '10px', backgroundColor: 'var(--surface-secondary)', border: '1px solid var(--border)', color: 'var(--text-secondary)', padding: '1px 5px', borderRadius: '4px' }}>
                        {item.tag}
                      </span>
                    )}
                  </NavLink>
                );
              })}
            </div>
          ))}
        </aside>

        {/* Scrollable Content View */}
        <main style={{ flex: 1, overflowY: 'auto', padding: '24px 20px 80px', backgroundColor: 'var(--background)' }}>
          <Outlet />
        </main>
      </div>

      {/* Global Modals */}
      <OmpAiAgentModal isOpen={isAiModalOpen} onClose={() => setIsAiModalOpen(false)} />
      <PoliceSafeSpotsModal isOpen={isSafeSpotsOpen} onClose={() => setIsSafeSpotsOpen(false)} />
      <ShippingCalculatorModal isOpen={isShippingOpen} onClose={() => setIsShippingOpen(false)} />
    </div>
  );
};
