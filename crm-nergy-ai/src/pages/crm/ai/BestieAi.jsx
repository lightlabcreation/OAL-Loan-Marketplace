import React, { useState, useRef, useEffect } from 'react';
import {
  Sparkles,
  Send,
  Mic,
  Paperclip,
  Bot,
  User,
  Copy,
  Check,
  RotateCw,
  TrendingUp,
  Boxes,
  Users,
  Search,
  Zap,
  ChevronRight,
  ThumbsUp,
  ThumbsDown,
  Database,
  ShieldCheck,
  CornerDownLeft
} from 'lucide-react';
import { Breadcrumb, Badge } from '../../../components/ui';
import { useToast } from '../../../context/ToastContext';
import { generateBestieChat } from '../../../services/geminiService';

// Helper for parsing inline bold, italics, bullets, and linebreaks
const renderFormattedText = (content) => {
  if (!content) return null;
  const lines = content.split('\n');
  return lines.map((line, idx) => {
    const trimmed = line.trim();
    const isBullet = trimmed.startsWith('•') || trimmed.startsWith('-');
    const cleanLine = isBullet ? trimmed.replace(/^[•-]\s*/, '') : line;

    // Parse **bold** and *italic*
    const parts = cleanLine.split(/(\*\*.*?\*\*|\*.*?\*)/g);
    const parsedLine = parts.map((part, pIdx) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={pIdx} style={{ fontWeight: 700, color: 'var(--text-primary)' }}>
            {part.slice(2, -2)}
          </strong>
        );
      }
      if (part.startsWith('*') && part.endsWith('*')) {
        return (
          <em key={pIdx} style={{ fontStyle: 'italic' }}>
            {part.slice(1, -1)}
          </em>
        );
      }
      return part;
    });

    if (isBullet) {
      return (
        <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginTop: '0.3rem', marginBottom: '0.3rem' }}>
          <span style={{ color: '#0284c7', fontWeight: 800, lineHeight: 1.5, fontSize: '14px' }}>•</span>
          <span style={{ flex: 1, lineHeight: 1.6 }}>{parsedLine}</span>
        </div>
      );
    }

    if (!trimmed) {
      return <div key={idx} style={{ height: '0.4rem' }} />;
    }

    return (
      <p key={idx} style={{ margin: '0 0 0.35rem 0', lineHeight: 1.65 }}>
        {parsedLine}
      </p>
    );
  });
};

