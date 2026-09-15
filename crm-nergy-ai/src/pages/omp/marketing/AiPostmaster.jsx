import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Send,
  Share2,
  Sparkles,
  CheckCircle2,
  Clock,
  ArrowRight,
  ArrowLeft,
  ExternalLink,
  Layers,
  Copy,
  Check,
  Globe,
  Sliders
} from 'lucide-react';
import { AdpVerifiedBadge } from '../../../components/omp/AdpVerifiedBadge';

export const AiPostmaster = () => {
  const navigate = useNavigate();

  const [platforms, setPlatforms] = useState([
    { id: 'facebook', name: 'Facebook Marketplace', icon: 'FB', connected: true, selected: true, status: 'Ready to Post' },
    { id: 'cargurus', name: 'CarGurus Feed', icon: 'CG', connected: true, selected: true, status: 'Ready to Post' },
    { id: 'autotrader', name: 'AutoTrader / Cox', icon: 'AT', connected: true, selected: true, status: 'Ready to Post' },
    { id: 'craigslist', name: 'Craigslist Automated Post', icon: 'CL', connected: true, selected: true, status: 'Ready to Post' },
    { id: 'google_ads', name: 'Google Vehicle Ads', icon: 'G', connected: true, selected: true, status: 'Ready to Post' },
  ]);

  const [isPosting, setIsPosting] = useState(false);
  const [postedSuccess, setPostedSuccess] = useState(false);
  const [copied, setCopied] = useState(false);

  const [generatedCopy, setGeneratedCopy] = useState(
    `🔥 2024 CHEVROLET CORVETTE STINGRAY 2LT COUPE - 1-OWNER LOW MILES!

📍 AVAILABLE AT: Metro West Automotive Group (OMP {ADP Verified} Dealer)
📞 CALL / TEXT NOW: (510) 555-0199 (Direct Sales Desk)

⭐ VEHICLE HIGHLIGHTS:
• Stock #: STK-8491 | Mileage: Only 3,200 miles!
• Engine: 6.2L V8 DI HP Engine with 8-Speed Dual Clutch Transmission
• Color: Torch Red Exterior over Jet Black Mulan Leather
• Clean Carfax: Single Owner, Zero Accidents, California Clean Title!

💳 FINANCING & NATIONWIDE DELIVERY:
• In-House Financing & Prime Auto Loans available on OAL Network!
• 60-Second Instant Payment Desking available on our website.
• Nationwide Doorstep Shipping Available with full insurance.

🛡️ BUY WITH CONFIDENCE:
This vehicle has passed our rigorous 150-Point Inspection and is protected under the OMP Deals Verified Dealer Warranty Guarantee.`
  );

  const handlePostAll = () => {
    setIsPosting(true);
    setTimeout(() => {
      setIsPosting(false);
      setPostedSuccess(true);
    }, 1600);
  };

  const handleCopyCopy = () => {
    navigator.clipboard?.writeText(generatedCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
                OMP Deals • Pillar 2 (Attract Buyers)
              </span>
              <span style={{ color: '#475569' }}>/</span>
              <span style={{ fontSize: '11.5px', color: '#94a3b8' }}>AI Postmaster Multi-Lister (Task E-07)</span>
            </div>
            <h1 style={{ fontSize: '26px', fontWeight: 800, margin: 0, color: '#ffffff', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span>AI Postmaster (AIPM) Multi-Lister</span>
            </h1>
            <p style={{ margin: '4px 0 0', fontSize: '13px', color: '#94a3b8' }}>
              1-Click simultaneous vehicle syndication across Facebook Marketplace, CarGurus, AutoTrader, and Craigslist.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              onClick={() => navigate('/omp/photo-genius')}
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
              <span>Photo Genius</span>
            </button>

            <button
              onClick={() => navigate('/omp/web-builder')}
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
              <span>Next: Web Builder & 4K Video (E-08..E-10)</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* MAIN POSTMASTER GRID */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '24px' }}>
          {/* Left: AI Generated Sales Description */}
          <div style={{ background: 'rgba(15, 23, 42, 0.8)', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.08)', padding: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
              <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 700, color: '#ffffff', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Sparkles size={18} color="#0ea5e9" />
                <span>AI Generated Sales Listing Copy</span>
              </h3>
              <button
                onClick={handleCopyCopy}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  color: copied ? '#10b981' : '#cbd5e1',
                  padding: '4px 10px',
                  borderRadius: '6px',
                  fontSize: '11.5px',
                  cursor: 'pointer',
                }}
              >
                {copied ? <Check size={13} /> : <Copy size={13} />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            <textarea
              value={generatedCopy}
              onChange={(e) => setGeneratedCopy(e.target.value)}
              rows={16}
              style={{
                width: '100%',
                padding: '14px',
                borderRadius: '10px',
                background: 'rgba(2, 6, 23, 0.6)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                color: '#e2e8f0',
                fontSize: '12.5px',
                fontFamily: 'monospace',
                lineHeight: 1.5,
                outline: 'none',
                boxSizing: 'border-box',
                resize: 'vertical',
              }}
            />
          </div>

          {/* Right: Multi-Platform Syndication Channels */}
          <div style={{ background: 'rgba(15, 23, 42, 0.8)', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.08)', padding: '24px' }}>
            <h3 style={{ margin: '0 0 4px', fontSize: '16px', fontWeight: 700, color: '#ffffff' }}>
              Target Marketplace Syndication Channels
            </h3>
            <p style={{ margin: '0 0 20px', fontSize: '12.5px', color: '#94a3b8' }}>
              Select channels to syndicate this vehicle simultaneously in 1 click.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
              {platforms.map((p) => (
                <div
                  key={p.id}
                  onClick={() => {
                    setPlatforms(
                      platforms.map((item) => (item.id === p.id ? { ...item, selected: !item.selected } : item))
                    );
                  }}
                  style={{
                    padding: '14px 16px',
                    borderRadius: '10px',
                    background: p.selected ? 'rgba(14, 165, 233, 0.1)' : 'rgba(2, 6, 23, 0.4)',
                    border: p.selected ? '1px solid #0ea5e9' : '1px solid rgba(255, 255, 255, 0.06)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '6px',
                        background: '#0284c7',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#ffffff',
                        fontWeight: 800,
                        fontSize: '11px',
                      }}
                    >
                      {p.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: '13.5px', fontWeight: 700, color: '#ffffff' }}>{p.name}</div>
                      <div style={{ fontSize: '11px', color: '#10b981' }}>Connected (Auto-Sync Live)</div>
                    </div>
                  </div>

                  <span
                    style={{
                      fontSize: '11.5px',
                      fontWeight: 700,
                      color: postedSuccess ? '#10b981' : p.selected ? '#38bdf8' : '#64748b',
                    }}
                  >
                    {postedSuccess ? 'Published ✓' : p.selected ? 'Selected' : 'Skip'}
                  </span>
                </div>
              ))}
            </div>

            {/* 1-Click Multi-Lister Button */}
            <button
              onClick={handlePostAll}
              disabled={isPosting}
              style={{
                width: '100%',
                padding: '14px',
                borderRadius: '10px',
                background: postedSuccess
                  ? '#10b981'
                  : 'linear-gradient(90deg, #0284c7, #0ea5e9)',
                border: 'none',
                color: '#ffffff',
                fontSize: '14px',
                fontWeight: 700,
                cursor: isPosting ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                boxShadow: '0 4px 20px rgba(14, 165, 233, 0.35)',
              }}
            >
              <Send size={16} className={isPosting ? 'animate-spin' : ''} />
              <span>
                {isPosting
                  ? 'Syndicating across 5 Platforms...'
                  : postedSuccess
                  ? 'Posted to All 5 Channels Successfully! ✓'
                  : '1-Click Multi-Post to All 5 Platforms'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiPostmaster;
