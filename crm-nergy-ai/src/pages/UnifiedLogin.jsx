import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  ShieldCheck,
  User,
  Building2,
  Lock,
  Mail,
  ArrowRight,
  TrendingUp,
  DollarSign,
  Users,
  Landmark,
  Shield,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  Video,
  Megaphone,
  Share2,
  Sliders,
  Kanban,
  ShieldAlert,
  Eye,
  EyeOff,
  Briefcase,
  UserCheck,
  Zap,
  Globe
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { SHOW_OAL } from '../config/features';
import { AiEnergyLogo } from '../components/common/AiEnergyLogo';

// 12 CRM Roles matching client specification and 2-column layout
const crmRoles = [
  // Column 1 (Left Column)
  {
    id: 'business_owner',
    title: 'Business Owners',
    subtitle: 'Executive Command Access',
    name: 'Alexander Wright',
    email: 'a.wright@nergy.io',
    password: 'Owner@2026',
    role: 'Business Owners',
    company: 'nErgy Enterprise Logistics',
    target: '/crm/dashboard',
    badge: 'Enterprise Control',
    description: 'Full executive oversight, revenue analytics, ERP modules, and autonomous AI engine configurations.',
    icon: Building2,
    column: 1,
    order: 1,
  },
  {
    id: 'content_creator',
    title: 'Content Creators',
    subtitle: 'AI Video & Media Creation',
    name: 'Leo Fontaine',
    email: 'l.fontaine@nergy.io',
    password: 'Creator@2026',
    role: 'Content Creators',
    company: 'nErgy Media Productions',
    target: '/crm/ai-studio',
    badge: 'AI SuperHouse',
    description: 'Autonomous AI video agents, multimedia asset generators, and creative prompt pipelines.',
    icon: Video,
    column: 1,
    order: 2,
  },
  {
    id: 'influencer',
    title: 'Influencers',
    subtitle: 'Audience & Referral Tracking',
    name: 'Chloe Rivera',
    email: 'c.rivera@nergy.io',
    password: 'Influencer@2026',
    role: 'Influencers',
    company: 'Rivera Social Brand',
    target: '/crm/leads',
    badge: 'Viral Growth Hub',
    description: 'Dedicated campaign affiliate tracking, audience engagement metrics, and social lead capture.',
    icon: Share2,
    column: 1,
    order: 3,
  },
  {
    id: 'ai_marketing_pro',
    title: 'AI Marketing Pros',
    subtitle: 'Growth & Autonomous Ads',
    name: 'Tanya Sterling',
    email: 't.sterling@nergy.io',
    password: 'Marketing@2026',
    role: 'AI Marketing Pros',
    company: 'nErgy Enterprise Logistics',
    target: '/crm/marketing',
    badge: 'Ad Intelligence',
    description: 'Multi-channel marketing automation, lead scoring algorithms, and autonomous ad distribution.',
    icon: Megaphone,
    column: 1,
    order: 4,
  },
  {
    id: 'admin_1',
    title: 'Admin I',
    subtitle: 'Operations & Pipeline Admin',
    name: 'Sarah Jenkins',
    email: 's.jenkins@nergy.io',
    password: 'Admin1@2026',
    role: 'Admin I',
    company: 'nErgy Enterprise Logistics',
    target: '/crm/leads',
    badge: 'Operations Desk',
    description: 'Central operations management, territory allocation, CRM pipelines, and team assignment.',
    icon: Shield,
    column: 1,
    order: 5,
  },
  {
    id: 'crm_pro',
    title: 'CRM Pros',
    subtitle: 'Pipeline & Deal Closing',
    name: 'Marcus Vance',
    email: 'm.vance@nergy.io',
    password: 'CrmPro@2026',
    role: 'CRM Pros',
    company: 'nErgy Enterprise Logistics',
    target: '/crm/pipeline',
    badge: 'Customer Relations',
    description: 'High-velocity lead pipelines, customer contact vaults, interaction history, and deal closings.',
    icon: Kanban,
    column: 1,
    order: 6,
  },

  // Column 2 (Right Column)
  {
    id: 'customer',
    title: 'Customer',
    subtitle: 'Self-Service Client Portal',
    name: 'Dr. Aris Thorne',
    email: 'a.thorne@biogenix.org',
    password: 'Customer@2026',
    role: 'Customer',
    company: 'BioGenix Labs Inc.',
    target: '/crm/contacts',
    badge: 'Client Portal',
    description: 'Secure vault for client accounts, interaction history, support tickets, and service requests.',
    icon: Globe,
    column: 2,
    order: 1,
  },
  {
    id: 'content_builder',
    title: 'Content Builders',
    subtitle: 'Campaign & Asset Builder',
    name: 'Maya Lin',
    email: 'm.lin@nergy.io',
    password: 'Builder@2026',
    role: 'Content Builders',
    company: 'nErgy Creative Labs',
    target: '/crm/marketing',
    badge: 'Content Studio',
    description: 'Template creation, modular landing page builders, and automated asset generation suites.',
    icon: Zap,
    column: 2,
    order: 2,
  },
  {
    id: 'affiliate_partner',
    title: 'Affiliate Partners',
    subtitle: 'Commission & Deal Network',
    name: 'Julian Vance',
    email: 'j.vance@nergypartners.net',
    password: 'Partner@2026',
    role: 'Affiliate Partners',
    company: 'Vance Capital Partners',
    target: '/crm/leads',
    badge: 'Partner Network',
    description: 'Partner network portal for lead origination, pipeline deal commissions, and partner links.',
    icon: TrendingUp,
    column: 2,
    order: 3,
  },
  {
    id: 'hr',
    title: 'HR',
    subtitle: 'Talent & Employee Lifecycle',
    name: 'Elena Rostova',
    email: 'e.rostova@nergy.io',
    password: 'HR@2026',
    role: 'HR',
    company: 'nErgy Enterprise Logistics',
    target: '/crm/hr',
    badge: 'Human Resources',
    description: 'Employee directory, candidate recruiting pipelines, interviews, job postings, and onboarding.',
    icon: UserCheck,
    column: 2,
    order: 4,
  },
  {
    id: 'admin_2',
    title: 'Admin II',
    subtitle: 'Finance & Compliance Admin',
    name: 'David Chen',
    email: 'd.chen@nergy.io',
    password: 'Admin2@2026',
    role: 'Admin II',
    company: 'nErgy Enterprise Logistics',
    target: '/crm/erp/finance',
    badge: 'ERP Controller',
    description: 'Financial ledger management, procurement approval, supply chain tracking, and compliance audits.',
    icon: Sliders,
    column: 2,
    order: 5,
  },
  {
    id: 'super_admin',
    title: 'Super Admin',
    subtitle: 'Master Root System Control',
    name: 'Root Sovereign Admin',
    email: 'root.superadmin@nergy.io',
    password: 'SuperAdmin@2026',
    role: 'Super Admin',
    company: 'nErgy Global Enterprise',
    target: '/crm/admin',
    badge: 'Root Sovereign',
    description: 'Full system control, tenant provisioning, security policies, and encrypted root eBox vault access.',
    icon: ShieldAlert,
    column: 2,
    order: 6,
    isSuperAdmin: true,
  },
];

