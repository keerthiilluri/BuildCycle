import React from 'react';
import { useApp } from '../context/AppContext';
import { Building2, Leaf } from 'lucide-react';

export const Footer = () => {
  const { navigateTo } = useApp();

  return (
    <footer style={{ backgroundColor: '#0F172A', color: '#94A3B8', paddingTop: '3.5rem', paddingBottom: '2rem', marginTop: '4rem', borderTop: '4rem solid #F1F5F9' }}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" style={{ marginBottom: '2.5rem' }}>
          {/* Column 1: Venture Overview */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '8px', backgroundColor: '#D97706', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                <Building2 size={20} />
              </div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 800, color: 'white' }}>
                Build<span style={{ color: '#D97706' }}>Cycle</span>
              </div>
            </div>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '1.2rem', color: '#CBD5E1' }}>
              Turn Construction Surplus into Opportunity. BuildCycle connects builders, contractors, hardware stores, and homeowners to buy & sell surplus materials and rent construction equipment at affordable prices.
            </p>
            <div className="flex items-center gap-2" style={{ fontSize: '0.78125rem', color: '#10B981', fontWeight: 600 }}>
              <Leaf size={16} /> Circular Economy & Construction Sustainability
            </div>
          </div>

          {/* Column 2: Marketplace Links */}
          <div>
            <h4 style={{ color: 'white', fontSize: '1rem', marginBottom: '1rem' }}>Marketplace</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.875rem' }}>
              <li><button onClick={() => navigateTo('materials')} style={{ color: '#CBD5E1' }}>Browse Surplus Materials</button></li>
              <li><button onClick={() => navigateTo('equipment')} style={{ color: '#CBD5E1' }}>Rent Construction Equipment</button></li>
              <li><button onClick={() => navigateTo('sell')} style={{ color: '#CBD5E1' }}>Sell Unused Surplus</button></li>
            </ul>
          </div>

          {/* Column 3: Pilot Regions */}
          <div>
            <h4 style={{ color: 'white', fontSize: '1rem', marginBottom: '1rem' }}>Operating Regions</h4>
            <p style={{ fontSize: '0.85rem', marginBottom: '0.8rem', color: '#CBD5E1' }}>
              Coordinating local transport partners across key hubs:
            </p>
            <div className="flex" style={{ flexWrap: 'wrap', gap: '0.4rem' }}>
              {['Vijayawada', 'Guntur', 'Hyderabad', 'Visakhapatnam', 'Warangal'].map((city) => (
                <span key={city} style={{ backgroundColor: '#1E293B', color: '#F1F5F9', padding: '0.25rem 0.6rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600 }}>
                  📍 {city}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid #1E293B', paddingTop: '1.5rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', fontSize: '0.8rem' }}>
          <div>
            © {new Date().getFullYear()} BuildCycle. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span style={{ color: '#64748B' }}>Construction Surplus Exchange Platform</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
