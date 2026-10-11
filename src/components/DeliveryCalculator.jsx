import React, { useState } from 'react';
import { Truck, Info, CheckCircle2, ShieldCheck } from 'lucide-react';

export const DeliveryCalculator = ({ defaultDistance = 15, onSelectFee }) => {
  const [distance, setDistance] = useState(defaultDistance);

  // Business formula for delivery: Base ₹300 (up to 5km) + ₹40/km thereafter
  const deliveryCharge = Math.max(300, Math.round(300 + (distance - 5) * 40));
  const buildCycleMargin = Math.round(deliveryCharge * 0.1111) || 100; // ~₹100
  const transportPartnerPay = deliveryCharge - buildCycleMargin; // ~₹800

  return (
    <div style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '1.25rem' }}>
      <div className="flex items-center justify-between" style={{ marginBottom: '1rem' }}>
        <div className="flex items-center gap-2" style={{ fontWeight: 700, color: '#0F172A', fontSize: '1rem' }}>
          <Truck size={20} color="#D97706" /> Local Transport Delivery Estimator
        </div>
        <span className="badge badge-amber">Simulated Logistics Partner</span>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label style={{ fontSize: '0.85rem', fontWeight: 600, color: '#475569', display: 'block', marginBottom: '0.4rem' }}>
          Estimated Distance from Seller Site: <strong>{distance} km</strong>
        </label>
        <input
          type="range"
          min="2"
          max="80"
          value={distance}
          onChange={(e) => {
            const val = Number(e.target.value);
            setDistance(val);
            if (onSelectFee) onSelectFee(deliveryCharge);
          }}
          style={{ width: '100%', accentColor: '#D97706', cursor: 'pointer' }}
        />
        <div className="flex justify-between" style={{ fontSize: '0.75rem', color: '#94A3B8', marginTop: '0.2rem' }}>
          <span>2 km (Local)</span>
          <span>40 km</span>
          <span>80 km (Inter-city)</span>
        </div>
      </div>

      {/* Charge Breakdown Box */}
      <div style={{ backgroundColor: '#FFFFFF', borderRadius: '8px', padding: '1rem', border: '1px solid #CBD5E1', marginBottom: '1rem' }}>
        <div className="flex justify-between items-center" style={{ marginBottom: '0.5rem' }}>
          <span style={{ fontSize: '0.9rem', color: '#475569' }}>Estimated Delivery Charge:</span>
          <span style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0F172A', fontFamily: 'var(--font-heading)' }}>
            ₹{deliveryCharge.toLocaleString()}
          </span>
        </div>

        {/* Business Logic Split Explanation */}
        <div style={{ borderTop: '1px dashed #E2E8F0', paddingTop: '0.6rem', marginTop: '0.6rem', fontSize: '0.78125rem', color: '#64748B' }}>
          <div style={{ fontWeight: 700, color: '#334155', marginBottom: '0.3rem' }}>
            BuildCycle Logistics Margin Split:
          </div>
          <div className="flex justify-between" style={{ marginBottom: '0.2rem' }}>
            <span>🚚 Local Transport Partner receives:</span>
            <strong style={{ color: '#059669' }}>₹{transportPartnerPay.toLocaleString()}</strong>
          </div>
          <div className="flex justify-between" style={{ marginBottom: '0.2rem' }}>
            <span>⚡ BuildCycle Delivery Platform Margin:</span>
            <strong style={{ color: '#D97706' }}>₹{buildCycleMargin.toLocaleString()}</strong>
          </div>
          <p style={{ fontSize: '0.72rem', color: '#94A3B8', marginTop: '0.4rem', fontStyle: 'italic' }}>
            * Transport partner handles fuel, driver wages, vehicle maintenance and transit safety. BuildCycle does not own heavy delivery trucks.
          </p>
        </div>
      </div>
    </div>
  );
};