const oalRoles = [
  {
    id: 'borrower',
    title: 'Corporate Borrower',
    subtitle: 'Borrower Onboarding Vault',
    name: 'Dr. Aris Thorne',
    email: 'a.thorne@biogenix.org',
    password: 'Borrower@2026',
    role: 'Borrower Account',
    company: 'BioGenix Labs Inc.',
    target: '/oal/borrower/dashboard',
    badge: 'Borrower Onboarding',
    description: 'Corporate loan applications, digital KYC verification, terms sheet comparison, and loan disbursement.',
    icon: Landmark,
  },
  {
    id: 'lender',
    title: 'Institutional Lender',
    subtitle: 'Capital Allocation & Bidding',
    name: 'Marcus Sterling',
    email: 'm.sterling@vanguard.com',
    password: 'Lender@2026',
    role: 'Lender Account',
    company: 'Vanguard Capital Debt Fund',
    target: '/oal/lender/dashboard',
    badge: 'Leads & Bidding Engine',
    description: 'Underwrite deals, issue structured debt offers, verify financial covenants, and manage capital portfolios.',
    icon: Building2,
  },
  {
    id: 'rep',
    title: 'Licensed OAL Representative',
    subtitle: 'Underwriting Desk & Loan Queue',
    name: 'Sarah Jenkins',
    email: 'agent.sarah@oalnetwork.com',
    password: 'Agent@2026',
    role: 'OAL Agent',
    company: 'OAL Network Services',
    target: '/oal/rep/dashboard',
    badge: 'Underwriting Desk',
    description: 'Manage borrower pipelines, review credit disclosures, coordinate between lenders and borrowers.',
    icon: Shield,
  },
  {
    id: 'admin',
    title: 'Platform Master Admin',
    subtitle: 'Master Governance & Scoring',
    name: 'Alexander Wright',
    email: 'admin.alexander@oalnetwork.com',
    password: 'Admin@2026',
    role: 'Master Admin',
    company: 'OAL Network Marketplace',
    target: '/oal/admin/dashboard',
    badge: 'Platform Governance',
    description: 'Full governance, risk engine parameters, compliance reporting, and marketplace liquidity controls.',
    icon: ShieldCheck,
  },
];

