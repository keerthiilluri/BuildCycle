import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Bot,
  MapPin,
  Search,
  Sparkles,
  Send,
  X,
  CheckCircle2,
  Star,
  ShoppingBag,
  ArrowRight,
  Sliders
} from 'lucide-react';

export const AiAssistantWidget = () => {
  const { materials, findNearbySellers, navigateTo, addToCart } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('radar'); // radar | chat

  // Nearby Seller Radar Controls
  const [selectedCity, setSelectedCity] = useState('Vijayawada');
  const [maxDistance, setMaxDistance] = useState(30);
  const [selectedCategory, setSelectedCategory] = useState('All');

  // AI Chat Controls
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      text: "Hello! I'm BuildCycle AI. I can track nearby surplus sellers in your city, estimate material needs, and find affordable rental tools. How can I help you today?",
      recommendations: []
    }
  ]);
  const [inputQuery, setInputQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const categories = ['All', 'Tiles', 'Bricks', 'PVC Pipes', 'Steel Rods', 'Paint', 'Wood', 'Doors', 'Windows', 'Sanitary fittings', 'Electrical materials'];
  const cities = ['Vijayawada', 'Guntur', 'Hyderabad', 'Visakhapatnam', 'Warangal'];

  // Calculate radar results
  const radarResults = findNearbySellers(selectedCity, maxDistance, selectedCategory);

  const handleSendChat = (queryText) => {
    const q = queryText || inputQuery;
    if (!q.trim()) return;

    // Add user message
    const userMsg = { id: Date.now(), sender: 'user', text: q };
    setMessages((prev) => [...prev, userMsg]);
    if (!queryText) setInputQuery('');
    setIsTyping(true);

    // Process AI intelligence query
    setTimeout(() => {
      let responseText = "";
      let matchedItems = [];

      const queryLower = q.toLowerCase();

      if (queryLower.includes('tile') || queryLower.includes('flooring')) {
        matchedItems = materials.filter((m) => m.category === 'Tiles' && m.status === 'approved');
        responseText = `I found ${matchedItems.length} nearby verified seller(s) with surplus tiles! Here are the best available deals near you:`;
      } else if (queryLower.includes('brick')) {
        matchedItems = materials.filter((m) => m.category === 'Bricks' && m.status === 'approved');
        responseText = `Found ${matchedItems.length} red clay brick surplus seller(s). For a standard wall section, here are the closest suppliers:`;
      } else if (queryLower.includes('steel') || queryLower.includes('tmt') || queryLower.includes('rod')) {
        matchedItems = materials.filter((m) => m.category === 'Steel Rods' && m.status === 'approved');
        responseText = `Located ${matchedItems.length} TMT steel rod listing(s) from top construction suppliers:`;
      } else if (queryLower.includes('pipe') || queryLower.includes('pvc')) {
        matchedItems = materials.filter((m) => m.category === 'PVC Pipes' && m.status === 'approved');
        responseText = `Found ${matchedItems.length} seller(s) offering unused Supreme PVC drainage & plumbing pipes:`;
      } else if (queryLower.includes('vijayawada') || queryLower.includes('guntur') || queryLower.includes('hyderabad')) {
        const cityMatch = queryLower.includes('vijayawada') ? 'Vijayawada' : queryLower.includes('guntur') ? 'Guntur' : 'Hyderabad';
        matchedItems = materials.filter((m) => m.location === cityMatch && m.status === 'approved');
        responseText = `Tracking verified surplus material sellers located directly in ${cityMatch}:`;
      } else {
        matchedItems = materials.filter((m) => m.status === 'approved').slice(0, 3);
        responseText = `Here are top-rated nearby surplus sellers matching your query in your region:`;
      }

      const aiMsg = {
        id: Date.now() + 1,
        sender: 'ai',
        text: responseText,
        recommendations: matchedItems
      };

      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <>
      {/* Floating Bot Launch Button */}
      <button
        onClick={() => setIsOpen(true)}
        style={{
          position: 'fixed',
          bottom: '1.5rem',
          right: '1.5rem',
          zIndex: 900,
          backgroundColor: '#0F172A',
          color: '#FFFFFF',
          padding: '0.8rem 1.25rem',
          borderRadius: '9999px',
          boxShadow: '0 10px 25px -5px rgba(15, 23, 42, 0.4), 0 0 15px rgba(217, 119, 6, 0.4)',
          border: '2px solid #D97706',
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
          cursor: 'pointer',
          transition: 'transform 0.2s ease, boxShadow 0.2s ease'
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
        onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        <div style={{ position: 'relative' }}>
          <Bot size={24} color="#F59E0B" />
          <span style={{ position: 'absolute', top: '-2px', right: '-2px', width: '8px', height: '8px', backgroundColor: '#10B981', borderRadius: '50%' }} />
        </div>
        <div style={{ textAlign: 'left' }}>
          <div style={{ fontWeight: 800, fontSize: '0.85rem', lineHeight: 1.1 }}>BuildCycle AI</div>
          <div style={{ fontSize: '0.68rem', color: '#CBD5E1' }}>Track Nearby Sellers 📍</div>
        </div>
      </button>

      {/* AI Assistant Modal Panel */}
      {isOpen && (
        <div className="modal-overlay" onClick={() => setIsOpen(false)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: '680px', width: '100%', height: '85vh', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}
          >
            {/* Header */}
            <div style={{ backgroundColor: '#0F172A', color: 'white', padding: '1rem 1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div className="flex items-center gap-2.5">
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', backgroundColor: '#D97706', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Sparkles size={20} color="white" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'white', margin: 0 }}>
                    BuildCycle AI Assistant
                  </h3>
                  <span style={{ fontSize: '0.72rem', color: '#10B981', fontWeight: 600 }}>
                    🟢 Nearby Seller Radar & Material Advisor
                  </span>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} style={{ color: '#94A3B8' }}>
                <X size={20} />
              </button>
            </div>

            {/* Tab Selector */}
            <div className="flex" style={{ backgroundColor: '#1E293B', borderBottom: '1px solid #334155' }}>
              <button
                onClick={() => setActiveTab('radar')}
                style={{
                  flex: 1,
                  padding: '0.75rem',
                  fontSize: '0.875rem',
                  fontWeight: 700,
                  color: activeTab === 'radar' ? '#F59E0B' : '#94A3B8',
                  borderBottom: activeTab === 'radar' ? '3px solid #D97706' : '3px solid transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.4rem'
                }}
              >
                <MapPin size={16} /> 📍 Nearby Seller Radar
              </button>
              <button
                onClick={() => setActiveTab('chat')}
                style={{
                  flex: 1,
                  padding: '0.75rem',
                  fontSize: '0.875rem',
                  fontWeight: 700,
                  color: activeTab === 'chat' ? '#F59E0B' : '#94A3B8',
                  borderBottom: activeTab === 'chat' ? '3px solid #D97706' : '3px solid transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.4rem'
                }}
              >
                <Bot size={16} /> 💬 AI Advisor Chat
              </button>
            </div>

            {/* Tab Content 1: Radar Nearby Seller Tracker */}
            {activeTab === 'radar' && (
              <div style={{ flex: 1, padding: '1.25rem', overflowY: 'auto', backgroundColor: '#F8FAFC' }}>
                {/* Radar Filters Bar */}
                <div className="card" style={{ padding: '1rem', marginBottom: '1.25rem', backgroundColor: '#FFFFFF' }}>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                    <div>
                      <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#475569', marginBottom: '0.3rem' }}>
                        Your City Location:
                      </label>
                      <select
                        value={selectedCity}
                        onChange={(e) => setSelectedCity(e.target.value)}
                        style={{ width: '100%', padding: '0.5rem', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '0.85rem', fontWeight: 600 }}
                      >
                        {cities.map((city) => (
                          <option key={city} value={city}>{city}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#475569', marginBottom: '0.3rem' }}>
                        Max Distance Radius: <strong>{maxDistance} km</strong>
                      </label>
                      <input
                        type="range"
                        min="5"
                        max="80"
                        value={maxDistance}
                        onChange={(e) => setMaxDistance(Number(e.target.value))}
                        style={{ width: '100%', accentColor: '#D97706', cursor: 'pointer' }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#475569', marginBottom: '0.3rem' }}>
                        Material Category:
                      </label>
                      <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        style={{ width: '100%', padding: '0.5rem', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '0.85rem', fontWeight: 600 }}
                      >
                        {categories.map((cat) => (
                          <option key={cat} value={cat}>{cat}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Radar Results Summary */}
                <div style={{ fontSize: '0.85rem', color: '#64748B', fontWeight: 600, marginBottom: '0.75rem' }}>
                  ⚡ AI Radar tracked <strong>{radarResults.length} nearby verified seller listing(s)</strong> within {maxDistance}km of {selectedCity}:
                </div>

                {/* Seller Cards List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {radarResults.length === 0 ? (
                    <div className="card" style={{ padding: '2rem', textAlign: 'center', backgroundColor: '#FFFFFF' }}>
                      <p style={{ color: '#64748B' }}>No surplus sellers found within {maxDistance}km of {selectedCity}. Try increasing distance radius.</p>
                    </div>
                  ) : (
                    radarResults.map((item) => (
                      <div key={item.id} className="card" style={{ padding: '1rem', backgroundColor: '#FFFFFF' }}>
                        <div className="flex justify-between items-start" style={{ flexWrap: 'wrap', gap: '0.75rem' }}>
                          <div className="flex gap-3">
                            <img src={item.image} alt={item.name} style={{ width: '60px', height: '60px', borderRadius: '8px', objectFit: 'cover' }} />
                            <div>
                              <div className="flex items-center gap-1.5">
                                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0F172A' }}>{item.name}</h4>
                                <span className="badge badge-emerald" style={{ fontSize: '0.65rem' }}>{item.condition}</span>
                              </div>
                              <div style={{ fontSize: '0.8rem', color: '#475569', marginTop: '0.2rem' }}>
                                Seller: <strong>{item.sellerName}</strong> {item.isVerified && <CheckCircle2 size={13} color="#059669" style={{ inlineSize: 'auto' }} />}
                              </div>
                              <div className="flex items-center gap-3" style={{ fontSize: '0.75rem', color: '#64748B', marginTop: '0.25rem' }}>
                                <span style={{ color: '#D97706', fontWeight: 700 }}>📍 {item.location} ({item.distanceKm || 12} km away)</span>
                                <span>Stock: <strong>{item.quantity} {item.unit}</strong></span>
                              </div>
                            </div>
                          </div>

                          <div style={{ textAlign: 'right' }}>
                            <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A', fontFamily: 'var(--font-heading)' }}>
                              ₹{item.price} <span style={{ fontSize: '0.7rem', color: '#64748B' }}>/{item.unit.replace(/s$/, '')}</span>
                            </div>
                            <div className="flex gap-2" style={{ marginTop: '0.4rem' }}>
                              <button
                                onClick={() => {
                                  setIsOpen(false);
                                  navigateTo('detail', item);
                                }}
                                className="btn btn-primary btn-sm"
                                style={{ fontSize: '0.75rem' }}
                              >
                                View Item
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}

            {/* Tab Content 2: AI Advisor Chatbot */}
            {activeTab === 'chat' && (
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', backgroundColor: '#F8FAFC' }}>
                {/* Chat Log Scrollable */}
                <div style={{ flex: 1, padding: '1rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {/* Quick Prompts Bar */}
                  <div style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 700, marginBottom: '0.2rem' }}>
                    💡 Suggested AI Prompts:
                  </div>
                  <div className="flex gap-2" style={{ flexWrap: 'wrap' }}>
                    {[
                      "Find nearby sellers with surplus tiles in Vijayawada",
                      "Estimate bricks needed for 500 sq ft wall",
                      "Who has cheap PVC pipes near Hyderabad?",
                      "Where can I rent a concrete mixer machine?"
                    ].map((p, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSendChat(p)}
                        style={{
                          padding: '0.35rem 0.65rem',
                          borderRadius: '9999px',
                          fontSize: '0.72rem',
                          fontWeight: 600,
                          backgroundColor: '#FFFFFF',
                          border: '1px solid #CBD5E1',
                          color: '#334155',
                          cursor: 'pointer'
                        }}
                      >
                        ⚡ {p}
                      </button>
                    ))}
                  </div>

                  {/* Messages Bubble List */}
                  {messages.map((m) => (
                    <div
                      key={m.id}
                      style={{
                        alignSelf: m.sender === 'user' ? 'flex-end' : 'flex-start',
                        maxWidth: '85%',
                        backgroundColor: m.sender === 'user' ? '#0F172A' : '#FFFFFF',
                        color: m.sender === 'user' ? '#FFFFFF' : '#0F172A',
                        padding: '0.85rem 1.1rem',
                        borderRadius: m.sender === 'user' ? '14px 14px 2px 14px' : '14px 14px 14px 2px',
                        border: m.sender === 'user' ? 'none' : '1px solid #E2E8F0',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                        fontSize: '0.875rem'
                      }}
                    >
                      <p style={{ margin: 0, lineHeight: 1.5 }}>{m.text}</p>

                      {/* Render recommended product cards inline if returned */}
                      {m.recommendations && m.recommendations.length > 0 && (
                        <div style={{ marginTop: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                          {m.recommendations.map((rec) => (
                            <div key={rec.id} style={{ backgroundColor: '#F8FAFC', padding: '0.6rem', borderRadius: '6px', border: '1px solid #CBD5E1', display: 'flex', alignItems: 'center', justifyBetween: 'space-between', gap: '0.5rem' }}>
                              <div style={{ fontSize: '0.8rem' }}>
                                <strong style={{ color: '#0F172A' }}>{rec.name}</strong>
                                <div style={{ fontSize: '0.72rem', color: '#64748B' }}>📍 {rec.location} • ₹{rec.price} / {rec.unit}</div>
                              </div>
                              <button
                                onClick={() => {
                                  setIsOpen(false);
                                  navigateTo('detail', rec);
                                }}
                                className="btn btn-primary btn-sm"
                                style={{ fontSize: '0.7rem', padding: '0.2rem 0.5rem', inlineSize: 'auto' }}
                              >
                                View
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}

                  {isTyping && (
                    <div style={{ fontSize: '0.8rem', color: '#D97706', fontStyle: 'italic', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Sparkles size={14} /> BuildCycle AI is analyzing sellers...
                    </div>
                  )}
                </div>

                {/* Input Bar */}
                <div style={{ padding: '0.85rem', backgroundColor: '#FFFFFF', borderTop: '1px solid #E2E8F0' }}>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSendChat();
                    }}
                    className="flex gap-2"
                  >
                    <input
                      type="text"
                      placeholder="Ask AI to find nearby sellers or estimate materials..."
                      value={inputQuery}
                      onChange={(e) => setInputQuery(e.target.value)}
                      style={{ flex: 1, padding: '0.6rem 0.85rem', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.875rem', outline: 'none' }}
                    />
                    <button type="submit" className="btn btn-primary">
                      <Send size={16} /> Send
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
