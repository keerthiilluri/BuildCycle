import React from 'react';
import { useApp } from '../context/AppContext';
import { MaterialCard } from '../components/MaterialCard';
import { EquipmentCard } from '../components/EquipmentCard';
import {
  ArrowRight,
  TrendingUp,
  Recycle,
  PiggyBank,
  Boxes,
  Truck,
  ChevronRight
} from 'lucide-react';

export const HomePage = () => {
  const { navigateTo, materials, equipment } = useApp();

  const featuredMaterials = materials.filter((m) => m.status === 'approved').slice(0, 4);
  const featuredEquipment = equipment.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section style={{ backgroundColor: '#0F172A', color: 'white', paddingTop: '4rem', paddingBottom: '5rem', position: 'relative', overflow: 'hidden' }}>
        {/* Background ambient glow */}
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '450px', height: '450px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(217,119,6,0.18) 0%, rgba(15,23,42,0) 70%)', pointerEvents: 'none' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'center' }}>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, color: 'white', lineHeight: 1.15, marginBottom: '1.2rem', fontFamily: 'var(--font-heading)' }}>
              BuildCycle
            </h1>
            <p style={{ fontSize: '1.35rem', fontWeight: 600, color: '#F59E0B', marginBottom: '1.2rem' }}>
              "Turn Construction Surplus into Opportunity."
            </p>
            <p style={{ fontSize: '1.1rem', color: '#CBD5E1', lineHeight: 1.6, marginBottom: '2.5rem', maxWidth: '750px', margin: '0 auto 2.5rem' }}>
              Buy affordable surplus construction materials, sell unused inventory and rent construction equipment—all in one place.
            </p>

            {/* Action CTAs */}
            <div className="flex justify-center gap-4" style={{ flexWrap: 'wrap' }}>
              <button onClick={() => navigateTo('materials')} className="btn btn-primary btn-lg">
                <Boxes size={20} /> Browse Materials
              </button>
              <button onClick={() => navigateTo('sell')} className="btn btn-secondary btn-lg">
                <TrendingUp size={20} /> Sell Surplus
              </button>
              <button onClick={() => navigateTo('equipment')} className="btn btn-outline btn-lg" style={{ color: 'white', borderColor: '#475569' }}>
                <Truck size={20} /> Rent Equipment
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Simple Benefits Section */}
      <section style={{ padding: '4rem 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Why Choose BuildCycle?</h2>
            <p style={{ color: '#64748B', fontSize: '1rem' }}>Three simple core benefits for builders, contractors, and homeowners</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="card" style={{ padding: '2rem', textAlign: 'center', backgroundColor: '#F8FAFC' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '16px', backgroundColor: '#FEF3C7', color: '#D97706', display: 'flex', itemsAlign: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
                <PiggyBank size={32} />
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.6rem' }}>Save Money</h3>
              <p style={{ color: '#64748B', fontSize: '0.9375rem', lineHeight: 1.6 }}>
                Buy quality surplus materials at lower prices—typically 30% to 50% below standard retail store rates.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="card" style={{ padding: '2rem', textAlign: 'center', backgroundColor: '#F8FAFC' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '16px', backgroundColor: '#D1FAE5', color: '#059669', display: 'flex', itemsAlign: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
                <TrendingUp size={32} />
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.6rem' }}>Earn From Surplus</h3>
              <p style={{ color: '#64748B', fontSize: '0.9375rem', lineHeight: 1.6 }}>
                Sell leftover bricks, tiles, steel, and pipes that would otherwise remain unused.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="card" style={{ padding: '2rem', textAlign: 'center', backgroundColor: '#F8FAFC' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '16px', backgroundColor: '#DBEAFE', color: '#2563EB', display: 'flex', itemsAlign: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
                <Recycle size={32} />
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.6rem' }}>Reduce Waste</h3>
              <p style={{ color: '#64748B', fontSize: '0.9375rem', lineHeight: 1.6 }}>
                Give construction materials and equipment a second life, helping lower job site waste.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Platform Workflow Diagrams */}
      <section style={{ padding: '4rem 0', backgroundColor: '#F8FAFC', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>How BuildCycle Works</h2>
            <p style={{ color: '#64748B', fontSize: '1rem' }}>Transparent two-way exchange workflows for materials and rental equipment</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Flow 1: Material Sale */}
            <div className="card" style={{ padding: '2rem', backgroundColor: '#FFFFFF' }}>
              <div style={{ display: 'flex', itemsAlign: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
                <span className="badge badge-amber">Workflow 1</span>
                <h3 style={{ fontSize: '1.15rem' }}>Surplus Material Exchange</h3>
              </div>

              <div className="flex items-center justify-between" style={{ backgroundColor: '#F8FAFC', padding: '1.2rem', borderRadius: '12px', border: '1px solid #E2E8F0', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div style={{ textAlign: 'center', flex: 1 }}>
                  <div style={{ fontWeight: 800, color: '#D97706', fontSize: '1.1rem' }}>Seller</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748B' }}>Lists Surplus</div>
                </div>
                <ArrowRight size={24} color="#CBD5E1" />
                <div style={{ textAlign: 'center', flex: 1, backgroundColor: '#FEF3C7', padding: '0.5rem', borderRadius: '8px' }}>
                  <div style={{ fontWeight: 800, color: '#78350F', fontSize: '1.1rem' }}>BuildCycle</div>
                  <div style={{ fontSize: '0.75rem', color: '#B45309' }}>Facilitates & Verifies</div>
                </div>
                <ArrowRight size={24} color="#CBD5E1" />
                <div style={{ textAlign: 'center', flex: 1 }}>
                  <div style={{ fontWeight: 800, color: '#059669', fontSize: '1.1rem' }}>Buyer</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748B' }}>Buys & Receives</div>
                </div>
              </div>
            </div>

            {/* Flow 2: Equipment Rental */}
            <div className="card" style={{ padding: '2rem', backgroundColor: '#FFFFFF' }}>
              <div style={{ display: 'flex', itemsAlign: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
                <span className="badge badge-emerald">Workflow 2</span>
                <h3 style={{ fontSize: '1.15rem' }}>Equipment Rental Exchange</h3>
              </div>

              <div className="flex items-center justify-between" style={{ backgroundColor: '#F8FAFC', padding: '1.2rem', borderRadius: '12px', border: '1px solid #E2E8F0', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div style={{ textAlign: 'center', flex: 1 }}>
                  <div style={{ fontWeight: 800, color: '#2563EB', fontSize: '1.1rem' }}>Equipment Owner</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748B' }}>Lists Machinery</div>
                </div>
                <ArrowRight size={24} color="#CBD5E1" />
                <div style={{ textAlign: 'center', flex: 1, backgroundColor: '#D1FAE5', padding: '0.5rem', borderRadius: '8px' }}>
                  <div style={{ fontWeight: 800, color: '#065F46', fontSize: '1.1rem' }}>BuildCycle</div>
                  <div style={{ fontSize: '0.75rem', color: '#047857' }}>Rental Booking</div>
                </div>
                <ArrowRight size={24} color="#CBD5E1" />
                <div style={{ textAlign: 'center', flex: 1 }}>
                  <div style={{ fontWeight: 800, color: '#0F172A', fontSize: '1.1rem' }}>Renter</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748B' }}>Rents per Day</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Materials Marketplace Preview */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <div className="flex justify-between items-center" style={{ marginBottom: '2rem' }}>
            <div>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '0.2rem' }}>Featured Surplus Materials</h2>
              <p style={{ color: '#64748B', fontSize: '0.9rem' }}>Verified surplus listings available for instant purchase</p>
            </div>
            <button onClick={() => navigateTo('materials')} className="btn btn-outline">
              View All Materials <ChevronRight size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {featuredMaterials.map((item) => (
              <MaterialCard key={item.id} material={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Equipment Rental Preview */}
      <section style={{ padding: '3.5rem 0', backgroundColor: '#F8FAFC', borderTop: '1px solid #E2E8F0' }}>
        <div className="container">
          <div className="flex justify-between items-center" style={{ marginBottom: '2rem' }}>
            <div>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '0.2rem' }}>Construction Equipment Rentals</h2>
              <p style={{ color: '#64748B', fontSize: '0.9rem' }}>Rent mixers, drills, scaffolding, and vibrators per day</p>
            </div>
            <button onClick={() => navigateTo('equipment')} className="btn btn-secondary">
              Explore All Equipment <ChevronRight size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {featuredEquipment.map((eq) => (
              <EquipmentCard key={eq.id} equipment={eq} onRentClick={() => navigateTo('equipment')} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
