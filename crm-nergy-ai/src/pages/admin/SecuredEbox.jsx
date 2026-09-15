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
  Sparkles
} from 'lucide-react';
import { Breadcrumb, Button, Card, CardHeader, CardBody, Badge } from '../../components/ui';
import { useToast } from '../../context/ToastContext';

export const SecuredEbox = () => {
  const { addToast } = useToast();
  const [inputText, setInputText] = useState('');

  const [messages, setMessages] = useState([
    {
      id: 'ebx-1',
      sender: 'Kiaan Tech Team',
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
      title: 'Message Encrypted & Sent',
      message: 'Direct dispatch to Kiaan Tech Team secure portal.',
      type: 'success',
    });
  };

  return (
    <div className="flex flex-col gap-6 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <Breadcrumb items={[{ label: 'CRM nErgy AI' }, { label: 'Administration' }, { label: 'Secured eBox' }]} />
          <div className="flex items-center gap-3 mt-1">
            <h1 className="text-2xl font-bold font-display tracking-tight text-primary flex items-center gap-2">
              Secured Communications eBox
            </h1>
            <Badge variant="error" className="bg-rose-500 text-white font-mono uppercase text-xs">
              SEA ↔ KTT Encrypted Channel
            </Badge>
          </div>
          <p className="text-xs text-secondary mt-0.5">
            Private, end-to-end encrypted channel between Super Executive Admin (Johnny) and Kiaan Tech Team.
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

      {/* Security Status Banner */}
      <div className="p-4 rounded-2xl bg-slate-900 text-white border border-slate-800 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center">
            <Lock size={18} />
          </div>
          <div>
            <span className="text-xs font-bold text-white block">256-Bit Quantum TLS Tunnel Active</span>
            <span className="text-[11px] text-slate-400">Zero third-party logging • Restricted to Johnny & KTT Core Engineers</span>
          </div>
        </div>
        <Badge variant="success" className="font-mono text-xs">CHANNEL VERIFIED</Badge>
      </div>

      {/* Messages Feed Card */}
      <Card className="border shadow-sm flex flex-col h-[520px]">
        <CardHeader title="Encrypted Thread" subtitle="Direct confidential messages and architectural notes" />
        <CardBody className="flex-1 overflow-y-auto p-5 space-y-4">
          {messages.map((m) => (
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
                <p>{m.text}</p>
                {m.attachment && (
                  <div className="mt-2 pt-2 border-t border-white/20 flex items-center gap-2 text-[11px] font-semibold">
                    <FileText size={14} />
                    <span>{m.attachment}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </CardBody>

        {/* Input Bar */}
        <div className="p-4 border-t border-border bg-surface">
          <form onSubmit={handleSend} className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => addToast({ title: 'Attach Document', message: 'Select confidential architecture PDF.', type: 'info' })}
              className="p-2.5 rounded-xl border border-border text-secondary hover:text-primary hover:bg-surface-secondary cursor-pointer"
              title="Attach architecture note or patent PDF"
            >
              <Paperclip size={16} />
            </button>
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Send encrypted instruction to Kiaan Tech Team..."
              className="flex-1 p-2.5 rounded-xl border border-border bg-surface-secondary text-xs text-primary font-medium focus:outline-none focus:border-sky-500"
            />
            <Button type="submit" variant="primary" size="sm" icon={Send} disabled={!inputText.trim()}>
              Send
            </Button>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default SecuredEbox;
