import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Globe,
  Video,
  Sparkles,
  TrendingUp,
  Share2,
  ExternalLink,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  Eye,
  Sliders,
  Laptop,
  Smartphone,
  Play
} from 'lucide-react';
import { AdpVerifiedBadge } from '../../../components/omp/AdpVerifiedBadge';

export const WebBuilder = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('website'); // website | seo | video
  const [themeMode, setThemeMode] = useState('dark_luxury');
  const [previewDevice, setPreviewDevice] = useState('desktop');

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
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Top Navbar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '14px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <span style={{ fontSize: '11.5px', color: '#0ea5e9', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                OMP Deals • Pillar 2 (Attract Buyers)
              </span>
              <span style={{ color: '#475569' }}>/</span>
              <span style={{ fontSize: '11.5px', color: '#94a3b8' }}>Website Builder, AI SEO & 4K Video (Tasks E-08..E-10)</span>
            </div>
            <h1 style={{ fontSize: '26px', fontWeight: 800, margin: 0, color: '#ffffff' }}>
              Dealer Website Builder & Marketing Suite
            </h1>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              onClick={() => navigate('/omp/postmaster')}
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
              <span>AI Postmaster</span>
            </button>

            <button
              onClick={() => navigate('/omp/verified-dealer')}
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
              <span>Verified Dealer Hub</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* Feature Mode Tabs */}
        <div style={{ display: 'flex', background: 'rgba(15, 23, 42, 0.7)', padding: '4px', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.08)', marginBottom: '24px', width: 'fit-content' }}>
          {[
            { id: 'website', label: 'E-08: No-Code Auto Website (HQAW)', icon: Globe },
            { id: 'seo', label: 'E-09: AI Google SEO Optimizer', icon: TrendingUp },
            { id: 'video', label: 'E-10: 4K Auto Video Live (AVL)', icon: Video },
          ].map((tab) => {
            const Icon = tab.icon;
            const isSelected = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 18px',
                  borderRadius: '8px',
                  border: 'none',
                  background: isSelected ? '#0ea5e9' : 'transparent',
                  color: isSelected ? '#ffffff' : '#94a3b8',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                <Icon size={16} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* TAB 1: WEBSITE BUILDER (HQAW) */}
        {activeTab === 'website' && (
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '24px' }}>
              {/* Controls */}
              <div style={{ background: 'rgba(15, 23, 42, 0.75)', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.08)', padding: '24px' }}>
                <h3 style={{ margin: '0 0 16px', fontSize: '16px', fontWeight: 700, color: '#ffffff' }}>
                  Dealership Website Customizer
                </h3>

                <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', fontSize: '12px', color: '#94a3b8', marginBottom: '6px' }}>
                    Custom Domain
                  </label>
                  <input
                    type="text"
                    defaultValue="https://www.metrowestauto.com"
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: '8px',
                      background: 'rgba(2, 6, 23, 0.6)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      color: '#ffffff',
                      fontSize: '13.5px',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', fontSize: '12px', color: '#94a3b8', marginBottom: '6px' }}>
                    Live Theme Preset
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                    {['Dark Cyber Luxury', 'Clean Polar White', 'Midnight Cobalt', 'Carbon Sport'].map((th, i) => (
                      <button
                        key={i}
                        style={{
                          padding: '10px',
                          borderRadius: '8px',
                          background: i === 0 ? 'rgba(14, 165, 233, 0.15)' : 'rgba(255, 255, 255, 0.04)',
                          border: i === 0 ? '1px solid #0ea5e9' : '1px solid rgba(255, 255, 255, 0.08)',
                          color: i === 0 ? '#38bdf8' : '#cbd5e1',
                          fontSize: '12px',
                          fontWeight: 600,
                          cursor: 'pointer',
                        }}
                      >
                        {th}
                      </button>
                    ))}
                  </div>
                </div>

                <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '16px', fontSize: '12px', color: '#10b981' }}>
                  ✓ Auto-Synced with 184 DMS vehicles in real time.
                </div>
              </div>

              {/* Live Preview Container */}
              <div
                style={{
                  background: '#020617',
                  borderRadius: '16px',
                  border: '1px solid rgba(14, 165, 233, 0.3)',
                  padding: '20px',
                  height: '380px',
                  overflowY: 'auto',
                }}
              >
                <div style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '12px', marginBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ fontWeight: 800, color: '#ffffff', fontSize: '16px' }}>Metro West Motors</div>
                  <AdpVerifiedBadge tier="franchise" size="sm" />
                </div>
                <div style={{ fontSize: '18px', fontWeight: 800, color: '#ffffff', marginBottom: '6px' }}>
                  Find Your Next Luxury Performance Vehicle
                </div>
                <div style={{ fontSize: '12.5px', color: '#94a3b8', marginBottom: '18px' }}>
                  Over 180+ verified vehicles on lot • Direct dealer financing • 1-Click test drive booking
                </div>
                <div style={{ background: 'rgba(255, 255, 255, 0.05)', borderRadius: '10px', padding: '14px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#38bdf8' }}>Featured Today: 2024 Corvette Stingray 2LT</div>
                  <div style={{ fontSize: '15px', fontWeight: 800, color: '#10b981', marginTop: '4px' }}>$79,900 • Only 1,840 mi</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: AI GOOGLE SEO (E-09) */}
        {activeTab === 'seo' && (
          <div style={{ background: 'rgba(15, 23, 42, 0.75)', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.08)', padding: '24px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 700, margin: '0 0 16px', color: '#ffffff' }}>
              AI Google Business & Local Automotive SEO
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px' }}>
              {[
                { label: 'Rank Position in Fremont, CA', val: '#1 for "Used BMW M4 Fremont"' },
                { label: 'Google Business Profile Status', val: 'Verified & 100% Synced' },
                { label: 'Automated Review Responses', val: '4.9 ★ Rating (148 Reviews)' },
              ].map((item, i) => (
                <div key={i} style={{ background: 'rgba(0,0,0,0.3)', padding: '16px', borderRadius: '10px' }}>
                  <div style={{ fontSize: '12px', color: '#94a3b8' }}>{item.label}</div>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: '#38bdf8', marginTop: '4px' }}>{item.val}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: 4K AUTO VIDEO LIVE (E-10) */}
        {activeTab === 'video' && (
          <div style={{ background: 'rgba(15, 23, 42, 0.75)', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.08)', padding: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: 700, margin: 0, color: '#ffffff' }}>
                  4K Video Walkarounds (Auto Video Live)
                </h3>
                <p style={{ margin: '4px 0 0', fontSize: '12.5px', color: '#94a3b8' }}>
                  Record 4K mobile video tours and publish directly to TikTok, YouTube Shorts, Instagram, and buyer SMS.
                </p>
              </div>
              <button
                style={{
                  padding: '8px 16px',
                  borderRadius: '8px',
                  background: 'linear-gradient(90deg, #ef4444, #f97316)',
                  border: 'none',
                  color: '#ffffff',
                  fontSize: '13px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <Video size={15} />
                <span>Film New 4K Walkaround</span>
              </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
              {[
                { title: '2024 BMW M4 Exhaust & Interior Tour', duration: '1:45', views: '1,420 views', platform: 'YouTube Shorts + SMS' },
                { title: '2023 Porsche Taycan Launch Control & Tech', duration: '2:10', views: '2,890 views', platform: 'TikTok + Instagram' },
              ].map((vid, i) => (
                <div key={i} style={{ background: '#020617', borderRadius: '12px', padding: '16px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                    <Play size={20} color="#0ea5e9" />
                    <div style={{ fontWeight: 700, color: '#ffffff', fontSize: '14px' }}>{vid.title}</div>
                  </div>
                  <div style={{ fontSize: '12px', color: '#94a3b8' }}>Length: {vid.duration} • {vid.views}</div>
                  <div style={{ fontSize: '11px', color: '#10b981', marginTop: '6px' }}>Syndicated to: {vid.platform}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WebBuilder;
