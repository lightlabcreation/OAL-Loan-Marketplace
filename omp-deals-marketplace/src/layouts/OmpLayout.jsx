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
  Truck,
  PlusCircle,
  Key
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { OmpAiAgentModal } from '../components/OmpAiAgentModal';
import { PoliceSafeSpotsModal } from '../components/PoliceSafeSpotsModal';
import { ShippingCalculatorModal } from '../components/ShippingCalculatorModal';

export const OmpLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
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

  // Role-Based Navigation Groups (Strict RBAC Matching Client Documents)
  const allNavGroups = [
    {
      id: 'core_marketplace',
      group: 'Marketplace Categories',
      roles: ['GUEST', 'MEMBER', 'DEALER_PRO', 'SERVICE_PRO', 'EXECUTIVE_ADMIN'],
      items: [
        { path: '/for-sale', label: 'For Sale', icon: ShoppingBag, tag: 'General' },
        { path: '/cars-trucks', label: 'AI Cars & Trucks', icon: Car, tag: 'Taxonomy' },
        { path: '/services', label: 'Local Services', icon: Wrench, tag: '30+ Pros' },
        { path: '/jobs', label: 'Job Finder', icon: Briefcase, tag: '35 Domains' },
        { path: '/real-estate', label: 'Real Estate', icon: Home, tag: 'Rent/Buy' },
        { path: '/businesses', label: 'Business For Sale', icon: Building, tag: 'Turnkey' },
        { path: '/looking-for', label: 'Looking For', icon: Search, tag: 'Wanted' },
        { path: '/my-fav', label: 'MyFav & OMP AI', icon: Heart, badge: myFavList.length },
      ],
    },
    {
      id: 'member_suite',
      group: 'My Member & Seller Tools',
      roles: ['MEMBER'],
      items: [
        { path: '/post-ad', label: 'Post a Fast Listing (30s)', icon: PlusCircle, tag: 'Fast Ad' },
        { path: '/my-fav', label: 'My Saved Ads & Pinned', icon: Heart, badge: myFavList.length },
      ],
    },
    {
      id: 'dealers_hub',
      group: 'Marketplace & Verified Dealers',
      roles: ['DEALER_PRO', 'EXECUTIVE_ADMIN'],
      items: [
        { path: '/omp/marketplace', label: 'OfferUp Marketplace', icon: ShoppingBag, tag: 'B2C/B2B' },
        { path: '/omp/verified-dealer', label: 'Verified Dealer Hub', icon: ShieldCheck, tag: 'ADP' },
        { path: '/omp/verify', label: 'Dealer Onboarding', icon: CheckCircle2, tag: '4-Step' },
        { path: '/omp/feed-sync', label: 'DMS Feed Sync', icon: RefreshCw, tag: 'Auto' },
        { path: '/omp/top-leads', label: 'AI Top Lead Radar', icon: Target, badge: 'AI Hot' },
      ],
    },
    {
      id: 'stock_recon',
      group: 'Stock The Lot & Recon',
      roles: ['DEALER_PRO', 'EXECUTIVE_ADMIN'],
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
      id: 'sales_crm',
      group: 'Desking & Sales CRM',
      roles: ['DEALER_PRO', 'EXECUTIVE_ADMIN'],
      items: [
        { path: '/omp/desking/calculator', label: '60s Deal Calculator', icon: Calculator, tag: '4-Square' },
        { path: '/omp/crm/inbox', label: 'Unified Omnichannel Inbox', icon: Inbox, badge: '5' },
        { path: '/omp/crm/ai-receptionist', label: '24/7 AI Receptionist', icon: PhoneCall, tag: 'Voice AI' },
        { path: '/omp/financing/lenders', label: 'Auto Loans Marketplace', icon: Landmark, tag: 'OAL' },
        { path: '/omp/deals/e-sign', label: 'Digital E-Sign Jackets', icon: FileSignature, tag: 'Legal' },
      ],
    },
    {
      id: 'service_pro_tools',
      group: 'Service Pro & Recruiting Suite',
      roles: ['SERVICE_PRO'],
      items: [
        { path: '/services', label: 'My Service Listings & Quotes', icon: Wrench, tag: 'Direct' },
        { path: '/jobs', label: 'Post Job Openings & Hires', icon: Briefcase, tag: 'Recruit' },
        { path: '/post-ad', label: 'Post Pro Service Ad', icon: PlusCircle, tag: 'Post' },
      ],
    },
    {
      id: 'bhph_profit',
      group: 'In-House BHPH & Profit',
      roles: ['DEALER_PRO', 'EXECUTIVE_ADMIN'],
      items: [
        { path: '/omp/bhph/suite', label: 'BHPH Collections Suite', icon: Wallet, badge: '$14k' },
        { path: '/omp/finance/roi', label: 'ROI Profit Dashboard', icon: TrendingUp, tag: 'Gross' },
        { path: '/omp/finance/costs', label: 'Receipt & Cost Ledger', icon: Receipt, tag: 'VIN Cost' },
      ],
    },
    {
      id: 'executive_master',
      group: 'Executive & Multi-Store Umbrella',
      roles: ['EXECUTIVE_ADMIN'],
      items: [
        { path: '/omp/executive/central-office', label: 'Central Office Umbrella', icon: Building2, tag: 'Franchise' },
        { path: '/omp/executive/permissions', label: 'Team Roles & RBAC', icon: ShieldAlert, tag: 'Security' },
        { path: '/omp/mobile', label: 'Smartphone Lot App', icon: Smartphone, tag: 'Field App' },
      ],
    },
  ];

  // Filter groups dynamically according to currently logged in role
  const currentRoleId = currentUser?.id || 'GUEST';
  const navGroups = allNavGroups.filter((g) => g.roles.includes(currentRoleId));

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

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
        <NavLink to="/marketplace" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
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

        {/* Action Tools & Role Management */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* Post Ad 30s Fast Button */}
          <NavLink
            to="/post-ad"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: '#10b981',
              color: '#ffffff',
              padding: '7px 14px',
              borderRadius: '8px',
              fontSize: '12.5px',
              fontWeight: 800,
              textDecoration: 'none',
              boxShadow: '0 2px 8px rgba(16, 185, 129, 0.3)',
            }}
          >
            <PlusCircle size={15} />
            <span>+ Post Ad (30s)</span>
          </NavLink>

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

          {/* Role Status & Auth Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', borderLeft: '1px solid var(--border)', paddingLeft: '10px' }}>
            {currentRoleId === 'GUEST' ? (
              <NavLink
                to="/login"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '12px',
                  fontWeight: 800,
                  color: '#ffffff',
                  backgroundColor: '#0284c7',
                  padding: '6px 14px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  boxShadow: '0 2px 8px rgba(2, 132, 199, 0.3)',
                }}
              >
                <Key size={13} />
                <span>Sign In / Roles</span>
              </NavLink>
            ) : (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
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
                    border: '1px solid var(--border)',
                    padding: '6px 10px',
                    borderRadius: '8px',
                    textDecoration: 'none',
                  }}
                  title="Switch Role"
                >
                  <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#10b981', display: 'inline-block' }} />
                  <span>{currentUser.roleName.split(' ')[0]}</span>
                  <span style={{ fontSize: '10px', backgroundColor: 'rgba(2, 132, 199, 0.15)', color: '#0284c7', padding: '1px 5px', borderRadius: '4px', fontWeight: 800 }}>
                    {currentUser.badge}
                  </span>
                </NavLink>

                <button
                  onClick={handleLogout}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    backgroundColor: 'rgba(239, 68, 68, 0.1)',
                    border: '1px solid rgba(239, 68, 68, 0.25)',
                    color: '#ef4444',
                    padding: '6px 10px',
                    borderRadius: '8px',
                    fontSize: '11.5px',
                    fontWeight: 700,
                    cursor: 'pointer',
                  }}
                  title="Logout to Guest mode"
                >
                  <LogOut size={13} />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* 2. SUBHEADER WITH ACTIVE ROLE & STORE STATUS */}
      <div
        style={{
          height: '44px',
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '12px', fontWeight: 700, color: '#0284c7' }}>
            <Car size={14} />
            <span>
              {currentRoleId === 'GUEST' && 'PUBLIC OFFERUP MARKETPLACE'}
              {currentRoleId === 'MEMBER' && 'MEMBER VERIFIED SELLER PORTAL'}
              {currentRoleId === 'DEALER_PRO' && 'ADP DEALER ESSENTIALS & LOT DMS'}
              {currentRoleId === 'SERVICE_PRO' && 'SERVICE PRO & RECRUITING HUB'}
              {currentRoleId === 'EXECUTIVE_ADMIN' && 'EXECUTIVE CENTRAL OFFICE UMBRELLA'}
            </span>
          </div>

          <span style={{ fontSize: '10.5px', padding: '2px 8px', borderRadius: '9999px', backgroundColor: 'rgba(16, 185, 129, 0.12)', color: '#10b981', fontWeight: 700 }}>
            Active Mode: {currentUser.roleName}
          </span>
        </div>

        {/* Store Switcher for Dealers & Executives */}
        {(currentRoleId === 'DEALER_PRO' || currentRoleId === 'EXECUTIVE_ADMIN') ? (
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
                fontSize: '11.5px',
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
        ) : (
          <div style={{ fontSize: '11.5px', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <MapPin size={13} color="#0284c7" />
            <span>Browsing near <strong>{selectedLocation}</strong> within {selectedRadius} miles</span>
          </div>
        )}
      </div>

      {/* 3. MAIN BODY WITH ROLE-FILTERED SIDEBAR */}
      <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
        {/* Left Sidebar */}
        <aside
          style={{
            width: '265px',
            backgroundColor: 'var(--surface)',
            borderRight: '1px solid var(--border)',
            display: 'flex',
            flexDirection: 'column',
            overflowY: 'auto',
            padding: '12px 10px',
            flexShrink: 0,
            gap: '16px',
          }}
        >
          {navGroups.map((group, gIdx) => (
            <div key={gIdx} style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
              <div style={{ fontSize: '10.5px', fontWeight: 800, color: 'var(--text-secondary)', padding: '4px 10px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                {group.group}
              </div>

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
                      padding: '8px 10px',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      backgroundColor: isActive ? 'rgba(2, 132, 199, 0.12)' : 'transparent',
                      color: isActive ? '#0284c7' : 'var(--text-primary)',
                      fontWeight: isActive ? 700 : 500,
                      fontSize: '12.5px',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Icon size={16} color={isActive ? '#0284c7' : 'var(--text-secondary)'} />
                      <span>{item.label}</span>
                    </div>

                    {item.tag && (
                      <span style={{ fontSize: '10px', padding: '1px 6px', borderRadius: '4px', backgroundColor: 'var(--surface-secondary)', color: 'var(--text-secondary)', fontWeight: 600 }}>
                        {item.tag}
                      </span>
                    )}

                    {item.badge !== undefined && (
                      <span style={{ fontSize: '10px', padding: '1px 6px', borderRadius: '9999px', backgroundColor: '#0284c7', color: '#ffffff', fontWeight: 800 }}>
                        {item.badge}
                      </span>
                    )}
                  </NavLink>
                );
              })}
            </div>
          ))}
        </aside>

        {/* Main Content Area */}
        <main
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '24px 30px',
            backgroundColor: 'var(--background)',
          }}
        >
          <Outlet />
        </main>
      </div>

      {/* Modals */}
      <OmpAiAgentModal isOpen={isAiModalOpen} onClose={() => setIsAiModalOpen(false)} />
      <PoliceSafeSpotsModal isOpen={isSafeSpotsOpen} onClose={() => setIsSafeSpotsOpen(false)} />
      <ShippingCalculatorModal isOpen={isShippingOpen} onClose={() => setIsShippingOpen(false)} />
    </div>
  );
};
