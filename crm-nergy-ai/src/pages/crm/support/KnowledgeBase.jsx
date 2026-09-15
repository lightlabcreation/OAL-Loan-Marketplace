import React, { useState } from 'react';
import {
  BookOpen,
  Search,
  FileText,
  Folder,
  ChevronRight,
  HelpCircle,
  Sparkles,
  ThumbsUp,
  ThumbsDown,
  Eye,
  Plus,
  ArrowLeft,
  ExternalLink,
  Tag
} from 'lucide-react';
import { Breadcrumb, Button, Card, CardHeader, CardBody, Badge, Input } from '../../../components/ui';
import { useToast } from '../../../context/ToastContext';

export const KnowledgeBase = () => {
  const { addToast } = useToast();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeArticle, setActiveArticle] = useState(null);

  const categories = [
    { id: 'all', label: 'All Articles', count: 18 },
    { id: 'crm', label: 'CRM & Pipeline', count: 5 },
    { id: 'erp', label: 'ERP & Logistics', count: 4 },
    { id: 'ai', label: 'AI SuperHouse & Bestie', count: 6 },
    { id: 'billing', label: 'Billing & Compliance', count: 3 },
  ];

  const articles = [
    {
      id: 'KB-101',
      title: 'How to Connect Your Auto Dealership DMS Feed',
      category: 'CRM & Pipeline',
      readTime: '4 min read',
      views: 1240,
      likes: 98,
      updated: 'Sep 10, 2026',
      summary: 'Step-by-step guide to syncing real-time vehicle inventory into CRM nErgy AI without manual CSV exports.',
      content: `### Automatic DMS Feed Synchronization\n\n1. **Obtain FTP or API Credentials:** Contact your Dealer Management System (DealerTrack, CDK Global, or Reynolds).\n2. **Navigate to Integration Settings:** Go to *Administration > DMS Integrations*.\n3. **Map Inventory Fields:** Ensure VIN, Stock Number, Mileage, and Photos sync every 15 minutes.\n4. **Enable ADP Verification:** Once verified, all listings receive the official {ADP Verified} trust badge.`,
    },
    {
      id: 'KB-102',
      title: 'Configuring Bestie AI Autonomous Event Triggers',
      category: 'AI SuperHouse & Bestie',
      readTime: '6 min read',
      views: 2480,
      likes: 215,
      updated: 'Sep 12, 2026',
      summary: 'Learn how to instruct Bestie to automatically draft follow-up agreements when deals enter the Negotiation stage.',
      content: `### Bestie Autonomous Workflows\n\nBestie AI listens to state transitions across your sales pipeline.\n\n- **Trigger Condition:** Opportunity enters "Contract Review".\n- **AI Action:** Generate standard NDA and service agreement pre-filled with CRM customer data.\n- **Human-in-the-loop:** Prompts executive for 1-click confirmation before client dispatch.`,
    },
    {
      id: 'KB-103',
      title: 'ERP Reorder Points and Automated Purchase Requests',
      category: 'ERP & Logistics',
      readTime: '5 min read',
      views: 940,
      likes: 72,
      updated: 'Aug 28, 2026',
      summary: 'Set automated inventory thresholds across Austin, Dallas, and regional warehouse fulfillment centers.',
      content: `### Inventory Reorder Logic\n\nWhen stock dips below the buffer threshold (typically 20% of monthly average consumption), an automated Purchase Request (PR) is dispatched to procurement managers.`,
    },
    {
      id: 'KB-104',
      title: 'Multi-Location Umbrella Accounts & Licensing',
      category: 'Billing & Compliance',
      readTime: '3 min read',
      views: 780,
      likes: 64,
      updated: 'Sep 05, 2026',
      summary: 'Understanding OMP Executive central office reporting and per-store operational licenses.',
      content: `### Central Office Management\n\nCorporations with multiple locations can register under a single master account. Each physical store operates with its own license, while corporate executives view consolidated real-time profit and sales velocity.`,
    },
  ];

  const filteredArticles = articles.filter((a) => {
    const matchesCategory = selectedCategory === 'All' || a.category.includes(selectedCategory);
    const matchesSearch =
      a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col gap-6 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <Breadcrumb items={[{ label: 'CRM nErgy AI' }, { label: 'Support & Help' }, { label: 'Knowledge Base' }]} />
          <div className="flex items-center gap-3 mt-1">
            <h1 className="text-2xl font-bold font-display tracking-tight text-primary flex items-center gap-2">
              Centralized AI Knowledge Base
            </h1>
            <Badge variant="primary" className="bg-sky-500 text-white font-bold text-xs uppercase tracking-wider">
              AI RAG Powered
            </Badge>
          </div>
          <p className="text-xs text-secondary mt-0.5">
            Verified documentation, operational runbooks, and enterprise FAQs serving all 100+ platform workflows.
          </p>
        </div>

        <Button
          variant="primary"
          icon={Plus}
          onClick={() => addToast({ title: 'New Article Draft', message: 'Article editor opened.', type: 'info' })}
          className="text-xs font-bold"
        >
          Draft New Article
        </Button>
      </div>

      {/* Hero Search Section */}
      <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 text-white shadow-lg flex flex-col items-center text-center gap-4">
        <div className="max-w-2xl space-y-2">
          <Badge variant="default" className="bg-white/10 text-sky-400 border-white/20 text-xs uppercase font-mono">
            Self-Service Hub
          </Badge>
          <h2 className="text-2xl md:text-3xl font-bold font-display">How can we assist you today?</h2>
          <p className="text-xs text-slate-300">
            Search our comprehensive knowledge base or let Bestie AI find immediate answers from verified enterprise docs.
          </p>
        </div>

        <div className="w-full max-w-xl">
          <div className="flex items-center gap-3 p-3 rounded-2xl bg-white text-slate-900 shadow-xl border border-slate-200">
            <Search size={20} className="text-sky-600 flex-shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Ask a question or enter keywords (e.g., DMS sync, Bestie triggers, ERP ledgers)..."
              className="flex-1 border-none outline-none text-sm text-slate-900 font-medium placeholder:text-slate-400"
            />
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Category Navigation (3 cols) */}
        <div className="lg:col-span-3 space-y-2">
          <h3 className="text-xs font-bold text-secondary uppercase tracking-wider px-2 mb-2">Knowledge Clusters</h3>
          {categories.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setSelectedCategory(c.id === 'all' ? 'All' : c.label.split(' ')[0])}
              className={`w-full p-3 rounded-xl border text-left text-xs font-bold transition-all flex items-center justify-between cursor-pointer ${
                (selectedCategory === 'All' && c.id === 'all') || selectedCategory.includes(c.label.split(' ')[0])
                  ? 'border-sky-500 bg-sky-50 dark:bg-sky-950/40 text-sky-600 dark:text-sky-400 shadow-sm'
                  : 'border-border bg-surface text-secondary hover:border-sky-300'
              }`}
            >
              <span>{c.label}</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-surface-secondary text-tertiary">
                {c.count}
              </span>
            </button>
          ))}
        </div>

        {/* Right Articles List (9 cols) */}
        <div className="lg:col-span-9 space-y-4">
          {activeArticle ? (
            /* Article Reader View */
            <Card className="border shadow-sm">
              <CardHeader
                title={activeArticle.title}
                subtitle={`${activeArticle.category} • Updated ${activeArticle.updated}`}
              />
              <CardBody className="p-6 space-y-5">
                <Button variant="outline" size="sm" icon={ArrowLeft} onClick={() => setActiveArticle(null)}>
                  Back to Articles
                </Button>

                <div className="p-4 rounded-xl bg-surface-secondary border border-border text-xs text-primary leading-relaxed font-semibold">
                  {activeArticle.summary}
                </div>

                <div className="text-sm text-primary leading-relaxed whitespace-pre-line space-y-3 font-normal">
                  {activeArticle.content}
                </div>

                <div className="pt-6 border-t border-border flex items-center justify-between text-xs text-tertiary">
                  <span>Was this article helpful?</span>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      icon={ThumbsUp}
                      onClick={() => addToast({ title: 'Feedback Recorded', message: 'Marked as helpful.', type: 'success' })}
                    >
                      Helpful ({activeArticle.likes})
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      icon={ThumbsDown}
                      onClick={() => addToast({ title: 'Feedback Recorded', message: 'We will improve this document.', type: 'info' })}
                    >
                      Not Helpful
                    </Button>
                  </div>
                </div>
              </CardBody>
            </Card>
          ) : (
            /* Articles Grid */
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-bold text-secondary px-1">
                <span>Verified Articles ({filteredArticles.length})</span>
                <span>Sorted by Views</span>
              </div>

              {filteredArticles.map((art) => (
                <div
                  key={art.id}
                  onClick={() => setActiveArticle(art)}
                  className="p-4 rounded-2xl border border-border bg-surface hover:border-sky-400 hover:shadow-md transition-all cursor-pointer flex flex-col md:flex-row items-start md:items-center justify-between gap-4 group"
                >
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold font-mono px-2 py-0.5 rounded bg-surface-secondary text-sky-600 dark:text-sky-400">
                        {art.category}
                      </span>
                      <span className="text-[11px] text-tertiary">{art.readTime}</span>
                    </div>
                    <h3 className="font-bold text-sm text-primary group-hover:text-sky-600 transition-colors">
                      {art.title}
                    </h3>
                    <p className="text-xs text-secondary leading-relaxed line-clamp-2">
                      {art.summary}
                    </p>
                    <div className="flex items-center gap-3 text-[11px] text-tertiary pt-1">
                      <span className="flex items-center gap-1"><Eye size={12} /> {art.views.toLocaleString()} views</span>
                      <span>•</span>
                      <span>Updated {art.updated}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-xs font-bold text-sky-600 group-hover:translate-x-1 transition-transform flex-shrink-0">
                    <span>Read Guide</span>
                    <ChevronRight size={15} />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default KnowledgeBase;
