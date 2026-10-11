import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { PlusCircle, CheckCircle2 } from 'lucide-react';

export const SellSurplusPage = () => {
  const { addMaterialListing, navigateTo } = useApp();
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    category: 'Tiles',
    description: '',
    quantity: 10,
    unit: 'boxes',
    price: 500,
    condition: 'New/Unused',
    location: 'Vijayawada',
    pickupAvailable: true,
    deliveryAvailable: true,
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&auto=format&fit=crop&q=80'
  });

  const categories = [
    'Tiles',
    'Bricks',
    'PVC Pipes',
    'Steel Rods',
    'Paint',
    'Wood',
    'Doors',
    'Windows',
    'Sanitary fittings',
    'Electrical materials'
  ];

  const locations = ['Vijayawada', 'Guntur', 'Hyderabad', 'Visakhapatnam', 'Warangal'];
  const conditions = ['New/Unused', 'Opened but unused', 'Good condition', 'Used'];

  const sampleImages = [
    { label: 'Tiles / Flooring', url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&auto=format&fit=crop&q=80' },
    { label: 'Bricks & Masonry', url: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&auto=format&fit=crop&q=80' },
    { label: 'PVC Pipes & Plumbing', url: 'https://images.unsplash.com/photo-1542013936693-884638332954?w=600&auto=format&fit=crop&q=80' },
    { label: 'Steel TMT Rods', url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&auto=format&fit=crop&q=80' },
    { label: 'Paints & Finishes', url: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&auto=format&fit=crop&q=80' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    addMaterialListing(formData);
    setSubmitted(true);
  };

  return (
    <div style={{ padding: '2.5rem 0' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
          <span className="badge badge-amber" style={{ marginBottom: '0.5rem' }}>Seller Hub</span>
          <h1 style={{ fontSize: '2.2rem', color: '#0F172A', marginBottom: '0.4rem' }}>
            Sell Construction Surplus Materials
          </h1>
          <p style={{ color: '#64748B', fontSize: '1rem' }}>
            Turn unused inventory, opened stock, and project surplus into cash.
          </p>
        </div>

        {submitted ? (
          <div className="card" style={{ padding: '3rem 2rem', textAlign: 'center', backgroundColor: '#FFFFFF' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: '#D1FAE5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
              <CheckCircle2 size={40} />
            </div>
            <h2 style={{ fontSize: '1.6rem', color: '#0F172A', marginBottom: '0.75rem' }}>
              Listing Submitted Successfully!
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#475569', maxWidth: '560px', margin: '0 auto 1.5rem', lineHeight: 1.6 }}>
              Listing submitted successfully. It will be reviewed by BuildCycle before appearing in the marketplace.
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    name: '',
                    category: 'Tiles',
                    description: '',
                    quantity: 10,
                    unit: 'boxes',
                    price: 500,
                    condition: 'New/Unused',
                    location: 'Vijayawada',
                    pickupAvailable: true,
                    deliveryAvailable: true,
                    image: sampleImages[0].url
                  });
                }}
                className="btn btn-outline"
              >
                Add Another Listing
              </button>
              <button onClick={() => navigateTo('seller-dash')} className="btn btn-primary">
                Go to Seller Dashboard
              </button>
            </div>
          </div>
        ) : (
          <div className="card" style={{ padding: '2rem', backgroundColor: '#FFFFFF' }}>
            <form onSubmit={handleSubmit}>
              {/* Material Name */}
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, color: '#334155', marginBottom: '0.4rem' }}>
                  Material Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ceramic Floor Tiles (2x2 ft), Red Bricks, 4-inch PVC Pipes"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.9375rem' }}
                />
              </div>

              {/* Category & Condition */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4" style={{ marginBottom: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, color: '#334155', marginBottom: '0.4rem' }}>
                    Category *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.9375rem', backgroundColor: 'white' }}
                  >
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, color: '#334155', marginBottom: '0.4rem' }}>
                    Condition *
                  </label>
                  <select
                    value={formData.condition}
                    onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
                    style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.9375rem', backgroundColor: 'white' }}
                  >
                    {conditions.map((cond) => (
                      <option key={cond} value={cond}>{cond}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Description */}
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, color: '#334155', marginBottom: '0.4rem' }}>
                  Detailed Description *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe why materials are surplus, brand name, exact specifications, packaging state..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.9375rem' }}
                />
              </div>

              {/* Quantity, Unit & Price */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4" style={{ marginBottom: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, color: '#334155', marginBottom: '0.4rem' }}>
                    Quantity Available *
                  </label>
                  <input
                    type="number"
                    min="1"
                    required
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.9375rem' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, color: '#334155', marginBottom: '0.4rem' }}>
                    Unit of Measure *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. boxes, pieces, rolls, buckets, bars"
                    value={formData.unit}
                    onChange={(e) => setFormData({ ...formData, unit: e.target.value })}
                    style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.9375rem' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, color: '#334155', marginBottom: '0.4rem' }}>
                    Price per Unit (₹) *
                  </label>
                  <input
                    type="number"
                    min="1"
                    required
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.9375rem' }}
                  />
                </div>
              </div>

              {/* Location Select */}
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, color: '#334155', marginBottom: '0.4rem' }}>
                  Pickup Location / City *
                </label>
                <select
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.9375rem', backgroundColor: 'white' }}
                >
                  {locations.map((loc) => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
              </div>

              {/* Photos Picker Simulation */}
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, color: '#334155', marginBottom: '0.4rem' }}>
                  Material Photos (Select Sample Preset or Enter Image URL)
                </label>
                <div className="flex gap-2" style={{ flexWrap: 'wrap', marginBottom: '0.75rem' }}>
                  {sampleImages.map((sample, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setFormData({ ...formData, image: sample.url })}
                      style={{
                        padding: '0.4rem 0.75rem',
                        borderRadius: '6px',
                        fontSize: '0.78125rem',
                        fontWeight: 600,
                        border: '1px solid #CBD5E1',
                        backgroundColor: formData.image === sample.url ? '#FEF3C7' : '#F8FAFC',
                        color: formData.image === sample.url ? '#B45309' : '#475569'
                      }}
                    >
                      📷 {sample.label}
                    </button>
                  ))}
                </div>
                <input
                  type="text"
                  placeholder="Or paste custom image URL..."
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  style={{ width: '100%', padding: '0.6rem', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '0.85rem' }}
                />
              </div>

              {/* Logistics Options Checkboxes */}
              <div className="flex gap-6" style={{ marginBottom: '2rem' }}>
                <label className="flex items-center gap-2" style={{ cursor: 'pointer', fontSize: '0.9rem', fontWeight: 600 }}>
                  <input
                    type="checkbox"
                    checked={formData.pickupAvailable}
                    onChange={(e) => setFormData({ ...formData, pickupAvailable: e.target.checked })}
                    style={{ width: '18px', height: '18px', accentColor: '#D97706' }}
                  />
                  Self-Pickup Allowed
                </label>
                <label className="flex items-center gap-2" style={{ cursor: 'pointer', fontSize: '0.9rem', fontWeight: 600 }}>
                  <input
                    type="checkbox"
                    checked={formData.deliveryAvailable}
                    onChange={(e) => setFormData({ ...formData, deliveryAvailable: e.target.checked })}
                    style={{ width: '18px', height: '18px', accentColor: '#D97706' }}
                  />
                  BuildCycle Transport Delivery Available
                </label>
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                <PlusCircle size={20} /> Submit Listing
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
