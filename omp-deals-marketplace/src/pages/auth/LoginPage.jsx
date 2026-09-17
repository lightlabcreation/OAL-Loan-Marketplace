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
  CheckCircle2,
  ArrowLeft,
  Shield,
  Car
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
        minHeight: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '30px 20px',
        backgroundColor: '#070a13',
        backgroundImage: 'radial-gradient(circle at 50% 10%, rgba(2, 132, 199, 0.15), transparent 45%), radial-gradient(circle at 80% 80%, rgba(16, 185, 129, 0.08), transparent 40%)',
        color: '#ffffff',
        fontFamily: 'Inter, system-ui, sans-serif',
        boxSizing: 'border-box',
        position: 'relative',
      }}
    >
      {/* Top Left Return Button */}
      <button
        onClick={() => navigate('/')}
        style={{
          position: 'absolute',
          top: '24px',
          left: '28px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          backgroundColor: 'rgba(255, 255, 255, 0.08)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          color: '#ffffff',
          padding: '8px 16px',
          borderRadius: '10px',
          fontSize: '13px',
          fontWeight: 700,
          cursor: 'pointer',
          backdropFilter: 'blur(8px)',
        }}
      >
        <ArrowLeft size={16} />
        <span>Back to Public Marketplace</span>
      </button>

      {/* Main Login Card */}
      <div
        style={{
          width: '100%',
          maxWidth: '1000px',
          backgroundColor: '#0d1322',
          borderRadius: '24px',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          overflow: 'hidden',
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.7)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          boxSizing: 'border-box',
        }}
      >
        {/* Left: Branding & Overview */}
        <div
          style={{
            background: 'linear-gradient(135deg, #090e1c 0%, #0f1c38 100%)',
            color: '#ffffff',
            padding: '44px 36px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderRight: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '14px',
                  background: 'linear-gradient(135deg, #0284c7 0%, #38bdf8 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  boxShadow: '0 4px 14px rgba(2, 132, 199, 0.4)',
                }}
              >
                <ShoppingBag size={24} />
              </div>
              <div>
                <div style={{ fontSize: '20px', fontWeight: 900, letterSpacing: '-0.02em', lineHeight: 1 }}>
                  OMP DEALS
                </div>
                <div style={{ fontSize: '11px', color: '#38bdf8', fontWeight: 700, textTransform: 'uppercase', marginTop: '3px' }}>
                  AI Marketplace & DMS Gateway
                </div>
              </div>
            </div>

            <h2 style={{ fontSize: '24px', fontWeight: 900, margin: '0 0 14px', lineHeight: 1.25, letterSpacing: '-0.02em' }}>
              Select your User Role to enter the verified workspace.
            </h2>
            <p style={{ fontSize: '13.5px', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
              Production-grade multi-role authentication. Switch instantly between Public Buyer, ADP Dealership, Local Pro, or Franchise Umbrella Owner.
            </p>
          </div>

          <div style={{ marginTop: '32px', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#10b981', fontWeight: 700, marginBottom: '8px' }}>
              <ShieldCheck size={16} />
              <span>100% Secure Tenant Isolation & TruYou Verification</span>
            </div>
            <div style={{ fontSize: '11.5px', color: '#64748b' }}>
              OfferUp Hybrid Architecture • Dealer Essentials Central Office
            </div>
          </div>
        </div>

        {/* Right: Role Selection & Login Form */}
        <div style={{ padding: '36px', display: 'flex', flexDirection: 'column', gap: '20px', backgroundColor: '#0c1220' }}>
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: 800, margin: '0 0 4px', color: '#ffffff' }}>
              Select Portal / Role Preset
            </h3>
            <p style={{ fontSize: '12px', color: '#94a3b8', margin: 0 }}>
              Click any role preset to auto-configure permissions and instant workspace login:
            </p>
          </div>

          {/* 5 Preset Role Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {ROLE_PRESETS.map((preset) => {
              const isSelected = selectedRole === preset.id;
              return (
                <div
                  key={preset.id}
                  onClick={() => handleRoleSelect(preset)}
                  style={{
                    padding: '12px 14px',
                    borderRadius: '12px',
                    border: isSelected ? '1.5px solid #0284c7' : '1px solid rgba(255, 255, 255, 0.08)',
                    backgroundColor: isSelected ? 'rgba(2, 132, 199, 0.12)' : 'rgba(255, 255, 255, 0.03)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    transition: 'all 0.15s ease',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div
                      style={{
                        width: '34px',
                        height: '34px',
                        borderRadius: '8px',
                        backgroundColor: isSelected ? '#0284c7' : 'rgba(255, 255, 255, 0.08)',
                        color: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {preset.id === 'DEALER_PRO' && <Car size={16} />}
                      {preset.id === 'GUEST' && <User size={16} />}
                      {preset.id === 'MEMBER' && <ShoppingBag size={16} />}
                      {preset.id === 'SERVICE_PRO' && <Wrench size={16} />}
                      {preset.id === 'EXECUTIVE_ADMIN' && <Building2 size={16} />}
                    </div>
                    <div>
                      <div style={{ fontSize: '13px', fontWeight: 800, color: isSelected ? '#ffffff' : '#cbd5e1' }}>
                        {preset.label}
                      </div>
                      <div style={{ fontSize: '11px', color: '#64748b' }}>
                        {preset.subtitle}
                      </div>
                    </div>
                  </div>

                  {isSelected && (
                    <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                      <CheckCircle2 size={14} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Submit Action */}
          <button
            onClick={handleLogin}
            style={{
              marginTop: '8px',
              backgroundColor: '#0284c7',
              color: '#ffffff',
              border: 'none',
              padding: '14px',
              borderRadius: '12px',
              fontSize: '14.5px',
              fontWeight: 800,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              boxShadow: '0 4px 18px rgba(2, 132, 199, 0.4)',
            }}
          >
            <span>Enter Workspace as Selected Role</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};
