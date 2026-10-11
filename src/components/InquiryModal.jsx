import React, { useState } from 'react';
import { MessageSquare, ShieldAlert, X, Send, CheckCircle2 } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const InquiryModal = ({ isOpen, onClose, targetItem, type = 'contact' }) => {
  const { addToast, currentUser } = useApp();
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  if (!isOpen || !targetItem) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      if (type === 'contact') {
        addToast(`Inquiry sent to ${targetItem.sellerName || 'Seller'}! They will respond via phone/SMS.`, 'success');
      } else {
        addToast(`Listing reported to BuildCycle Admin for inspection. Thank you for keeping our platform safe.`, 'warning');
      }
      setSent(false);
      setMessage('');
      onClose();
    }, 1200);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ padding: '1.75rem' }}>
        <div className="flex justify-between items-center" style={{ marginBottom: '1.25rem', borderBottom: '1px solid #E2E8F0', paddingBottom: '0.75rem' }}>
          <div className="flex items-center gap-2" style={{ fontWeight: 800, fontSize: '1.2rem', color: '#0F172A' }}>
            {type === 'contact' ? <MessageSquare color="#D97706" /> : <ShieldAlert color="#DC2626" />}
            {type === 'contact' ? `Contact Seller (${targetItem.sellerName || 'Seller'})` : `Report Listing: ${targetItem.name}`}
          </div>
          <button onClick={onClose} style={{ color: '#64748B' }}>
            <X size={20} />
          </button>
        </div>

        {sent ? (
          <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
            <CheckCircle2 size={48} color="#059669" style={{ margin: '0 auto 1rem' }} />
            <h3 style={{ fontSize: '1.2rem', color: '#0F172A', marginBottom: '0.5rem' }}>
              {type === 'contact' ? 'Message Sent Successfully!' : 'Report Submitted'}
            </h3>
            <p style={{ fontSize: '0.875rem', color: '#64748B' }}>
              {type === 'contact'
                ? `Seller will contact you at ${currentUser.phone || currentUser.email}.`
                : 'BuildCycle admins will inspect this item within 24 hours.'}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '1rem', backgroundColor: '#F8FAFC', padding: '0.85rem', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
              <div style={{ fontSize: '0.8rem', color: '#64748B' }}>Listing Item:</div>
              <div style={{ fontWeight: 700, color: '#0F172A', fontSize: '0.95rem' }}>{targetItem.name}</div>
              <div style={{ fontSize: '0.8rem', color: '#059669', fontWeight: 600 }}>Price: ₹{targetItem.price || targetItem.rentalPrice} / {targetItem.unit || 'day'}</div>
            </div>

            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '0.4rem' }}>
                {type === 'contact' ? 'Your Inquiry Message:' : 'Reason for Reporting:'}
              </label>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={
                  type === 'contact'
                    ? "Hi, I am interested in buying this surplus material. Is pickup available this weekend?"
                    : "Describe suspicious condition, inaccurate price, or fraudulent listing..."
                }
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '8px',
                  border: '1px solid #CBD5E1',
                  fontSize: '0.875rem',
                  outline: 'none'
                }}
              />
            </div>

            <div className="flex justify-between items-center">
              <button type="button" onClick={onClose} className="btn btn-outline">
                Cancel
              </button>
              <button
                type="submit"
                className={`btn ${type === 'contact' ? 'btn-primary' : 'btn-dark'}`}
              >
                <Send size={16} /> {type === 'contact' ? 'Send Message' : 'Submit Report'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
