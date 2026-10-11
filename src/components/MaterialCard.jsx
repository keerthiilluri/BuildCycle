import React from 'react';
import { useApp } from '../context/AppContext';
import { MapPin, Star, CheckCircle, ShoppingBag, Eye, ShieldCheck } from 'lucide-react';

export const MaterialCard = ({ material }) => {
  const { navigateTo, addToCart } = useApp();

  const getConditionBadgeClass = (cond) => {
    if (cond === 'New/Unused') return 'badge-emerald';
    if (cond === 'Opened but unused') return 'badge-amber';
    if (cond === 'Good condition') return 'badge-blue';
    return 'badge-slate';
  };

  return (
    <div className="card flex flex-col" style={{ height: '100%' }}>
      {/* Product Image & Badges Overlay */}
      <div style={{ position: 'relative', height: '190px', width: '100%', overflow: 'hidden', backgroundColor: '#F1F5F9' }}>
        <img
          src={material.image}
          alt={material.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }}
          onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        />
        <div style={{ position: 'absolute', top: '0.65rem', left: '0.65rem', display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
          <span className="badge badge-amber" style={{ boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            {material.category}
          </span>
          <span className={`badge ${getConditionBadgeClass(material.condition)}`} style={{ boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            {material.condition}
          </span>
        </div>
        {material.status === 'pending' && (
          <div style={{ position: 'absolute', bottom: '0.65rem', left: '0.65rem', backgroundColor: '#EF4444', color: 'white', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 800 }}>
            ⚡ PENDING ADMIN APPROVAL
          </div>
        )}
      </div>

      {/* Card Body */}
      <div style={{ padding: '1.1rem', display: 'flex', flexDirection: 'column', flex: 1, gap: '0.6rem' }}>
        {/* Title */}
        <h3
          onClick={() => navigateTo('detail', material)}
          style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0F172A', cursor: 'pointer', lineHeight: 1.3 }}
          title={material.name}
        >
          {material.name}
        </h3>

        {/* Quantity & Location */}
        <div className="flex items-center justify-between" style={{ fontSize: '0.8125rem', color: '#64748B' }}>
          <span>Quantity: <strong style={{ color: '#0F172A' }}>{material.quantity} {material.unit}</strong></span>
          <span className="flex items-center gap-1">
            <MapPin size={13} color="#D97706" /> {material.location} ({material.distanceKm || 10} km)
          </span>
        </div>

        {/* Seller Info & Rating */}
        <div className="flex items-center justify-between" style={{ padding: '0.4rem 0.6rem', backgroundColor: '#F8FAFC', borderRadius: '6px', fontSize: '0.78125rem', border: '1px solid #F1F5F9' }}>
          <span className="flex items-center gap-1" style={{ fontWeight: 600, color: '#334155' }}>
            {material.sellerName}
            {material.isVerified && <CheckCircle size={14} color="#059669" title="Verified Seller" />}
          </span>
          <span className="flex items-center gap-1" style={{ fontWeight: 700, color: '#D97706' }}>
            <Star size={13} fill="#D97706" color="#D97706" /> {material.sellerRating || 4.8}
          </span>
        </div>

        {/* Price & Action Buttons */}
        <div className="flex items-center justify-between" style={{ marginTop: 'auto', paddingTop: '0.75rem', borderTop: '1px solid #F1F5F9' }}>
          <div>
            <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', fontFamily: 'var(--font-heading)' }}>
              ₹{material.price.toLocaleString()}
            </span>
            <span style={{ fontSize: '0.75rem', color: '#64748B' }}>/{material.unit.replace(/s$/, '')}</span>
            {material.originalPrice && (
              <div style={{ fontSize: '0.72rem', color: '#94A3B8', textDecoration: 'line-through' }}>
                ₹{material.originalPrice.toLocaleString()}
              </div>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => navigateTo('detail', material)}
              className="btn btn-outline btn-sm"
              title="View Product Details"
            >
              <Eye size={15} /> Details
            </button>
            <button
              onClick={() => addToCart(material, 1)}
              className="btn btn-primary btn-sm"
              title="Add to Shopping Cart"
            >
              <ShoppingBag size={15} /> Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
