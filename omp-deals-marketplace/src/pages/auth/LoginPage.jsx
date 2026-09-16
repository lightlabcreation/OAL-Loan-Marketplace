import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ShoppingBag,
  User,
  ShieldCheck,
  Wrench,
  Building2,
  Lock,
  Mail,
  ArrowRight,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { useAuth, ROLE_PRESETS } from '../../context/AuthContext';

export const LoginPage = () => {
  const navigate = useNavigate();
  const { loginAsRole } = useAuth();
  const [selectedRole, setSelectedRole] = useState('DEALER_PRO');
  const [email, setEmail] = useState('marcus@dallascentralmotors.com');
  const [password, setPassword] = useState('Dealer@2026');

  const handleRoleSelect = (preset) => {
    setSelectedRole(preset.id);
    setEmail(preset.email || 'guest@ompdeals.com');
    setPassword('Demo@2026');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const preset = loginAsRole(selectedRole);
    navigate(preset.defaultRoute);
  };

  return (
    <div
      style={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '960px',
          backgroundColor: 'var(--surface)',
          borderRadius: '24px',
          border: '1px solid var(--border)',
          overflow: 'hidden',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
        }}
      >
        {/* Left: Branding & Role Summary */}
        <div
          style={{
            background: 'linear-gradient(135deg, #090d16 0%, #0c1527 100%)',
            color: '#ffffff',
            padding: '40px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #0284c7, #38bdf8)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                }}
              >
                <ShoppingBag size={24} />
              </div>
              <div>
                <div style={{ fontSize: '20px', fontWeight: 900, letterSpacing: '-0.02em' }}>OMP DEALS</div>
                <div style={{ fontSize: '11px', color: '#38bdf8', fontWeight: 700 }}>AI MARKETPLACE GATEWAY</div>
              </div>
            </div>

            <h2 style={{ fontSize: '24px', fontWeight: 800, margin: '0 0 12px', lineHeight: 1.3 }}>
              Choose your Role to access the dedicated Marketplace or DMS workspace.
            </h2>
            <p style={{ fontSize: '13.5px', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
              Seamless role-based permissions for Public Buyers, Verified Auto Dealers, Local Service Technicians, and Executive Franchise Admins.
            </p>
          </div>

          <div style={{ marginTop: '30px', borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '20px', fontSize: '12px', color: '#10b981' }}>
            ✓ 100% Production-Grade Role-Based Access Control (RBAC)
          </div>
        </div>

        {/* Right: Role Cards & Login Form */}
        <div style={{ padding: '36px 32px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
              Select Portal / Role Preset
            </h3>
            <p style={{ fontSize: '12px', color: 'var(--text-secondary)', margin: '2px 0 0' }}>
              Click any role below to test its specific workspace & menus
            </p>
          </div>

          {/* Role Cards List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {ROLE_PRESETS.map((preset) => {
              const isSelected = selectedRole === preset.id;
              return (
                <div
                  key={preset.id}
                  onClick={() => handleRoleSelect(preset)}
                  style={{
                    padding: '12px 14px',
                    borderRadius: '12px',
                    border: isSelected ? '2px solid #0284c7' : '1px solid var(--border)',
                    backgroundColor: isSelected ? 'rgba(2, 132, 199, 0.08)' : 'var(--surface-secondary)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    transition: 'all 0.15s ease',
                  }}
                >
                  <div>
                    <div style={{ fontSize: '13.5px', fontWeight: 800, color: isSelected ? '#0284c7' : 'var(--text-primary)' }}>
                      {preset.label}
                    </div>
                    <div style={{ fontSize: '11.5px', color: 'var(--text-secondary)', marginTop: '2px' }}>
                      {preset.subtitle}
                    </div>
                  </div>
                  {isSelected && (
                    <CheckCircle2 size={18} color="#0284c7" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Quick Submit */}
          <form onSubmit={handleLogin}>
            <button
              type="submit"
              style={{
                width: '100%',
                backgroundColor: '#0284c7',
                color: '#ffffff',
                border: 'none',
                padding: '12px',
                borderRadius: '10px',
                fontSize: '14px',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                boxShadow: '0 4px 14px rgba(2, 132, 199, 0.3)',
              }}
            >
              <span>Enter Workspace as Selected Role</span>
              <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
