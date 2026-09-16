import React, { useState } from 'react';
import { Home, MapPin, Bed, Bath, Maximize, DollarSign, Key, Building2 } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export const RealEstatePage = () => {
  const { selectedLocation } = useAuth();
  const [dealType, setDealType] = useState('all'); // all | rent | buy

  const properties = [
    {
      id: 're-1',
      title: 'Modern 2-Bedroom Luxury Condominium with EV Charging',
      price: '$3,400 / mo',
      type: 'Rent / Lease',
      category: 'condo',
      beds: 2,
      baths: 2,
      sqft: '1,150 sq ft',
      location: 'Fremont Downtown, CA',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&auto=format&fit=crop&q=80',
      broker: 'Pacific Bay Realty Group',
    },
    {
      id: 're-2',
      title: 'Contemporary 4-Bedroom Single Family Home with Pool',
      price: '$1,385,000',
      type: 'Buy / Sale',
      category: 'single_family',
      beds: 4,
      baths: 3,
      sqft: '2,640 sq ft',
      location: 'San Jose Foothills, CA',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&auto=format&fit=crop&q=80',
      broker: 'Silicon Valley Premier Real Estate',
    },
    {
      id: 're-3',
      title: 'Commercial Flex Warehouse & Office Facility with Loading Dock',
      price: '$8,200 / mo',
      type: 'Commercial Lease',
      category: 'commercial',
      beds: 0,
      baths: 2,
      sqft: '4,800 sq ft',
      location: 'Oakland Port Industrial Park, CA',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&auto=format&fit=crop&q=80',
      broker: 'NorCal Commercial Brokerage',
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <div style={{ fontSize: '11.5px', color: '#ec4899', fontWeight: 700, textTransform: 'uppercase' }}>
          REAL ESTATE MARKETPLACE • RESIDENTIAL & COMMERCIAL
        </div>
        <h1 style={{ fontSize: '26px', fontWeight: 900, color: 'var(--text-primary)', margin: '4px 0 0' }}>
          Properties for Lease & Sale in {selectedLocation}
        </h1>
        <p style={{ fontSize: '13px', color: 'var(--text-secondary)', margin: '2px 0 0' }}>
          Find single-family homes, apartments, commercial offices, industrial warehouses, and vacation properties.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '20px' }}>
        {properties.map((prop) => (
          <div
            key={prop.id}
            style={{
              backgroundColor: 'var(--surface)',
              borderRadius: '18px',
              border: '1px solid var(--border)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: 'var(--card-shadow)',
            }}
          >
            <div style={{ height: '200px', position: 'relative', overflow: 'hidden', backgroundColor: 'var(--surface-secondary)' }}>
              <img src={prop.image} alt={prop.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <span
                style={{
                  position: 'absolute',
                  top: '10px',
                  left: '10px',
                  backgroundColor: 'rgba(2, 132, 199, 0.9)',
                  color: '#ffffff',
                  fontSize: '11px',
                  fontWeight: 700,
                  padding: '3px 8px',
                  borderRadius: '4px',
                }}
              >
                {prop.type}
              </span>
            </div>

            <div style={{ padding: '18px', display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
              <div>
                <div style={{ fontSize: '22px', fontWeight: 900, color: '#10b981' }}>{prop.price}</div>
                <h3 style={{ fontSize: '15px', fontWeight: 800, color: 'var(--text-primary)', margin: '4px 0 2px' }}>
                  {prop.title}
                </h3>
              </div>

              <div style={{ display: 'flex', gap: '14px', fontSize: '12.5px', color: 'var(--text-secondary)', padding: '6px 0', borderBottom: '1px solid var(--border)' }}>
                {prop.beds > 0 && (
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Bed size={15} /> {prop.beds} Beds
                  </span>
                )}
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Bath size={15} /> {prop.baths} Baths
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Maximize size={15} /> {prop.sqft}
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'var(--text-secondary)' }}>
                <MapPin size={14} color="#0284c7" />
                <span>{prop.location}</span>
              </div>

              <div style={{ display: 'flex', gap: '8px', marginTop: 'auto', paddingTop: '8px' }}>
                <button
                  onClick={() => alert(`Connecting with broker ${prop.broker}...`)}
                  style={{
                    flex: 1,
                    backgroundColor: '#0284c7',
                    color: '#ffffff',
                    border: 'none',
                    padding: '10px',
                    borderRadius: '8px',
                    fontSize: '12.5px',
                    fontWeight: 700,
                    cursor: 'pointer',
                  }}
                >
                  Contact Broker & Schedule Tour
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
