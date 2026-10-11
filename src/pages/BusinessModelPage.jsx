import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  DollarSign,
  Truck,
  Wrench,
  Crown,
  Megaphone,
  CheckCircle2,
  Calculator,
  ArrowRight,
  TrendingUp
} from 'lucide-react';

export const BusinessModelPage = () => {
  const { navigateTo } = useApp();

  // Interactive Calculator State
  const [calcOrderValue, setCalcOrderValue] = useState(30000);
  const [calcDeliveryFee, setCalcDeliveryFee] = useState(900);
  const [calcRentalRate, setCalcRentalRate] = useState(2000);

  const calcCommission = Math.round(calcOrderValue * 0.08); // 8%
  const calcSellerPayout = calcOrderValue - calcCommission;

  const calcTransportPay = Math.round(calcDeliveryFee * 0.8888); // ₹800 out of ₹900
  const calcDeliveryMargin = calcDeliveryFee - calcTransportPay; // ₹100

  const calcRentalCommission = Math.round(calcRentalRate * 0.1); // 10%

  return (
    <div style={{ padding: '3rem 0' }}>
      <div className="container">
        {/* Header */}
        <div style={{ maxWidth: '800px', margin: '0 auto 3rem', textAlign: 'center' }}>
          <span className="badge badge-amber" style={{ marginBottom: '0.5rem' }}>EDVC COMMERCIAL MODEL</span>
          <h1 style={{ fontSize: '2.4rem', color: '#0F172A', marginBottom: '0.6rem' }}>
            How BuildCycle Makes Money
          </h1>
          <p style={{ color: '#64748B', fontSize: '1.1rem', lineHeight: 1.6 }}>
            BuildCycle operates a high-margin, asset-light marketplace model across 5 diversified revenue channels.
          </p>
        </div>

        {/* 5 Revenue Sources Grid (Section 15) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" style={{ marginBottom: '4rem' }}>
          {/* Revenue Source 1 */}
          <div className="card" style={{ padding: '1.75rem', backgroundColor: '#FFFFFF' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#FEF3C7', color: '#D97706', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
              <DollarSign size={26} />
            </div>
            <span className="badge badge-amber" style={{ marginBottom: '0.5rem' }}>Stream 1</span>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: '#0F172A' }}>
              1. Transaction Commission (8%)
            </h3>
            <p style={{ fontSize: '0.9rem', color: '#64748B', lineHeight: 1.5, marginBottom: '1rem' }}>
              BuildCycle charges approximately 8% commission on successful surplus material sales.
            </p>
            <div style={{ backgroundColor: '#F8FAFC', padding: '0.85rem', borderRadius: '8px', border: '1px solid #E2E8F0', fontSize: '0.82rem' }}>
              <div style={{ fontWeight: 700, color: '#334155', marginBottom: '0.2rem' }}>Numerical Example:</div>
              <div>Material Value = ₹30,000</div>
              <div style={{ color: '#D97706', fontWeight: 700 }}>8% Commission = ₹2,400</div>
              <div style={{ color: '#059669', fontWeight: 700 }}>Seller Receives = ₹27,600</div>
            </div>
          </div>

          {/* Revenue Source 2 */}
          <div className="card" style={{ padding: '1.75rem', backgroundColor: '#FFFFFF' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#D1FAE5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
              <Truck size={26} />
            </div>
            <span className="badge badge-emerald" style={{ marginBottom: '0.5rem' }}>Stream 2</span>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: '#0F172A' }}>
              2. Delivery Platform Margin
            </h3>
            <p style={{ fontSize: '0.9rem', color: '#64748B', lineHeight: 1.5, marginBottom: '1rem' }}>
              Platform margin earned on local transport partner coordination.
            </p>
            <div style={{ backgroundColor: '#F8FAFC', padding: '0.85rem', borderRadius: '8px', border: '1px solid #E2E8F0', fontSize: '0.82rem' }}>
              <div style={{ fontWeight: 700, color: '#334155', marginBottom: '0.2rem' }}>Numerical Example:</div>
              <div>Buyer Delivery Charge = ₹900</div>
              <div>Transport Partner Receives = ₹800</div>
              <div style={{ color: '#D97706', fontWeight: 700 }}>BuildCycle Platform Margin = ₹100</div>
            </div>
          </div>

          {/* Revenue Source 3 */}
          <div className="card" style={{ padding: '1.75rem', backgroundColor: '#FFFFFF' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#DBEAFE', color: '#2563EB', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
              <Wrench size={26} />
            </div>
            <span className="badge badge-blue" style={{ marginBottom: '0.5rem' }}>Stream 3</span>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: '#0F172A' }}>
              3. Equipment Rental Commission (10%)
            </h3>
            <p style={{ fontSize: '0.9rem', color: '#64748B', lineHeight: 1.5, marginBottom: '1rem' }}>
              Commission charged on construction tool & heavy machinery daily rentals.
            </p>
            <div style={{ backgroundColor: '#F8FAFC', padding: '0.85rem', borderRadius: '8px', border: '1px solid #E2E8F0', fontSize: '0.82rem' }}>
              <div style={{ fontWeight: 700, color: '#334155', marginBottom: '0.2rem' }}>Numerical Example:</div>
              <div>Equipment Rental = ₹2,000 / day</div>
              <div>BuildCycle Commission = 10%</div>
              <div style={{ color: '#2563EB', fontWeight: 700 }}>BuildCycle Earns = ₹200 / day</div>
            </div>
          </div>

          {/* Revenue Source 4 */}
          <div className="card" style={{ padding: '1.75rem', backgroundColor: '#FFFFFF' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#F3E8FF', color: '#9333EA', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
              <Crown size={26} />
            </div>
            <span className="badge badge-slate" style={{ marginBottom: '0.5rem', backgroundColor: '#F3E8FF', color: '#7E22CE' }}>Stream 4</span>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: '#0F172A' }}>
              4. Premium Seller Membership (₹999/mo)
            </h3>
            <p style={{ fontSize: '0.9rem', color: '#64748B', lineHeight: 1.5, marginBottom: '1rem' }}>
              Monthly subscription for large hardware stores and active builders.
            </p>
            <ul style={{ fontSize: '0.82rem', color: '#475569', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
              <li>✔ Featured top-of-search listings</li>
              <li>✔ Unlimited inventory uploads</li>
              <li>✔ Analytics & buyer demand insights</li>
              <li>✔ Priority logistics support</li>
            </ul>
          </div>

          {/* Revenue Source 5 */}
          <div className="card" style={{ padding: '1.75rem', backgroundColor: '#FFFFFF', gridColumn: 'span 2' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#FEE2E2', color: '#DC2626', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
              <Megaphone size={26} />
            </div>
            <span className="badge badge-red" style={{ marginBottom: '0.5rem' }}>Stream 5</span>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: '#0F172A' }}>
              5. Construction Brand Advertisements
            </h3>
            <p style={{ fontSize: '0.9rem', color: '#64748B', lineHeight: 1.5, marginBottom: '1rem' }}>
              Targeted banner ads and sponsored placements for major construction brands looking to reach contractors and builders directly on BuildCycle.
            </p>

            <div className="flex gap-2" style={{ flexWrap: 'wrap' }}>
              {['UltraTech Cement', 'Asian Paints', 'TATA Tiscon Steel', 'Supreme PVC Pipes', 'Jaguar Sanitaryware'].map((brand) => (
                <span key={brand} style={{ backgroundColor: '#F1F5F9', color: '#334155', padding: '0.3rem 0.75rem', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 600 }}>
                  📢 {brand}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Unit Economics Calculator Widget */}
        <div className="card" style={{ padding: '2rem', backgroundColor: '#0F172A', color: 'white' }}>
          <div className="flex items-center gap-2" style={{ marginBottom: '1.5rem', borderBottom: '1px solid #1E293B', paddingBottom: '0.75rem' }}>
            <Calculator color="#F59E0B" size={24} />
            <h3 style={{ fontSize: '1.4rem', color: 'white' }}>
              Interactive EDVC Revenue Unit Economics Simulator
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', color: '#CBD5E1', marginBottom: '0.4rem' }}>
                Simulate Order Value (₹):
              </label>
              <input
                type="number"
                value={calcOrderValue}
                onChange={(e) => setCalcOrderValue(Number(e.target.value))}
                style={{ width: '100%', padding: '0.6rem', borderRadius: '6px', border: '1px solid #334155', backgroundColor: '#1E293B', color: 'white' }}
              />
              <div style={{ marginTop: '0.5rem', fontSize: '0.85rem' }}>
                BuildCycle 8% Fee: <strong style={{ color: '#F59E0B' }}>₹{calcCommission.toLocaleString()}</strong><br />
                Seller Payout: <strong style={{ color: '#10B981' }}>₹{calcSellerPayout.toLocaleString()}</strong>
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', color: '#CBD5E1', marginBottom: '0.4rem' }}>
                Simulate Delivery Fee (₹):
              </label>
              <input
                type="number"
                value={calcDeliveryFee}
                onChange={(e) => setCalcDeliveryFee(Number(e.target.value))}
                style={{ width: '100%', padding: '0.6rem', borderRadius: '6px', border: '1px solid #334155', backgroundColor: '#1E293B', color: 'white' }}
              />
              <div style={{ marginTop: '0.5rem', fontSize: '0.85rem' }}>
                Transport Partner: <strong style={{ color: '#60A5FA' }}>₹{calcTransportPay.toLocaleString()}</strong><br />
                Platform Margin: <strong style={{ color: '#F59E0B' }}>₹{calcDeliveryMargin.toLocaleString()}</strong>
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', color: '#CBD5E1', marginBottom: '0.4rem' }}>
                Simulate Daily Equipment Rate (₹):
              </label>
              <input
                type="number"
                value={calcRentalRate}
                onChange={(e) => setCalcRentalRate(Number(e.target.value))}
                style={{ width: '100%', padding: '0.6rem', borderRadius: '6px', border: '1px solid #334155', backgroundColor: '#1E293B', color: 'white' }}
              />
              <div style={{ marginTop: '0.5rem', fontSize: '0.85rem' }}>
                10% Rental Fee: <strong style={{ color: '#F59E0B' }}>₹{calcRentalCommission.toLocaleString()} / day</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
