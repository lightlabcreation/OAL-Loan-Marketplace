import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import {
  Building2,
  Store,
  TrendingUp,
  Car,
  DollarSign,
  Key,
  ShieldCheck,
  Plus,
  ArrowUpRight,
  ArrowDownRight,
  Filter,
  CheckCircle,
  AlertTriangle,
  RefreshCw,
  Users,
  BarChart3,
  Activity
} from 'lucide-react';

export const CentralOffice = () => {
  const { selectedStore, currentStoreObj } = useOutletContext() || { selectedStore: 'all', currentStoreObj: { name: 'All Locations' } };
  const [activeTab, setActiveTab] = useState('overview');
  const [filterPeriod, setFilterPeriod] = useState('mtd');

  const branches = [
    {
      id: 'dallas',
      name: 'Dallas Central Motors',
      city: 'Dallas, TX',
      manager: 'Marcus Vance',
      licenseStatus: 'Active (Expires Oct 2027)',
      activeUnits: 58,
      soldMtd: 24,
      grossProfit: '$74,200',
      status: 'Healthy',
      turnoverDays: '22 Days',
    },
    {
      id: 'houston',
      name: 'Houston North Auto Mall',
      city: 'Houston, TX',
      manager: 'Elena Rostova',
      licenseStatus: 'Active (Expires Nov 2027)',
      activeUnits: 49,
      soldMtd: 19,
      grossProfit: '$58,650',
      status: 'Healthy',
      turnoverDays: '26 Days',
    },
    {
      id: 'austin',
      name: 'Austin West Dealership',
      city: 'Austin, TX',
      manager: 'James Sterling',
      licenseStatus: 'Renewal in 14 Days',
      activeUnits: 35,
      soldMtd: 14,
      grossProfit: '$39,800',
      status: 'Warning',
      turnoverDays: '31 Days',
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Header Banner */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, padding: '0.15rem 0.5rem', borderRadius: '4px', backgroundColor: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8', border: '1px solid rgba(56, 189, 248, 0.2)' }}>
              TASK E-01 • PILLAR 4
            </span>
            <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Umbrella Franchise Parent Management</span>
          </div>
          <h1 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#f8fafc', margin: 0, letterSpacing: '-0.02em' }}>
            OMP Executive Central Office
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '0.875rem', margin: '0.25rem 0 0 0' }}>
            Central headquarters control to manage multiple dealership franchise locations, license provisioning, and consolidated group P&L.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <button style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', backgroundColor: '#0284c7', color: '#fff', border: 'none', padding: '0.55rem 1rem', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer', boxShadow: '0 4px 12px rgba(2, 132, 199, 0.3)' }}>
            <Plus size={16} /> Provision New Store Location
          </button>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.5)', border: '1px solid rgba(255, 255, 255, 0.07)', borderRadius: '12px', padding: '1.25rem', backdropFilter: 'blur(8px)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#94a3b8', fontSize: '0.8rem', fontWeight: 500 }}>
            <span>Total Group Inventory</span>
            <Car size={18} color="#38bdf8" />
          </div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#f8fafc', marginTop: '0.5rem' }}>
            142 <span style={{ fontSize: '0.85rem', fontWeight: 500, color: '#94a3b8' }}>Vehicles</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#10b981', fontSize: '0.75rem', marginTop: '0.35rem' }}>
            <ArrowUpRight size={14} /> +12% vs last month across 3 stores
          </div>
        </div>

        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.5)', border: '1px solid rgba(255, 255, 255, 0.07)', borderRadius: '12px', padding: '1.25rem', backdropFilter: 'blur(8px)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#94a3b8', fontSize: '0.8rem', fontWeight: 500 }}>
            <span>Consolidated Gross MTD</span>
            <DollarSign size={18} color="#10b981" />
          </div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#10b981', marginTop: '0.5rem' }}>
            $172,650
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#10b981', fontSize: '0.75rem', marginTop: '0.35rem' }}>
            <ArrowUpRight size={14} /> Average $3,028 Gross / Unit
          </div>
        </div>

        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.5)', border: '1px solid rgba(255, 255, 255, 0.07)', borderRadius: '12px', padding: '1.25rem', backdropFilter: 'blur(8px)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#94a3b8', fontSize: '0.8rem', fontWeight: 500 }}>
            <span>Total Units Sold MTD</span>
            <TrendingUp size={18} color="#a855f7" />
          </div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#f8fafc', marginTop: '0.5rem' }}>
            57 <span style={{ fontSize: '0.85rem', fontWeight: 500, color: '#94a3b8' }}>Cars Delivered</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#38bdf8', fontSize: '0.75rem', marginTop: '0.35rem' }}>
            <Activity size={14} /> 74% Finance / 26% Cash
          </div>
        </div>

        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.5)', border: '1px solid rgba(255, 255, 255, 0.07)', borderRadius: '12px', padding: '1.25rem', backdropFilter: 'blur(8px)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#94a3b8', fontSize: '0.8rem', fontWeight: 500 }}>
            <span>Active Store Licenses</span>
            <Key size={18} color="#f59e0b" />
          </div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#f8fafc', marginTop: '0.5rem' }}>
            3 / 5 <span style={{ fontSize: '0.85rem', fontWeight: 500, color: '#94a3b8' }}>Allocated</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#f59e0b', fontSize: '0.75rem', marginTop: '0.35rem' }}>
            <AlertTriangle size={14} /> 1 Store Renewal in 14 Days
          </div>
        </div>
      </div>

      {/* Multi-Location Performance Table */}
      <div style={{ backgroundColor: 'rgba(15, 23, 42, 0.75)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '12px', overflow: 'hidden' }}>
        <div style={{ padding: '1rem 1.25rem', borderBottom: '1px solid rgba(255, 255, 255, 0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
          <div>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
              Dealership Locations under Master Umbrella
            </h3>
            <p style={{ fontSize: '0.75rem', color: '#64748b', margin: '0.2rem 0 0 0' }}>
              Real-time branch telemetry, license tiering, and individual profit breakdown
            </p>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {['All Stores', 'Active Only', 'Audit Risk'].map((f) => (
              <button
                key={f}
                style={{ backgroundColor: f === 'All Stores' ? 'rgba(56, 189, 248, 0.15)' : 'rgba(255,255,255,0.04)', color: f === 'All Stores' ? '#38bdf8' : '#94a3b8', border: f === 'All Stores' ? '1px solid rgba(56, 189, 248, 0.3)' : '1px solid rgba(255,255,255,0.06)', padding: '0.35rem 0.75rem', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer' }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.85rem' }}>
            <thead>
              <tr style={{ backgroundColor: 'rgba(30, 41, 59, 0.5)', color: '#94a3b8', borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <th style={{ padding: '0.85rem 1.25rem', fontWeight: 600 }}>Location Name & City</th>
                <th style={{ padding: '0.85rem 1rem', fontWeight: 600 }}>General Manager</th>
                <th style={{ padding: '0.85rem 1rem', fontWeight: 600 }}>Lot Inventory</th>
                <th style={{ padding: '0.85rem 1rem', fontWeight: 600 }}>Sold MTD</th>
                <th style={{ padding: '0.85rem 1rem', fontWeight: 600 }}>Gross Profit</th>
                <th style={{ padding: '0.85rem 1rem', fontWeight: 600 }}>Turn Days</th>
                <th style={{ padding: '0.85rem 1rem', fontWeight: 600 }}>License Status</th>
                <th style={{ padding: '0.85rem 1.25rem', fontWeight: 600, textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {branches.map((b) => (
                <tr key={b.id} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.04)', transition: 'background-color 0.15s' }}>
                  <td style={{ padding: '1rem 1.25rem' }}>
                    <div style={{ fontWeight: 700, color: '#f8fafc' }}>{b.name}</div>
                    <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{b.city}</div>
                  </td>
                  <td style={{ padding: '1rem 1rem', color: '#cbd5e1' }}>{b.manager}</td>
                  <td style={{ padding: '1rem 1rem' }}>
                    <span style={{ fontWeight: 700, color: '#38bdf8' }}>{b.activeUnits} Units</span>
                  </td>
                  <td style={{ padding: '1rem 1rem', fontWeight: 600, color: '#f8fafc' }}>{b.soldMtd} cars</td>
                  <td style={{ padding: '1rem 1rem', fontWeight: 700, color: '#10b981' }}>{b.grossProfit}</td>
                  <td style={{ padding: '1rem 1rem', color: '#cbd5e1' }}>{b.turnoverDays}</td>
                  <td style={{ padding: '1rem 1rem' }}>
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                        padding: '0.2rem 0.55rem',
                        borderRadius: '9999px',
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        backgroundColor: b.status === 'Healthy' ? 'rgba(16, 185, 129, 0.12)' : 'rgba(245, 158, 11, 0.12)',
                        color: b.status === 'Healthy' ? '#10b981' : '#f59e0b',
                        border: b.status === 'Healthy' ? '1px solid rgba(16, 185, 129, 0.25)' : '1px solid rgba(245, 158, 11, 0.25)',
                      }}
                    >
                      {b.status === 'Healthy' ? <CheckCircle size={12} /> : <AlertTriangle size={12} />}
                      {b.licenseStatus}
                    </span>
                  </td>
                  <td style={{ padding: '1rem 1.25rem', textAlign: 'right' }}>
                    <button style={{ backgroundColor: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8', border: '1px solid rgba(56, 189, 248, 0.2)', padding: '0.35rem 0.75rem', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer' }}>
                      Audit Store
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
