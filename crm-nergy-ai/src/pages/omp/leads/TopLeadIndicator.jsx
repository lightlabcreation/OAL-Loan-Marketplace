import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Flame,
  Phone,
  MessageSquare,
  Sparkles,
  TrendingUp,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  DollarSign,
  Car,
  Search,
  Filter,
  ArrowLeft,
  ArrowRight,
  Eye,
  SlidersHorizontal,
  Zap,
  Activity,
  UserCheck
} from 'lucide-react';
import { AdpVerifiedBadge } from '../../../components/omp/AdpVerifiedBadge';

export const TopLeadIndicator = () => {
  const navigate = useNavigate();
  const [filterTab, setFilterTab] = useState('all'); // all | hot | high | testdrive
  const [searchQuery, setSearchQuery] = useState('');

  const leads = [
    {
      id: 'LD-9021',
      name: 'Marcus Sterling',
      phone: '(510) 555-8321',
      email: 'm.sterling@example.com',
      vehicle: '2024 BMW M4 Competition xDrive',
      stock: 'STK-8491',
      price: '$86,400',
      intentScore: 96,
      intentTier: 'HOT_LEAD',
      intentLabel: 'Immediate Buyer (96%)',
      lastActive: '5 minutes ago',
      signals: [
        'Viewed vehicle listing 9 times in 48 hours',
        'Calculated monthly payment at $1,150/mo (60s Desking)',
        'Opened Carfax Vehicle History Report twice',
        'Pre-approved for $90,000 on OAL Network Lenders',
      ],
      preferredContact: 'Phone Call',
      status: 'Ready to Close',
    },
    {
      id: 'LD-8842',
      name: 'Elena Rostova',
      phone: '(415) 555-4920',
      email: 'elena.rostova@example.com',
      vehicle: '2023 Porsche Taycan 4S Electric',
      stock: 'STK-9210',
      price: '$92,500',
      intentScore: 89,
      intentTier: 'HIGH_INTENT',
      intentLabel: 'High Intent (89%)',
      lastActive: '22 minutes ago',
      signals: [
        'Requested Click-to-Call direct dealer connect',
        'Submitted Trade-in valuation for 2021 Tesla Model 3',
        'Checked 1,600+ Police Safe MeetUp location',
      ],
      preferredContact: 'Text / SMS',
      status: 'Test Drive Requested',
    },
    {
      id: 'LD-7930',
      name: 'David Chen',
      phone: '(408) 555-1288',
      email: 'david.chen@example.com',
      vehicle: '2022 Mercedes-Benz AMG G63',
      stock: 'STK-7301',
      price: '$168,900',
      intentScore: 84,
      intentTier: 'HIGH_INTENT',
      intentLabel: 'High Intent (84%)',
      lastActive: '1 hour ago',
      signals: [
        'Shared 4K Video Walkaround with spouse',
        'Inquired about BHPH / In-house cash deal structuring',
        'Verified TruYou buyer profile',
      ],
      preferredContact: 'In-App Chat',
      status: 'Negotiating',
    },
    {
      id: 'LD-6410',
      name: 'Sarah Jenkins',
      phone: '(925) 555-7714',
      email: 'sarah.j@example.com',
      vehicle: '2024 BMW X5 xDrive40i M-Sport',
      stock: 'STK-4421',
      price: '$68,400',
      intentScore: 68,
      intentTier: 'WARM',
      intentLabel: 'Warm Lead (68%)',
      lastActive: '3 hours ago',
      signals: [
        'Saved vehicle to favorites on OfferUp marketplace',
        'Compared price with 3 competing local listings',
      ],
      preferredContact: 'Email',
      status: 'Browsing Inventory',
    },
  ];

  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.vehicle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.stock.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;
    if (filterTab === 'hot') return lead.intentTier === 'HOT_LEAD';
    if (filterTab === 'high') return lead.intentScore >= 80;
    if (filterTab === 'testdrive') return lead.status.includes('Test Drive');
    return true;
  });

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #090d16 0%, #0c1220 50%, #070a10 100%)',
        color: '#f1f5f9',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        padding: '28px 20px 80px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Navigation & Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <span style={{ fontSize: '11.5px', color: '#0ea5e9', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                OMP Deals • Nationwide Auto Dealer Program
              </span>
              <span style={{ color: '#475569' }}>/</span>
              <span style={{ fontSize: '11.5px', color: '#94a3b8' }}>AI Lead Intent Scoring (Tool 4)</span>
            </div>
            <h1 style={{ fontSize: '26px', fontWeight: 800, margin: 0, color: '#ffffff', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span>Top Lead Indicator</span>
              <span
                style={{
                  background: 'linear-gradient(90deg, #ef4444, #f97316)',
                  color: '#ffffff',
                  fontSize: '11px',
                  fontWeight: 800,
                  padding: '3px 10px',
                  borderRadius: '9999px',
                  textTransform: 'uppercase',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                <Flame size={13} />
                AI Behavioral Scoring
              </span>
            </h1>
            <p style={{ margin: '4px 0 0', fontSize: '13.5px', color: '#94a3b8' }}>
              AI analyzes buyer shopping behavior across OMP marketplace listings to prioritize buyers ready to buy today.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button
              onClick={() => navigate('/omp/feed-sync')}
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
              <span>DMS Feed Sync</span>
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

        {/* AI Intent Intelligence Summary Banner */}
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.12) 0%, rgba(249, 115, 22, 0.08) 50%, rgba(15, 23, 42, 0.8) 100%)',
            borderRadius: '16px',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            padding: '22px 24px',
            marginBottom: '28px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #ef4444, #f97316)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                boxShadow: '0 4px 16px rgba(239, 68, 68, 0.4)',
              }}
            >
              <Activity size={26} />
            </div>
            <div>
              <div style={{ fontSize: '16px', fontWeight: 700, color: '#ffffff', marginBottom: '3px' }}>
                AI Shopping Intent Radar: 3 Ready-to-Close Buyers Detected
              </div>
              <div style={{ fontSize: '13px', color: '#cbd5e1' }}>
                Dealers responding to <strong>Top Leads</strong> within 5 minutes achieve a <strong>4.8x higher closing rate</strong> on used inventory.
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '14px' }}>
            <div style={{ textAlign: 'center', padding: '6px 14px', background: 'rgba(0,0,0,0.3)', borderRadius: '8px' }}>
              <div style={{ fontSize: '18px', fontWeight: 800, color: '#ef4444' }}>96%</div>
              <div style={{ fontSize: '10.5px', color: '#94a3b8' }}>Peak Intent Score</div>
            </div>
            <div style={{ textAlign: 'center', padding: '6px 14px', background: 'rgba(0,0,0,0.3)', borderRadius: '8px' }}>
              <div style={{ fontSize: '18px', fontWeight: 800, color: '#10b981' }}>&lt; 2 min</div>
              <div style={{ fontSize: '10.5px', color: '#94a3b8' }}>Avg Response Target</div>
            </div>
          </div>
        </div>

        {/* Filter Bar & Search */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '20px',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          {/* Tabs */}
          <div style={{ display: 'flex', background: 'rgba(15, 23, 42, 0.7)', padding: '3px', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            {[
              { id: 'all', label: 'All Leads (4)' },
              { id: 'hot', label: '🔥 Hot Leads Only' },
              { id: 'high', label: 'High Intent (80%+)' },
              { id: 'testdrive', label: 'Test Drives' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilterTab(tab.id)}
                style={{
                  padding: '6px 14px',
                  fontSize: '12.5px',
                  fontWeight: 600,
                  borderRadius: '6px',
                  border: 'none',
                  background: filterTab === tab.id ? '#0ea5e9' : 'transparent',
                  color: filterTab === tab.id ? '#ffffff' : '#94a3b8',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              background: 'rgba(15, 23, 42, 0.7)',
              borderRadius: '8px',
              padding: '6px 12px',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              gap: '8px',
            }}
          >
            <Search size={14} color="#64748b" />
            <input
              type="text"
              placeholder="Filter by buyer name or vehicle..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: '#ffffff',
                fontSize: '12.5px',
                width: '220px',
              }}
            />
          </div>
        </div>

        {/* LEADS LIST */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {filteredLeads.map((lead) => {
            const isHot = lead.intentTier === 'HOT_LEAD';

            return (
              <div
                key={lead.id}
                style={{
                  background: 'rgba(15, 23, 42, 0.75)',
                  borderRadius: '16px',
                  border: isHot
                    ? '1px solid rgba(239, 68, 68, 0.4)'
                    : '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: isHot ? '0 0 20px rgba(239, 68, 68, 0.15)' : 'none',
                  padding: '22px 24px',
                  transition: 'all 0.2s ease',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    {/* Intent Gauge Badge */}
                    <div
                      style={{
                        width: '54px',
                        height: '54px',
                        borderRadius: '50%',
                        background: isHot
                          ? 'linear-gradient(135deg, rgba(239, 68, 68, 0.25), rgba(249, 115, 22, 0.15))'
                          : 'linear-gradient(135deg, rgba(14, 165, 233, 0.2), rgba(2, 132, 199, 0.1))',
                        border: isHot ? '2px solid #ef4444' : '2px solid #0ea5e9',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#ffffff',
                      }}
                    >
                      <span style={{ fontSize: '15px', fontWeight: 800, lineHeight: 1 }}>{lead.intentScore}%</span>
                      <span style={{ fontSize: '9px', textTransform: 'uppercase', color: isHot ? '#f87171' : '#38bdf8', fontWeight: 700 }}>
                        INTENT
                      </span>
                    </div>

                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px', flexWrap: 'wrap' }}>
                        <h3 style={{ fontSize: '18px', fontWeight: 700, margin: 0, color: '#ffffff' }}>
                          {lead.name}
                        </h3>
                        <span
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px',
                            padding: '2px 8px',
                            borderRadius: '9999px',
                            fontSize: '11px',
                            fontWeight: 700,
                            background: isHot ? 'rgba(239, 68, 68, 0.2)' : 'rgba(14, 165, 233, 0.15)',
                            color: isHot ? '#f87171' : '#38bdf8',
                            border: isHot ? '1px solid rgba(239, 68, 68, 0.4)' : '1px solid rgba(14, 165, 233, 0.3)',
                          }}
                        >
                          <Flame size={12} />
                          <span>{lead.intentLabel}</span>
                        </span>
                        <span style={{ fontSize: '11.5px', color: '#64748b' }}>Active {lead.lastActive}</span>
                      </div>

                      <div style={{ fontSize: '13px', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                        <span style={{ color: '#e2e8f0', fontWeight: 600 }}>{lead.vehicle}</span>
                        <span>•</span>
                        <span style={{ color: '#38bdf8' }}>{lead.stock}</span>
                        <span>•</span>
                        <span style={{ color: '#10b981', fontWeight: 700 }}>{lead.price}</span>
                        <span>•</span>
                        <span style={{ color: '#facc15' }}>Status: {lead.status}</span>
                      </div>
                    </div>
                  </div>

                  {/* Immediate Action Buttons */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <button
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '8px 14px',
                        borderRadius: '8px',
                        background: 'linear-gradient(90deg, #10b981, #059669)',
                        border: 'none',
                        color: '#ffffff',
                        fontSize: '12.5px',
                        fontWeight: 700,
                        cursor: 'pointer',
                        boxShadow: '0 2px 10px rgba(16, 185, 129, 0.3)',
                      }}
                    >
                      <Phone size={14} />
                      <span>Click-to-Call</span>
                    </button>

                    <button
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '8px 14px',
                        borderRadius: '8px',
                        background: 'rgba(14, 165, 233, 0.15)',
                        border: '1px solid rgba(14, 165, 233, 0.4)',
                        color: '#38bdf8',
                        fontSize: '12.5px',
                        fontWeight: 600,
                        cursor: 'pointer',
                      }}
                    >
                      <MessageSquare size={14} />
                      <span>Instant SMS</span>
                    </button>
                  </div>
                </div>

                {/* Behavioral Radar Breakdown */}
                <div
                  style={{
                    background: 'rgba(2, 6, 23, 0.45)',
                    borderRadius: '10px',
                    padding: '12px 16px',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                  }}
                >
                  <div style={{ fontSize: '11px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.05em' }}>
                    AI Buyer Intent Signals Tracked:
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '8px' }}>
                    {lead.signals.map((sig, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#cbd5e1' }}>
                        <CheckCircle2 size={14} color="#10b981" style={{ flexShrink: 0 }} />
                        <span>{sig}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TopLeadIndicator;
