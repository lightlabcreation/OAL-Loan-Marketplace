import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Camera,
  Scan,
  FileSpreadsheet,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Search,
  ExternalLink,
  Car,
  Gauge,
  Sliders,
  DollarSign,
  History
} from 'lucide-react';
import { AdpVerifiedBadge } from '../../../components/omp/AdpVerifiedBadge';

export const VinScanner = () => {
  const navigate = useNavigate();

  const [inputVin, setInputVin] = useState('1G1YB2D47H5108491');
  const [isScanning, setIsScanning] = useState(false);
  const [scannedResult, setScannedResult] = useState({
    vin: '1G1YB2D47H5108491',
    year: 2024,
    make: 'Chevrolet',
    model: 'Corvette Stingray',
    trim: '2LT Coupe',
    engine: '6.2L V8 DI HP VVT',
    transmission: '8-Speed Dual Clutch',
    driveType: 'RWD',
    kbbBookout: {
      tradeIn: '$68,400',
      privateParty: '$74,200',
      dealerRetail: '$81,900',
    },
    historyReport: {
      provider: 'Carfax & VinAudit (NMVTIS)',
      accidents: '0 Accidents Reported',
      owners: '1 Single Owner (Personal Lease)',
      titleStatus: 'Clean Title (No salvage/flood brands)',
      odometerVerified: '3,210 miles (Verified by DMV)',
      lastService: 'Dealer Scheduled Maintenance (1,500 mi)',
    },
  });

  const handleSimulateScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
    }, 1500);
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
              <span style={{ fontSize: '11.5px', color: '#94a3b8' }}>VIN Scanner & VHR Bookout (Task E-02)</span>
            </div>
            <h1 style={{ fontSize: '26px', fontWeight: 800, margin: 0, color: '#ffffff' }}>
              VIN Scanner & Vehicle History Bookout
            </h1>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
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
              <span>Dealer Hub</span>
            </button>

            <button
              onClick={() => navigate('/omp/market-pricing')}
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
              <span>Next: AI Market Pricing (E-03)</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* SCANNER INPUT CARD */}
        <div
          style={{
            background: 'rgba(15, 23, 42, 0.8)',
            borderRadius: '16px',
            border: '1px solid rgba(14, 165, 233, 0.3)',
            padding: '24px',
            marginBottom: '28px',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <h3 style={{ margin: '0 0 4px', fontSize: '16px', fontWeight: 700, color: '#ffffff', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Camera size={18} color="#0ea5e9" />
                <span>Mobile Camera VIN Barcode Scanner or Manual Entry</span>
              </h3>
              <p style={{ margin: 0, fontSize: '13px', color: '#94a3b8' }}>
                Aim smartphone camera at door jamb or windshield barcode, or enter 17-digit VIN below.
              </p>
            </div>

            <button
              onClick={handleSimulateScan}
              disabled={isScanning}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                borderRadius: '10px',
                background: isScanning ? 'rgba(14, 165, 233, 0.2)' : 'linear-gradient(90deg, #0284c7, #0ea5e9)',
                border: 'none',
                color: '#ffffff',
                fontSize: '13.5px',
                fontWeight: 700,
                cursor: isScanning ? 'not-allowed' : 'pointer',
                boxShadow: '0 4px 16px rgba(14, 165, 233, 0.3)',
              }}
            >
              <Scan size={16} className={isScanning ? 'animate-spin' : ''} />
              <span>{isScanning ? 'Scanning Barcode...' : 'Simulate Camera Scan'}</span>
            </button>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <input
              type="text"
              value={inputVin}
              onChange={(e) => setInputVin(e.target.value.toUpperCase())}
              placeholder="Enter 17-character VIN..."
              style={{
                flex: 1,
                padding: '12px 16px',
                borderRadius: '8px',
                background: 'rgba(2, 6, 23, 0.7)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#38bdf8',
                fontSize: '15px',
                fontWeight: 700,
                fontFamily: 'monospace',
                letterSpacing: '0.05em',
                outline: 'none',
              }}
            />
            <button
              onClick={handleSimulateScan}
              style={{
                padding: '12px 20px',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#ffffff',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Decode VIN
            </button>
          </div>
        </div>

        {/* DECODED RESULT & BOOKOUT DATA */}
        {scannedResult && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '20px' }}>
            {/* Left: Decoded Vehicle Specs */}
            <div
              style={{
                background: 'rgba(15, 23, 42, 0.75)',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                padding: '24px',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <span style={{ fontSize: '11px', color: '#10b981', fontWeight: 700, textTransform: 'uppercase' }}>
                  ✓ VIN DECODED SUCCESSFULLY
                </span>
                <span style={{ fontSize: '11px', color: '#64748b' }}>NMVTIS Verified</span>
              </div>

              <h2 style={{ fontSize: '20px', fontWeight: 800, margin: '0 0 4px', color: '#ffffff' }}>
                {scannedResult.year} {scannedResult.make} {scannedResult.model}
              </h2>
              <div style={{ fontSize: '13px', color: '#38bdf8', marginBottom: '20px' }}>
                {scannedResult.trim} • {scannedResult.driveType}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', fontSize: '13px', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '16px' }}>
                <div>
                  <div style={{ color: '#64748b', fontSize: '11.5px' }}>Engine</div>
                  <div style={{ color: '#ffffff', fontWeight: 600 }}>{scannedResult.engine}</div>
                </div>
                <div>
                  <div style={{ color: '#64748b', fontSize: '11.5px' }}>Transmission</div>
                  <div style={{ color: '#ffffff', fontWeight: 600 }}>{scannedResult.transmission}</div>
                </div>
                <div>
                  <div style={{ color: '#64748b', fontSize: '11.5px' }}>Odometer Check</div>
                  <div style={{ color: '#10b981', fontWeight: 600 }}>{scannedResult.historyReport.odometerVerified}</div>
                </div>
                <div>
                  <div style={{ color: '#64748b', fontSize: '11.5px' }}>Title Brand Status</div>
                  <div style={{ color: '#10b981', fontWeight: 600 }}>{scannedResult.historyReport.titleStatus}</div>
                </div>
              </div>
            </div>

            {/* Right: KBB / NADA Bookout & History Pull */}
            <div
              style={{
                background: 'rgba(15, 23, 42, 0.75)',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                padding: '24px',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 700, color: '#ffffff', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <DollarSign size={18} color="#10b981" />
                  <span>KBB / NADA Valuation Bookout</span>
                </h3>
                <span style={{ fontSize: '11px', color: '#10b981', background: 'rgba(16, 185, 129, 0.15)', padding: '2px 8px', borderRadius: '4px', fontWeight: 700 }}>
                  LIVE DATA
                </span>
              </div>

              {/* Bookout 3 Values */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '20px', textAlign: 'center' }}>
                <div style={{ background: 'rgba(0,0,0,0.3)', padding: '12px 8px', borderRadius: '8px' }}>
                  <div style={{ fontSize: '11px', color: '#94a3b8' }}>Wholesale / Trade</div>
                  <div style={{ fontSize: '16px', fontWeight: 800, color: '#e2e8f0' }}>{scannedResult.kbbBookout.tradeIn}</div>
                </div>
                <div style={{ background: 'rgba(0,0,0,0.3)', padding: '12px 8px', borderRadius: '8px' }}>
                  <div style={{ fontSize: '11px', color: '#94a3b8' }}>Private Party</div>
                  <div style={{ fontSize: '16px', fontWeight: 800, color: '#38bdf8' }}>{scannedResult.kbbBookout.privateParty}</div>
                </div>
                <div style={{ background: 'rgba(14, 165, 233, 0.12)', border: '1px solid rgba(14, 165, 233, 0.3)', padding: '12px 8px', borderRadius: '8px' }}>
                  <div style={{ fontSize: '11px', color: '#38bdf8' }}>Dealer Retail</div>
                  <div style={{ fontSize: '16px', fontWeight: 800, color: '#10b981' }}>{scannedResult.kbbBookout.dealerRetail}</div>
                </div>
              </div>

              {/* Action Buttons to Next Stages */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <button
                  onClick={() => navigate('/omp/market-pricing')}
                  style={{
                    padding: '10px',
                    borderRadius: '8px',
                    background: 'linear-gradient(90deg, #0284c7, #0ea5e9)',
                    border: 'none',
                    color: '#ffffff',
                    fontSize: '12.5px',
                    fontWeight: 700,
                    cursor: 'pointer',
                  }}
                >
                  Price on AIMP Scanner
                </button>
                <button
                  onClick={() => navigate('/omp/recon-center')}
                  style={{
                    padding: '10px',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    color: '#cbd5e1',
                    fontSize: '12.5px',
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  Send to Recon Center (ROM)
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VinScanner;
