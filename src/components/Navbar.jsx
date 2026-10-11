import React from 'react';
import { useApp } from '../context/AppContext';
import {
  ShoppingBag,
  Building2,
  PlusCircle,
  Search,
  Boxes,
  Truck
} from 'lucide-react';

export const Navbar = () => {
  const {
    currentUser,
    switchRole,
    activeTab,
    navigateTo,
    cartItemCount,
    searchQuery,
    setSearchQuery
  } = useApp();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    if (activeTab !== 'materials') {
      navigateTo('materials');
    }
  };

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 100, backgroundColor: '#FFFFFF', borderBottom: '1px solid #E2E8F0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
      {/* Top Quick Demo Role Bar */}
      <div style={{ backgroundColor: '#0F172A', color: '#94A3B8', fontSize: '0.8125rem', padding: '0.4rem 1.25rem' }}>
        <div className="container flex items-center justify-between" style={{ flexWrap: 'wrap', gap: '0.5rem' }}>
          <div className="flex items-center gap-2">
            <span style={{ color: '#F1F5F9', fontWeight: 600 }}>BuildCycle Platform Demo</span>
          </div>

          {/* Quick Role Switcher */}
          <div className="flex items-center gap-2">
            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#CBD5E1' }}>Switch Account View:</span>
            <button
              onClick={() => switchRole('buyer')}
              style={{
                padding: '0.2rem 0.6rem',
                borderRadius: '4px',
                fontSize: '0.75rem',
                fontWeight: 700,
                backgroundColor: currentUser.role === 'buyer' ? '#D97706' : '#334155',
                color: '#FFFFFF',
                transition: 'all 0.2s'
              }}
            >
              👤 Buyer View
            </button>
            <button
              onClick={() => switchRole('seller')}
              style={{
                padding: '0.2rem 0.6rem',
                borderRadius: '4px',
                fontSize: '0.75rem',
                fontWeight: 700,
                backgroundColor: currentUser.role === 'seller' ? '#059669' : '#334155',
                color: '#FFFFFF',
                transition: 'all 0.2s'
              }}
            >
              🛠️ Seller Hub
            </button>
            <button
              onClick={() => switchRole('admin')}
              style={{
                padding: '0.2rem 0.6rem',
                borderRadius: '4px',
                fontSize: '0.75rem',
                fontWeight: 700,
                backgroundColor: currentUser.role === 'admin' ? '#DC2626' : '#334155',
                color: '#FFFFFF',
                transition: 'all 0.2s'
              }}
            >
              ⚡ Admin View
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container flex items-center justify-between" style={{ padding: '0.85rem 1.25rem', gap: '1rem' }}>
        {/* Brand Logo */}
        <div
          onClick={() => navigateTo('home')}
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.6rem' }}
        >
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '10px',
              backgroundColor: '#D97706',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              boxShadow: '0 4px 10px rgba(217, 119, 6, 0.3)'
            }}
          >
            <Building2 size={24} />
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 800, color: '#0F172A', lineHeight: 1.1 }}>
              Build<span style={{ color: '#D97706' }}>Cycle</span>
            </div>
            <div style={{ fontSize: '0.7rem', color: '#64748B', fontWeight: 600 }}>
              Construction Surplus Exchange
            </div>
          </div>
        </div>

        {/* Global Search Bar */}
        <div style={{ flex: 1, maxWidth: '420px', position: 'relative' }} className="hide-mobile">
          <input
            type="text"
            placeholder="Search tiles, bricks, steel, PVC, paint..."
            value={searchQuery}
            onChange={handleSearchChange}
            style={{
              width: '100%',
              padding: '0.6rem 1rem 0.6rem 2.4rem',
              borderRadius: '9999px',
              border: '1px solid #CBD5E1',
              backgroundColor: '#F8FAFC',
              fontSize: '0.875rem',
              outline: 'none',
              transition: 'all 0.2s'
            }}
          />
          <Search
            size={16}
            style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: '#94A3B8' }}
          />
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center gap-1" style={{ flexWrap: 'wrap' }}>
          <button
            onClick={() => navigateTo('home')}
            className={`btn btn-sm ${activeTab === 'home' ? 'btn-primary' : 'btn-outline'}`}
            style={{ border: activeTab === 'home' ? 'none' : '1px solid transparent' }}
          >
            Home
          </button>

          <button
            onClick={() => navigateTo('materials')}
            className={`btn btn-sm ${activeTab === 'materials' ? 'btn-primary' : 'btn-outline'}`}
            style={{ border: activeTab === 'materials' ? 'none' : '1px solid transparent' }}
          >
            Buy Materials
          </button>

          <button
            onClick={() => navigateTo('equipment')}
            className={`btn btn-sm ${activeTab === 'equipment' ? 'btn-primary' : 'btn-outline'}`}
            style={{ border: activeTab === 'equipment' ? 'none' : '1px solid transparent' }}
          >
            Rent Equipment
          </button>

          <button
            onClick={() => navigateTo('sell')}
            className={`btn btn-sm ${activeTab === 'sell' ? 'btn-secondary' : 'btn-outline'}`}
            style={{ border: activeTab === 'sell' ? 'none' : '1px solid transparent' }}
          >
            <PlusCircle size={15} /> Sell Surplus
          </button>

          {/* Role Dashboard Selector */}
          <button
            onClick={() => {
              if (currentUser.role === 'admin') navigateTo('admin-dash');
              else if (currentUser.role === 'seller') navigateTo('seller-dash');
              else navigateTo('buyer-dash');
            }}
            className={`btn btn-sm ${['buyer-dash', 'seller-dash', 'admin-dash'].includes(activeTab) ? 'btn-dark' : 'btn-outline'}`}
            style={{ border: ['buyer-dash', 'seller-dash', 'admin-dash'].includes(activeTab) ? 'none' : '1px solid #E2E8F0' }}
          >
            {currentUser.role === 'admin' ? '⚡ Admin Portal' : currentUser.role === 'seller' ? '🛠️ Seller Hub' : '👤 Dashboard'}
          </button>
        </nav>

        {/* Cart Icon */}
        <button
          onClick={() => navigateTo('cart')}
          style={{
            position: 'relative',
            padding: '0.55rem',
            borderRadius: '10px',
            backgroundColor: '#F1F5F9',
            border: '1px solid #CBD5E1',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
          title="Shopping Cart"
        >
          <ShoppingBag size={20} color="#0F172A" />
          {cartItemCount > 0 && (
            <span
              style={{
                position: 'absolute',
                top: '-6px',
                right: '-6px',
                backgroundColor: '#D97706',
                color: 'white',
                fontSize: '0.7rem',
                fontWeight: 800,
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
              }}
            >
              {cartItemCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
};
