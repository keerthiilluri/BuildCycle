import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ToastContainer } from './components/Toast';
import { AiAssistantWidget } from './components/AiAssistantWidget';

import { HomePage } from './pages/HomePage';
import { BrowseMaterialsPage } from './pages/BrowseMaterialsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { SellSurplusPage } from './pages/SellSurplusPage';
import { EquipmentPage } from './pages/EquipmentPage';
import { CartCheckoutPage } from './pages/CartCheckoutPage';
import { BuyerDashboard } from './pages/BuyerDashboard';
import { SellerDashboard } from './pages/SellerDashboard';
import { AdminDashboard } from './pages/AdminDashboard';

const MainContent = () => {
  const { activeTab } = useApp();

  return (
    <main style={{ minHeight: 'calc(100vh - 350px)' }}>
      {activeTab === 'home' && <HomePage />}
      {activeTab === 'materials' && <BrowseMaterialsPage />}
      {activeTab === 'detail' && <ProductDetailPage />}
      {activeTab === 'sell' && <SellSurplusPage />}
      {activeTab === 'equipment' && <EquipmentPage />}
      {activeTab === 'cart' && <CartCheckoutPage />}
      {activeTab === 'buyer-dash' && <BuyerDashboard />}
      {activeTab === 'seller-dash' && <SellerDashboard />}
      {activeTab === 'admin-dash' && <AdminDashboard />}
    </main>
  );
};

export function App() {
  return (
    <AppProvider>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <MainContent />
        <Footer />
        <ToastContainer />
        <AiAssistantWidget />
      </div>
    </AppProvider>
  );
}

export default App;
