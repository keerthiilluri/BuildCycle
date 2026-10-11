import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Boxes,
  TrendingUp,
  DollarSign,
  PlusCircle,
  Trash2,
  CheckCircle2,
  Clock,
  Eye,
  Edit,
  Award
} from 'lucide-react';

export const SellerDashboard = () => {
  const { currentUser, materials, deleteListing, navigateTo } = useApp();
  const [activeTab, setActiveTab] = useState('listings');

  // Filter listings belonging to seller
  const sellerListings = materials.filter(
    (m) => m.sellerId === currentUser.id || m.sellerName === currentUser.name
  );

  const activeListingsCount = sellerListings.filter((m) => m.status === 'approved').length;
  const pendingCount = sellerListings.filter((m) => m.status === 'pending').length;

  // Example performance stats specified in prompt (Section 13)
  const totalSales = 245000;
  const commission = 19600; // 8% commission
  const sellerEarnings = 225400; // Total Sales - Commission
  const itemsSold = 28;

  return (
    <div style={{ padding: '2.5rem 0' }}>
      <div className="container">
        {/* Top Seller Overview Header */}
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
                <span className="badge badge-emerald">VERIFIED SELLER</span>
              </div>
              <p style={{ color: '#64748B', fontSize: '0.875rem' }}>
                Hardware Merchant & Contractor • 📍 {currentUser.location} • ★ 4.8 Rating
              </p>
            </div>
          </div>

          <div className="flex gap-2">
            <button onClick={() => navigateTo('sell')} className="btn btn-secondary btn-sm">
              <PlusCircle size={16} /> Add New Listing
            </button>
          </div>
        </div>

        {/* 5 Financial Overview KPI Cards (Section 13) */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4" style={{ marginBottom: '2rem' }}>
          <div className="card" style={{ padding: '1.25rem', backgroundColor: '#FFFFFF' }}>
            <span style={{ fontSize: '0.8rem', color: '#64748B', display: 'block' }}>Active Listings</span>
            <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0F172A', fontFamily: 'var(--font-heading)' }}>
              12
            </div>
            <span style={{ fontSize: '0.75rem', color: '#059669' }}>{pendingCount} Pending Approval</span>
          </div>

          <div className="card" style={{ padding: '1.25rem', backgroundColor: '#FFFFFF' }}>
            <span style={{ fontSize: '0.8rem', color: '#64748B', display: 'block' }}>Items Sold</span>
            <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0F172A', fontFamily: 'var(--font-heading)' }}>
              {itemsSold}
            </div>
            <span style={{ fontSize: '0.75rem', color: '#64748B' }}>Completed Orders</span>
          </div>

          <div className="card" style={{ padding: '1.25rem', backgroundColor: '#FFFFFF' }}>
            <span style={{ fontSize: '0.8rem', color: '#64748B', display: 'block' }}>Total Sales (GMV)</span>
            <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0F172A', fontFamily: 'var(--font-heading)' }}>
              ₹{totalSales.toLocaleString()}
            </div>
            <span style={{ fontSize: '0.75rem', color: '#2563EB' }}>Gross Sales</span>
          </div>

          <div className="card" style={{ padding: '1.25rem', backgroundColor: '#FEF3C7', border: '1px solid #FCD34D' }}>
            <span style={{ fontSize: '0.8rem', color: '#92400E', display: 'block' }}>BuildCycle Fee (8%)</span>
            <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#B45309', fontFamily: 'var(--font-heading)' }}>
              ₹{commission.toLocaleString()}
            </div>
            <span style={{ fontSize: '0.75rem', color: '#92400E' }}>Platform Service</span>
          </div>

          <div className="card" style={{ padding: '1.25rem', backgroundColor: '#D1FAE5', border: '1px solid #6EE7B7' }}>
            <span style={{ fontSize: '0.8rem', color: '#065F46', display: 'block' }}>Seller Net Earnings</span>
            <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#047857', fontFamily: 'var(--font-heading)' }}>
              ₹{sellerEarnings.toLocaleString()}
            </div>
            <span style={{ fontSize: '0.75rem', color: '#065F46' }}>Net Payout</span>
          </div>
        </div>

        {/* Action Tabs & Listing Table */}
        <div className="card" style={{ padding: '1.5rem', backgroundColor: '#FFFFFF' }}>
          <div className="flex justify-between items-center" style={{ marginBottom: '1.25rem', borderBottom: '1px solid #E2E8F0', paddingBottom: '0.75rem' }}>
            <h3 style={{ fontSize: '1.25rem', color: '#0F172A' }}>My Surplus Listings Inventory</h3>
            <button onClick={() => navigateTo('sell')} className="btn btn-primary btn-sm">
              <PlusCircle size={15} /> Create Listing
            </button>
          </div>

          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Material Name</th>
                  <th>Category</th>
                  <th>Quantity</th>
                  <th>Price / Unit</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {materials.slice(0, 6).map((item) => (
                  <tr key={item.id}>
                    <td>
                      <div className="flex items-center gap-3">
                        <img src={item.image} alt={item.name} style={{ width: '40px', height: '40px', borderRadius: '6px', objectFit: 'cover' }} />
                        <div>
                          <strong style={{ color: '#0F172A' }}>{item.name}</strong>
                          <div style={{ fontSize: '0.75rem', color: '#64748B' }}>ID: {item.id} • {item.location}</div>
                        </div>
                      </div>
                    </td>
                    <td><span className="badge badge-amber">{item.category}</span></td>
                    <td>{item.quantity} {item.unit}</td>
                    <td><strong>₹{item.price}</strong></td>
                    <td>
                      <span className={`badge ${item.status === 'approved' ? 'badge-emerald' : item.status === 'pending' ? 'badge-red' : 'badge-slate'}`}>
                        {item.status.toUpperCase()}
                      </span>
                    </td>
                    <td>
                      <div className="flex items-center gap-2">
                        <button onClick={() => navigateTo('detail', item)} className="btn btn-outline btn-sm" title="Preview Listing">
                          <Eye size={14} />
                        </button>
                        <button onClick={() => deleteListing(item.id)} className="btn btn-outline btn-sm" style={{ color: '#DC2626' }} title="Delete Listing">
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
