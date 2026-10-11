import React from 'react';
import { useApp } from '../context/AppContext';
import {
  BarChart3,
  TrendingUp,
  AlertTriangle,
  DollarSign,
  PieChart,
  Layers,
  ArrowUpRight,
  ShieldAlert
} from 'lucide-react';

export const FinancialProjectionPage = () => {
  const { financialData } = useApp();
  const { assumptions, revenueStreams, operatingExpenses, operatingProfit, academicDisclaimer } = financialData;

  return (
    <div style={{ padding: '3rem 0' }}>
      <div className="container">
        {/* Academic EDVC Mandatory Disclaimer Banner (Section 16) */}
        <div className="card" style={{ padding: '1.25rem 1.5rem', backgroundColor: '#FFFBEB', border: '2px solid #FCD34D', marginBottom: '2rem' }}>
          <div className="flex items-center gap-3">
            <ShieldAlert size={28} color="#D97706" />
            <div>
              <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#B45309', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                ACADEMIC PROJECT DISCLAIMER
              </div>
              <p style={{ fontSize: '1rem', fontWeight: 700, color: '#78350F' }}>
                "{academicDisclaimer}"
              </p>
            </div>
          </div>
        </div>

        {/* Page Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <span className="badge badge-amber" style={{ marginBottom: '0.4rem' }}>EDVC FINANCIAL ANALYSIS</span>
          <h1 style={{ fontSize: '2.4rem', color: '#0F172A', marginBottom: '0.4rem' }}>
            Sample Business Financial Projections
          </h1>
          <p style={{ color: '#64748B', fontSize: '1rem' }}>
            Unit economics, monthly revenue run-rate, operating expenditure, and profit model for EDVC venture evaluation.
          </p>
        </div>

        {/* Top 3 Summary Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6" style={{ marginBottom: '2.5rem' }}>
          <div className="card" style={{ padding: '1.75rem', backgroundColor: '#FFFFFF' }}>
            <span style={{ fontSize: '0.875rem', color: '#64748B', display: 'block' }}>Est. Monthly Revenue</span>
            <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#0F172A', fontFamily: 'var(--font-heading)' }}>
              ₹11.1 Lakh
            </div>
            <span style={{ fontSize: '0.8rem', color: '#059669', fontWeight: 600 }}>
              Across 5 Revenue Channels
            </span>
          </div>

          <div className="card" style={{ padding: '1.75rem', backgroundColor: '#FFFFFF' }}>
            <span style={{ fontSize: '0.875rem', color: '#64748B', display: 'block' }}>Est. Operating Expenses</span>
            <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#DC2626', fontFamily: 'var(--font-heading)' }}>
              ₹6.5 Lakh
            </div>
            <span style={{ fontSize: '0.8rem', color: '#64748B' }}>
              Hosting, Logistics & Marketing
            </span>
          </div>

          <div className="card" style={{ padding: '1.75rem', backgroundColor: '#D1FAE5', border: '1px solid #6EE7B7' }}>
            <span style={{ fontSize: '0.875rem', color: '#065F46', display: 'block' }}>Est. Monthly Operating Profit</span>
            <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#047857', fontFamily: 'var(--font-heading)' }}>
              ₹4.6 Lakh
            </div>
            <span style={{ fontSize: '0.8rem', color: '#065F46', fontWeight: 700 }}>
              ~41.5% Operating Margin
            </span>
          </div>
        </div>

        {/* Visual Bar Chart Comparison: Revenue vs Expenses vs Profit */}
        <div className="card" style={{ padding: '2rem', backgroundColor: '#FFFFFF', marginBottom: '2.5rem' }}>
          <h3 style={{ fontSize: '1.3rem', color: '#0F172A', marginBottom: '1.5rem', borderBottom: '1px solid #E2E8F0', paddingBottom: '0.75rem' }}>
            Visual Financial Model (Monthly Run-Rate)
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Bar 1: Total Revenue */}
            <div>
              <div className="flex justify-between" style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.4rem' }}>
                <span>Gross Monthly Revenue:</span>
                <span style={{ color: '#0F172A' }}>₹11,12,400 (~₹11.1 Lakh)</span>
              </div>
              <div style={{ width: '100%', height: '24px', backgroundColor: '#F1F5F9', borderRadius: '12px', overflow: 'hidden' }}>
                <div style={{ width: '100%', height: '100%', backgroundColor: '#D97706', borderRadius: '12px', transition: 'width 0.5s ease' }} />
              </div>
            </div>

            {/* Bar 2: Operating Expenses */}
            <div>
              <div className="flex justify-between" style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.4rem' }}>
                <span>Operating Expenses (OPEX):</span>
                <span style={{ color: '#DC2626' }}>₹6,50,000 (~₹6.5 Lakh)</span>
              </div>
              <div style={{ width: '100%', height: '24px', backgroundColor: '#F1F5F9', borderRadius: '12px', overflow: 'hidden' }}>
                <div style={{ width: '58.4%', height: '100%', backgroundColor: '#EF4444', borderRadius: '12px', transition: 'width 0.5s ease' }} />
              </div>
            </div>

            {/* Bar 3: Operating Profit */}
            <div>
              <div className="flex justify-between" style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.4rem' }}>
                <span>Estimated Monthly Profit:</span>
                <span style={{ color: '#059669' }}>₹4,62,400 (~₹4.6 Lakh)</span>
              </div>
              <div style={{ width: '100%', height: '24px', backgroundColor: '#F1F5F9', borderRadius: '12px', overflow: 'hidden' }}>
                <div style={{ width: '41.6%', height: '100%', backgroundColor: '#10B981', borderRadius: '12px', transition: 'width 0.5s ease' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Financial Assumptions & Revenue Breakdown Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Key Operational Assumptions */}
          <div className="card" style={{ padding: '1.75rem', backgroundColor: '#FFFFFF' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#0F172A' }}>
              Base Operational Assumptions
            </h3>

            <div className="table-container">
              <table>
                <tbody>
                  <tr>
                    <td>Monthly Completed Orders</td>
                    <td><strong>400 orders / month</strong></td>
                  </tr>
                  <tr>
                    <td>Average Order Value (AOV)</td>
                    <td><strong>₹25,000</strong></td>
                  </tr>
                  <tr>
                    <td>Total Monthly Transaction Volume (GMV)</td>
                    <td><strong style={{ color: '#D97706' }}>₹1 Crore (₹1,00,00,000)</strong></td>
                  </tr>
                  <tr>
                    <td>Material Commission Rate</td>
                    <td><strong>8.0%</strong></td>
                  </tr>
                  <tr>
                    <td>Equipment Rental Commission Rate</td>
                    <td><strong>10.0%</strong></td>
                  </tr>
                  <tr>
                    <td>Active Premium Subscriptions</td>
                    <td><strong>100 sellers @ ₹999/mo</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Revenue Breakdown by Stream */}
          <div className="card" style={{ padding: '1.75rem', backgroundColor: '#FFFFFF' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#0F172A' }}>
              Revenue Stream Breakdown
            </h3>

            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Revenue Stream</th>
                    <th>Monthly Contribution</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1. Material Commission (8%)</td>
                    <td><strong>₹8,00,000</strong></td>
                  </tr>
                  <tr>
                    <td>2. Delivery Platform Margin</td>
                    <td><strong>₹25,000</strong></td>
                  </tr>
                  <tr>
                    <td>3. Equipment Rental Commission</td>
                    <td><strong>₹37,500</strong></td>
                  </tr>
                  <tr>
                    <td>4. Premium Seller Memberships</td>
                    <td><strong>₹99,900</strong></td>
                  </tr>
                  <tr>
                    <td>5. Brand Advertisements</td>
                    <td><strong>₹1,50,000</strong></td>
                  </tr>
                  <tr style={{ backgroundColor: '#FEF3C7', fontWeight: 800 }}>
                    <td>Total Monthly Revenue</td>
                    <td style={{ color: '#B45309', fontSize: '1rem' }}>≈ ₹11,12,400 (~₹11.1 Lakh)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
