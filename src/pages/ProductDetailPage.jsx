import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { DeliveryCalculator } from '../components/DeliveryCalculator';
import { InquiryModal } from '../components/InquiryModal';
import {
  MapPin,
  Star,
  CheckCircle2,
  Truck,
  ShoppingBag,
  MessageSquare,
  ShieldAlert,
  ArrowLeft,
  Calendar,
  Package,
  Award,
  Tag
} from 'lucide-react';

export const ProductDetailPage = () => {
  const { selectedMaterial, navigateTo, addToCart } = useApp();
  const [quantity, setQuantity] = useState(1);
  const [deliveryCharge, setDeliveryCharge] = useState(600);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquiryType, setInquiryType] = useState('contact'); // contact | report

  if (!selectedMaterial) {
    return (
      <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
        <h2>No material selected</h2>
        <button onClick={() => navigateTo('materials')} className="btn btn-primary" style={{ marginTop: '1rem' }}>
          Back to Marketplace
        </button>
      </div>
    );
  }

  const handleBuyNow = () => {
    addToCart(selectedMaterial, quantity);
    navigateTo('cart');
  };

  return (
    <div style={{ padding: '2.5rem 0' }}>
      <div className="container">
        {/* Back navigation */}
        <button
          onClick={() => navigateTo('materials')}
          className="btn btn-outline btn-sm"
          style={{ marginBottom: '1.5rem' }}
        >
          <ArrowLeft size={16} /> Back to Surplus Materials
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" style={{ marginBottom: '3rem' }}>
          {/* Left Column: Image & Thumbnail Gallery */}
          <div>
            <div className="card" style={{ overflow: 'hidden', marginBottom: '1rem', backgroundColor: '#F8FAFC' }}>
              <img
                src={selectedMaterial.image}
                alt={selectedMaterial.name}
                style={{ width: '100%', height: '380px', objectFit: 'cover' }}
              />
            </div>
            {selectedMaterial.gallery && selectedMaterial.gallery.length > 1 && (
              <div className="flex gap-3">
                {selectedMaterial.gallery.map((img, idx) => (
                  <div
                    key={idx}
                    className="card"
                    style={{ width: '80px', height: '80px', cursor: 'pointer', overflow: 'hidden' }}
                  >
                    <img src={img} alt="thumb" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Details & Order Box */}
          <div>
            <div className="flex items-center gap-2" style={{ marginBottom: '0.6rem' }}>
              <span className="badge badge-amber">{selectedMaterial.category}</span>
              <span className="badge badge-emerald">{selectedMaterial.condition}</span>
              {selectedMaterial.status === 'pending' && <span className="badge badge-red">Pending Verification</span>}
            </div>

            <h1 style={{ fontSize: '2rem', color: '#0F172A', lineHeight: 1.25, marginBottom: '0.8rem' }}>
              {selectedMaterial.name}
            </h1>

            {/* Seller Info Block */}
            <div className="flex items-center justify-between" style={{ backgroundColor: '#F8FAFC', padding: '0.85rem 1.1rem', borderRadius: '10px', border: '1px solid #E2E8F0', marginBottom: '1.25rem' }}>
              <div>
                <div style={{ fontSize: '0.75rem', color: '#64748B' }}>Verified Seller</div>
                <div className="flex items-center gap-1.5" style={{ fontWeight: 700, color: '#0F172A', fontSize: '1rem' }}>
                  {selectedMaterial.sellerName}
                  {selectedMaterial.isVerified && <CheckCircle2 size={16} color="#059669" title="BuildCycle Verified Seller" />}
                </div>
              </div>

              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '0.75rem', color: '#64748B' }}>Seller Rating</div>
                <div className="flex items-center gap-1" style={{ fontWeight: 800, color: '#D97706', fontSize: '1.05rem' }}>
                  <Star size={16} fill="#D97706" color="#D97706" /> {selectedMaterial.sellerRating || 4.8} / 5.0
                </div>
              </div>
            </div>

            {/* Price & Quantity Available */}
            <div style={{ marginBottom: '1.5rem' }}>
              <div className="flex items-baseline gap-3">
                <span style={{ fontSize: '2.4rem', fontWeight: 800, color: '#0F172A', fontFamily: 'var(--font-heading)' }}>
                  ₹{selectedMaterial.price.toLocaleString()}
                </span>
                <span style={{ fontSize: '1rem', color: '#64748B' }}>/ {selectedMaterial.unit}</span>
                {selectedMaterial.originalPrice && (
                  <span style={{ fontSize: '1.1rem', color: '#94A3B8', textDecoration: 'line-through' }}>
                    ₹{selectedMaterial.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>
              <div style={{ fontSize: '0.875rem', color: '#059669', fontWeight: 700, marginTop: '0.2rem' }}>
                Save ~{Math.round(((selectedMaterial.originalPrice - selectedMaterial.price) / selectedMaterial.originalPrice) * 100)}% compared to retail stores!
              </div>
            </div>

            {/* Item Meta Specs */}
            <div className="grid grid-cols-2 gap-4" style={{ marginBottom: '1.5rem', backgroundColor: '#FFFFFF', padding: '1rem', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
              <div>
                <span style={{ fontSize: '0.75rem', color: '#64748B', display: 'block' }}>Quantity Available</span>
                <strong style={{ fontSize: '0.95rem', color: '#0F172A' }}>{selectedMaterial.quantity} {selectedMaterial.unit}</strong>
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', color: '#64748B', display: 'block' }}>Location / Distance</span>
                <strong style={{ fontSize: '0.95rem', color: '#0F172A' }}>{selectedMaterial.location} ({selectedMaterial.distanceKm || 12} km)</strong>
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', color: '#64748B', display: 'block' }}>Material Condition</span>
                <strong style={{ fontSize: '0.95rem', color: '#0F172A' }}>{selectedMaterial.condition}</strong>
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', color: '#64748B', display: 'block' }}>Posted Date</span>
                <strong style={{ fontSize: '0.95rem', color: '#0F172A' }}>{selectedMaterial.postedDate}</strong>
              </div>
            </div>

            {/* Description */}
            <div style={{ marginBottom: '1.75rem' }}>
              <h4 style={{ fontSize: '1rem', color: '#0F172A', marginBottom: '0.5rem' }}>Item Description</h4>
              <p style={{ fontSize: '0.9375rem', color: '#475569', lineHeight: 1.6 }}>
                {selectedMaterial.description}
              </p>
            </div>

            {/* Quantity Selector & Buy CTAs */}
            <div className="card" style={{ padding: '1.25rem', backgroundColor: '#F8FAFC', marginBottom: '1.5rem' }}>
              <div className="flex items-center gap-4" style={{ marginBottom: '1rem' }}>
                <label style={{ fontWeight: 700, fontSize: '0.9rem', color: '#0F172A' }}>Select Quantity:</label>
                <div className="flex items-center gap-2" style={{ backgroundColor: 'white', border: '1px solid #CBD5E1', borderRadius: '6px', padding: '0.2rem 0.5rem' }}>
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    style={{ fontSize: '1.1rem', fontWeight: 800, padding: '0 0.5rem', color: '#0F172A' }}
                  >
                    -
                  </button>
                  <span style={{ fontWeight: 700, padding: '0 0.5rem' }}>{quantity}</span>
                  <button
                    onClick={() => setQuantity((q) => Math.min(selectedMaterial.quantity, q + 1))}
                    style={{ fontSize: '1.1rem', fontWeight: 800, padding: '0 0.5rem', color: '#0F172A' }}
                  >
                    +
                  </button>
                </div>
                <span style={{ fontSize: '0.8rem', color: '#64748B' }}>Max {selectedMaterial.quantity} {selectedMaterial.unit} available</span>
              </div>

              <div className="flex gap-3" style={{ flexWrap: 'wrap' }}>
                <button
                  onClick={handleBuyNow}
                  className="btn btn-primary btn-lg"
                  style={{ flex: 1, minWidth: '150px' }}
                >
                  <ShoppingBag size={18} /> Buy Now
                </button>
                <button
                  onClick={() => addToCart(selectedMaterial, quantity)}
                  className="btn btn-secondary btn-lg"
                  style={{ flex: 1, minWidth: '150px' }}
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => {
                    setInquiryType('contact');
                    setInquiryModalOpen(true);
                  }}
                  className="btn btn-outline btn-lg"
                >
                  <MessageSquare size={18} /> Contact Seller
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Delivery Charge Estimator + Trust Disclaimer */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div style={{ gridColumn: 'span 2' }}>
            <DeliveryCalculator
              defaultDistance={selectedMaterial.distanceKm || 15}
              onSelectFee={(fee) => setDeliveryCharge(fee)}
            />
          </div>

          <div>
            {/* Trust & Safety Disclaimer Card (Section 18) */}
            <div className="card" style={{ padding: '1.5rem', backgroundColor: '#FFFBEB', border: '1px solid #FCD34D' }}>
              <div className="flex items-center gap-2" style={{ fontWeight: 700, color: '#92400E', fontSize: '1rem', marginBottom: '0.6rem' }}>
                <ShieldAlert size={20} /> Trust & Material Safety Notice
              </div>
              <p style={{ fontSize: '0.85rem', color: '#78350F', lineHeight: 1.5, marginBottom: '1rem' }}>
                "Buyers should inspect materials before final acceptance where applicable. BuildCycle facilitates the transaction but does not manufacture the listed products."
              </p>
              <button
                onClick={() => {
                  setInquiryType('report');
                  setInquiryModalOpen(true);
                }}
                style={{ fontSize: '0.8rem', color: '#DC2626', fontWeight: 700, textDecoration: 'underline', cursor: 'pointer' }}
              >
                Report suspicious or inaccurate listing
              </button>
            </div>
          </div>
        </div>
      </div>

      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        targetItem={selectedMaterial}
        type={inquiryType}
      />
    </div>
  );
};
