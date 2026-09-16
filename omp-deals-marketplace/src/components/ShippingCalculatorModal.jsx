import React, { useState } from 'react';
import { Truck, X, ShieldCheck, MapPin, Calculator, CheckCircle2, ArrowRight } from 'lucide-react';

export const ShippingCalculatorModal = ({ isOpen, onClose, initialItem }) => {
  const [destZip, setDestZip] = useState('75001 (Dallas, TX)');
  const [carrierType, setCarrierType] = useState('open'); // open | enclosed
  const [calculatedQuote, setCalculatedQuote] = useState({
    distance: '1,480 miles (Fremont, CA → Dallas, TX)',
    freightPrice: '$850.00',
    insuranceCoverage: '$100,000 Zero-Deductible Policy',
    estDelivery: '3-5 Business Days',
  });

  if (!isOpen) return null;

  const handleRecalculate = () => {
    const base = carrierType === 'enclosed' ? 1450 : 850;
    setCalculatedQuote({
      distance: `1,480 miles to ${destZip}`,
      freightPrice: `$${base}.00`,
      insuranceCoverage: '$150,000 Comprehensive Carrier Bond',
      estDelivery: '2-4 Business Days',
    });
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.65)',
        backdropFilter: 'blur(6px)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      <div
        style={{
          backgroundColor: 'var(--surface)',
          borderRadius: '20px',
          border: '1px solid var(--border)',
          width: '100%',
          maxWidth: '620px',
          overflow: 'hidden',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)',
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: '20px 24px',
            borderBottom: '1px solid var(--border)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'var(--surface-secondary)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                backgroundColor: 'rgba(2, 132, 199, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#0284c7',
              }}
            >
              <Truck size={24} />
            </div>
            <div>
              <h3 style={{ margin: 0, fontSize: '17px', fontWeight: 800, color: 'var(--text-primary)' }}>
                Nationwide Doorstep Shipping & Protection
              </h3>
              <p style={{ margin: '2px 0 0', fontSize: '12px', color: 'var(--text-secondary)' }}>
                Insured Carrier Vehicle & Cargo Transport directly to your driveway
              </p>
            </div>
          </div>
          <button onClick={onClose} style={{ background: 'transparent', border: 'none', color: 'var(--text-tertiary)', cursor: 'pointer', padding: '6px' }}>
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {initialItem && (
            <div
              style={{
                backgroundColor: 'var(--surface-secondary)',
                borderRadius: '10px',
                padding: '12px 16px',
                border: '1px solid var(--border)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div>
                <span style={{ fontSize: '11px', color: '#0284c7', fontWeight: 700 }}>SELECTED ITEM</span>
                <div style={{ fontWeight: 700, fontSize: '13.5px', color: 'var(--text-primary)' }}>{initialItem.title}</div>
              </div>
              <div style={{ fontWeight: 800, color: '#10b981', fontSize: '15px' }}>{initialItem.price}</div>
            </div>
          )}

          <div>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>
              Destination Zip Code & City
            </label>
            <div style={{ display: 'flex', gap: '10px' }}>
              <input
                type="text"
                value={destZip}
                onChange={(e) => setDestZip(e.target.value)}
                style={{
                  flex: 1,
                  padding: '10px 14px',
                  borderRadius: '8px',
                  backgroundColor: 'var(--background)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-primary)',
                  fontSize: '13.5px',
                  outline: 'none',
                }}
              />
              <button
                onClick={handleRecalculate}
                style={{
                  backgroundColor: '#0284c7',
                  color: '#ffffff',
                  border: 'none',
                  padding: '10px 18px',
                  borderRadius: '8px',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Calculate
              </button>
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>
              Transport Carrier Type
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              <button
                onClick={() => { setCarrierType('open'); handleRecalculate(); }}
                style={{
                  padding: '12px',
                  borderRadius: '10px',
                  border: carrierType === 'open' ? '2px solid #0284c7' : '1px solid var(--border)',
                  backgroundColor: carrierType === 'open' ? 'rgba(2, 132, 199, 0.08)' : 'var(--surface-secondary)',
                  color: carrierType === 'open' ? '#0284c7' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                <div style={{ fontWeight: 700, fontSize: '13px' }}>Standard Open Carrier</div>
                <div style={{ fontSize: '11px', marginTop: '2px' }}>Most economical & fast</div>
              </button>

              <button
                onClick={() => { setCarrierType('enclosed'); handleRecalculate(); }}
                style={{
                  padding: '12px',
                  borderRadius: '10px',
                  border: carrierType === 'enclosed' ? '2px solid #0284c7' : '1px solid var(--border)',
                  backgroundColor: carrierType === 'enclosed' ? 'rgba(2, 132, 199, 0.08)' : 'var(--surface-secondary)',
                  color: carrierType === 'enclosed' ? '#0284c7' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                <div style={{ fontWeight: 700, fontSize: '13px' }}>Enclosed Luxury Carrier</div>
                <div style={{ fontSize: '11px', marginTop: '2px' }}>100% weather & debris proof</div>
              </button>
            </div>
          </div>

          {/* Quote Result Box */}
          <div
            style={{
              backgroundColor: 'var(--surface-secondary)',
              borderRadius: '12px',
              padding: '16px',
              border: '1px solid var(--border)',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '12.5px', color: 'var(--text-secondary)' }}>Distance:</span>
              <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)' }}>{calculatedQuote.distance}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '12.5px', color: 'var(--text-secondary)' }}>Est. Transit Time:</span>
              <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)' }}>{calculatedQuote.estDelivery}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '12.5px', color: 'var(--text-secondary)' }}>Cargo Protection:</span>
              <span style={{ fontSize: '12.5px', color: '#10b981', fontWeight: 600 }}>{calculatedQuote.insuranceCoverage}</span>
            </div>
            <div style={{ height: '1px', backgroundColor: 'var(--border)', margin: '4px 0' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text-primary)' }}>Total Freight & Booking:</span>
              <span style={{ fontSize: '20px', fontWeight: 900, color: '#10b981' }}>{calculatedQuote.freightPrice}</span>
            </div>
          </div>

          <button
            onClick={() => {
              alert(`Transport Booking Request Submitted! Carrier dispatched for ${destZip}.`);
              onClose();
            }}
            style={{
              width: '100%',
              backgroundColor: '#10b981',
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
            }}
          >
            <span>Book Insured Doorstep Delivery</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};
