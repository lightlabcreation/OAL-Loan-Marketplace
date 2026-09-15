import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ShieldAlert,
  ShieldCheck,
  Search,
  FileText,
  AlertTriangle,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  Printer,
  Download,
  Building,
  Info,
  ExternalLink
} from 'lucide-react';
import { AdpVerifiedBadge } from '../../../components/omp/AdpVerifiedBadge';

export const TitleSearch = () => {
  const navigate = useNavigate();
  const [vinQuery, setVinQuery] = useState('1G1YB2D47H5108491');
  const [searching, setSearching] = useState(false);

  const report = {
    vin: '1G1YB2D47H5108491',
    yearMakeModel: '2024 Chevrolet Corvette Stingray 2LT',
    titleNumber: 'CA-TL-84920194',
    issuingState: 'California DMV',
    titleIssueDate: 'January 14, 2024',
    titleStatus: 'CLEAN & UNENCUMBERED',
    activeLien: false,
    lienHolder: 'None (Paid in Full / Clean Title)',
    nmvtisBrandCheck: '0 Negative Brands Detected',
    brandAudit: [
      { brand: 'Salvage / Total Loss', status: 'PASS', passed: true },
      { brand: 'Flood / Water Damage', status: 'PASS', passed: true },
      { brand: 'Fire / Vandalism Brand', status: 'PASS', passed: true },
      { brand: 'Odometer Rollback / Exceeds Mechanical Limits', status: 'PASS', passed: true },
      { brand: 'Lemon Law Buyback', status: 'PASS', passed: true },
      { brand: 'Rebuilt / Reconstructed Title', status: 'PASS', passed: true },
    ],
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #090d16 0%, #0c1220 50%, #070a10 100%)',
        color: '#f1f5f9',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        padding: '24px 20px 80px',
      }}
    >
      <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
        {/* Navigation & Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '14px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <span style={{ fontSize: '11.5px', color: '#0ea5e9', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                OMP Deals • Pillar 1 (Stock the Lot)
              </span>
              <span style={{ color: '#475569' }}>/</span>
              <span style={{ fontSize: '11.5px', color: '#94a3b8' }}>Auto Lien & Title Search (Task E-04)</span>
            </div>
            <h1 style={{ fontSize: '26px', fontWeight: 800, margin: 0, color: '#ffffff' }}>
              Auto Lien & Title Search (ALTS)
            </h1>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              onClick={() => navigate('/omp/market-pricing')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 14px',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#cbd5e1',
                fontSize: '13px',
                cursor: 'pointer',
              }}
            >
              <ArrowLeft size={14} />
              <span>AIMP Pricing</span>
            </button>

            <button
              onClick={() => navigate('/omp/recon-center')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 16px',
                borderRadius: '8px',
                background: 'linear-gradient(90deg, #0284c7, #0ea5e9)',
                border: 'none',
                color: '#ffffff',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              <span>Next: Recon Center (E-05)</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div style={{ background: 'rgba(15, 23, 42, 0.8)', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.08)', padding: '20px', marginBottom: '24px' }}>
          <div style={{ display: 'flex', gap: '10px' }}>
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', background: 'rgba(2, 6, 23, 0.7)', borderRadius: '8px', padding: '10px 14px', border: '1px solid rgba(255, 255, 255, 0.12)', gap: '10px' }}>
              <Search size={16} color="#64748b" />
              <input
                type="text"
                value={vinQuery}
                onChange={(e) => setVinQuery(e.target.value.toUpperCase())}
                placeholder="Enter VIN or State Title Number..."
                style={{ background: 'transparent', border: 'none', outline: 'none', color: '#38bdf8', fontSize: '14px', fontWeight: 700, width: '100%', fontFamily: 'monospace' }}
              />
            </div>
            <button
              style={{ padding: '10px 20px', borderRadius: '8px', background: 'linear-gradient(90deg, #0284c7, #0ea5e9)', border: 'none', color: '#ffffff', fontSize: '13px', fontWeight: 700, cursor: 'pointer' }}
            >
              Search Registry
            </button>
          </div>
        </div>

        {/* Report Card */}
        <div style={{ background: 'rgba(15, 23, 42, 0.75)', borderRadius: '16px', border: '1px solid rgba(16, 185, 129, 0.3)', padding: '28px', marginBottom: '28px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <span style={{ fontSize: '11px', color: '#10b981', fontWeight: 800, textTransform: 'uppercase' }}>
                  ✓ NMVTIS & STATE DMV OFFICIAL RECORD
                </span>
                <span>•</span>
                <span style={{ fontSize: '11px', color: '#94a3b8' }}>Verified Today</span>
              </div>
              <h2 style={{ fontSize: '22px', fontWeight: 800, margin: 0, color: '#ffffff' }}>
                {report.yearMakeModel}
              </h2>
              <div style={{ fontSize: '13px', color: '#38bdf8', fontFamily: 'monospace', marginTop: '2px' }}>
                VIN: {report.vin}
              </div>
            </div>

            <div style={{ padding: '8px 16px', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.15)', border: '1px solid rgba(16, 185, 129, 0.4)', textAlign: 'right' }}>
              <div style={{ fontSize: '11px', color: '#94a3b8' }}>Active Lien Status</div>
              <div style={{ fontSize: '14px', fontWeight: 800, color: '#10b981' }}>{report.titleStatus}</div>
            </div>
          </div>

          {/* Brand Audit Checklist */}
          <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '20px', marginBottom: '20px' }}>
            <h3 style={{ fontSize: '15px', fontWeight: 700, margin: '0 0 14px', color: '#ffffff' }}>
              NMVTIS 50-State Title Brand Checklist
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '10px' }}>
              {report.brandAudit.map((b, i) => (
                <div key={i} style={{ background: 'rgba(0, 0, 0, 0.25)', padding: '10px 14px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12.5px' }}>
                  <span style={{ color: '#cbd5e1' }}>{b.brand}</span>
                  <span style={{ color: '#10b981', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <CheckCircle2 size={14} />
                    <span>{b.status}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleSearch;
