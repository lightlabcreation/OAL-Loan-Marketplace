import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  RefreshCw,
  Database,
  CheckCircle2,
  AlertCircle,
  Clock,
  ArrowRight,
  ArrowLeft,
  Server,
  Zap,
  Sliders,
  FileSpreadsheet,
  Settings,
  Layers,
  ChevronDown,
  Filter,
  Search,
  ExternalLink,
  ShieldCheck,
  Check
} from 'lucide-react';
import { AdpVerifiedBadge } from '../../../components/omp/AdpVerifiedBadge';

export const FeedSync = () => {
  const navigate = useNavigate();

  // DMS Providers list
  const dmsProviders = [
    { id: 'dealersocket', name: 'DealerSocket DMS', protocol: 'API v3 (Automated)', status: 'Connected', verified: true },
    { id: 'cdk', name: 'CDK Global', protocol: 'SFTP Automated Feed', status: 'Ready to Connect', verified: true },
    { id: 'reynolds', name: 'Reynolds & Reynolds', protocol: 'Direct ERA-IGNITE Feed', status: 'Standby', verified: true },
    { id: 'dealertrack', name: 'Dealertrack (Cox Auto)', protocol: 'Opentrack API', status: 'Standby', verified: true },
    { id: 'frazer', name: 'Frazer DMS', protocol: 'Auto CSV Feed Sync', status: 'Standby', verified: false },
    { id: 'custom', name: 'Custom Inventory Feed', protocol: 'FTP / XML / CSV URL', status: 'Custom Setup', verified: false },
  ];

  const [activeDms, setActiveDms] = useState('dealersocket');
  const [syncFrequency, setSyncFrequency] = useState('hourly'); // 15min | hourly | daily
  const [isSyncing, setIsSyncing] = useState(false);
  const [lastSyncedTime, setLastSyncedTime] = useState('Today at 3:45 PM');
  const [autoCarfaxAttach, setAutoCarfaxAttach] = useState(true);
  const [filterQuery, setFilterQuery] = useState('');

  // Mock Synced Inventory from DMS
  const [syncedVehicles, setSyncedVehicles] = useState([
    {
      vin: '1G1YB2D47H5108491',
      stock: 'STK-8491',
      year: 2024,
      make: 'Chevrolet',
      model: 'Corvette Stingray 2LT',
      price: '$79,900',
      cost: '$71,200',
      mileage: '1,840 mi',
      dmsStatus: 'Active on Lot',
      feedSyncStatus: 'Synced',
      carfaxAttached: true,
      lastUpdated: '12 mins ago',
    },
    {
      vin: 'WBA33AY05PFP92104',
      stock: 'STK-9210',
      year: 2023,
      make: 'BMW',
      model: 'M3 Competition xDrive',
      price: '$84,500',
      cost: '$76,000',
      mileage: '7,320 mi',
      dmsStatus: 'Active on Lot',
      feedSyncStatus: 'Synced',
      carfaxAttached: true,
      lastUpdated: '12 mins ago',
    },
    {
      vin: 'WP0AB2A99NS168902',
      stock: 'STK-7301',
      year: 2022,
      make: 'Porsche',
      model: '911 Carrera S (992)',
      price: '$124,900',
      cost: '$112,500',
      mileage: '11,200 mi',
      dmsStatus: 'Sale Pending',
      feedSyncStatus: 'Sync Paused',
      carfaxAttached: true,
      lastUpdated: '1 hour ago',
    },
    {
      vin: '5UXCR6C09M9203841',
      stock: 'STK-4421',
      year: 2024,
      make: 'BMW',
      model: 'X5 xDrive40i M-Sport',
      price: '$68,400',
      cost: '$60,100',
      mileage: '4,100 mi',
      dmsStatus: 'Active on Lot',
      feedSyncStatus: 'Synced',
      carfaxAttached: true,
      lastUpdated: '12 mins ago',
    },
    {
      vin: 'JTJHY7AX6N4018293',
      stock: 'STK-5590',
      year: 2023,
      make: 'Lexus',
      model: 'GX 460 Luxury 4WD',
      price: '$58,990',
      cost: '$51,800',
      mileage: '16,400 mi',
      dmsStatus: 'Active on Lot',
      feedSyncStatus: 'Synced',
      carfaxAttached: true,
      lastUpdated: '12 mins ago',
    },
  ]);

  const handleSyncNow = () => {
    setIsSyncing(true);
    setTimeout(() => {
      setIsSyncing(false);
      setLastSyncedTime('Just now');
    }, 1800);
  };

  const filteredList = syncedVehicles.filter(
    (v) =>
      v.model.toLowerCase().includes(filterQuery.toLowerCase()) ||
      v.make.toLowerCase().includes(filterQuery.toLowerCase()) ||
      v.stock.toLowerCase().includes(filterQuery.toLowerCase()) ||
      v.vin.toLowerCase().includes(filterQuery.toLowerCase())
  );

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
                OMP Deals • Pillar 1 (Stock the Lot)
              </span>
              <span style={{ color: '#475569' }}>/</span>
              <span style={{ fontSize: '11.5px', color: '#94a3b8' }}>DMS Auto Feed Sync (Task V-03 / N-01)</span>
            </div>
            <h1 style={{ fontSize: '26px', fontWeight: 800, margin: 0, color: '#ffffff' }}>
              DMS Auto Inventory Feed Sync
            </h1>
            <p style={{ margin: '4px 0 0', fontSize: '13.5px', color: '#94a3b8' }}>
              Automatic 2-way vehicle inventory synchronization directly from your dealership DMS. <strong>Zero manual entry required.</strong>
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button
              onClick={() => navigate('/omp/verified-dealer')}
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
              <span>Verified Dealer Hub</span>
            </button>

            <button
              onClick={() => navigate('/omp/top-leads')}
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
              <span>View Top Lead Indicator</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* Sync Status KPI Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', marginBottom: '28px' }}>
          {/* KPI 1 */}
          <div
            style={{
              background: 'rgba(15, 23, 42, 0.7)',
              borderRadius: '14px',
              border: '1px solid rgba(14, 165, 233, 0.3)',
              padding: '18px 20px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontSize: '12px', color: '#94a3b8' }}>Connected DMS</span>
              <span style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#10b981', padding: '2px 8px', borderRadius: '4px', fontSize: '11px', fontWeight: 700 }}>
                ACTIVE
              </span>
            </div>
            <div style={{ fontSize: '20px', fontWeight: 800, color: '#ffffff', marginBottom: '4px' }}>
              DealerSocket API
            </div>
            <div style={{ fontSize: '11.5px', color: '#64748b' }}>Account: METRO-WEST-LOT-1</div>
          </div>

          {/* KPI 2 */}
          <div
            style={{
              background: 'rgba(15, 23, 42, 0.7)',
              borderRadius: '14px',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              padding: '18px 20px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontSize: '12px', color: '#94a3b8' }}>Live Synced Stock</span>
              <Database size={16} color="#10b981" />
            </div>
            <div style={{ fontSize: '20px', fontWeight: 800, color: '#10b981', marginBottom: '4px' }}>
              184 Vehicles
            </div>
            <div style={{ fontSize: '11.5px', color: '#64748b' }}>100% matched to VINs</div>
          </div>

          {/* KPI 3 */}
          <div
            style={{
              background: 'rgba(15, 23, 42, 0.7)',
              borderRadius: '14px',
              border: '1px solid rgba(234, 179, 8, 0.3)',
              padding: '18px 20px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontSize: '12px', color: '#94a3b8' }}>Carfax Auto-Reports</span>
              <FileSpreadsheet size={16} color="#eab308" />
            </div>
            <div style={{ fontSize: '20px', fontWeight: 800, color: '#eab308', marginBottom: '4px' }}>
              184 Attached
            </div>
            <div style={{ fontSize: '11.5px', color: '#64748b' }}>Automatic 1-Click reports</div>
          </div>

          {/* KPI 4 */}
          <div
            style={{
              background: 'rgba(15, 23, 42, 0.7)',
              borderRadius: '14px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              padding: '18px 20px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontSize: '12px', color: '#94a3b8' }}>Sync Frequency</span>
              <Clock size={16} color="#0ea5e9" />
            </div>
            <div style={{ fontSize: '18px', fontWeight: 800, color: '#ffffff', marginBottom: '4px' }}>
              {lastSyncedTime}
            </div>
            <div style={{ fontSize: '11.5px', color: '#64748b' }}>Interval: Hourly auto-poll</div>
          </div>
        </div>

        {/* FEED CONTROLLER & SETTINGS SECTION */}
        <div
          style={{
            background: 'rgba(15, 23, 42, 0.75)',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '24px',
            marginBottom: '28px',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '14px' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: 700, margin: '0 0 4px', color: '#ffffff', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Zap size={18} color="#0ea5e9" />
                <span>Live Feed Sync Operations & Frequency</span>
              </h3>
              <p style={{ margin: 0, fontSize: '12.5px', color: '#94a3b8' }}>
                Configure sync intervals and manually force instantaneous lot refreshes.
              </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              {/* Frequency Selector */}
              <div style={{ display: 'flex', background: 'rgba(0, 0, 0, 0.4)', borderRadius: '8px', padding: '3px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                {[
                  { id: '15min', label: '15 Min' },
                  { id: 'hourly', label: 'Hourly' },
                  { id: 'daily', label: 'Daily' },
                ].map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setSyncFrequency(f.id)}
                    style={{
                      padding: '5px 12px',
                      fontSize: '12px',
                      fontWeight: 600,
                      borderRadius: '6px',
                      border: 'none',
                      background: syncFrequency === f.id ? '#0ea5e9' : 'transparent',
                      color: syncFrequency === f.id ? '#ffffff' : '#94a3b8',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    {f.label}
                  </button>
                ))}
              </div>

              {/* Force Sync Button */}
              <button
                onClick={handleSyncNow}
                disabled={isSyncing}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '9px 18px',
                  borderRadius: '8px',
                  background: isSyncing
                    ? 'rgba(14, 165, 233, 0.2)'
                    : 'linear-gradient(90deg, #0284c7, #0ea5e9)',
                  border: 'none',
                  color: '#ffffff',
                  fontSize: '13px',
                  fontWeight: 700,
                  cursor: isSyncing ? 'not-allowed' : 'pointer',
                  boxShadow: '0 2px 10px rgba(14, 165, 233, 0.3)',
                }}
              >
                <RefreshCw size={15} className={isSyncing ? 'animate-spin' : ''} />
                <span>{isSyncing ? 'Pulling DMS Feed...' : 'Force Sync Now'}</span>
              </button>
            </div>
          </div>

          {/* DMS Provider Radio / Connectors */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '12px' }}>
            {dmsProviders.map((dms) => {
              const isSelected = activeDms === dms.id;
              return (
                <div
                  key={dms.id}
                  onClick={() => setActiveDms(dms.id)}
                  style={{
                    padding: '14px 16px',
                    borderRadius: '10px',
                    background: isSelected ? 'rgba(14, 165, 233, 0.12)' : 'rgba(2, 6, 23, 0.5)',
                    border: isSelected ? '1px solid #0ea5e9' : '1px solid rgba(255, 255, 255, 0.08)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div style={{ fontSize: '13.5px', fontWeight: 700, color: isSelected ? '#38bdf8' : '#ffffff' }}>
                      {dms.name}
                    </div>
                    <div style={{ fontSize: '11px', color: '#64748b' }}>{dms.protocol}</div>
                  </div>
                  <span
                    style={{
                      fontSize: '10.5px',
                      fontWeight: 700,
                      padding: '2px 8px',
                      borderRadius: '9999px',
                      background:
                        dms.status === 'Connected'
                          ? 'rgba(16, 185, 129, 0.15)'
                          : 'rgba(255, 255, 255, 0.06)',
                      color: dms.status === 'Connected' ? '#34d399' : '#94a3b8',
                    }}
                  >
                    {dms.status}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* SYNCED INVENTORY TABLE & CARFAX STATUS */}
        <div
          style={{
            background: 'rgba(15, 23, 42, 0.75)',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            overflow: 'hidden',
          }}
        >
          {/* Table Header Controls */}
          <div
            style={{
              padding: '18px 22px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '12px',
            }}
          >
            <div>
              <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 700, color: '#ffffff' }}>
                Auto-Synced Vehicles from DMS ({filteredList.length})
              </h3>
              <span style={{ fontSize: '12px', color: '#64748b' }}>
                Vehicles are pulled into OMP Deals automatically. No manual typing.
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  background: 'rgba(2, 6, 23, 0.6)',
                  borderRadius: '8px',
                  padding: '6px 12px',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  gap: '8px',
                }}
              >
                <Search size={14} color="#64748b" />
                <input
                  type="text"
                  placeholder="Search by VIN, Stock, Model..."
                  value={filterQuery}
                  onChange={(e) => setFilterQuery(e.target.value)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    outline: 'none',
                    color: '#ffffff',
                    fontSize: '12.5px',
                    width: '200px',
                  }}
                />
              </div>
            </div>
          </div>

          {/* Table */}
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13px' }}>
              <thead>
                <tr style={{ background: 'rgba(0, 0, 0, 0.2)', color: '#94a3b8', borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
                  <th style={{ padding: '12px 18px', fontWeight: 600 }}>Stock / VIN</th>
                  <th style={{ padding: '12px 18px', fontWeight: 600 }}>Vehicle Details</th>
                  <th style={{ padding: '12px 18px', fontWeight: 600 }}>List Price</th>
                  <th style={{ padding: '12px 18px', fontWeight: 600 }}>DMS Status</th>
                  <th style={{ padding: '12px 18px', fontWeight: 600 }}>Carfax VHR</th>
                  <th style={{ padding: '12px 18px', fontWeight: 600 }}>Feed Sync Status</th>
                  <th style={{ padding: '12px 18px', fontWeight: 600, textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredList.map((v) => (
                  <tr
                    key={v.stock}
                    style={{
                      borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                      transition: 'background 0.15s ease',
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)')}
                    onMouseOut={(e) => (e.currentTarget.style.background = 'transparent')}
                  >
                    <td style={{ padding: '14px 18px' }}>
                      <div style={{ fontWeight: 700, color: '#38bdf8' }}>{v.stock}</div>
                      <div style={{ fontSize: '11px', color: '#64748b', fontFamily: 'monospace' }}>{v.vin}</div>
                    </td>
                    <td style={{ padding: '14px 18px' }}>
                      <div style={{ fontWeight: 700, color: '#ffffff' }}>
                        {v.year} {v.make} {v.model}
                      </div>
                      <div style={{ fontSize: '11.5px', color: '#94a3b8' }}>{v.mileage}</div>
                    </td>
                    <td style={{ padding: '14px 18px' }}>
                      <div style={{ fontWeight: 700, color: '#10b981' }}>{v.price}</div>
                      <div style={{ fontSize: '11px', color: '#64748b' }}>Cost: {v.cost}</div>
                    </td>
                    <td style={{ padding: '14px 18px' }}>
                      <span
                        style={{
                          fontSize: '11.5px',
                          padding: '3px 8px',
                          borderRadius: '4px',
                          background: v.dmsStatus === 'Active on Lot' ? 'rgba(16, 185, 129, 0.15)' : 'rgba(234, 179, 8, 0.15)',
                          color: v.dmsStatus === 'Active on Lot' ? '#34d399' : '#facc15',
                          fontWeight: 600,
                        }}
                      >
                        {v.dmsStatus}
                      </span>
                    </td>
                    <td style={{ padding: '14px 18px' }}>
                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '5px',
                          background: 'rgba(234, 179, 8, 0.12)',
                          padding: '3px 8px',
                          borderRadius: '4px',
                          color: '#facc15',
                          fontSize: '11.5px',
                          fontWeight: 700,
                        }}
                      >
                        <FileSpreadsheet size={13} />
                        <span>Carfax Attached</span>
                      </div>
                    </td>
                    <td style={{ padding: '14px 18px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <div
                          style={{
                            width: '7px',
                            height: '7px',
                            borderRadius: '50%',
                            background: v.feedSyncStatus === 'Synced' ? '#10b981' : '#facc15',
                          }}
                        />
                        <span style={{ fontSize: '12px', color: '#e2e8f0' }}>{v.feedSyncStatus}</span>
                      </div>
                      <div style={{ fontSize: '10.5px', color: '#64748b' }}>{v.lastUpdated}</div>
                    </td>
                    <td style={{ padding: '14px 18px', textAlign: 'right' }}>
                      <button
                        onClick={() => navigate('/omp/top-leads')}
                        style={{
                          padding: '5px 10px',
                          borderRadius: '6px',
                          background: 'rgba(14, 165, 233, 0.1)',
                          border: '1px solid rgba(14, 165, 233, 0.3)',
                          color: '#38bdf8',
                          fontSize: '11.5px',
                          fontWeight: 600,
                          cursor: 'pointer',
                        }}
                      >
                        View Leads
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedSync;
