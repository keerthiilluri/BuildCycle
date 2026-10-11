import React from 'react';
import { useApp } from '../context/AppContext';
import {
  Award,
  BookOpen,
  Target,
  Lightbulb,
  Recycle,
  Rocket,
  ShieldCheck,
  CheckCircle2,
  Building2
} from 'lucide-react';

export const VentureInfoPage = () => {
  const { navigateTo } = useApp();

  return (
    <div style={{ padding: '3rem 0' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="badge badge-amber" style={{ marginBottom: '0.6rem', padding: '0.4rem 1rem' }}>
            🎓 EDVC STUDENT VENTURE PRESENTATION
          </div>
          <h1 style={{ fontSize: '2.5rem', color: '#0F172A', marginBottom: '0.5rem' }}>
            BuildCycle Venture Dossier
          </h1>
          <p style={{ color: '#64748B', fontSize: '1.1rem' }}>
            Subject: Entrepreneurship Development and Venture Creation (EDVC)
          </p>
        </div>

        {/* 1. Problem Statement */}
        <div className="card" style={{ padding: '2rem', backgroundColor: '#FFFFFF', marginBottom: '2rem' }}>
          <div className="flex items-center gap-3" style={{ marginBottom: '1rem', borderBottom: '1px solid #E2E8F0', paddingBottom: '0.75rem' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: '#FEE2E2', color: '#DC2626', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Target size={22} />
            </div>
            <h2 style={{ fontSize: '1.4rem', color: '#0F172A' }}>1. The Main Problem</h2>
          </div>
          <p style={{ color: '#475569', lineHeight: 1.6, marginBottom: '1rem' }}>
            Construction projects routinely suffer from excess leftover materials. Surplus bricks, tiles, steel rods, PVC pipes, paint, wood, doors, windows, sanitary fittings, and electrical materials frequently accumulate at job sites.
          </p>
          <p style={{ color: '#475569', lineHeight: 1.6, marginBottom: '1rem' }}>
            Sellers cannot easily return these items to suppliers because they are often opened, customized, leftover in small quantities, outside the official return window, or difficult to transport. Consequently, valuable construction capital remains tied up or ends up as debris.
          </p>
        </div>

        {/* 2. The Solution */}
        <div className="card" style={{ padding: '2rem', backgroundColor: '#FFFFFF', marginBottom: '2rem' }}>
          <div className="flex items-center gap-3" style={{ marginBottom: '1rem', borderBottom: '1px solid #E2E8F0', paddingBottom: '0.75rem' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: '#FEF3C7', color: '#D97706', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Lightbulb size={22} />
            </div>
            <h2 style={{ fontSize: '1.4rem', color: '#0F172A' }}>2. The BuildCycle Solution</h2>
          </div>
          <p style={{ color: '#475569', lineHeight: 1.6, marginBottom: '1rem' }}>
            BuildCycle provides a hyper-local, realistic Construction Surplus Exchange Platform. Sellers recover value from unused materials and idle equipment, while buyers acquire construction inputs at 30–50% discount.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4" style={{ marginTop: '1.25rem' }}>
            <div style={{ backgroundColor: '#F8FAFC', padding: '1rem', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
              <h4 style={{ color: '#0F172A', fontSize: '1rem', marginBottom: '0.3rem' }}>📦 Materials Exchange</h4>
              <p style={{ fontSize: '0.85rem', color: '#64748B' }}>
                Buy and sell surplus tiles, bricks, steel, PVC pipes, and hardware securely.
              </p>
            </div>
            <div style={{ backgroundColor: '#F8FAFC', padding: '1rem', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
              <h4 style={{ color: '#0F172A', fontSize: '1rem', marginBottom: '0.3rem' }}>🛠️ Equipment Rentals</h4>
              <p style={{ fontSize: '0.85rem', color: '#64748B' }}>
                Rent concrete mixers, drills, scaffolding, and vibrators per day.
              </p>
            </div>
          </div>
        </div>

        {/* 3. Target Market & Personas */}
        <div className="card" style={{ padding: '2rem', backgroundColor: '#FFFFFF', marginBottom: '2rem' }}>
          <div className="flex items-center gap-3" style={{ marginBottom: '1rem', borderBottom: '1px solid #E2E8F0', paddingBottom: '0.75rem' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: '#DBEAFE', color: '#2563EB', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Building2 size={22} />
            </div>
            <h2 style={{ fontSize: '1.4rem', color: '#0F172A' }}>3. Target Market & Users</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div style={{ backgroundColor: '#F8FAFC', padding: '1rem', borderRadius: '8px' }}>
              <strong style={{ color: '#D97706', display: 'block', marginBottom: '0.3rem' }}>Sellers</strong>
              <p style={{ fontSize: '0.85rem', color: '#475569' }}>
                Builders, small civil contractors, hardware merchants, and homeowners with excess inventory.
              </p>
            </div>
            <div style={{ backgroundColor: '#F8FAFC', padding: '1rem', borderRadius: '8px' }}>
              <strong style={{ color: '#059669', display: 'block', marginBottom: '0.3rem' }}>Buyers</strong>
              <p style={{ fontSize: '0.85rem', color: '#475569' }}>
                Homeowners doing renovations, interior designers, civil engineers, and budget contractors.
              </p>
            </div>
            <div style={{ backgroundColor: '#F8FAFC', padding: '1rem', borderRadius: '8px' }}>
              <strong style={{ color: '#DC2626', display: 'block', marginBottom: '0.3rem' }}>Admin</strong>
              <p style={{ fontSize: '0.85rem', color: '#475569' }}>
                Platform operators who verify listings, manage user Trust Badges, and coordinate logistics.
              </p>
            </div>
          </div>
        </div>

        {/* 4. Social & Environmental Impact */}
        <div className="card" style={{ padding: '2rem', backgroundColor: '#D1FAE5', border: '1px solid #6EE7B7', marginBottom: '2rem' }}>
          <div className="flex items-center gap-3" style={{ marginBottom: '0.75rem' }}>
            <Recycle size={28} color="#059669" />
            <h2 style={{ fontSize: '1.4rem', color: '#065F46' }}>4. Circular Economy & Environmental Impact</h2>
          </div>
          <p style={{ color: '#047857', lineHeight: 1.6, fontSize: '0.95rem' }}>
            BuildCycle promotes circular construction practices by keeping high-carbon embodied materials (steel, cement products, PVC) inside active construction cycles, diverting thousands of tons of usable materials from regional landfills.
          </p>
        </div>

        {/* 5. Future Expansion Roadmap */}
        <div className="card" style={{ padding: '2rem', backgroundColor: '#FFFFFF' }}>
          <div className="flex items-center gap-3" style={{ marginBottom: '1.25rem', borderBottom: '1px solid #E2E8F0', paddingBottom: '0.75rem' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: '#F3E8FF', color: '#9333EA', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Rocket size={22} />
            </div>
            <h2 style={{ fontSize: '1.4rem', color: '#0F172A' }}>5. Future Expansion Roadmap</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="flex items-start gap-2">
              <CheckCircle2 size={18} color="#D97706" style={{ marginTop: '3px' }} />
              <div>
                <strong style={{ color: '#0F172A', fontSize: '0.95rem' }}>AI Material Planning</strong>
                <p style={{ fontSize: '0.85rem', color: '#64748B' }}>Smart estimation tool predicting exact surplus likelihood per project size.</p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <CheckCircle2 size={18} color="#D97706" style={{ marginTop: '3px' }} />
              <div>
                <strong style={{ color: '#0F172A', fontSize: '0.95rem' }}>Construction Waste Recycling</strong>
                <p style={{ fontSize: '0.85rem', color: '#64748B' }}>Partnerships with brick crushing and aggregate recycling plants.</p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <CheckCircle2 size={18} color="#D97706" style={{ marginTop: '3px' }} />
              <div>
                <strong style={{ color: '#0F172A', fontSize: '0.95rem' }}>IoT Equipment Fleet Sharing</strong>
                <p style={{ fontSize: '0.85rem', color: '#64748B' }}>GPS & telematics tracking for rented mixers and generators.</p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <CheckCircle2 size={18} color="#D97706" style={{ marginTop: '3px' }} />
              <div>
                <strong style={{ color: '#0F172A', fontSize: '0.95rem' }}>Carbon Credit Savings Tracking</strong>
                <p style={{ fontSize: '0.85rem', color: '#64748B' }}>Quantifying CO2 reduction certificates for participating builders.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
