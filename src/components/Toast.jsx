import React from 'react';
import { useApp } from '../context/AppContext';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export const ToastContainer = () => {
  const { toasts } = useApp();

  if (toasts.length === 0) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '1.5rem',
        right: '1.5rem',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
        maxWidth: '400px',
        width: '100%'
      }}
    >
      {toasts.map((toast) => (
        <div
          key={toast.id}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '1rem 1.25rem',
            borderRadius: '10px',
            background: toast.type === 'warning' ? '#FEF3C7' : toast.type === 'info' ? '#DBEAFE' : '#D1FAE5',
            color: toast.type === 'warning' ? '#92400E' : toast.type === 'info' ? '#1E40AF' : '#065F46',
            border: `1px solid ${toast.type === 'warning' ? '#FCD34D' : toast.type === 'info' ? '#93C5FD' : '#6EE7B7'}`,
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            fontWeight: 600,
            fontSize: '0.9rem',
            animation: 'slideUp 0.3s ease-out'
          }}
        >
          {toast.type === 'warning' ? (
            <AlertCircle size={20} />
          ) : toast.type === 'info' ? (
            <Info size={20} />
          ) : (
            <CheckCircle2 size={20} />
          )}
          <span style={{ flex: 1 }}>{toast.message}</span>
        </div>
      ))}
    </div>
  );
};
