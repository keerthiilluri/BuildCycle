import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { DeliveryCalculator } from '../components/DeliveryCalculator';
import {
  ShoppingBag,
  Trash2,
  CheckCircle2,
  CreditCard,
  QrCode,
  DollarSign
} from 'lucide-react';

export const CartCheckoutPage = () => {
  const { cart, removeFromCart, updateCartQuantity, cartSubtotal, placeOrder, navigateTo } = useApp();
  const [deliveryOption] = useState('delivery'); // delivery | pickup
  const [deliveryFee, setDeliveryFee] = useState(600);
  const [paymentMethod, setPaymentMethod] = useState('upi'); // upi | card | cod
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(null);

  const platformFee = deliveryOption === 'delivery' ? 100 : 50;
  const grandTotal = cartSubtotal + (deliveryOption === 'delivery' ? deliveryFee : 0) + platformFee;

  const handleCheckoutSubmit = (e) => {
    e.preventDefault();
    if (cart.length === 0) return;

    setIsProcessing(true);
    setTimeout(() => {
      const firstItem = cart[0].material;
      const order = placeOrder({
        sellerName: firstItem.sellerName,
        materialName: firstItem.name,
        quantity: cart.reduce((sum, i) => sum + i.quantity, 0),
        unit: firstItem.unit,
        materialAmount: cartSubtotal,
        deliveryCharge: deliveryOption === 'delivery' ? deliveryFee : 0,
        platformFee: platformFee,
        total: grandTotal,
        location: firstItem.location
      });
      setIsProcessing(false);
      setOrderComplete(order);
    }, 1200);
  };

  if (orderComplete) {
    return (
      <div style={{ padding: '3.5rem 0' }}>
        <div className="container" style={{ maxWidth: '650px' }}>
          <div className="card" style={{ padding: '2.5rem', textAlign: 'center', backgroundColor: '#FFFFFF' }}>
            <div style={{ width: '72px', height: '72px', borderRadius: '50%', backgroundColor: '#D1FAE5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
              <CheckCircle2 size={48} />
            </div>

            <span className="badge badge-emerald" style={{ marginBottom: '0.5rem' }}>PAYMENT SUCCESSFUL</span>
            <h1 style={{ fontSize: '2rem', color: '#0F172A', marginBottom: '0.4rem' }}>
              Order Placed Successfully!
            </h1>
            <p style={{ fontSize: '1.1rem', color: '#059669', fontWeight: 800, marginBottom: '1.25rem' }}>
              Order ID: #{orderComplete.id}
            </p>

            <div style={{ backgroundColor: '#F8FAFC', padding: '1.2rem', borderRadius: '10px', border: '1px solid #E2E8F0', marginBottom: '1.5rem', textAlign: 'left', fontSize: '0.9rem' }}>
              <div className="flex justify-between" style={{ marginBottom: '0.4rem' }}>
                <span>Material Item:</span>
                <strong>{orderComplete.materialName}</strong>
              </div>
              <div className="flex justify-between" style={{ marginBottom: '0.4rem' }}>
                <span>Total Amount Paid:</span>
                <strong style={{ color: '#0F172A' }}>₹{orderComplete.total.toLocaleString()}</strong>
              </div>
              <div className="flex justify-between" style={{ marginBottom: '0.4rem' }}>
                <span>Delivery Status:</span>
                <span className="badge badge-amber">{orderComplete.status}</span>
              </div>
            </div>

            <div className="flex justify-center gap-3">
              <button onClick={() => navigateTo('buyer-dash')} className="btn btn-primary btn-lg">
                View My Dashboard
              </button>
              <button onClick={() => navigateTo('materials')} className="btn btn-outline btn-lg">
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div style={{ padding: '4rem 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '500px' }}>
          <ShoppingBag size={56} color="#94A3B8" style={{ margin: '0 auto 1rem' }} />
          <h2 style={{ fontSize: '1.8rem', color: '#0F172A', marginBottom: '0.5rem' }}>Your Cart is Empty</h2>
          <p style={{ color: '#64748B', marginBottom: '1.5rem' }}>
            Browse surplus construction materials to add tiles, bricks, steel, or PVC pipes to your order.
          </p>
          <button onClick={() => navigateTo('materials')} className="btn btn-primary btn-lg">
            Browse Materials Marketplace
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: '2.5rem 0' }}>
      <div className="container">
        <h1 style={{ fontSize: '2.2rem', color: '#0F172A', marginBottom: '1.5rem' }}>
          Shopping Cart & Checkout
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Cart Items & Address */}
          <div style={{ gridColumn: 'span 2' }}>
            <div className="card" style={{ padding: '1.5rem', backgroundColor: '#FFFFFF', marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1.25rem', borderBottom: '1px solid #E2E8F0', paddingBottom: '0.75rem' }}>
                Cart Items ({cart.length})
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {cart.map((item) => (
                  <div
                    key={item.material.id}
                    className="flex items-center justify-between"
                    style={{
                      paddingBottom: '1.25rem',
                      borderBottom: '1px solid #F1F5F9',
                      flexWrap: 'wrap',
                      gap: '1rem'
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={item.material.image}
                        alt={item.material.name}
                        style={{ width: '70px', height: '70px', borderRadius: '8px', objectFit: 'cover' }}
                      />
                      <div>
                        <h4 style={{ fontSize: '1rem', color: '#0F172A', fontWeight: 700 }}>{item.material.name}</h4>
                        <div style={{ fontSize: '0.8rem', color: '#64748B' }}>
                          Seller: {item.material.sellerName} • {item.material.location}
                        </div>
                        <div style={{ fontSize: '0.85rem', color: '#D97706', fontWeight: 700 }}>
                          ₹{item.material.price} per {item.material.unit}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      {/* Quantity control */}
                      <div className="flex items-center gap-2" style={{ border: '1px solid #CBD5E1', borderRadius: '6px', padding: '0.2rem 0.5rem' }}>
                        <button onClick={() => updateCartQuantity(item.material.id, -1)} style={{ fontWeight: 800, padding: '0 0.4rem' }}>-</button>
                        <span style={{ fontWeight: 700 }}>{item.quantity}</span>
                        <button onClick={() => updateCartQuantity(item.material.id, 1)} style={{ fontWeight: 800, padding: '0 0.4rem' }}>+</button>
                      </div>

                      <div style={{ textAlign: 'right', minWidth: '90px' }}>
                        <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0F172A' }}>
                          ₹{(item.material.price * item.quantity).toLocaleString()}
                        </div>
                      </div>

                      <button onClick={() => removeFromCart(item.material.id)} style={{ color: '#EF4444' }} title="Remove item">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Delivery Calculator Selector */}
            <div style={{ marginBottom: '2rem' }}>
              <DeliveryCalculator
                defaultDistance={15}
                onSelectFee={(fee) => setDeliveryFee(fee)}
              />
            </div>
          </div>

          {/* Right: Payment & Order Summary */}
          <div>
            <div className="card" style={{ padding: '1.5rem', backgroundColor: '#FFFFFF', position: 'sticky', top: '100px' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1.25rem', borderBottom: '1px solid #E2E8F0', paddingBottom: '0.75rem' }}>
                Order Summary
              </h3>

              {/* Breakdown Table */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', marginBottom: '1.25rem' }}>
                <div className="flex justify-between">
                  <span style={{ color: '#64748B' }}>Material Subtotal:</span>
                  <strong style={{ color: '#0F172A' }}>₹{cartSubtotal.toLocaleString()}</strong>
                </div>

                <div className="flex justify-between">
                  <span style={{ color: '#64748B' }}>Estimated Delivery Charge:</span>
                  <strong style={{ color: '#0F172A' }}>₹{deliveryFee.toLocaleString()}</strong>
                </div>

                <div className="flex justify-between">
                  <span style={{ color: '#64748B' }}>Platform Service Fee:</span>
                  <strong style={{ color: '#D97706' }}>₹{platformFee.toLocaleString()}</strong>
                </div>

                <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '0.75rem', marginTop: '0.25rem' }} className="flex justify-between">
                  <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0F172A' }}>Total Amount:</span>
                  <span style={{ fontSize: '1.4rem', fontWeight: 800, color: '#D97706', fontFamily: 'var(--font-heading)' }}>
                    ₹{grandTotal.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Commission Business Model Note */}
              <div style={{ backgroundColor: '#F8FAFC', padding: '0.85rem', borderRadius: '8px', border: '1px solid #E2E8F0', fontSize: '0.78125rem', color: '#64748B', marginBottom: '1.25rem' }}>
                💡 <strong>Transaction Note:</strong> BuildCycle earns approximately 8% commission from the transaction (deducted from seller payout).
              </div>

              {/* Payment Selector */}
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, color: '#334155', marginBottom: '0.6rem' }}>
                  Select Payment Method:
                </label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label className="flex items-center gap-2" style={{ padding: '0.6rem', border: '1px solid #CBD5E1', borderRadius: '6px', cursor: 'pointer', fontSize: '0.85rem', fontWeight: paymentMethod === 'upi' ? 700 : 500 }}>
                    <input type="radio" name="pay" checked={paymentMethod === 'upi'} onChange={() => setPaymentMethod('upi')} />
                    <QrCode size={16} color="#059669" /> UPI (GPay / PhonePe / Paytm)
                  </label>
                  <label className="flex items-center gap-2" style={{ padding: '0.6rem', border: '1px solid #CBD5E1', borderRadius: '6px', cursor: 'pointer', fontSize: '0.85rem', fontWeight: paymentMethod === 'card' ? 700 : 500 }}>
                    <input type="radio" name="pay" checked={paymentMethod === 'card'} onChange={() => setPaymentMethod('card')} />
                    <CreditCard size={16} color="#2563EB" /> Credit / Debit Card
                  </label>
                  <label className="flex items-center gap-2" style={{ padding: '0.6rem', border: '1px solid #CBD5E1', borderRadius: '6px', cursor: 'pointer', fontSize: '0.85rem', fontWeight: paymentMethod === 'cod' ? 700 : 500 }}>
                    <input type="radio" name="pay" checked={paymentMethod === 'cod'} onChange={() => setPaymentMethod('cod')} />
                    <DollarSign size={16} color="#D97706" /> Cash on Delivery / Pickup
                  </label>
                </div>
              </div>

              {/* Pay Now Button */}
              <button
                onClick={handleCheckoutSubmit}
                disabled={isProcessing}
                className="btn btn-primary btn-lg"
                style={{ width: '100%' }}
              >
                {isProcessing ? 'Processing Payment...' : `Pay ₹${grandTotal.toLocaleString()}`}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