export const BestieAi = () => {
  const { addToast } = useToast();
  const messagesEndRef = useRef(null);
  const [inputPrompt, setInputPrompt] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [copiedId, setCopiedId] = useState(null);

  const [conversation, setConversation] = useState([
    {
      id: 'msg-1',
      sender: 'bestie',
      time: '10:00 AM',
      text: "Hello Alexander! I'm **Bestie**, your CRM nErgy AI Operating Assistant. I'm connected to your enterprise vault with **1,420 customer records, active ERP supply lines, and real-time sales pipelines**. What would you like to build, analyze, or automate today?",
      actions: [
        { label: 'Analyze Q3 Sales Velocity', query: 'Analyze current sales pipeline velocity and identify high-risk deals closing this month.' },
        { label: 'Draft Client Executive Summary', query: 'Draft an executive briefing for our upcoming negotiation with Apex Global Technologies.' },
        { label: 'Check ERP Inventory Shortages', query: 'Scan ERP warehouse inventory for parts below minimum threshold reorder point.' },
      ],
      sources: ['CRM Vault #TENANT-08492', 'ERP Supply Chain DB', 'Sales Pipeline Kanban'],
    },
  ]);

  const quickActionPrompts = [
    { label: 'Executive Priorities', icon: Bot, query: 'What are the top 3 priorities for our executive leadership team today?' },
    { label: 'Analyze Deals', icon: TrendingUp, query: 'Run AI Win-Probability scoring on all open opportunities in Negotiation stage.' },
    { label: 'Automate Tasks', icon: Zap, query: 'Set up an automated SLA follow-up trigger for enterprise customer inquiries.' },
    { label: 'ERP Audit', icon: Boxes, query: 'Summarize our current Accounts Receivable aging balances over 30 days.' },
    { label: 'HR Screening', icon: Users, query: 'Review active applicants for Senior Supply Chain Manager and rank top 3 candidates.' },
    { label: 'Knowledge Base', icon: Search, query: 'Search internal technical documentation for API gateway telemetry configuration.' },
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [conversation, isTyping]);

  const handleSend = async (textToSend) => {
    const promptText = typeof textToSend === 'string' ? textToSend : inputPrompt;
    if (!promptText || !promptText.trim()) return;

    const userMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      text: promptText,
    };

    setConversation((prev) => [...prev, userMessage]);
    setInputPrompt('');
    setIsTyping(true);

    try {
      const aiResult = await generateBestieChat(conversation, promptText);

      let actionTags = [
        { label: 'Save to Executive Brief', query: 'Bookmark analysis' },
        { label: 'Create Workflow Rule', query: 'Create automated rule for this query' },
      ];

      if (promptText.toLowerCase().includes('sale') || promptText.toLowerCase().includes('deal')) {
        actionTags = [
          { label: 'View Pipeline Kanban', query: 'Open sales pipeline kanban board' },
          { label: 'Generate Contract Addendum', query: 'Create addendum draft' }
        ];
      } else if (promptText.toLowerCase().includes('erp') || promptText.toLowerCase().includes('inventory')) {
        actionTags = [
          { label: 'Approve Purchase Request', query: 'Approve PR-2026' },
          { label: 'Export Ledger Summary', query: 'Export GL statements to PDF' }
        ];
      }

      const bestieReply = {
        id: `bestie-${Date.now()}`,
        sender: 'bestie',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        text: aiResult.text,
        actions: actionTags,
        sources: ['Google Gemini Neural Cloud', 'CRM nErgy Knowledge Mesh', 'Internal Telemetry'],
      };

      setConversation((prev) => [...prev, bestieReply]);
      setIsTyping(false);
    } catch (err) {
      setIsTyping(false);
      addToast({
        title: 'Bestie Offline',
        message: 'Could not connect to Gemini API. Showing local telemetry.',
        type: 'error',
      });
    }
  };

  const handleCopy = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    addToast({ title: 'Copied to Clipboard', message: 'Bestie AI response copied.', type: 'info' });
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100vh - var(--topbar-height) - 3rem)',
        maxHeight: 'calc(100vh - var(--topbar-height) - 3rem)',
        gap: '0.875rem',
        width: '100%',
        maxWidth: '1280px',
        margin: '0 auto',
        boxSizing: 'border-box',
      }}
    >
      {/* Top Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem', flexShrink: 0 }}>
        <div>
          <Breadcrumb items={[{ label: 'CRM nErgy AI' }, { label: 'AI SuperHouse' }, { label: 'Bestie AI Copilot' }]} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginTop: '0.25rem', flexWrap: 'wrap' }}>
            <h1 style={{ fontSize: '1.4rem', fontWeight: 800, margin: 0, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              Bestie AI Assistant
            </h1>
            <Badge variant="primary" style={{ backgroundColor: '#0284c7', color: '#ffffff', fontWeight: 700, fontSize: '11px', letterSpacing: '0.04em' }}>
              Autonomous Copilot
            </Badge>
          </div>
          <p style={{ fontSize: '12px', color: 'var(--text-secondary)', margin: '0.15rem 0 0 0' }}>
            Your conversational enterprise business operating assistant with direct access to CRM, ERP, and Knowledge Mesh.
          </p>
        </div>

        {/* Status indicator */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.4rem 0.875rem',
            borderRadius: '9999px',
            border: '1px solid rgba(2, 132, 199, 0.25)',
            backgroundColor: 'rgba(56, 189, 248, 0.08)',
            fontSize: '12px',
            fontWeight: 600,
            color: '#0284c7',
          }}
        >
          <span style={{ width: '8px', height: '8px', borderRadius: '9999px', backgroundColor: '#10b981', display: 'inline-block' }} />
          <span>Connected to Enterprise Vault</span>
          <span style={{ color: 'var(--text-tertiary)', opacity: 0.6 }}>|</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700 }}>v3.4-Ultra</span>
        </div>
      </div>

      {/* Quick Action Suggestion Pills */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          overflowX: 'auto',
          paddingBottom: '0.25rem',
          flexShrink: 0,
        }}
      >
        {quickActionPrompts.map((q, idx) => {
          const Icon = q.icon;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => handleSend(q.query)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.45rem 0.85rem',
                borderRadius: '10px',
                fontSize: '12px',
                fontWeight: 600,
                whiteSpace: 'nowrap',
                cursor: 'pointer',
                border: '1px solid var(--border)',
                backgroundColor: 'var(--surface)',
                color: 'var(--text-primary)',
                transition: 'all 150ms ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#0284c7';
                e.currentTarget.style.backgroundColor = 'rgba(56, 189, 248, 0.08)';
                e.currentTarget.style.color = '#0284c7';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.backgroundColor = 'var(--surface)';
                e.currentTarget.style.color = 'var(--text-primary)';
              }}
            >
              <Icon size={14} style={{ color: '#0284c7' }} />
              <span>{q.label}</span>
            </button>
          );
        })}
      </div>

      {/* Main Chat Workspace Card */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          borderRadius: '16px',
          border: '1px solid var(--border)',
          backgroundColor: 'var(--surface)',
          boxShadow: 'var(--shadow-sm)',
          minHeight: 0,
        }}
      >
        {/* Chat Feed */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
          }}
        >
          {conversation.map((msg) => (
            <div
              key={msg.id}
              style={{
                display: 'flex',
                gap: '0.875rem',
                justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                width: '100%',
              }}
            >
              {/* Bestie Avatar */}
              {msg.sender === 'bestie' && (
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
                    color: '#ffffff',
                    boxShadow: '0 4px 12px rgba(2, 132, 199, 0.3)',
                  }}
                >
                  <Sparkles size={18} />
                </div>
              )}

              {/* Message Bubble */}
              <div
                style={{
                  maxWidth: '740px',
                  borderRadius: '16px',
                  padding: '1.1rem 1.25rem',
                  fontSize: '13px',
                  lineHeight: 1.6,
                  border: msg.sender === 'user' ? 'none' : '1px solid var(--border)',
                  backgroundColor: msg.sender === 'user' ? '#0284c7' : 'var(--surface-secondary)',
                  color: msg.sender === 'user' ? '#ffffff' : 'var(--text-primary)',
                  boxShadow: msg.sender === 'user' ? '0 4px 14px rgba(2, 132, 199, 0.25)' : 'none',
                  borderTopLeftRadius: msg.sender === 'bestie' ? '4px' : '16px',
                  borderTopRightRadius: msg.sender === 'user' ? '4px' : '16px',
                }}
              >
                {/* Header row */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    marginBottom: '0.5rem',
                    paddingBottom: '0.35rem',
                    borderBottom: msg.sender === 'user' ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid var(--border)',
                    fontSize: '11px',
                    opacity: msg.sender === 'user' ? 0.9 : 0.75,
                  }}
                >
                  <span style={{ fontWeight: 700, color: msg.sender === 'bestie' ? '#0284c7' : '#ffffff' }}>
                    {msg.sender === 'bestie' ? 'Bestie AI Copilot' : 'Alexander Wright (Owner)'}
                  </span>
                  <span>{msg.time}</span>
                </div>

                {/* Body Text */}
                <div style={{ color: msg.sender === 'user' ? '#ffffff' : 'var(--text-primary)' }}>
                  {msg.sender === 'bestie' ? renderFormattedText(msg.text) : msg.text}
                </div>

                {/* Sources Citation */}
                {msg.sources && msg.sources.length > 0 && (
                  <div
                    style={{
                      marginTop: '0.75rem',
                      paddingTop: '0.625rem',
                      borderTop: '1px solid var(--border)',
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontSize: '11px',
                    }}
                  >
                    <span style={{ fontWeight: 700, color: 'var(--text-tertiary)' }}>Verified Sources:</span>
                    {msg.sources.map((s, i) => (
                      <span
                        key={i}
                        style={{
                          padding: '0.2rem 0.5rem',
                          borderRadius: '6px',
                          backgroundColor: 'var(--surface)',
                          border: '1px solid var(--border)',
                          fontFamily: 'var(--font-mono)',
                          fontSize: '10px',
                          color: '#0284c7',
                          fontWeight: 600,
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                )}

                {/* Interactive Action Chips */}
                {msg.actions && msg.actions.length > 0 && (
                  <div
                    style={{
                      marginTop: '0.75rem',
                      paddingTop: '0.625rem',
                      borderTop: '1px solid var(--border)',
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.5rem',
                    }}
                  >
                    {msg.actions.map((act, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => handleSend(act.query)}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          padding: '0.4rem 0.75rem',
                          borderRadius: '8px',
                          fontSize: '11px',
                          fontWeight: 700,
                          cursor: 'pointer',
                          backgroundColor: 'rgba(2, 132, 199, 0.1)',
                          border: '1px solid rgba(2, 132, 199, 0.25)',
                          color: '#0284c7',
                          transition: 'all 150ms ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#0284c7';
                          e.currentTarget.style.color = '#ffffff';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'rgba(2, 132, 199, 0.1)';
                          e.currentTarget.style.color = '#0284c7';
                        }}
                      >
                        <span>{act.label}</span>
                        <ChevronRight size={13} />
                      </button>
                    ))}
                  </div>
                )}

                {/* Message Footer Controls for Bestie */}
                {msg.sender === 'bestie' && (
                  <div
                    style={{
                      marginTop: '0.75rem',
                      paddingTop: '0.5rem',
                      borderTop: '1px solid var(--border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      fontSize: '11px',
                      color: 'var(--text-tertiary)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                      <button
                        type="button"
                        onClick={() => handleCopy(msg.id, msg.text)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.3rem',
                          color: copiedId === msg.id ? '#10b981' : 'var(--text-secondary)',
                          cursor: 'pointer',
                          fontWeight: 600,
                        }}
                      >
                        {copiedId === msg.id ? <Check size={13} style={{ color: '#10b981' }} /> : <Copy size={13} />}
                        <span>{copiedId === msg.id ? 'Copied!' : 'Copy'}</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => handleSend(`Regenerate response for: "${msg.text.slice(0, 30)}..."`)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.3rem',
                          color: 'var(--text-secondary)',
                          cursor: 'pointer',
                          fontWeight: 600,
                        }}
                      >
                        <RotateCw size={13} />
                        <span>Regenerate</span>
                      </button>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <button
                        type="button"
                        onClick={() => addToast({ title: 'Feedback Recorded', message: 'Marked as helpful.', type: 'success' })}
                        style={{ padding: '3px 6px', borderRadius: '6px', color: 'var(--text-tertiary)', cursor: 'pointer' }}
                        title="Helpful"
                      >
                        <ThumbsUp size={13} />
                      </button>
                      <button
                        type="button"
                        onClick={() => addToast({ title: 'Feedback Recorded', message: 'We will improve this response model.', type: 'info' })}
                        style={{ padding: '3px 6px', borderRadius: '6px', color: 'var(--text-tertiary)', cursor: 'pointer' }}
                        title="Not Helpful"
                      >
                        <ThumbsDown size={13} />
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* User Avatar */}
              {msg.sender === 'user' && (
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    backgroundColor: '#0f172a',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    fontSize: '12px',
                    flexShrink: 0,
                  }}
                >
                  AW
                </div>
              )}
            </div>
          ))}

          {/* Typing Animation */}
          {isTyping && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Sparkles size={18} />
              </div>
              <div
                style={{
                  padding: '0.75rem 1rem',
                  borderRadius: '14px',
                  borderTopLeftRadius: '4px',
                  backgroundColor: 'var(--surface-secondary)',
                  border: '1px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '12px',
                  color: 'var(--text-secondary)',
                }}
              >
                <span>Bestie is synthesizing enterprise records...</span>
                <span style={{ display: 'inline-flex', gap: '3px' }}>
                  <span style={{ width: '5px', height: '5px', borderRadius: '9999px', backgroundColor: '#0284c7', display: 'inline-block' }} />
                  <span style={{ width: '5px', height: '5px', borderRadius: '9999px', backgroundColor: '#38bdf8', display: 'inline-block' }} />
                  <span style={{ width: '5px', height: '5px', borderRadius: '9999px', backgroundColor: '#93c5fd', display: 'inline-block' }} />
                </span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar (Permanently Docked at Bottom) */}
        <div
          style={{
            padding: '0.875rem 1.25rem',
            borderTop: '1px solid var(--border)',
            backgroundColor: 'var(--surface)',
            flexShrink: 0,
          }}
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.4rem 0.6rem',
              borderRadius: '14px',
              border: '1.5px solid var(--border)',
              backgroundColor: 'var(--surface-secondary)',
              transition: 'border-color 150ms ease',
            }}
          >
            {/* Attachment Button */}
            <button
              type="button"
              onClick={() => addToast({ title: 'Attachment Vault', message: 'Attach PDF, CSV or Excel files for Bestie to analyze.', type: 'info' })}
              style={{
                padding: '0.45rem',
                borderRadius: '8px',
                color: 'var(--text-tertiary)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              title="Attach document or dataset"
            >
              <Paperclip size={18} />
            </button>

            {/* Input Box */}
            <input
              type="text"
              value={inputPrompt}
              onChange={(e) => setInputPrompt(e.target.value)}
              placeholder="Ask Bestie anything about sales, ERP orders, candidates, or automations..."
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                border: 'none',
                outline: 'none',
                fontSize: '13px',
                color: 'var(--text-primary)',
                padding: '0.25rem 0.5rem',
                fontWeight: 500,
                width: '100%',
              }}
            />

            {/* Voice Input */}
            <button
              type="button"
              onClick={() => addToast({ title: 'Voice Input Activated', message: 'Speak your prompt clearly...', type: 'info' })}
              style={{
                padding: '0.45rem',
                borderRadius: '8px',
                color: 'var(--text-tertiary)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              title="Voice input"
            >
              <Mic size={18} />
            </button>

            {/* Send Button */}
            <button
              type="submit"
              disabled={!inputPrompt.trim() || isTyping}
              style={{
                padding: '0.5rem 1rem',
                borderRadius: '10px',
                backgroundColor: !inputPrompt.trim() || isTyping ? 'var(--border)' : '#0284c7',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '12px',
                cursor: !inputPrompt.trim() || isTyping ? 'not-allowed' : 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                boxShadow: !inputPrompt.trim() || isTyping ? 'none' : '0 2px 8px rgba(2, 132, 199, 0.3)',
                transition: 'all 150ms ease',
              }}
            >
              <span>Send</span>
              <CornerDownLeft size={14} />
            </button>
          </form>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: '11px',
              color: 'var(--text-tertiary)',
              marginTop: '0.5rem',
              padding: '0 0.25rem',
              flexWrap: 'wrap',
              gap: '0.5rem',
            }}
          >
            <span>Powered by CRM nErgy AI Neural RAG Engine</span>
            <span>Press Enter ↵ to send • Confidential SOC-2 Guardrails Active</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestieAi;
