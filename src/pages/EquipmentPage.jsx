import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { EquipmentCard } from '../components/EquipmentCard';
import { Wrench, Calendar, CheckCircle2, ShieldCheck, X } from 'lucide-react';

export const EquipmentPage = () => {
  const { equipment, selectedEquipment, setSelectedEquipment, rentEquipmentItem, navigateTo } = useApp();
  const [rentModalOpen, setRentModalOpen] = useState(false);
  const [rentalDays, setRentalDays] = useState(3);
  const [targetEq, setTargetEq] = useState(null);

  const handleOpenRental = (eqItem) => {
    setTargetEq(eqItem);
    setRentModalOpen(true);
  };

  const handleConfirmRental = (e) => {
    e.preventDefault();
    if (!targetEq) return;
    rentEquipmentItem(targetEq, rentalDays);
    setRentModalOpen(false);
    navigateTo('buyer-dash');
  };

  return (
    <div style={{ padding: '2.5rem 0' }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '2rem' }}>
          <span className="badge badge-emerald" style={{ marginBottom: '0.5rem' }}>Equipment Exchange</span>
          <h1 style={{ fontSize: '2.2rem', color: '#0F172A', marginBottom: '0.4rem' }}>
            Construction Equipment Rentals
          </h1>
          <p style={{ color: '#64748B', fontSize: '1rem' }}>
            Rent mixers, drills, scaffolding, vibrators, and tile cutters per day from verified contractors.
          </p>
        </div>

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6" style={{ marginBottom: '3rem' }}>
          {equipment.map((item) => (
            <EquipmentCard key={item.id} equipment={item} onRentClick={handleOpenRental} />
          ))}
        </div>

        {/* Rental Modal */}
        {rentModalOpen && targetEq && (
          <div className="modal-overlay" onClick={() => setRentModalOpen(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ padding: '1.75rem' }}>
              <div className="flex justify-between items-center" style={{ marginBottom: '1.25rem', borderBottom: '1px solid #E2E8F0', paddingBottom: '0.75rem' }}>
                <div className="flex items-center gap-2" style={{ fontWeight: 800, fontSize: '1.2rem', color: '#0F172A' }}>
                  <Wrench color="#059669" /> Rent Equipment: {targetEq.name}
                </div>
                <button onClick={() => setRentModalOpen(false)} style={{ color: '#64748B' }}>
                  <X size={20} />
                </button>
              </div>

              <form onSubmit={handleConfirmRental}>
                <div style={{ backgroundColor: '#F8FAFC', padding: '1rem', borderRadius: '10px', border: '1px solid #E2E8F0', marginBottom: '1.25rem' }}>
                  <div className="flex justify-between" style={{ marginBottom: '0.4rem' }}>
                    <span style={{ fontSize: '0.85rem', color: '#64748B' }}>Owner / Contractor:</span>
                    <strong style={{ fontSize: '0.85rem', color: '#0F172A' }}>{targetEq.ownerName}</strong>
                  </div>
                  <div className="flex justify-between" style={{ marginBottom: '0.4rem' }}>
                    <span style={{ fontSize: '0.85rem', color: '#64748B' }}>Daily Rental Rate:</span>
                    <strong style={{ fontSize: '0.95rem', color: '#059669' }}>₹{targetEq.rentalPrice} / day</strong>
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#64748B', borderTop: '1px dashed #CBD5E1', paddingTop: '0.4rem', marginTop: '0.4rem' }}>
                    {targetEq.specs}
                  </div>
                </div>

                {/* Duration Picker */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, color: '#334155', marginBottom: '0.5rem' }}>
                    Select Rental Duration (Days):
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="number"
                      min="1"
                      max="60"
                      value={rentalDays}
                      onChange={(e) => setRentalDays(Math.max(1, Number(e.target.value)))}
                      style={{ width: '100px', padding: '0.6rem', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '1rem', fontWeight: 700 }}
                    />
                    <div className="flex gap-2">
                      {[1, 3, 7, 14].map((d) => (
                        <button
                          key={d}
                          type="button"
                          onClick={() => setRentalDays(d)}
                          style={{
                            padding: '0.4rem 0.75rem',
                            borderRadius: '6px',
                            fontSize: '0.8rem',
                            fontWeight: 700,
                            border: '1px solid #CBD5E1',
                            backgroundColor: rentalDays === d ? '#D1FAE5' : '#F8FAFC',
                            color: rentalDays === d ? '#065F46' : '#475569'
                          }}
                        >
                          {d} {d === 1 ? 'day' : 'days'}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Financial Summary */}
                <div style={{ backgroundColor: '#FFFFFF', padding: '1rem', borderRadius: '8px', border: '1px solid #CBD5E1', marginBottom: '1.5rem' }}>
                  <div className="flex justify-between" style={{ marginBottom: '0.4rem', fontSize: '0.85rem' }}>
                    <span>Gross Rental Total ({rentalDays} days @ ₹{targetEq.rentalPrice}/day):</span>
                    <strong>₹{(targetEq.rentalPrice * rentalDays).toLocaleString()}</strong>
                  </div>
                  <div className="flex justify-between" style={{ fontSize: '0.78125rem', color: '#64748B', marginBottom: '0.4rem' }}>
                    <span>⚡ BuildCycle Rental Commission (10%):</span>
                    <span style={{ color: '#D97706', fontWeight: 600 }}>₹{Math.round(targetEq.rentalPrice * rentalDays * 0.1).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between" style={{ borderTop: '1px solid #E2E8F0', paddingTop: '0.5rem', fontWeight: 800, fontSize: '1.1rem', color: '#0F172A' }}>
                    <span>Total Amount Payable:</span>
                    <span style={{ color: '#059669', fontFamily: 'var(--font-heading)' }}>
                      ₹{(targetEq.rentalPrice * rentalDays).toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between">
                  <button type="button" onClick={() => setRentModalOpen(false)} className="btn btn-outline">
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-secondary btn-lg">
                    <CheckCircle2 size={18} /> Confirm Rental Booking
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
