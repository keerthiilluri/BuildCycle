import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  ShoppingBag,
  Truck,
  CheckCircle2,
  Clock,
  MapPin,
  User,
  Wrench,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

export const BuyerDashboard = () => {
  const { currentUser, orders, rentals, updateOrderStatus, navigateTo } = useApp();
  const [activeSubTab, setActiveSubTab] = useState('orders'); // orders | rentals | profile

  const deliveryStages = [
    'Order Placed',
    'Seller Confirmed',
    'Pickup Scheduled',
    'Out for Delivery',
    'Delivered'
  ];

  const getNextStage = (current) => {
    const idx = deliveryStages.indexOf(current);
    if (idx >= 0 && idx < deliveryStages.length - 1) {
      return deliveryStages[idx + 1];
    }
    return current;
  };

  return (
    <div style={{ padding: '2.5rem 0' }}>
      <div className="container">
        {/* User Header Profile */}
        <div className="card flex items-center justify-between" style={{ padding: '1.5rem', backgroundColor: '#FFFFFF', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div className="flex items-center gap-4">
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover' }}
            />
            <div>
              <div className="flex items-center gap-2">
                <h1 style={{ fontSize: '1.5rem', color: '#0F172A' }}>{currentUser.name}</h1>
                <span className="badge badge-amber">BUYER DASHBOARD</span>
              </div>
              <p style={{ color: '#64748B', fontSize: '0.875rem' }}>
                {currentUser.email} • {currentUser.phone} • 📍 {currentUser.location}
              </p>
            </div>
          </div>

          <div className="flex gap-2">
            <button onClick={() => navigateTo('materials')} className="btn btn-primary btn-sm">
              Browse Marketplace
            </button>
          </div>
        </div>

        {/* Dashboard Navigation Tabs */}
        <div className="flex gap-3" style={{ marginBottom: '1.5rem', borderBottom: '1px solid #E2E8F0', paddingBottom: '0.5rem' }}>
          <button
            onClick={() => setActiveSubTab('orders')}
            className={`btn ${activeSubTab === 'orders' ? 'btn-dark' : 'btn-outline'}`}
          >
            <ShoppingBag size={16} /> My Material Orders ({orders.length})
          </button>
          <button
            onClick={() => setActiveSubTab('rentals')}
            className={`btn ${activeSubTab === 'rentals' ? 'btn-dark' : 'btn-outline'}`}
          >
            <Wrench size={16} /> Equipment Rentals ({rentals.length})
          </button>
          <button
            onClick={() => setActiveSubTab('profile')}
            className={`btn ${activeSubTab === 'profile' ? 'btn-dark' : 'btn-outline'}`}
          >
            <User size={16} /> Account Profile
          </button>
        </div>

        {/* SubTab Content: Material Orders */}
        {activeSubTab === 'orders' && (
          <div>
            <h3 style={{ fontSize: '1.25rem', color: '#0F172A', marginBottom: '1rem' }}>
              Material Purchases & Delivery Status
            </h3>

            {orders.length === 0 ? (
              <div className="card" style={{ padding: '3rem', textAlign: 'center' }}>
                <p style={{ color: '#64748B' }}>No orders placed yet.</p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {orders.map((ord) => (
                  <div key={ord.id} className="card" style={{ padding: '1.5rem', backgroundColor: '#FFFFFF' }}>
                    <div className="flex justify-between items-center" style={{ marginBottom: '1rem', borderBottom: '1px solid #F1F5F9', paddingBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                      <div>
                        <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0F172A' }}>
                          Order #{ord.id}
                        </span>
                        <span style={{ fontSize: '0.8rem', color: '#64748B', marginLeft: '0.75rem' }}>
                          Date: {ord.date}
                        </span>
                      </div>
                      <span className="badge badge-amber" style={{ fontSize: '0.8rem' }}>
                        {ord.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6" style={{ marginBottom: '1.25rem' }}>
                      <div>
                        <div style={{ fontSize: '0.8rem', color: '#64748B' }}>Material Item</div>
                        <div style={{ fontWeight: 700, color: '#0F172A', fontSize: '1.05rem' }}>{ord.materialName}</div>
                        <div style={{ fontSize: '0.85rem', color: '#475569' }}>
                          Qty: {ord.quantity} {ord.unit} • Seller: {ord.sellerName}
                        </div>
                      </div>

                      <div>
                        <div style={{ fontSize: '0.8rem', color: '#64748B' }}>Financial Summary</div>
                        <div style={{ fontWeight: 700, color: '#0F172A' }}>
                          Material: ₹{ord.materialAmount?.toLocaleString()}
                        </div>
                        <div style={{ fontSize: '0.85rem', color: '#64748B' }}>
                          Delivery Fee: ₹{ord.deliveryCharge?.toLocaleString()}
                        </div>
                        <div style={{ fontWeight: 800, color: '#D97706', fontSize: '1.1rem', marginTop: '0.2rem' }}>
                          Total: ₹{ord.total?.toLocaleString()}
                        </div>
                      </div>

                      {/* Real-time Interactive Delivery Progress Bar */}
                      <div>
                        <div style={{ fontSize: '0.8rem', color: '#64748B', marginBottom: '0.4rem' }}>
                          Delivery Progress Tracker ({ord.distanceKm || 15} km)
                        </div>

                        <div className="flex items-center gap-1" style={{ marginBottom: '0.6rem' }}>
                          {deliveryStages.map((stg, i) => {
                            const currentIdx = deliveryStages.indexOf(ord.status);
                            const isPassed = i <= currentIdx;
                            return (
                              <div
                                key={stg}
                                title={stg}
                                style={{
                                  flex: 1,
                                  height: '8px',
                                  borderRadius: '4px',
                                  backgroundColor: isPassed ? '#059669' : '#E2E8F0'
                                }}
                              />
                            );
                          })}
                        </div>

                        {ord.status !== 'Delivered' && (
                          <button
                            onClick={() => updateOrderStatus(ord.id, getNextStage(ord.status))}
                            className="btn btn-outline btn-sm"
                            style={{ width: '100%', fontSize: '0.75rem' }}
                          >
                            ⚡ Demo Action: Advance Status to "{getNextStage(ord.status)}"
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* SubTab Content: Rentals */}
        {activeSubTab === 'rentals' && (
          <div>
            <h3 style={{ fontSize: '1.25rem', color: '#0F172A', marginBottom: '1rem' }}>
              Active Equipment Rentals
            </h3>
            {rentals.map((r) => (
              <div key={r.id} className="card" style={{ padding: '1.5rem', backgroundColor: '#FFFFFF', marginBottom: '1rem' }}>
                <div className="flex justify-between items-center">
                  <div>
                    <h4 style={{ fontSize: '1.1rem', color: '#0F172A' }}>{r.equipmentName}</h4>
                    <div style={{ fontSize: '0.85rem', color: '#64748B' }}>
                      Owner: {r.ownerName} • Duration: {r.rentalDays} days @ ₹{r.ratePerDay}/day
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span className="badge badge-emerald">{r.status}</span>
                    <div style={{ fontWeight: 800, fontSize: '1.1rem', color: '#0F172A', marginTop: '0.3rem' }}>
                      ₹{r.rentalAmount?.toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* SubTab Content: Profile */}
        {activeSubTab === 'profile' && (
          <div className="card" style={{ padding: '2rem', backgroundColor: '#FFFFFF', maxWidth: '600px' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>User Profile Details</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
              <div><strong>Name:</strong> {currentUser.name}</div>
              <div><strong>Email:</strong> {currentUser.email}</div>
              <div><strong>Phone:</strong> {currentUser.phone}</div>
              <div><strong>Role:</strong> Buyer</div>
              <div><strong>Default City:</strong> {currentUser.location}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
