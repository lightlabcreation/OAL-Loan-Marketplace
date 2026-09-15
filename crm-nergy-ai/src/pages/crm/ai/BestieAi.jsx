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
  Share2,
  Bookmark,
  TrendingUp,
  FileText,
  Boxes,
  Users,
  Search,
  Wand2,
  Zap,
  Clock,
  ShieldCheck,
  ChevronRight,
  ThumbsUp,
  ThumbsDown,
  Volume2
} from 'lucide-react';
import { Breadcrumb, Button, Card, CardHeader, CardBody, Badge } from '../../../components/ui';
import { useToast } from '../../../context/ToastContext';

export const BestieAi = () => {
  const { addToast } = useToast();
  const messagesEndRef = useRef(null);
  const [inputPrompt, setInputPrompt] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [copiedId, setCopiedId] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

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
    { label: 'Ask Bestie', icon: Bot, query: 'What are the top 3 priorities for our executive leadership team today?' },
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

  const handleSend = (textToSend) => {
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

    // Simulate sophisticated AI enterprise response
    setTimeout(() => {
      let responseText = '';
      let actionTags = [];
      let sources = ['CRM nErgy Knowledge Mesh', 'Internal Telemetry'];

      if (promptText.toLowerCase().includes('sales') || promptText.toLowerCase().includes('deal') || promptText.toLowerCase().includes('velocity')) {
        responseText = `**Executive Sales Analysis Report**\n\n• **Active Pipeline Value:** $3.45M across 14 enterprise opportunities.\n• **Win Probability Forecast:** 68.4% (+4.2% over Q2 baseline).\n• **High-Priority Attention:** *Apex Global SaaS ($450,000)* is currently in contract review with legal approval expected within 48 hours.\n• **Recommended Next Step:** Schedule executive sponsor alignment call before Friday.`;
        actionTags = [{ label: 'View Pipeline Kanban', query: 'Open sales pipeline kanban board' }, { label: 'Generate Contract Addendum', query: 'Create addendum draft for Apex' }];
        sources.push('Sales Pipeline DB', 'Revenue Predictor Engine');
      } else if (promptText.toLowerCase().includes('erp') || promptText.toLowerCase().includes('inventory') || promptText.toLowerCase().includes('receivable')) {
        responseText = `**ERP Operations & Financial Overview**\n\n• **Accounts Receivable Balance:** $480,000 (94% current within 30-day terms).\n• **Critical Reorder Alerts:** 2 components in Austin Warehouse Central are at 18% reserve.\n• **Automated Purchase Request:** PR-2026-89 has been pre-drafted for vendor approval.`;
        actionTags = [{ label: 'Approve Purchase Request', query: 'Approve PR-2026-89' }, { label: 'Export Ledger Summary', query: 'Export GL statements to PDF' }];
        sources.push('ERP Finance Ledger', 'Warehouse Telemetry');
      } else if (promptText.toLowerCase().includes('hr') || promptText.toLowerCase().includes('applicant') || promptText.toLowerCase().includes('candidate')) {
        responseText = `**Talent Acquisition AI Match Summary**\n\n• **Open Requisition:** Senior Supply Chain Manager (Req #HR-402)\n• **Top Match:** *Sarah Lin* (94% AI Skill Affinity, 8 years enterprise logistics experience, former Fortune 500 lead).\n• **Interview Status:** Available for Panel Interview this Thursday at 2:00 PM EST.`;
        actionTags = [{ label: 'Schedule Interview', query: 'Send interview invitation to Sarah Lin' }, { label: 'View Candidate Dossier', query: 'Open candidate profile' }];
        sources.push('HR ATS Repository', 'Resume Parsing Vault');
      } else {
        responseText = `I have analyzed your request regarding: "${promptText}".\n\n**Key Findings & Recommendations:**\n1. Enterprise records have been cross-checked across CRM, ERP, and Knowledge Base nodes.\n2. No compliance breaches or authentication anomalies detected.\n3. Continuous automation monitor is actively listening for event triggers.`;
        actionTags = [{ label: 'Create Workflow Rule', query: 'Create automated rule for this query' }, { label: 'Save to Executive Brief', query: 'Bookmark analysis' }];
      }

      const bestieReply = {
        id: `bestie-${Date.now()}`,
        sender: 'bestie',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        text: responseText,
        actions: actionTags,
        sources,
      };

      setConversation((prev) => [...prev, bestieReply]);
      setIsTyping(false);
    }, 1100);
  };

  const handleCopy = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    addToast({ title: 'Copied to Clipboard', message: 'Bestie AI response copied.', type: 'info' });
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="flex flex-col gap-5 h-full max-w-7xl mx-auto" style={{ minHeight: 'calc(100vh - 120px)' }}>
      {/* Top Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
        <div>
          <Breadcrumb items={[{ label: 'CRM nErgy AI' }, { label: 'AI SuperHouse' }, { label: 'Bestie AI Copilot' }]} />
          <div className="flex items-center gap-2 mt-1">
            <h1 className="text-2xl font-bold font-display tracking-tight text-primary flex items-center gap-2">
              Bestie AI Assistant
            </h1>
            <Badge variant="primary" className="bg-sky-500 text-white font-bold text-xs uppercase tracking-wider">
              Autonomous Copilot
            </Badge>
          </div>
          <p className="text-xs text-secondary mt-0.5">
            Your conversational enterprise business operating assistant with direct access to CRM, ERP, and Knowledge Mesh.
          </p>
        </div>

        {/* Status indicator */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-sky-200 dark:border-sky-900 bg-sky-50 dark:bg-sky-950/40 text-xs font-semibold text-sky-600 dark:text-sky-400">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Connected to Enterprise Vault</span>
          <span className="text-tertiary">|</span>
          <span className="font-mono text-xs">v3.4-Ultra</span>
        </div>
      </div>

      {/* Quick Action Suggestion Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1.5 scrollbar-thin">
        {quickActionPrompts.map((q, idx) => {
          const Icon = q.icon;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => handleSend(q.query)}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer border"
              style={{
                backgroundColor: 'var(--surface)',
                borderColor: 'var(--border)',
                color: 'var(--text-primary)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#0284c7';
                e.currentTarget.style.backgroundColor = 'rgba(56, 189, 248, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.backgroundColor = 'var(--surface)';
              }}
            >
              <Icon size={14} style={{ color: '#0ea5e9' }} />
              <span>{q.label}</span>
            </button>
          );
        })}
      </div>

      {/* Main Chat Workspace Card */}
      <Card className="flex-1 flex flex-col overflow-hidden border shadow-sm" style={{ minHeight: '520px' }}>
        {/* Chat Feed */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
          {conversation.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-3.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {/* Bestie Avatar */}
              {msg.sender === 'bestie' && (
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
                    color: '#ffffff',
                    boxShadow: '0 4px 12px rgba(6, 182, 212, 0.3)',
                  }}
                >
                  <Sparkles size={18} />
                </div>
              )}

              {/* Message Bubble */}
              <div
                className={`max-w-2xl rounded-2xl p-4 text-sm leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-blue-600 text-white rounded-tr-none shadow-sm'
                    : 'border border-border/80 bg-surface-secondary text-primary rounded-tl-none'
                }`}
              >
                {/* Header row */}
                <div className="flex items-center justify-between gap-4 mb-2 pb-1.5 border-b border-border/40 text-xs opacity-75">
                  <span className="font-bold">
                    {msg.sender === 'bestie' ? 'Bestie AI Copilot' : 'Alexander Wright (Owner)'}
                  </span>
                  <span>{msg.time}</span>
                </div>

                {/* Body Text */}
                <div className="whitespace-pre-line space-y-1.5 font-normal">
                  {msg.text}
                </div>

                {/* Sources Citation */}
                {msg.sources && msg.sources.length > 0 && (
                  <div className="mt-3 pt-2.5 border-t border-border/50 flex flex-wrap items-center gap-1.5 text-xs text-secondary">
                    <span className="font-semibold text-tertiary">Verified Sources:</span>
                    {msg.sources.map((s, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded bg-surface border border-border text-[11px] font-mono text-sky-600 dark:text-sky-400"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                )}

                {/* Interactive Action Chips */}
                {msg.actions && msg.actions.length > 0 && (
                  <div className="mt-3.5 pt-2.5 border-t border-border/60 flex flex-wrap gap-2">
                    {msg.actions.map((act, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => handleSend(act.query)}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer"
                        style={{
                          backgroundColor: '#0284c7',
                          color: '#ffffff',
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
                  <div className="mt-3 flex items-center justify-between text-xs text-tertiary pt-2 border-t border-border/40">
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => handleCopy(msg.id, msg.text)}
                        className="hover:text-primary transition-colors flex items-center gap-1 cursor-pointer"
                        title="Copy response"
                      >
                        {copiedId === msg.id ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                        <span>{copiedId === msg.id ? 'Copied' : 'Copy'}</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => handleSend(`Regenerate response for: "${msg.text.slice(0, 30)}..."`)}
                        className="hover:text-primary transition-colors flex items-center gap-1 cursor-pointer"
                        title="Regenerate response"
                      >
                        <RotateCw size={14} />
                        <span>Regenerate</span>
                      </button>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => addToast({ title: 'Feedback Recorded', message: 'Thank you for your rating!', type: 'success' })}
                        className="p-1 hover:text-emerald-500 cursor-pointer"
                      >
                        <ThumbsUp size={13} />
                      </button>
                      <button
                        type="button"
                        onClick={() => addToast({ title: 'Feedback Recorded', message: 'We will refine the answer model.', type: 'info' })}
                        className="p-1 hover:text-rose-500 cursor-pointer"
                      >
                        <ThumbsDown size={13} />
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* User Avatar */}
              {msg.sender === 'user' && (
                <div className="w-9 h-9 rounded-xl bg-slate-800 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                  AW
                </div>
              )}
            </div>
          ))}

          {/* Typing Animation */}
          {isTyping && (
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 text-white flex items-center justify-center">
                <Sparkles size={18} className="animate-spin" />
              </div>
              <div className="px-4 py-3 rounded-2xl rounded-tl-none bg-surface-secondary border border-border flex items-center gap-1.5 text-xs text-secondary">
                <span>Bestie is synthesizing enterprise records</span>
                <span className="flex gap-1 ml-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-bounce delay-100" />
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-bounce delay-200" />
                </span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <div className="p-3.5 md:p-4 border-t border-border bg-surface">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2 p-1.5 rounded-2xl border border-border focus-within:border-sky-500 focus-within:ring-2 focus-within:ring-sky-500/20 bg-surface-secondary transition-all"
          >
            {/* Attachment Button */}
            <button
              type="button"
              onClick={() => addToast({ title: 'Attachment Vault', message: 'Attach PDF, CSV or Excel files for Bestie to analyze.', type: 'info' })}
              className="p-2 rounded-xl text-tertiary hover:text-primary hover:bg-surface cursor-pointer transition-colors"
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
              className="flex-1 bg-transparent border-none outline-none text-sm text-primary px-2 font-medium placeholder:text-tertiary"
            />

            {/* Voice Input Mock */}
            <button
              type="button"
              onClick={() => addToast({ title: 'Voice Microphone Activated', message: 'Speak your prompt clearly...', type: 'info' })}
              className="p-2 rounded-xl text-tertiary hover:text-primary hover:bg-surface cursor-pointer transition-colors"
              title="Voice input"
            >
              <Mic size={18} />
            </button>

            {/* Submit Send Button */}
            <Button
              type="submit"
              variant="primary"
              size="sm"
              disabled={!inputPrompt.trim() || isTyping}
              icon={Send}
              className="rounded-xl px-4 font-bold"
            >
              Send
            </Button>
          </form>

          <div className="flex items-center justify-between text-[11px] text-tertiary mt-2 px-1">
            <span>Powered by CRM nErgy AI Neural RAG Engine</span>
            <span>Press Enter ↵ to send • Confidential SOC-2 Guardrails Active</span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default BestieAi;
