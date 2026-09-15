import React, { useState } from 'react';
import {
  Wallet,
  AlertTriangle,
  Clock,
  CheckCircle,
  DollarSign,
  Calendar,
  Send,
  RefreshCw,
  FileSpreadsheet,
  Phone,
  CreditCard,
  ShieldAlert,
  ArrowRight
} from 'lucide-react';
import { toast } from '../../../utils/ompToast';

export const BhphSuite = () => {
  const [activeBucket, setActiveBucket] = useState('all');

  const [accounts, setAccounts] = useState([
    {
      id: 'BHPH-1092',
      customer: 'Antonio Rivera',
      phone: '+1 (214) 555-0812',
      vehicle: '2018 Chevy Malibu LT',
      installment: '$145 / week',
      dueDate: 'Today (Sep 15)',
      status: 'Due Today',
      bucket: 'due_today',
      balanceRemaining: '$7,250',
      daysLate: 0,
      lateFee: 0,
      autoAch: true,
    },
    {
      id: 'BHPH-1088',
      customer: 'Tasha Williams',
      phone: '+1 (469) 555-0193',
      vehicle: '2017 Nissan Altima 2.5',
      installment: '$290 / bi-weekly',
      dueDate: 'Sep 08, 2026',
      status: '7 Days Late',
      bucket: 'late_1_15',
      balanceRemaining: '$5,800',
      daysLate: 7,
      lateFee: 35,
      autoAch: false,
    },
    {
      id: 'BHPH-1045',
      customer: 'Brandon Vance',
      phone: '+1 (817) 555-0774',
      vehicle: '2016 Dodge Charger SXT',
      installment: '$350 / bi-weekly',
      dueDate: 'Aug 24, 2026',
      status: '22 Days Delinquent',
      bucket: 'late_16_30',
      balanceRemaining: '$9,100',
      daysLate: 22,
      lateFee: 70,
      autoAch: false,
    },
    {
      id: 'BHPH-0994',
      customer: 'Courtney Ross',
      phone: '+1 (972) 555-0641',
      vehicle: '2015 Ford Explorer XLT',
      installment: '$420 / monthly',
      dueDate: 'Aug 10, 2026',
      status: 'Repo Review',
      bucket: 'repo_risk',
      balanceRemaining: '$4,400',
      daysLate: 36,
      lateFee: 105,
      autoAch: false,
    },
  ]);

  const handleRecordPayment = (id) => {
    setAccounts((prev) =>
      prev.map((a) => (a.id === id ? { ...a, status: 'Paid in Full', bucket: 'paid', daysLate: 0, lateFee: 0 } : a))
    );
    toast.success('Payment recorded successfully. Receipt sent via SMS.');
  };

  const handleSendReminder = (customer) => {
    toast.success(`Automated SMS payment link reminder dispatched to ${customer}`);
  };

  const handleSyncQuickBooks = () => {
    toast.success('Synchronized 14 active BHPH notes with QuickBooks Online');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, padding: '0.15rem 0.5rem', borderRadius: '4px', backgroundColor: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8', border: '1px solid rgba(56, 189, 248, 0.2)' }}>
              TASK E-18 • PILLAR 4
            </span>
            <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>In-House Dealership Financing & Collections Suite</span>
          </div>
          <h1 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#f8fafc', margin: 0, letterSpacing: '-0.02em' }}>
            BHPH (Buy Here Pay Here) Management Suite
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '0.875rem', margin: '0.25rem 0 0 0' }}>
            Automated recurring ACH debit collections, delinquency buckets, late fee engine, and accounting synchronization.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <button
            onClick={handleSyncQuickBooks}
            style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', backgroundColor: '#10b981', color: '#fff', border: 'none', padding: '0.55rem 1rem', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer', boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)' }}
          >
            <FileSpreadsheet size={16} /> Sync with QuickBooks Online
          </button>
        </div>
      </div>

      {/* Portfolio Health KPIs */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.5)', border: '1px solid rgba(255, 255, 255, 0.07)', borderRadius: '12px', padding: '1.25rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: '#94a3b8', fontSize: '0.8rem' }}>
            <span>Active BHPH Portfolio</span>
            <Wallet size={18} color="#38bdf8" />
          </div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#f8fafc', marginTop: '0.4rem' }}>
            $248,600
          </div>
          <div style={{ fontSize: '0.75rem', color: '#10b981', marginTop: '0.3rem' }}>
            38 Active Notes Under Management
          </div>
        </div>

        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.5)', border: '1px solid rgba(255, 255, 255, 0.07)', borderRadius: '12px', padding: '1.25rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: '#94a3b8', fontSize: '0.8rem' }}>
            <span>Expected Weekly Cashflow</span>
            <DollarSign size={18} color="#10b981" />
          </div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#10b981', marginTop: '0.4rem' }}>
            $14,250
          </div>
          <div style={{ fontSize: '0.75rem', color: '#38bdf8', marginTop: '0.3rem' }}>
            82% On Auto-ACH Bank Recurring
          </div>
        </div>

        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.5)', border: '1px solid rgba(255, 255, 255, 0.07)', borderRadius: '12px', padding: '1.25rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: '#94a3b8', fontSize: '0.8rem' }}>
            <span>Delinquency Rate (1-30d)</span>
            <AlertTriangle size={18} color="#f59e0b" />
          </div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#f59e0b', marginTop: '0.4rem' }}>
            5.2%
          </div>
          <div style={{ fontSize: '0.75rem', color: '#cbd5e1', marginTop: '0.3rem' }}>
            2 Accounts Past 15-Day Grace Period
          </div>
        </div>

        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.5)', border: '1px solid rgba(255, 255, 255, 0.07)', borderRadius: '12px', padding: '1.25rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: '#94a3b8', fontSize: '0.8rem' }}>
            <span>Repossession Risk Queue</span>
            <ShieldAlert size={18} color="#ef4444" />
          </div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ef4444', marginTop: '0.4rem' }}>
            1 Unit
          </div>
          <div style={{ fontSize: '0.75rem', color: '#ef4444', marginTop: '0.3rem' }}>
            GPS Starter Interrupt Armed
          </div>
        </div>
      </div>

      {/* Delinquency Filter Tabs */}
      <div style={{ display: 'flex', gap: '0.5rem', backgroundColor: 'rgba(30, 41, 59, 0.4)', padding: '0.35rem', borderRadius: '8px', width: 'fit-content' }}>
        {[
          { id: 'all', label: 'All Portfolio' },
          { id: 'due_today', label: 'Due Today' },
          { id: 'late_1_15', label: '1 - 15 Days Late' },
          { id: 'late_16_30', label: '16 - 30 Days Late' },
          { id: 'repo_risk', label: 'Default / Repo Risk' },
        ].map((b) => (
          <button
            key={b.id}
            onClick={() => setActiveBucket(b.id)}
            style={{
              backgroundColor: activeBucket === b.id ? '#0284c7' : 'transparent',
              color: activeBucket === b.id ? '#fff' : '#94a3b8',
              border: 'none',
              padding: '0.4rem 0.85rem',
              borderRadius: '6px',
              fontSize: '0.78rem',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            {b.label}
          </button>
        ))}
      </div>

      {/* BHPH Loan Portfolio Table */}
      <div style={{ backgroundColor: 'rgba(15, 23, 42, 0.75)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '12px', overflow: 'hidden' }}>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.85rem' }}>
            <thead>
              <tr style={{ backgroundColor: 'rgba(30, 41, 59, 0.5)', color: '#94a3b8', borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <th style={{ padding: '0.85rem 1.25rem', fontWeight: 600 }}>Note # & Customer</th>
                <th style={{ padding: '0.85rem 1rem', fontWeight: 600 }}>Vehicle</th>
                <th style={{ padding: '0.85rem 1rem', fontWeight: 600 }}>Installment</th>
                <th style={{ padding: '0.85rem 1rem', fontWeight: 600 }}>Remaining Balance</th>
                <th style={{ padding: '0.85rem 1rem', fontWeight: 600 }}>Due Date / Status</th>
                <th style={{ padding: '0.85rem 1rem', fontWeight: 600 }}>Late Fee Applied</th>
                <th style={{ padding: '0.85rem 1.25rem', fontWeight: 600, textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {accounts
                .filter((a) => activeBucket === 'all' || a.bucket === activeBucket)
                .map((a) => (
                  <tr key={a.id} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.04)' }}>
                    <td style={{ padding: '1rem 1.25rem' }}>
                      <div style={{ fontWeight: 700, color: '#f8fafc' }}>{a.customer}</div>
                      <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{a.id} • {a.phone}</div>
                    </td>
                    <td style={{ padding: '1rem 1rem', color: '#cbd5e1' }}>{a.vehicle}</td>
                    <td style={{ padding: '1rem 1rem', fontWeight: 700, color: '#38bdf8' }}>{a.installment}</td>
                    <td style={{ padding: '1rem 1rem', fontWeight: 600, color: '#f8fafc' }}>{a.balanceRemaining}</td>
                    <td style={{ padding: '1rem 1rem' }}>
                      <span
                        style={{
                          fontSize: '0.75rem',
                          padding: '0.2rem 0.55rem',
                          borderRadius: '9999px',
                          fontWeight: 700,
                          backgroundColor:
                            a.daysLate === 0
                              ? 'rgba(16, 185, 129, 0.15)'
                              : a.daysLate < 15
                              ? 'rgba(245, 158, 11, 0.15)'
                              : 'rgba(239, 68, 68, 0.15)',
                          color:
                            a.daysLate === 0
                              ? '#10b981'
                              : a.daysLate < 15
                              ? '#f59e0b'
                              : '#ef4444',
                        }}
                      >
                        {a.status}
                      </span>
                    </td>
                    <td style={{ padding: '1rem 1rem', color: a.lateFee > 0 ? '#ef4444' : '#64748b', fontWeight: 700 }}>
                      {a.lateFee > 0 ? `+$${a.lateFee}.00` : '$0.00'}
                    </td>
                    <td style={{ padding: '1rem 1.25rem', textAlign: 'right' }}>
                      <div style={{ display: 'flex', gap: '0.4rem', justifyContent: 'flex-end' }}>
                        <button
                          onClick={() => handleRecordPayment(a.id)}
                          style={{ backgroundColor: '#0284c7', color: '#fff', border: 'none', padding: '0.35rem 0.65rem', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer' }}
                        >
                          Collect
                        </button>
                        <button
                          onClick={() => handleSendReminder(a.customer)}
                          style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', color: '#cbd5e1', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '0.35rem 0.5rem', borderRadius: '6px', fontSize: '0.75rem', cursor: 'pointer' }}
                        >
                          <Send size={13} />
                        </button>
                      </div>
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
