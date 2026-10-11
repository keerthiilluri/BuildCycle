import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { MaterialCard } from '../components/MaterialCard';
import { Search, Filter, RotateCcw, Boxes, SlidersHorizontal } from 'lucide-react';

export const BrowseMaterialsPage = () => {
  const { materials, searchQuery, setSearchQuery, filters, setFilters } = useApp();
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const categories = [
    'All',
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

  const locations = ['All', 'Vijayawada', 'Guntur', 'Hyderabad', 'Visakhapatnam', 'Warangal'];
  const conditions = ['All', 'New/Unused', 'Opened but unused', 'Good condition', 'Used'];

  const resetFilters = () => {
    setSearchQuery('');
    setFilters({
      category: 'All',
      condition: 'All',
      location: 'All',
      maxPrice: 10000,
      sortBy: 'newest'
    });
  };

  // Filter Logic
  const filteredMaterials = materials.filter((item) => {
    if (item.status !== 'approved') return false; // Show approved listings publicly
    
    // Search matching
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchName = item.name.toLowerCase().includes(q);
      const matchCat = item.category.toLowerCase().includes(q);
      const matchLoc = item.location.toLowerCase().includes(q);
      if (!matchName && !matchCat && !matchLoc) return false;
    }

    // Category filter
    if (filters.category !== 'All' && item.category !== filters.category) return false;

    // Condition filter
    if (filters.condition !== 'All' && item.condition !== filters.condition) return false;

    // Location filter
    if (filters.location !== 'All' && item.location !== filters.location) return false;

    // Price filter
    if (item.price > filters.maxPrice) return false;

    return true;
  });

  return (
    <div style={{ padding: '2rem 0' }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '2.2rem', color: '#0F172A', marginBottom: '0.4rem' }}>
            Surplus Construction Materials Marketplace
          </h1>
          <p style={{ color: '#64748B', fontSize: '1rem' }}>
            Buy verified surplus tiles, bricks, steel, PVC pipes, and hardware at affordable discounted prices.
          </p>
        </div>

        {/* Search & Top Controls */}
        <div className="card" style={{ padding: '1.2rem', marginBottom: '2rem', backgroundColor: '#FFFFFF' }}>
          <div className="flex items-center gap-4" style={{ flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '260px', position: 'relative' }}>
              <input
                type="text"
                placeholder="Search materials by title, category, or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem 0.75rem 2.6rem',
                  borderRadius: '8px',
                  border: '1px solid #CBD5E1',
                  fontSize: '0.9375rem',
                  outline: 'none'
                }}
              />
              <Search
                size={18}
                style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: '#94A3B8' }}
              />
            </div>

            <div className="flex items-center gap-3">
              <select
                value={filters.sortBy}
                onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
                style={{
                  padding: '0.75rem 1rem',
                  borderRadius: '8px',
                  border: '1px solid #CBD5E1',
                  backgroundColor: '#F8FAFC',
                  fontSize: '0.875rem',
                  fontWeight: 600
                }}
              >
                <option value="newest">Sort by: Newest First</option>
                <option value="low-high">Price: Low to High</option>
                <option value="high-low">Price: High to Low</option>
                <option value="rating">Seller Rating</option>
              </select>

              <button
                onClick={resetFilters}
                className="btn btn-outline"
                title="Reset Filters"
              >
                <RotateCcw size={16} /> Reset
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar Filters */}
          <div className="card" style={{ padding: '1.5rem', height: 'fit-content', backgroundColor: '#FFFFFF' }}>
            <div className="flex justify-between items-center" style={{ marginBottom: '1.25rem', borderBottom: '1px solid #E2E8F0', paddingBottom: '0.75rem' }}>
              <div className="flex items-center gap-2" style={{ fontWeight: 700, fontSize: '1.1rem', color: '#0F172A' }}>
                <Filter size={18} color="#D97706" /> Marketplace Filters
              </div>
            </div>

            {/* Category Filter */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, color: '#334155', marginBottom: '0.6rem' }}>
                Category
              </label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', maxHeight: '220px', overflowY: 'auto' }}>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilters({ ...filters, category: cat })}
                    style={{
                      textAlign: 'left',
                      padding: '0.4rem 0.6rem',
                      borderRadius: '6px',
                      fontSize: '0.85rem',
                      fontWeight: filters.category === cat ? 700 : 500,
                      backgroundColor: filters.category === cat ? '#FEF3C7' : 'transparent',
                      color: filters.category === cat ? '#B45309' : '#475569',
                      transition: 'all 0.15s'
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Location Filter */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, color: '#334155', marginBottom: '0.6rem' }}>
                City / Location
              </label>
              <select
                value={filters.location}
                onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                style={{ width: '100%', padding: '0.6rem', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '0.85rem' }}
              >
                {locations.map((loc) => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
            </div>

            {/* Condition Filter */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, color: '#334155', marginBottom: '0.6rem' }}>
                Material Condition
              </label>
              <select
                value={filters.condition}
                onChange={(e) => setFilters({ ...filters, condition: e.target.value })}
                style={{ width: '100%', padding: '0.6rem', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '0.85rem' }}
              >
                {conditions.map((cond) => (
                  <option key={cond} value={cond}>{cond}</option>
                ))}
              </select>
            </div>

            {/* Price Range Slider */}
            <div style={{ marginBottom: '1rem' }}>
              <div className="flex justify-between" style={{ fontSize: '0.875rem', fontWeight: 700, color: '#334155', marginBottom: '0.6rem' }}>
                <span>Max Unit Price:</span>
                <span style={{ color: '#D97706' }}>₹{filters.maxPrice.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="10"
                max="10000"
                step="50"
                value={filters.maxPrice}
                onChange={(e) => setFilters({ ...filters, maxPrice: Number(e.target.value) })}
                style={{ width: '100%', accentColor: '#D97706' }}
              />
            </div>
          </div>

          {/* Right Product Grid */}
          <div style={{ gridColumn: 'span 3' }}>
            <div className="flex justify-between items-center" style={{ marginBottom: '1rem' }}>
              <span style={{ fontSize: '0.9rem', color: '#64748B', fontWeight: 600 }}>
                Showing <strong>{filteredMaterials.length}</strong> available material listing(s)
              </span>
            </div>

            {filteredMaterials.length === 0 ? (
              <div className="card" style={{ padding: '4rem 2rem', textAlign: 'center', backgroundColor: '#FFFFFF' }}>
                <Boxes size={48} color="#94A3B8" style={{ margin: '0 auto 1rem' }} />
                <h3 style={{ fontSize: '1.25rem', color: '#0F172A', marginBottom: '0.5rem' }}>No Surplus Materials Found</h3>
                <p style={{ color: '#64748B', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                  No materials match your current search or filter criteria. Try adjusting the category, location, or price slider.
                </p>
                <button onClick={resetFilters} className="btn btn-primary">
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {filteredMaterials.map((item) => (
                  <MaterialCard key={item.id} material={item} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
