import React from 'react';
import { useApp } from '../context/AppContext';
import { MapPin, Star, Wrench, CheckCircle, Calendar } from 'lucide-react';

export const EquipmentCard = ({ equipment, onRentClick }) => {
  return (
    <div className="card flex flex-col" style={{ height: '100%' }}>
      {/* Image Header */}
      <div style={{ position: 'relative', height: '180px', width: '100%', overflow: 'hidden', backgroundColor: '#F1F5F9' }}>
        <img
          src={equipment.image}
          alt={equipment.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', top: '0.65rem', left: '0.65rem' }}>
          <span className="badge badge-emerald">
            {equipment.availability || 'Available Now'}
          </span>
        </div>
        <div style={{ position: 'absolute', bottom: '0.65rem', right: '0.65rem', backgroundColor: 'rgba(15,23,42,0.85)', color: 'white', padding: '0.25rem 0.6rem', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 700 }}>
          🛠️ Equipment Rental
        </div>
      </div>

      {/* Body Content */}
      <div style={{ padding: '1.1rem', display: 'flex', flexDirection: 'column', flex: 1, gap: '0.6rem' }}>
        <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0F172A', lineHeight: 1.3 }}>
          {equipment.name}
        </h3>

        <p style={{ fontSize: '0.78125rem', color: '#64748B', lineHeight: 1.4 }}>
          {equipment.specs}
        </p>

        {/* Location & Owner rating */}
        <div className="flex items-center justify-between" style={{ fontSize: '0.8125rem', color: '#475569', marginTop: '0.2rem' }}>
          <span className="flex items-center gap-1">
            <MapPin size={13} color="#D97706" /> {equipment.location}
          </span>
          <span className="flex items-center gap-1" style={{ fontWeight: 700, color: '#D97706' }}>
            <Star size={13} fill="#D97706" color="#D97706" /> {equipment.ownerRating}
          </span>
        </div>

        {/* Owner Info */}
        <div style={{ fontSize: '0.75rem', color: '#64748B', backgroundColor: '#F8FAFC', padding: '0.4rem 0.6rem', borderRadius: '6px' }}>
          Owner: <strong style={{ color: '#334155' }}>{equipment.ownerName}</strong>
          {equipment.isVerified && <CheckCircle size={13} color="#059669" style={{ inlineSize: 'auto', marginLeft: '4px' }} title="Verified Owner" />}
        </div>

        {/* Footer Price & Rent Action */}
        <div className="flex items-center justify-between" style={{ marginTop: 'auto', paddingTop: '0.75rem', borderTop: '1px solid #F1F5F9' }}>
          <div>
            <span style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0F172A', fontFamily: 'var(--font-heading)' }}>
              ₹{equipment.rentalPrice.toLocaleString()}
            </span>
            <span style={{ fontSize: '0.75rem', color: '#64748B' }}>/day</span>
          </div>

          <button
            onClick={() => onRentClick(equipment)}
            className="btn btn-secondary btn-sm"
          >
            <Calendar size={15} /> Rent Now
          </button>
        </div>
      </div>
    </div>
  );
};
