import React, { createContext, useContext, useState } from 'react';
import {
  DEMO_USERS,
  INITIAL_MATERIALS,
  INITIAL_EQUIPMENT,
  INITIAL_ORDERS,
  INITIAL_RENTALS,
  INITIAL_REVIEWS,
  FINANCIAL_PROJECTIONS
} from '../data/mockData';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(DEMO_USERS.buyer);
  const [activeTab, setActiveTab] = useState('home'); // home, materials, detail, equipment, sell, cart, checkout, buyer-dash, seller-dash, admin-dash
  
  const [materials, setMaterials] = useState(INITIAL_MATERIALS);
  const [equipment, setEquipment] = useState(INITIAL_EQUIPMENT);
  const [orders, setOrders] = useState(INITIAL_ORDERS);
  const [rentals, setRentals] = useState(INITIAL_RENTALS);
  const [reviews] = useState(INITIAL_REVIEWS);
  
  const [cart, setCart] = useState([]);
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [selectedEquipment, setSelectedEquipment] = useState(null);
  
  // Admin Portal Authentication State
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(true); // Default true for demo convenience or toggled by login

  // Search and Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    category: 'All',
    condition: 'All',
    location: 'All',
    maxPrice: 10000,
    sortBy: 'newest'
  });

  // Toasts Notification State
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = 'success') => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const switchRole = (role) => {
    if (DEMO_USERS[role]) {
      setCurrentUser(DEMO_USERS[role]);
      if (role === 'admin') {
        setIsAdminAuthenticated(true);
        setActiveTab('admin-dash');
      } else if (role === 'seller') {
        setActiveTab('seller-dash');
      } else {
        setActiveTab('buyer-dash');
      }
      addToast(`Switched view to ${role.toUpperCase()} mode (${DEMO_USERS[role].name})`, 'info');
    }
  };

  const adminLogin = (email, password) => {
    if (email === 'admin@buildcycle.demo' && password === 'BuildCycle123') {
      setIsAdminAuthenticated(true);
      setCurrentUser(DEMO_USERS.admin);
      addToast('Admin Portal Authenticated Successfully!', 'success');
      setActiveTab('admin-dash');
      return true;
    } else {
      addToast('Invalid Admin Credentials! Use admin@buildcycle.demo / BuildCycle123', 'warning');
      return false;
    }
  };

  const adminLogout = () => {
    setIsAdminAuthenticated(false);
    setCurrentUser(DEMO_USERS.buyer);
    setActiveTab('home');
    addToast('Admin logged out.', 'info');
  };

  const navigateTo = (tabName, extraData = null) => {
    if (tabName === 'detail' && extraData) {
      setSelectedMaterial(extraData);
    }
    if (tabName === 'rent-modal' && extraData) {
      setSelectedEquipment(extraData);
    }
    setActiveTab(tabName);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Admin Material Stock & Price Updation Handlers
  const updateMaterialStock = (materialId, newStock) => {
    const qty = Math.max(0, Number(newStock));
    setMaterials((prev) =>
      prev.map((item) => (item.id === materialId ? { ...item, quantity: qty } : item))
    );
    addToast(`Stock for item ${materialId} updated to ${qty}`, 'success');
  };

  const updateMaterialPrice = (materialId, newPrice) => {
    const price = Math.max(1, Number(newPrice));
    setMaterials((prev) =>
      prev.map((item) => (item.id === materialId ? { ...item, price: price } : item))
    );
    addToast(`Price for item ${materialId} updated to ₹${price.toLocaleString()}`, 'success');
  };

  // Material Listing Operations
  const addMaterialListing = (formData) => {
    const newId = `MAT-${Math.floor(100 + Math.random() * 900)}`;
    const newListing = {
      id: newId,
      ...formData,
      price: Number(formData.price),
      quantity: Number(formData.quantity),
      originalPrice: Math.round(Number(formData.price) * 1.5),
      distanceKm: Math.floor(Math.random() * 30) + 5,
      sellerId: currentUser.id,
      sellerName: currentUser.name,
      sellerRating: currentUser.rating || 4.8,
      isVerified: currentUser.verified || false,
      status: 'pending', // Pending Admin review
      postedDate: new Date().toISOString().split('T')[0],
      image: formData.image || "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&auto=format&fit=crop&q=80",
      gallery: [formData.image || "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&auto=format&fit=crop&q=80"]
    };

    setMaterials((prev) => [newListing, ...prev]);
    addToast('Listing submitted successfully! BuildCycle admin review is pending.', 'success');
  };

  const approveListing = (id) => {
    setMaterials((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: 'approved' } : item))
    );
    addToast(`Listing ${id} has been approved and published to marketplace!`, 'success');
  };

  const rejectListing = (id) => {
    setMaterials((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: 'rejected' } : item))
    );
    addToast(`Listing ${id} was rejected by Admin.`, 'warning');
  };

  const deleteListing = (id) => {
    setMaterials((prev) => prev.filter((item) => item.id !== id));
    addToast(`Listing ${id} removed.`, 'info');
  };

  // Cart Operations
  const addToCart = (material, qty = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.material.id === material.id);
      if (existing) {
        return prev.map((item) =>
          item.material.id === material.id
            ? { ...item, quantity: item.quantity + qty }
            : item
        );
      }
      return [...prev, { material, quantity: qty }];
    });
    addToast(`Added "${material.name}" to your cart.`, 'success');
  };

  const removeFromCart = (materialId) => {
    setCart((prev) => prev.filter((item) => item.material.id !== materialId));
    addToast('Item removed from cart.', 'info');
  };

  const updateCartQuantity = (materialId, delta) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.material.id === materialId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const clearCart = () => setCart([]);

  // Order Operations
  const placeOrder = (orderData) => {
    const orderId = `BC${Math.floor(1000 + Math.random() * 9000)}`;
    const newOrder = {
      id: orderId,
      date: new Date().toISOString().split('T')[0],
      buyerName: currentUser.name,
      buyerEmail: currentUser.email,
      sellerName: orderData.sellerName || 'Sri Lakshmi Hardware',
      materialName: orderData.materialName || 'Surplus Materials Bundle',
      quantity: orderData.quantity || 1,
      unit: orderData.unit || 'items',
      materialAmount: orderData.materialAmount,
      deliveryCharge: orderData.deliveryCharge,
      platformFee: orderData.platformFee,
      total: orderData.total,
      status: 'Order Placed',
      location: orderData.location || currentUser.location,
      distanceKm: orderData.distanceKm || 15
    };

    setOrders((prev) => [newOrder, ...prev]);
    clearCart();
    addToast(`Payment Successful! Order #${orderId} has been placed.`, 'success');
    return newOrder;
  };

  const updateOrderStatus = (orderId, nextStatus) => {
    setOrders((prev) =>
      prev.map((ord) => (ord.id === orderId ? { ...ord, status: nextStatus } : ord))
    );
    addToast(`Order #${orderId} status updated to "${nextStatus}"`, 'info');
  };

  // Rental Operations
  const rentEquipmentItem = (equipmentItem, days) => {
    const rentalId = `REN-${Math.floor(500 + Math.random() * 500)}`;
    const totalAmount = equipmentItem.rentalPrice * days;
    const commission = Math.round(totalAmount * 0.1);
    const newRental = {
      id: rentalId,
      date: new Date().toISOString().split('T')[0],
      equipmentName: equipmentItem.name,
      renterName: currentUser.name,
      ownerName: equipmentItem.ownerName,
      rentalDays: days,
      ratePerDay: equipmentItem.rentalPrice,
      rentalAmount: totalAmount,
      commission10Pct: commission,
      ownerEarnings: totalAmount - commission,
      status: 'Active Rental'
    };

    setRentals((prev) => [newRental, ...prev]);
    addToast(`Rental Confirmed! Booking ID ${rentalId} created for ${days} days.`, 'success');
    return newRental;
  };

  // AI Assistant Nearby Sellers Finder
  const findNearbySellers = (cityLocation, maxDistanceKm = 50, categoryFilter = 'All') => {
    return materials.filter((item) => {
      if (item.status !== 'approved') return false;
      const matchCity = cityLocation === 'All' || item.location === cityLocation;
      const matchDist = (item.distanceKm || 12) <= maxDistanceKm;
      const matchCat = categoryFilter === 'All' || item.category === categoryFilter;
      return matchCity && matchDist && matchCat;
    }).sort((a, b) => (a.distanceKm || 10) - (b.distanceKm || 10));
  };

  // Helper values
  const cartSubtotal = cart.reduce(
    (sum, item) => sum + item.material.price * item.quantity,
    0
  );
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <AppContext.Provider
      value={{
        currentUser,
        switchRole,
        activeTab,
        navigateTo,
        materials,
        equipment,
        orders,
        rentals,
        reviews,
        cart,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        cartSubtotal,
        cartItemCount,
        selectedMaterial,
        setSelectedMaterial,
        selectedEquipment,
        setSelectedEquipment,
        searchQuery,
        setSearchQuery,
        filters,
        setFilters,
        addMaterialListing,
        approveListing,
        rejectListing,
        deleteListing,
        updateMaterialStock,
        updateMaterialPrice,
        placeOrder,
        updateOrderStatus,
        rentEquipmentItem,
        findNearbySellers,
        isAdminAuthenticated,
        adminLogin,
        adminLogout,
        toasts,
        addToast,
        financialData: FINANCIAL_PROJECTIONS
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
