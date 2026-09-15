import React, { useState } from 'react';
import {
  ShieldCheck,
  Lock,
  Send,
  Paperclip,
  CheckCircle2,
  FileText,
  Clock,
  ExternalLink,
  MessageCircle,
  User,
  Sparkles,
  Search,
  Filter,
} from 'lucide-react';
import { Breadcrumb, Button, Card, CardHeader, CardBody, Badge } from '../../components/ui';
import { useToast } from '../../context/ToastContext';

export const SecuredEbox = () => {
  const { addToast } = useToast();
  const [inputText, setInputText] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeThreadId, setActiveThreadId] = useState('th-1');

  const threads = [
    {
      id: 'th-1',
      title: 'KTT Architecture Team',
      subtitle: 'Johnny ↔ Kiaan Tech Team (KTT)',
      unread: 0,
      badge: 'Active Workspace',
    },
    {
      id: 'th-2',
      title: 'Attorney & Pitch Review',
      subtitle: 'Johnny ↔ Legal Diligence Team',
      unread: 1,
      badge: 'Restricted Access',
    },
    {
      id: 'th-3',
      title: 'Executive Roadmaps',
      subtitle: 'Johnny ↔ Lead Systems Architect',
      unread: 0,
      badge: 'Private',
    },
  ];

  const [messages, setMessages] = useState([
    {
      id: 'ebx-1',
      sender: 'Kiaan Tech Team (KTT)',
      time: 'Sep 09, 12:13 PM',
      isMe: false,
      text: 'Hello Johnny! We have confirmed the 2-week timeline for your Attorney presentation. All core CRM/ERP workflows and the AI Content Studio differentiators vs Salesforce are actively mounted in the showcase.',
      attachment: 'Master_Roadmap_V3.pdf (2.4 MB)',
    },
    {
      id: 'ebx-2',
      sender: 'Johnny (Super Executive Admin)',
      time: 'Sep 10, 09:20 AM',
      isMe: true,
      text: 'Thank you team. Make sure the energy effect in the logo is glowing and digital, and the entry screen gives that high-tech AI feel.',
      attachment: null,
    },
    {
      id: 'ebx-3',
      sender: 'Kiaan Tech Team (KTT)',
      time: 'Sep 11, 04:45 PM',
      isMe: false,
      text: 'Understood. The AI energy logo now features concentric digital energy arcs with live plasma pulsations in the center blue area, and the login page has been elevated into a futuristic dark AI gateway.',
      attachment: null,
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const newMsg = {
      id: `ebx-${Date.now()}`,
      sender: 'Johnny (Super Executive Admin)',
      time: 'Just now',
      isMe: true,
      text: inputText,
      attachment: null,
    };

    setMessages((prev) => [...prev, newMsg]);
    setInputText('');
    addToast({
      title: 'Private Message Dispatched',
      message: 'Delivered to Kiaan Tech Team workspace.',
      type: 'success',
    });
  };

  const filteredMessages = messages.filter(
    (m) =>
      m.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.sender.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <Breadcrumb items={[{ label: 'CRM nErgy AI' }, { label: 'Administration' }, { label: 'Secured eBox' }]} />
          <div className="flex items-center gap-3 mt-1 flex-wrap">
            <h1 className="text-2xl font-bold font-display tracking-tight text-primary flex items-center gap-2">
              Secured Communications eBox
            </h1>
            <Badge variant="primary" className="font-mono uppercase text-xs">
              Restricted Access • Private Channel
            </Badge>
          </div>
          <p className="text-xs text-secondary mt-0.5">
            Private, restricted-access communication workspace between Super Executive Admin (Johnny) and Kiaan Tech Team (KTT).
          </p>
        </div>

        <Button
          variant="outline"
          size="sm"
          icon={MessageCircle}
          onClick={() => window.open('https://api.whatsapp.com', '_blank')}
          className="text-emerald-600 border-emerald-500/40 hover:bg-emerald-50"
        >
          Open WhatsApp Direct Channel
        </Button>
      </div>

      {/* Security Status Banner with Neutral Enterprise Wording */}
      <div className="p-4 rounded-xl bg-surface-secondary border border-border flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-sky-500/10 text-sky-600 border border-sky-500/20 flex items-center justify-center flex-shrink-0">
            <Lock size={18} />
          </div>
          <div>
            <span className="text-xs font-bold text-primary block">Private Communication Workspace Active</span>
            <span className="text-[11px] text-secondary">Tenant-restricted channel • Authorized participants: Johnny & KTT Core Engineers</span>
          </div>
        </div>
        <Badge variant="success" className="font-mono text-xs">RESTRICTED ACCESS</Badge>
      </div>

      {/* 2-Column Workspace Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
        {/* Left Column: Conversation List & Filter (4 Cols) */}
        <div className="md:col-span-4 flex flex-col gap-3">
          <Card className="border shadow-sm p-4 flex flex-col gap-3" style={{ height: '540px' }}>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-primary uppercase tracking-wide">Conversations</span>
              <Badge variant="default" className="text-[10px]">{threads.length} Channels</Badge>
            </div>

            {/* Search Bar */}
            <div className="relative flex items-center">
              <Search size={14} className="absolute left-3 text-tertiary pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search messages..."
                className="w-full pl-8 pr-3 py-1.5 rounded-lg border border-border bg-surface-secondary text-xs text-primary focus:outline-none focus:border-sky-500"
              />
            </div>

            {/* Threads List */}
            <div className="flex flex-col gap-2 overflow-y-auto flex-1 mt-1">
              {threads.map((th) => {
                const isActive = activeThreadId === th.id;
                return (
                  <div
                    key={th.id}
                    onClick={() => setActiveThreadId(th.id)}
                    className={`p-3 rounded-lg border cursor-pointer transition-all flex flex-col gap-1 ${
                      isActive
                        ? 'border-sky-500 bg-sky-50 dark:bg-sky-950/30'
                        : 'border-border hover:bg-surface-secondary'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-bold ${isActive ? 'text-sky-700 dark:text-sky-400' : 'text-primary'}`}>
                        {th.title}
                      </span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-surface border border-subtle text-tertiary">
                        {th.badge}
                      </span>
                    </div>
                    <span className="text-[11px] text-secondary truncate">
                      {th.subtitle}
                    </span>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>

        {/* Right Column: Active Thread Messages & Composer (8 Cols) */}
        <div className="md:col-span-8 flex flex-col">
          <Card className="border shadow-sm flex flex-col" style={{ height: '540px' }}>
            <CardHeader
              title="Johnny (SEA) ↔ Kiaan Tech Team (KTT)"
              subtitle="Confidential instructions, sprint priorities, and architectural feedback"
            />
            <CardBody className="flex-1 overflow-y-auto p-5 space-y-4">
              {filteredMessages.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center p-6 text-tertiary">
                  <Search size={24} className="mb-2 opacity-50" />
                  <span className="text-xs font-semibold">No messages matching "{searchQuery}"</span>
                </div>
              ) : (
                filteredMessages.map((m) => (
                  <div key={m.id} className={`flex flex-col ${m.isMe ? 'items-end' : 'items-start'}`}>
                    <div className="flex items-center gap-2 mb-1 text-[11px] text-tertiary">
                      <span className="font-bold text-primary">{m.sender}</span>
                      <span>•</span>
                      <span>{m.time}</span>
                    </div>
                    <div
                      className={`max-w-lg p-3.5 rounded-2xl text-xs leading-relaxed ${
                        m.isMe
                          ? 'bg-blue-600 text-white rounded-tr-none'
                          : 'bg-surface-secondary border border-border text-primary rounded-tl-none'
                      }`}
                    >
                      <p className="margin-0">{m.text}</p>
                      {m.attachment && (
                        <div className="mt-2 pt-2 border-t border-white/20 flex items-center gap-2 text-[11px] font-semibold cursor-pointer">
                          <FileText size={14} />
                          <span>{m.attachment}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))
              )}
            </CardBody>

            {/* Input Bar */}
            <div className="p-4 border-t border-border bg-surface">
              <form onSubmit={handleSend} className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => addToast({ title: 'Attach Document', message: 'Confidential file attachment tray ready.', type: 'info' })}
                  className="p-2.5 rounded-xl border border-border text-secondary hover:text-primary hover:bg-surface-secondary cursor-pointer"
                  title="Attach roadmap PDF or design file"
                >
                  <Paperclip size={16} />
                </button>
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Send private instruction to Kiaan Tech Team..."
                  className="flex-1 p-2.5 rounded-xl border border-border bg-surface-secondary text-xs text-primary font-medium focus:outline-none focus:border-sky-500"
                />
                <Button type="submit" variant="primary" size="sm" icon={Send} disabled={!inputText.trim()}>
                  Send
                </Button>
              </form>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SecuredEbox;
