import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  ShieldCheck,
  Lock,
  LogOut,
  Boxes,
  CheckCircle2,
  XCircle,
  Users,
  DollarSign,
  TrendingUp,
  Truck,
  Edit2,
  Save,
  Search,
  Filter,
  Check,
  Clock,
  Eye,
  AlertCircle
} from 'lucide-react';

export const AdminDashboard = () => {
  const {
    materials,
    orders,
    approveListing,
    rejectListing,
    deleteListing,
    updateMaterialStock,
    updateMaterialPrice,
    updateOrderStatus,
    isAdminAuthenticated,
    adminLogin,
    adminLogout,
    navigateTo
  } = useApp();

  // Admin Auth Form State
  const [emailInput, setEmailInput] = useState('admin@buildcycle.demo');
  const [passwordInput, setPasswordInput] = useState('BuildCycle123');

  // Admin Tab State: listings | inventory-update | orders-tracking | users
  const [activeAdminTab, setActiveAdminTab] = useState('inventory-update');

  // Inventory Editing State
  const [editingStockId, setEditingStockId] = useState(null);
  const [tempStockValue, setTempStockValue] = useState('');

  const [editingPriceId, setEditingPriceId] = useState(null);
  const [tempPriceValue, setTempPriceValue] = useState('');

  // Orders Filter & Search State
  const [orderSearchQuery, setOrderSearchQuery] = useState('');
  const [orderStatusFilter, setOrderStatusFilter] = useState('All');

  const pendingListings = materials.filter((m) => m.status === 'pending');
  const approvedListings = materials.filter((m) => m.status === 'approved');

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

  // Filter Orders for Admin Orders Dashboard
  const filteredOrders = orders.filter((ord) => {
    const q = orderSearchQuery.toLowerCase();
    const matchSearch =
      ord.id.toLowerCase().includes(q) ||
      ord.buyerName.toLowerCase().includes(q) ||
      ord.sellerName.toLowerCase().includes(q) ||
      ord.materialName.toLowerCase().includes(q);

    const matchStatus = orderStatusFilter === 'All' || ord.status === orderStatusFilter;
    return matchSearch && matchStatus;
  });

  // Admin Login Screen if not authenticated
  if (!isAdminAuthenticated) {
    return (
      <div style={{ padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '480px' }}>
          <div className="card" style={{ padding: '2.5rem', backgroundColor: '#FFFFFF' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '16px', backgroundColor: '#FEE2E2', color: '#DC2626', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
              <Lock size={32} />
            </div>

            <h1 style={{ fontSize: '1.8rem', color: '#0F172A', textAlign: 'center', marginBottom: '0.4rem' }}>
              Admin Portal Authentication
            </h1>
            <p style={{ color: '#64748B', fontSize: '0.9rem', textAlign: 'center', marginBottom: '1.75rem' }}>
              Enter administrator credentials to access platform controls, stock/price editing, and order tracking.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                adminLogin(emailInput, passwordInput);
              }}
            >
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '0.4rem' }}>
                  Admin Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.9rem' }}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '0.4rem' }}>
                  Password *
                </label>
                <input
                  type="password"
                  required
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.9rem' }}
                />
              </div>

              <button type="submit" className="btn btn-dark btn-lg" style={{ width: '100%', marginBottom: '1rem' }}>
                <ShieldCheck size={18} /> Authenticate Admin Login
              </button>

              <div style={{ backgroundColor: '#F8FAFC', padding: '0.75rem', borderRadius: '6px', border: '1px solid #E2E8F0', fontSize: '0.78125rem', color: '#64748B', textAlign: 'center' }}>
                🔑 Demo Admin Credentials:<br />
                <strong>admin@buildcycle.demo</strong> / <strong>BuildCycle123</strong>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: '2.5rem 0' }}>
      <div className="container">
        {/* Admin Header Banner */}
        <div className="card flex items-center justify-between" style={{ padding: '1.5rem', backgroundColor: '#0F172A', color: 'white', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div className="flex items-center gap-2" style={{ marginBottom: '0.2rem' }}>
              <span className="badge badge-amber">AUTHENTICATED ADMIN PORTAL</span>
              <h1 style={{ fontSize: '1.6rem', color: 'white' }}>BuildCycle Control Center</h1>
            </div>
            <p style={{ color: '#94A3B8', fontSize: '0.875rem' }}>
              Update material stocks & prices, verify listings, and track platform orders in real-time.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button onClick={adminLogout} className="btn btn-outline btn-sm" style={{ color: '#EF4444', borderColor: '#7F1D1D' }}>
              <LogOut size={15} /> Logout Admin
            </button>
          </div>
        </div>

        {/* Top Operational Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4" style={{ marginBottom: '2rem' }}>
          <div className="card" style={{ padding: '1.25rem', backgroundColor: '#FFFFFF' }}>
            <span style={{ fontSize: '0.8rem', color: '#64748B', display: 'block' }}>Total Platform Materials</span>
            <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0F172A', fontFamily: 'var(--font-heading)' }}>
              {materials.length}
            </div>
            <span style={{ fontSize: '0.75rem', color: '#059669' }}>{approvedListings.length} Active Listings</span>
          </div>

          <div className="card" style={{ padding: '1.25rem', backgroundColor: '#FEF3C7', border: '1px solid #FCD34D' }}>
            <span style={{ fontSize: '0.8rem', color: '#92400E', display: 'block' }}>Pending Approvals</span>
            <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#B45309', fontFamily: 'var(--font-heading)' }}>
              {pendingListings.length}
            </div>
            <span style={{ fontSize: '0.75rem', color: '#92400E' }}>Requires Review</span>
          </div>

          <div className="card" style={{ padding: '1.25rem', backgroundColor: '#DBEAFE', border: '1px solid #93C5FD' }}>
            <span style={{ fontSize: '0.8rem', color: '#1E40AF', display: 'block' }}>Total Orders Tracked</span>
            <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#1E3A8A', fontFamily: 'var(--font-heading)' }}>
              {orders.length}
            </div>
            <span style={{ fontSize: '0.75rem', color: '#1E40AF' }}>Live Delivery Pipelines</span>
          </div>

          <div className="card" style={{ padding: '1.25rem', backgroundColor: '#D1FAE5', border: '1px solid #6EE7B7' }}>
            <span style={{ fontSize: '0.8rem', color: '#065F46', display: 'block' }}>Total Platform Revenue</span>
            <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#047857', fontFamily: 'var(--font-heading)' }}>
              ₹4,25,000
            </div>
            <span style={{ fontSize: '0.75rem', color: '#065F46' }}>Commissions & Margins</span>
          </div>
        </div>

        {/* Navigation Tabs for Admin Features */}
        <div className="flex gap-3" style={{ marginBottom: '1.5rem', borderBottom: '1px solid #E2E8F0', paddingBottom: '0.5rem', flexWrap: 'wrap' }}>
          <button
            onClick={() => setActiveAdminTab('inventory-update')}
            className={`btn ${activeAdminTab === 'inventory-update' ? 'btn-dark' : 'btn-outline'}`}
          >
            <Boxes size={16} /> Materials Stock & Price Updation
          </button>

          <button
            onClick={() => setActiveAdminTab('orders-tracking')}
            className={`btn ${activeAdminTab === 'orders-tracking' ? 'btn-dark' : 'btn-outline'}`}
          >
            <Truck size={16} /> Separate Orders Tracking Dashboard ({orders.length})
          </button>

          <button
            onClick={() => setActiveAdminTab('listings-approval')}
            className={`btn ${activeAdminTab === 'listings-approval' ? 'btn-dark' : 'btn-outline'}`}
          >
            <ShieldCheck size={16} /> Listing Approvals Queue ({pendingListings.length})
          </button>
        </div>

        {/* TAB 1: Materials Stock & Price Updation Table */}
        {activeAdminTab === 'inventory-update' && (
          <div className="card" style={{ padding: '1.5rem', backgroundColor: '#FFFFFF' }}>
            <div className="flex justify-between items-center" style={{ marginBottom: '1.25rem', borderBottom: '1px solid #E2E8F0', paddingBottom: '0.75rem' }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', color: '#0F172A' }}>Materials Inventory Stock & Price Management</h3>
                <p style={{ color: '#64748B', fontSize: '0.85rem' }}>
                  Directly edit surplus material stock quantities and unit prices (₹). Changes instantly update marketplace listings!
                </p>
              </div>
            </div>

            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Material Item</th>
                    <th>Category</th>
                    <th>Seller & Location</th>
                    <th>Stock Quantity (Editable)</th>
                    <th>Unit Price (Editable)</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {materials.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <div className="flex items-center gap-3">
                          <img src={item.image} alt={item.name} style={{ width: '42px', height: '42px', borderRadius: '6px', objectFit: 'cover' }} />
                          <div>
                            <strong style={{ color: '#0F172A' }}>{item.name}</strong>
                            <div style={{ fontSize: '0.75rem', color: '#64748B' }}>ID: {item.id}</div>
                          </div>
                        </div>
                      </td>

                      <td><span className="badge badge-amber">{item.category}</span></td>

                      <td>
                        <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#334155' }}>{item.sellerName}</div>
                        <div style={{ fontSize: '0.75rem', color: '#64748B' }}>📍 {item.location}</div>
                      </td>

                      {/* Stock Updation Column */}
                      <td>
                        {editingStockId === item.id ? (
                          <div className="flex items-center gap-2">
                            <input
                              type="number"
                              min="0"
                              value={tempStockValue}
                              onChange={(e) => setTempStockValue(e.target.value)}
                              style={{ width: '80px', padding: '0.35rem 0.5rem', borderRadius: '6px', border: '2px solid #D97706', fontSize: '0.875rem', fontWeight: 700 }}
                            />
                            <button
                              onClick={() => {
                                updateMaterialStock(item.id, tempStockValue);
                                setEditingStockId(null);
                              }}
                              className="btn btn-secondary btn-sm"
                              title="Save Stock"
                            >
                              <Save size={14} />
                            </button>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            <strong style={{ fontSize: '0.95rem', color: '#0F172A' }}>{item.quantity} {item.unit}</strong>
                            <button
                              onClick={() => {
                                setEditingStockId(item.id);
                                setTempStockValue(item.quantity);
                              }}
                              className="btn btn-outline btn-sm"
                              style={{ padding: '0.2rem 0.4rem', fontSize: '0.75rem' }}
                              title="Edit Stock Quantity"
                            >
                              <Edit2 size={13} /> Edit
                            </button>
                          </div>
                        )}
                      </td>

                      {/* Price Updation Column */}
                      <td>
                        {editingPriceId === item.id ? (
                          <div className="flex items-center gap-2">
                            <input
                              type="number"
                              min="1"
                              value={tempPriceValue}
                              onChange={(e) => setTempPriceValue(e.target.value)}
                              style={{ width: '90px', padding: '0.35rem 0.5rem', borderRadius: '6px', border: '2px solid #059669', fontSize: '0.875rem', fontWeight: 700 }}
                            />
                            <button
                              onClick={() => {
                                updateMaterialPrice(item.id, tempPriceValue);
                                setEditingPriceId(null);
                              }}
                              className="btn btn-secondary btn-sm"
                              title="Save Price"
                            >
                              <Save size={14} />
                            </button>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            <strong style={{ fontSize: '1rem', color: '#059669', fontFamily: 'var(--font-heading)' }}>
                              ₹{item.price.toLocaleString()}
                            </strong>
                            <span style={{ fontSize: '0.72rem', color: '#64748B' }}>/{item.unit.replace(/s$/, '')}</span>
                            <button
                              onClick={() => {
                                setEditingPriceId(item.id);
                                setTempPriceValue(item.price);
                              }}
                              className="btn btn-outline btn-sm"
                              style={{ padding: '0.2rem 0.4rem', fontSize: '0.75rem' }}
                              title="Edit Unit Price"
                            >
                              <Edit2 size={13} /> Edit
                            </button>
                          </div>
                        )}
                      </td>

                      <td>
                        <span className={`badge ${item.status === 'approved' ? 'badge-emerald' : item.status === 'pending' ? 'badge-red' : 'badge-slate'}`}>
                          {item.status.toUpperCase()}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 2: Separate Orders Tracking Dashboard */}
        {activeAdminTab === 'orders-tracking' && (
          <div className="card" style={{ padding: '1.5rem', backgroundColor: '#FFFFFF' }}>
            <div className="flex justify-between items-center" style={{ marginBottom: '1.25rem', borderBottom: '1px solid #E2E8F0', paddingBottom: '0.75rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', color: '#0F172A' }}>Separate Orders Tracking Dashboard</h3>
                <p style={{ color: '#64748B', fontSize: '0.85rem' }}>
                  Monitor customer orders across all sellers, inspect financial breakdowns, and advance delivery fulfillment stages.
                </p>
              </div>
            </div>

            {/* Filter & Search Controls */}
            <div className="flex items-center gap-4" style={{ marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              <div style={{ flex: 1, minWidth: '240px', position: 'relative' }}>
                <input
                  type="text"
                  placeholder="Search by Order ID (#BC1024), Buyer, or Seller..."
                  value={orderSearchQuery}
                  onChange={(e) => setOrderSearchQuery(e.target.value)}
                  style={{ width: '100%', padding: '0.6rem 1rem 0.6rem 2.4rem', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.875rem' }}
                />
                <Search size={16} style={{ position: 'absolute', left: '0.8rem', top: '50%', transform: 'translateY(-50%)', color: '#94A3B8' }} />
              </div>

              <div className="flex items-center gap-2">
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#475569' }}>Status Filter:</span>
                <select
                  value={orderStatusFilter}
                  onChange={(e) => setOrderStatusFilter(e.target.value)}
                  style={{ padding: '0.6rem 0.85rem', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.85rem', fontWeight: 600 }}
                >
                  <option value="All">All Order Statuses</option>
                  {deliveryStages.map((stg) => (
                    <option key={stg} value={stg}>{stg}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Orders Table */}
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Order ID & Date</th>
                    <th>Buyer & Delivery Location</th>
                    <th>Material Item & Quantity</th>
                    <th>Financial Total</th>
                    <th>Delivery Status Tracker</th>
                    <th>Admin Stage Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredOrders.length === 0 ? (
                    <tr>
                      <td colSpan={6} style={{ textAlign: 'center', padding: '2rem', color: '#64748B' }}>
                        No orders match the selected search or status filter.
                      </td>
                    </tr>
                  ) : (
                    filteredOrders.map((ord) => (
                      <tr key={ord.id}>
                        <td>
                          <strong style={{ fontSize: '1rem', color: '#0F172A' }}>#{ord.id}</strong>
                          <div style={{ fontSize: '0.75rem', color: '#64748B' }}>{ord.date}</div>
                        </td>

                        <td>
                          <strong style={{ color: '#334155' }}>{ord.buyerName}</strong>
                          <div style={{ fontSize: '0.75rem', color: '#64748B' }}>📍 {ord.location} ({ord.distanceKm || 12} km)</div>
                        </td>

                        <td>
                          <strong style={{ color: '#0F172A' }}>{ord.materialName}</strong>
                          <div style={{ fontSize: '0.75rem', color: '#475569' }}>
                            Seller: {ord.sellerName} • Qty: {ord.quantity} {ord.unit}
                          </div>
                        </td>

                        <td>
                          <strong style={{ fontSize: '1.05rem', color: '#D97706', fontFamily: 'var(--font-heading)' }}>
                            ₹{ord.total?.toLocaleString()}
                          </strong>
                          <div style={{ fontSize: '0.72rem', color: '#64748B' }}>
                            (Mat: ₹{ord.materialAmount} + Deliv: ₹{ord.deliveryCharge})
                          </div>
                        </td>

                        <td>
                          <span className={`badge ${ord.status === 'Delivered' ? 'badge-emerald' : 'badge-amber'}`}>
                            {ord.status}
                          </span>
                        </td>

                        <td>
                          {ord.status !== 'Delivered' ? (
                            <button
                              onClick={() => updateOrderStatus(ord.id, getNextStage(ord.status))}
                              className="btn btn-secondary btn-sm"
                              style={{ fontSize: '0.75rem' }}
                            >
                              Advance → "{getNextStage(ord.status)}"
                            </button>
                          ) : (
                            <span style={{ fontSize: '0.75rem', color: '#059669', fontWeight: 700 }}>
                              ✓ Completed
                            </span>
                          )}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 3: Pending Listing Approvals Queue */}
        {activeAdminTab === 'listings-approval' && (
          <div className="card" style={{ padding: '1.5rem', backgroundColor: '#FFFFFF' }}>
            <div className="flex justify-between items-center" style={{ marginBottom: '1.25rem', borderBottom: '1px solid #E2E8F0', paddingBottom: '0.75rem' }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', color: '#0F172A' }}>Pending Listing Approvals Queue</h3>
                <p style={{ color: '#64748B', fontSize: '0.85rem' }}>
                  Review seller listings for condition accuracy, price realistic bounds, and material safety before public publish.
                </p>
              </div>
              <span className="badge badge-amber">{pendingListings.length} PENDING REVIEW</span>
            </div>

            {pendingListings.length === 0 ? (
              <div style={{ padding: '2rem', textAlign: 'center', backgroundColor: '#F8FAFC', borderRadius: '8px' }}>
                <CheckCircle2 size={36} color="#059669" style={{ margin: '0 auto 0.5rem' }} />
                <p style={{ color: '#64748B', fontWeight: 600 }}>All pending listings have been reviewed and approved!</p>
              </div>
            ) : (
              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Material Item</th>
                      <th>Category</th>
                      <th>Seller</th>
                      <th>Price</th>
                      <th>Condition</th>
                      <th>Location</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pendingListings.map((item) => (
                      <tr key={item.id}>
                        <td>
                          <div className="flex items-center gap-3">
                            <img src={item.image} alt={item.name} style={{ width: '42px', height: '42px', borderRadius: '6px', objectFit: 'cover' }} />
                            <div>
                              <strong style={{ color: '#0F172A' }}>{item.name}</strong>
                              <div style={{ fontSize: '0.75rem', color: '#64748B' }}>ID: {item.id}</div>
                            </div>
                          </div>
                        </td>
                        <td><span className="badge badge-amber">{item.category}</span></td>
                        <td>{item.sellerName}</td>
                        <td><strong>₹{item.price}</strong> / {item.unit}</td>
                        <td><span className="badge badge-blue">{item.condition}</span></td>
                        <td>{item.location}</td>
                        <td>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => approveListing(item.id)}
                              className="btn btn-secondary btn-sm"
                              title="Approve Listing"
                            >
                              <Check size={14} /> Approve
                            </button>
                            <button
                              onClick={() => rejectListing(item.id)}
                              className="btn btn-outline btn-sm"
                              style={{ color: '#DC2626' }}
                              title="Reject Listing"
                            >
                              <XCircle size={14} /> Reject
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
