import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PlusCircle, Camera, DollarSign, MapPin, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export const PostAdWizardPage = () => {
  const navigate = useNavigate();
  const { selectedLocation } = useAuth();

  const [category, setCategory] = useState('cars_trucks');
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [safeSpotPreferred, setSafeSpotPreferred] = useState(true);
  const [published, setPublished] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !price) return;
    setPublished(true);
  };

  return (
    <div style={{ maxWidth: '780px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h1 style={{ fontSize: '26px', fontWeight: 900, color: 'var(--text-primary)', margin: 0 }}>
          Post a Free Listing on OMP Deals
        </h1>
        <p style={{ fontSize: '13px', color: 'var(--text-secondary)', margin: '4px 0 0' }}>
          Reach thousands of local buyers in {selectedLocation} with TruYou seller protection and police safe spots.
        </p>
      </div>

      {published ? (
        <div
          style={{
            backgroundColor: 'var(--surface)',
            borderRadius: '20px',
            border: '1px solid var(--border)',
            padding: '40px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px',
            boxShadow: 'var(--card-shadow)',
          }}
        >
          <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'rgba(16, 185, 129, 0.15)', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CheckCircle2 size={36} />
          </div>
          <h2 style={{ fontSize: '22px', fontWeight: 800, margin: 0, color: 'var(--text-primary)' }}>
            Listing Published Live!
          </h2>
          <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', maxWidth: '440px', margin: 0 }}>
            Your item "{title}" is now active and syndicated across local buyers in {selectedLocation}.
          </p>
          <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
            <button
              onClick={() => navigate('/for-sale')}
              style={{
                backgroundColor: '#0284c7',
                color: '#ffffff',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '13px',
                cursor: 'pointer',
              }}
            >
              Browse in Marketplace
            </button>
            <button
              onClick={() => { setPublished(false); setTitle(''); setPrice(''); }}
              style={{
                backgroundColor: 'var(--surface-secondary)',
                border: '1px solid var(--border)',
                color: 'var(--text-primary)',
                padding: '10px 18px',
                borderRadius: '8px',
                fontWeight: 600,
                fontSize: '13px',
                cursor: 'pointer',
              }}
            >
              Post Another Item
            </button>
          </div>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          style={{
            backgroundColor: 'var(--surface)',
            borderRadius: '20px',
            border: '1px solid var(--border)',
            padding: '28px',
            display: 'flex',
            flexDirection: 'column',
            gap: '18px',
            boxShadow: 'var(--card-shadow)',
          }}
        >
          <div>
            <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '6px' }}>
              Select Marketplace Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              style={{
                width: '100%',
                padding: '10px 14px',
                borderRadius: '10px',
                backgroundColor: 'var(--surface-secondary)',
                border: '1px solid var(--border)',
                color: 'var(--text-primary)',
                fontSize: '13.5px',
                fontWeight: 600,
                outline: 'none',
              }}
            >
              <option value="cars_trucks">AI Cars & Trucks (Sedan, Coupe, SUV, Classic, Commercial)</option>
              <option value="services">Local Services (Mechanic, AC, Plumbing, Electrical)</option>
              <option value="jobs">Job Finder (Open Position Post)</option>
              <option value="real_estate">Real Estate (Rental / Sale / Commercial)</option>
              <option value="businesses">Business For Sale</option>
              <option value="general">For Sale (Electronics, Tools, Furniture, General)</option>
            </select>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '6px' }}>
              Listing Title
            </label>
            <input
              type="text"
              placeholder="e.g. 2024 Chevrolet Corvette Stingray 2LT or 24/7 Mobile Mechanic"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '10px 14px',
                borderRadius: '10px',
                backgroundColor: 'var(--surface-secondary)',
                border: '1px solid var(--border)',
                color: 'var(--text-primary)',
                fontSize: '13.5px',
                outline: 'none',
              }}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                Price or Rate
              </label>
              <input
                type="text"
                placeholder="e.g. $79,900 or $85/hr"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--surface-secondary)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-primary)',
                  fontSize: '13.5px',
                  outline: 'none',
                }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                Location
              </label>
              <input
                type="text"
                defaultValue={selectedLocation}
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--surface-secondary)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-primary)',
                  fontSize: '13.5px',
                  outline: 'none',
                }}
              />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '6px' }}>
              Description & Specifications
            </label>
            <textarea
              rows={4}
              placeholder="Describe vehicle condition, clean title, warranty, service area, or job requirements..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              style={{
                width: '100%',
                padding: '10px 14px',
                borderRadius: '10px',
                backgroundColor: 'var(--surface-secondary)',
                border: '1px solid var(--border)',
                color: 'var(--text-primary)',
                fontSize: '13.5px',
                outline: 'none',
                resize: 'none',
              }}
            />
          </div>

          {/* Photo Upload Simulation */}
          <div>
            <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '6px' }}>
              Photos & Media
            </label>
            <div
              style={{
                border: '2px dashed var(--border)',
                borderRadius: '12px',
                padding: '24px',
                textAlign: 'center',
                backgroundColor: 'var(--surface-secondary)',
                cursor: 'pointer',
              }}
            >
              <Camera size={28} color="#0284c7" style={{ margin: '0 auto 6px' }} />
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-primary)' }}>Click to Upload Photos or Drag & Drop</div>
              <div style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>Supports JPG, PNG up to 10 photos</div>
            </div>
          </div>

          {/* Police Safe Spot Checkbox */}
          <div
            style={{
              backgroundColor: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              borderRadius: '10px',
              padding: '12px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <input
              type="checkbox"
              id="safeSpot"
              checked={safeSpotPreferred}
              onChange={(e) => setSafeSpotPreferred(e.target.checked)}
              style={{ width: '16px', height: '16px', cursor: 'pointer' }}
            />
            <label htmlFor="safeSpot" style={{ fontSize: '12.5px', color: 'var(--text-primary)', fontWeight: 600, cursor: 'pointer' }}>
              <ShieldCheck size={14} color="#10b981" style={{ display: 'inline', marginRight: '4px' }} />
              I agree to meet at a designated <strong>Police Safe MeetUp Spot</strong> for vehicle/item exchange.
            </label>
          </div>

          <button
            type="submit"
            style={{
              backgroundColor: '#10b981',
              color: '#ffffff',
              border: 'none',
              padding: '12px',
              borderRadius: '10px',
              fontSize: '14px',
              fontWeight: 800,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
            }}
          >
            <span>Publish Free Listing Live</span>
            <ArrowRight size={16} />
          </button>
        </form>
      )}
    </div>
  );
};