export const UnifiedLogin = ({ mode }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const { addToast } = useToast();

  const currentPlatform = !SHOW_OAL ? 'crm' : (mode || (location.pathname.includes('/oal') ? 'oal' : 'crm'));
  const roleList = currentPlatform === 'crm' ? crmRoles : oalRoles;

  const [selectedRole, setSelectedRole] = useState(roleList[0]);
  const [email, setEmail] = useState(roleList[0].email);
  const [password, setPassword] = useState(roleList[0].password);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuperAdminHidden, setIsSuperAdminHidden] = useState(false);

  useEffect(() => {
    const list = currentPlatform === 'crm' ? crmRoles : oalRoles;
    setSelectedRole(list[0]);
    setEmail(list[0].email);
    setPassword(list[0].password);
  }, [currentPlatform]);

  const handleSelectRole = (r) => {
    setSelectedRole(r);
    setEmail(r.email);
    setPassword(r.password);
  };

  const handleSwitchPlatform = () => {
    const targetPath = currentPlatform === 'crm' ? '/oal/login' : '/crm/login';
    navigate(targetPath);
  };

  const executeLogin = (roleObj) => {
    setIsLoading(true);

    setTimeout(() => {
      login(
        {
          id: roleObj.id,
          name: roleObj.name,
          email: roleObj.email,
          role: roleObj.role,
          company: roleObj.company,
          tenantId: currentPlatform === 'crm' ? 'TENANT-08492' : `OAL-${roleObj.id.toUpperCase()}-9910`,
        },
        currentPlatform
      );

      addToast({
        title: `Authenticated as ${roleObj.title}`,
        message: `Welcome ${roleObj.name}! Navigating to ${roleObj.title} portal...`,
        type: 'success',
      });

      setIsLoading(false);
      navigate(roleObj.target);
    }, 250);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    executeLogin(selectedRole);
  };

  // Group CRM roles into Column 1 and Column 2
  const col1Roles = crmRoles.filter((r) => r.column === 1);
  const col2Roles = crmRoles.filter((r) => r.column === 2 && (!r.isSuperAdmin || !isSuperAdminHidden));

  const SelectedIcon = selectedRole.icon || Building2;

  return (
    <div
      style={{
        minHeight: '100vh',
        height: '100vh',
        maxHeight: '100vh',
        backgroundColor: '#070b19',
        backgroundImage:
          'radial-gradient(circle at 15% 15%, rgba(14, 165, 233, 0.15) 0%, transparent 45%), radial-gradient(circle at 85% 85%, rgba(59, 130, 246, 0.12) 0%, transparent 45%), radial-gradient(circle at 50% 50%, rgba(2, 6, 23, 0.95) 0%, #070b19 100%)',
        color: '#f8fafc',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0.75rem 1rem',
        boxSizing: 'border-box',
        overflowY: 'auto',
        fontFamily: 'var(--font-sans, system-ui, sans-serif)',
      }}
      className="unified-login-root"
    >
      <style>{`
        @media (max-width: 992px) {
          .unified-login-root {
            height: auto !important;
            max-height: none !important;
            padding: 1.5rem 1rem !important;
          }
          .portal-login-main-container {
            grid-template-columns: 1fr !important;
          }
          .portal-left-panel {
            grid-column: span 1 !important;
            border-right: none !important;
            border-bottom: 1px solid rgba(148, 163, 184, 0.12) !important;
            padding: 1.5rem 1.25rem !important;
          }
          .portal-right-panel {
            grid-column: span 1 !important;
            padding: 1.5rem 1.25rem !important;
          }
        }
        @media (max-width: 640px) {
          .portal-roles-grid {
            grid-template-columns: 1fr !important;
          }
        }
        .portal-role-card:hover {
          background-color: rgba(30, 41, 59, 0.85) !important;
          border-color: rgba(56, 189, 248, 0.4) !important;
          transform: translateY(-1px);
        }
      `}</style>

      <div
        style={{
          width: '100%',
          maxWidth: '1240px',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.625rem',
          margin: '0 auto',
        }}
      >
        {/* Top Header Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '0.75rem',
            padding: '0 0.25rem',
          }}
        >
          {/* Logo Brand Header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <AiEnergyLogo size={34} showText={false} />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span style={{ fontSize: '16px', fontWeight: 800, color: '#f8fafc', letterSpacing: '-0.02em' }}>
                  CRM nErgy
                </span>
                <span
                  style={{
                    fontSize: '9px',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    color: '#38bdf8',
                    backgroundColor: 'rgba(56, 189, 248, 0.15)',
                    border: '1px solid rgba(56, 189, 248, 0.3)',
                    padding: '1px 6px',
                    borderRadius: '4px',
                    textTransform: 'uppercase',
                  }}
                >
                  AI POWERED
                </span>
              </div>
              <span style={{ fontSize: '11px', color: '#94a3b8' }}>
                Enterprise Portal Gateway &bull; 12 Autonomous User Hubs
              </span>
            </div>
          </div>

          {/* Action Bar (Super Admin Hide toggle ONLY) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button
              type="button"
              onClick={() => setIsSuperAdminHidden(!isSuperAdminHidden)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.35rem 0.75rem',
                borderRadius: '6px',
                backgroundColor: isSuperAdminHidden ? 'rgba(239, 68, 68, 0.15)' : 'rgba(30, 41, 59, 0.8)',
                border: isSuperAdminHidden ? '1px solid rgba(239, 68, 68, 0.4)' : '1px solid rgba(148, 163, 184, 0.2)',
                color: isSuperAdminHidden ? '#f87171' : '#cbd5e1',
                fontSize: '11px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              title={isSuperAdminHidden ? 'Click to Show Super Admin Button' : 'Click to Hide Super Admin Button'}
            >
              {isSuperAdminHidden ? <EyeOff size={13} /> : <Eye size={13} />}
              <span>Super Admin: {isSuperAdminHidden ? 'HIDDEN' : 'VISIBLE'}</span>
            </button>
          </div>
        </div>

        {/* Main SmartCare Style Screen (Left Live Form + Right 2-Col Grid) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            backgroundColor: 'rgba(15, 23, 42, 0.75)',
            backdropFilter: 'blur(24px)',
            borderRadius: '16px',
            border: '1px solid rgba(56, 189, 248, 0.2)',
            boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.8), 0 0 30px rgba(14, 165, 233, 0.08)',
            overflow: 'hidden',
          }}
          className="portal-login-main-container"
        >
          {/* LEFT PANEL: Exact Login Form from Reference Image (Compact Fit) */}
          <div
            style={{
              gridColumn: 'span 5 / span 5',
              borderRight: '1px solid rgba(148, 163, 184, 0.12)',
              backgroundColor: 'rgba(10, 17, 34, 0.75)',
              padding: '1.25rem 1.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '0.75rem',
            }}
            className="portal-left-panel"
          >
            <form onSubmit={handleLoginSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {/* Header: Logo Sphere + Brand Title */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  gap: '0.25rem',
                  paddingBottom: '0.625rem',
                  borderBottom: '1px solid rgba(148, 163, 184, 0.15)',
                }}
              >
                <AiEnergyLogo size={52} showText={false} />
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', marginTop: '0.15rem' }}>
                  <span style={{ fontSize: '14px', fontWeight: 800, color: '#f8fafc', letterSpacing: '-0.01em' }}>
                    CRM nErgy
                  </span>
                  <span
                    style={{
                      fontSize: '8px',
                      fontWeight: 800,
                      backgroundColor: '#0284c7',
                      color: '#ffffff',
                      padding: '1px 4px',
                      borderRadius: '3px',
                      letterSpacing: '0.04em',
                    }}
                  >
                    AI
                  </span>
                </div>
                <span
                  style={{
                    fontSize: '10px',
                    fontWeight: 700,
                    color: '#94a3b8',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                  }}
                >
                  ENTERPRISE CRM &bull; ERP &bull; AI SUPERHOUSE
                </span>
                <span style={{ fontSize: '11px', color: '#64748b', marginTop: '0.1rem' }}>
                  Sign in to continue to your CRM workspace.
                </span>
              </div>

              {/* Input: Email Address */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', textAlign: 'left' }}>
                <label style={{ fontSize: '11px', fontWeight: 600, color: '#e2e8f0' }}>
                  Email Address
                </label>
                <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                  <Mail
                    size={14}
                    style={{
                      position: 'absolute',
                      left: '12px',
                      color: '#38bdf8',
                      pointerEvents: 'none',
                    }}
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter email address"
                    style={{
                      width: '100%',
                      height: '38px',
                      paddingLeft: '34px',
                      paddingRight: '12px',
                      borderRadius: '8px',
                      border: '1px solid rgba(56, 189, 248, 0.28)',
                      backgroundColor: 'rgba(30, 41, 59, 0.7)',
                      color: '#f8fafc',
                      fontSize: '12px',
                      outline: 'none',
                      boxSizing: 'border-box',
                      transition: 'border-color 0.2s ease',
                    }}
                    onFocus={(e) => { e.target.style.borderColor = '#38bdf8'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'rgba(56, 189, 248, 0.28)'; }}
                  />
                </div>
              </div>

              {/* Input: Password */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', textAlign: 'left' }}>
                <label style={{ fontSize: '11px', fontWeight: 600, color: '#e2e8f0' }}>
                  Password
                </label>
                <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                  <Lock
                    size={14}
                    style={{
                      position: 'absolute',
                      left: '12px',
                      color: '#38bdf8',
                      pointerEvents: 'none',
                    }}
                  />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Enter password"
                    style={{
                      width: '100%',
                      height: '38px',
                      paddingLeft: '34px',
                      paddingRight: '12px',
                      borderRadius: '8px',
                      border: '1px solid rgba(56, 189, 248, 0.28)',
                      backgroundColor: 'rgba(30, 41, 59, 0.7)',
                      color: '#f8fafc',
                      fontSize: '12px',
                      outline: 'none',
                      boxSizing: 'border-box',
                      transition: 'border-color 0.2s ease',
                    }}
                    onFocus={(e) => { e.target.style.borderColor = '#38bdf8'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'rgba(56, 189, 248, 0.28)'; }}
                  />
                </div>
              </div>

              {/* Info Box: Authenticated As / Organization */}
              <div
                style={{
                  padding: '0.55rem 0.85rem',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(30, 41, 59, 0.55)',
                  border: '1px solid rgba(148, 163, 184, 0.16)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.25rem',
                  fontSize: '11px',
                  textAlign: 'left',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#94a3b8', fontSize: '10.5px' }}>Authenticated as</span>
                  <span style={{ fontWeight: 600, color: '#f8fafc' }}>{selectedRole.name}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#94a3b8', fontSize: '10.5px' }}>Organization</span>
                  <span style={{ fontWeight: 600, color: '#38bdf8' }}>{selectedRole.company}</span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                style={{
                  width: '100%',
                  height: '40px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #0284c7 0%, #2563eb 100%)',
                  boxShadow: '0 4px 14px rgba(2, 132, 199, 0.4)',
                  color: '#ffffff',
                  border: 'none',
                  fontSize: '13px',
                  fontWeight: 700,
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.4rem',
                  cursor: isLoading ? 'not-allowed' : 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                <span>{isLoading ? 'Signing In...' : `Sign in as ${selectedRole.title}`}</span>
                {!isLoading && <ArrowRight size={15} />}
              </button>
            </form>

            {/* Security Footer */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.35rem',
                fontSize: '11px',
                color: '#94a3b8',
                paddingTop: '0.5rem',
                borderTop: '1px solid rgba(148, 163, 184, 0.16)',
              }}
            >
              <ShieldCheck size={13} style={{ color: '#10b981' }} />
              <span>Secure enterprise session &bull; Tenant-isolated workspace</span>
            </div>
          </div>

          {/* RIGHT GRID PANEL: Select Portal (2-Column Grid of 12 Roles - Compact Fit) */}
          <div
            style={{
              gridColumn: 'span 7 / span 7',
              padding: '1.25rem 1.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '0.75rem',
            }}
            className="portal-right-panel"
          >
            {/* Header */}
            <div>
              <h3
                style={{
                  fontSize: '18px',
                  fontWeight: 800,
                  color: '#f8fafc',
                  margin: 0,
                  letterSpacing: '-0.02em',
                }}
              >
                Select Portal
              </h3>
              <p
                style={{
                  fontSize: '12px',
                  color: '#94a3b8',
                  margin: '2px 0 0 0',
                }}
              >
                Choose your role to access the management system.
              </p>
            </div>

            {/* 2-Column Role Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '0.5rem',
              }}
              className="portal-roles-grid"
            >
              {/* Column 1 Roles */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {col1Roles.map((role) => {
                  const Icon = role.icon;
                  const isSelected = selectedRole.id === role.id;

                  return (
                    <div
                      key={role.id}
                      onClick={() => handleSelectRole(role)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0.5rem 0.75rem',
                        borderRadius: '9px',
                        backgroundColor: isSelected
                          ? 'rgba(14, 165, 233, 0.18)'
                          : 'rgba(30, 41, 59, 0.55)',
                        border: isSelected
                          ? '1px solid #38bdf8'
                          : '1px solid rgba(148, 163, 184, 0.15)',
                        boxShadow: isSelected
                          ? '0 0 12px rgba(56, 189, 248, 0.22)'
                          : 'none',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease',
                      }}
                      className="portal-role-card"
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', minWidth: 0 }}>
                        <div
                          style={{
                            width: '30px',
                            height: '30px',
                            borderRadius: '7px',
                            backgroundColor: isSelected
                              ? '#0284c7'
                              : 'rgba(51, 65, 85, 0.7)',
                            color: isSelected ? '#ffffff' : '#94a3b8',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                          }}
                        >
                          <Icon size={15} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
                          <span
                            style={{
                              fontSize: '12px',
                              fontWeight: 700,
                              color: isSelected ? '#38bdf8' : '#f8fafc',
                              whiteSpace: 'nowrap',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                            }}
                          >
                            {role.title}
                          </span>
                          <span
                            style={{
                              fontSize: '10px',
                              color: '#64748b',
                              marginTop: '0px',
                            }}
                          >
                            Secure Access
                          </span>
                        </div>
                      </div>

                      <ChevronRight
                        size={14}
                        style={{
                          color: isSelected ? '#38bdf8' : '#475569',
                          flexShrink: 0,
                        }}
                      />
                    </div>
                  );
                })}
              </div>

              {/* Column 2 Roles */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {col2Roles.map((role) => {
                  const Icon = role.icon;
                  const isSelected = selectedRole.id === role.id;

                  return (
                    <div
                      key={role.id}
                      onClick={() => handleSelectRole(role)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0.5rem 0.75rem',
                        borderRadius: '9px',
                        backgroundColor: isSelected
                          ? 'rgba(14, 165, 233, 0.18)'
                          : 'rgba(30, 41, 59, 0.55)',
                        border: isSelected
                          ? '1px solid #38bdf8'
                          : '1px solid rgba(148, 163, 184, 0.15)',
                        boxShadow: isSelected
                          ? '0 0 12px rgba(56, 189, 248, 0.22)'
                          : 'none',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease',
                      }}
                      className="portal-role-card"
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', minWidth: 0 }}>
                        <div
                          style={{
                            width: '30px',
                            height: '30px',
                            borderRadius: '7px',
                            backgroundColor: isSelected
                              ? '#0284c7'
                              : 'rgba(51, 65, 85, 0.7)',
                            color: isSelected ? '#ffffff' : '#94a3b8',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                          }}
                        >
                          <Icon size={15} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
                          <span
                            style={{
                              fontSize: '12px',
                              fontWeight: 700,
                              color: isSelected ? '#38bdf8' : '#f8fafc',
                              whiteSpace: 'nowrap',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                            }}
                          >
                            {role.title}
                          </span>
                          <span
                            style={{
                              fontSize: '10px',
                              color: '#64748b',
                              marginTop: '0px',
                            }}
                          >
                            Secure Access
                          </span>
                        </div>
                      </div>

                      <ChevronRight
                        size={14}
                        style={{
                          color: isSelected ? '#38bdf8' : '#475569',
                          flexShrink: 0,
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Status Footer */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '0.5rem',
                borderTop: '1px solid rgba(148, 163, 184, 0.12)',
                fontSize: '11px',
                color: '#64748b',
                flexWrap: 'wrap',
                gap: '0.4rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <ShieldCheck size={13} style={{ color: '#10b981' }} />
                <span>Encrypted RBAC Security Layer Active</span>
              </div>
              <span style={{ color: '#38bdf8', fontWeight: 600 }}>
                12 Roles Configured &bull; Click to switch persona
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnifiedLogin;

