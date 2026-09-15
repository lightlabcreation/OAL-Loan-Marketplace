import React, { useState, useRef } from 'react';
import {
  Sparkles,
  Video,
  Image as ImageIcon,
  Music,
  Mic,
  Box,
  Workflow,
  FolderGit2,
  UploadCloud,
  Play,
  Download,
  Save,
  Loader2,
  Wand2,
  CheckCircle2,
  Zap,
  Cpu,
  Clock,
  Layers,
  X,
  Film,
  MessageSquare,
  Volume2,
  Radio,
  Share2,
  Palette,
  Camera,
  ExternalLink
} from 'lucide-react';
import {
  Breadcrumb,
  Button,
  Card,
  CardHeader,
  CardBody,
  Input,
  Select,
  Badge,
  ProgressBar,
  KPICard
} from '../../components/ui';
import { useToast } from '../../context/ToastContext';
import { useNavigate } from 'react-router-dom';

export const CrmAiStudio = () => {
  const { addToast } = useToast();
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  // The Client-Specified 15 Sub-Studios
  const subStudios = [
    { id: 'bestie', name: 'Bestie — My AI Agent', category: 'Copilot', icon: Sparkles, desc: 'Your 24/7 business operating partner and conversational workflow controller.', badge: 'Live AI Core' },
    { id: 'muzik', name: 'AAI Muzik Hit Studio', category: 'Audio & Music', icon: Music, desc: 'Generate original commercial background tracks, jingles, and brand soundtracks in any genre.', badge: 'Dolby Atmos' },
    { id: 'realtalk', name: 'AAI Real Talk', category: 'Voice & Speech', icon: Radio, desc: 'Ultra-realistic human conversational dialogues and podcast speech generation with natural emotion.', badge: 'Neural Voice' },
    { id: 'audio-writer', name: 'AI Audio Writer', category: 'Audio & Music', icon: Mic, desc: 'Voiceover scriptwriting, voice modulation, and sonic identity branding synthesizer.', badge: 'Script Sync' },
    { id: 'contalk', name: 'AI ConTalk', category: 'Voice & Speech', icon: MessageSquare, desc: 'Continuous conversational agents for sales desking, client FAQs, and customer outreach.', badge: 'Interactive' },
    { id: 'film-maker', name: 'AI Film Maker', category: 'Video Production', icon: Film, desc: 'Full multi-scene cinematic movie and commercial generation from simple script outlines.', badge: 'Cinema 4K' },
    { id: 'image-talkr', name: 'AI Image TalkR', category: 'Avatar & 3D', icon: ImageIcon, desc: 'Animate any still portrait or executive headshot into a speaking, synchronized video presenter.', badge: 'LipSync v3' },
    { id: 'logo-gen', name: 'AI Logo Generator', category: 'Branding', icon: Palette, desc: 'Create vector logos, app icons, and corporate identities with energy aura effects.', badge: 'Vector SVGs' },
    { id: 'photo-life', name: 'AI Photo Life', category: 'Image Studio', icon: Camera, desc: 'Transform ordinary lot & product photography into studio-grade showroom visual assets.', badge: '100+ Backdrops' },
    { id: 'video-crew', name: 'AI Video Crew', category: 'Video Production', icon: Video, desc: 'Automated multi-camera angle switching, virtual director, and post-production rendering.', badge: 'Virtual Crew' },
    { id: 'visual-workflow', name: 'AI Visual Workflow', category: 'Automations', icon: Workflow, desc: 'Visual node-based pipeline connecting AI prompts directly to CRM and ERP triggers.', badge: 'No-Code Nodes' },
    { id: 'voicex-change', name: 'AI VoiceX Change', category: 'Voice & Speech', icon: Volume2, desc: 'Instant multi-language accent translation and corporate voice cloning in 40+ languages.', badge: '40+ Languages' },
    { id: 'big-movies', name: 'AAI BIG Movies Lab', category: 'Video Production', icon: Box, desc: 'Long-form narrative generation, documentary storytelling, and high-impact investor pitches.', badge: 'IMAX Render' },
    { id: 'train-speak', name: 'Train AI to Speak', category: 'Model Training', icon: Cpu, desc: 'Train fine-tuned custom voice models on executive speech samples with zero robotic artifacts.', badge: 'Custom LLM' },
    { id: 'video-agent', name: 'AI Video Agent', category: 'Video Production', icon: Video, desc: 'Say it, See it, Shape it, Ship it. Rapid video pipeline for social channels and ads.', badge: '4-Step Pipeline' },
  ];

  const [activeStudio, setActiveStudio] = useState('bestie');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [prompt, setPrompt] = useState('Produce a sleek 4K product trailer for our CRM nErgy AI platform highlighting enterprise logistics and real-time desking.');
  const [aspectRatio, setAspectRatio] = useState('16:9');
  const [modelPreset, setModelPreset] = useState('UltraCinema v4.2');
  const [referenceFile, setReferenceFile] = useState(null);

  // Generation state
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationProgress, setGenerationProgress] = useState(0);
  const [generatedAsset, setGeneratedAsset] = useState(null);
  const [savedLibrary, setSavedLibrary] = useState([
    { id: '1', title: 'Corporate Logistics Fleet Rendering', type: 'Image', studio: 'AI Photo Life', date: '2 hours ago', url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&auto=format&fit=crop&q=80' },
    { id: '2', title: 'Executive Spokesperson Commercial Pitch', type: 'Video', studio: 'AI Image TalkR', date: '1 day ago', url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80' },
    { id: '3', title: 'Enterprise Brand Anthem Score', type: 'Audio', studio: 'AAI Muzik Hit Studio', date: '2 days ago', url: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&auto=format&fit=crop&q=80' },
  ]);

  const categories = ['All', 'Video Production', 'Voice & Speech', 'Audio & Music', 'Image Studio', 'Avatar & 3D', 'Branding', 'Automations', 'Model Training'];

  const filteredStudios = selectedCategory === 'All'
    ? subStudios
    : subStudios.filter((s) => s.category === selectedCategory);

  const activeStudioObj = subStudios.find((s) => s.id === activeStudio) || subStudios[0];

  const handleGenerate = (e) => {
    e.preventDefault();
    if (!prompt.trim()) {
      addToast({ title: 'Prompt Required', message: 'Please enter a generation prompt.', type: 'error' });
      return;
    }

    setIsGenerating(true);
    setGenerationProgress(15);
    setGeneratedAsset(null);

    const interval = setInterval(() => {
      setGenerationProgress((p) => {
        if (p >= 90) {
          clearInterval(interval);
          return 95;
        }
        return p + 25;
      });
    }, 400);

    setTimeout(() => {
      clearInterval(interval);
      setGenerationProgress(100);
      setIsGenerating(false);

      const mockResult = {
        id: Date.now().toString(),
        title: prompt.slice(0, 36) + '...',
        studio: activeStudioObj.name,
        type: activeStudioObj.category.includes('Video') ? 'Video' : activeStudioObj.category.includes('Audio') || activeStudioObj.category.includes('Voice') ? 'Audio' : 'Image',
        date: 'Just now',
        url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop&q=80',
        prompt,
      };

      setGeneratedAsset(mockResult);
      setSavedLibrary((prev) => [mockResult, ...prev]);
      addToast({
        title: 'Synthesis Complete',
        message: `Asset generated via ${activeStudioObj.name}.`,
        type: 'success',
      });
    }, 1800);
  };

  return (
    <div className="flex flex-col gap-6 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <Breadcrumb items={[{ label: 'CRM nErgy AI' }, { label: 'AI SuperHouse' }, { label: 'AI Content Studio' }]} />
          <div className="flex items-center gap-3 mt-1">
            <h1 className="text-2xl font-bold font-display tracking-tight text-primary flex items-center gap-2">
              AI Content Studio & Production Labs
            </h1>
            <Badge variant="primary" className="bg-sky-500 text-white font-bold text-xs uppercase tracking-wider">
              15 Specialized Studios
            </Badge>
          </div>
          <p className="text-xs text-secondary mt-0.5">
            Enterprise multi-modal content creation engine: cinema generation, talking avatars, neural voice synthesis, and sonic jingles.
          </p>
        </div>

        {/* Action Link to Video Agent & Bestie */}
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            icon={Sparkles}
            onClick={() => navigate('/crm/bestie')}
            className="text-xs font-semibold"
          >
            Open Bestie AI
          </Button>
          <Button
            variant="primary"
            size="sm"
            icon={Video}
            onClick={() => navigate('/crm/ai-video')}
            className="text-xs font-semibold"
          >
            Launch 4-Step Video Agent
          </Button>
        </div>
      </div>

      {/* KPI Highlight Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <KPICard title="Total Studios" value="15 Sub-Studios" change="All Available" changeType="positive" icon={Sparkles} />
        <KPICard title="Audio / Video Renders" value="1,840 Assets" change="+24% this week" changeType="positive" icon={Video} />
        <KPICard title="Average Render Latency" value="1.4 Seconds" change="Real-time GPU" changeType="positive" icon={Zap} />
        <KPICard title="Storage Vault" value="482 GB / 2 TB" change="Encrypted" changeType="positive" icon={FolderGit2} />
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer border ${
              selectedCategory === cat
                ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                : 'bg-surface text-secondary border-border hover:border-sky-400'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* The 15 Sub-Studio Grid */}
      <div>
        <h2 className="text-sm font-bold text-secondary uppercase tracking-wider mb-3">
          Select Production Studio ({filteredStudios.length})
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {filteredStudios.map((studio) => {
            const Icon = studio.icon;
            const isSelected = activeStudio === studio.id;
            return (
              <div
                key={studio.id}
                onClick={() => {
                  setActiveStudio(studio.id);
                  if (studio.id === 'bestie') navigate('/crm/bestie');
                  if (studio.id === 'video-agent') navigate('/crm/ai-video');
                }}
                className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'border-sky-500 bg-sky-50/40 dark:bg-sky-950/30 shadow-md ring-2 ring-sky-400/20'
                    : 'border-border bg-surface hover:border-sky-300 dark:hover:border-sky-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                        isSelected ? 'bg-sky-500 text-white shadow-sm' : 'bg-surface-secondary text-primary'
                      }`}
                    >
                      <Icon size={16} />
                    </div>
                    <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded bg-surface-secondary border border-border text-sky-600 dark:text-sky-400">
                      {studio.badge}
                    </span>
                  </div>
                  <h3 className="font-bold text-xs text-primary line-clamp-1">{studio.name}</h3>
                  <p className="text-[11px] text-tertiary mt-1 line-clamp-2 leading-relaxed">{studio.desc}</p>
                </div>
                <div className="mt-3 pt-2 border-t border-border/60 flex items-center justify-between text-[10px] font-semibold text-sky-600 dark:text-sky-400">
                  <span>{isSelected ? 'Studio Active' : 'Enter Studio'}</span>
                  <span>→</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Studio Workspace Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Generation Workspace (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <Card className="border shadow-sm">
            <CardHeader
              title={`Production Lab: ${activeStudioObj.name}`}
              subtitle={activeStudioObj.desc}
            />
            <CardBody className="p-5 flex flex-col gap-4">
              {/* Studio Banner */}
              <div className="p-3 rounded-xl bg-gradient-to-r from-sky-500/10 via-blue-500/10 to-transparent border border-sky-200 dark:border-sky-900/40 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-semibold text-primary">
                  <Sparkles size={16} className="text-sky-500" />
                  <span>Configured Model: <strong>{modelPreset}</strong></span>
                </div>
                <Badge variant="primary" className="text-[10px] bg-sky-500 text-white font-mono">
                  {activeStudioObj.category}
                </Badge>
              </div>

              {/* Prompt Textarea */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-primary flex items-center justify-between">
                  <span>Creative Prompt / Directives</span>
                  <span className="text-tertiary font-normal text-[11px]">{prompt.length} / 500 chars</span>
                </label>
                <textarea
                  rows={4}
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder={`Describe what you want ${activeStudioObj.name} to generate...`}
                  className="w-full p-3 rounded-xl border border-border bg-surface text-sm text-primary placeholder:text-tertiary focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 resize-none font-medium"
                />
              </div>

              {/* Generation Controls */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-primary mb-1 block">Aspect Ratio / Format</label>
                  <Select
                    value={aspectRatio}
                    onChange={(e) => setAspectRatio(e.target.value)}
                    options={[
                      { value: '16:9', label: '16:9 Cinematic Widescreen' },
                      { value: '9:16', label: '9:16 Vertical Story / Reels' },
                      { value: '1:1', label: '1:1 Square Feed Asset' },
                      { value: '4:3', label: '4:3 Classic Broadcast' },
                    ]}
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-primary mb-1 block">Neural Engine Preset</label>
                  <Select
                    value={modelPreset}
                    onChange={(e) => setModelPreset(e.target.value)}
                    options={[
                      { value: 'UltraCinema v4.2', label: 'UltraCinema v4.2 (Highest Fidelity)' },
                      { value: 'HyperReal v3.0', label: 'HyperReal v3.0 (Photorealistic)' },
                      { value: 'Commercial Ad Express', label: 'Commercial Ad Express (Fast Turnaround)' },
                      { value: 'Studio Voice X2', label: 'Studio Voice X2 (Broadcast Quality)' },
                    ]}
                  />
                </div>
              </div>

              {/* Reference Attachment Input */}
              <div className="p-3 rounded-xl border border-dashed border-border flex items-center justify-between gap-3 text-xs bg-surface-secondary">
                <div className="flex items-center gap-2">
                  <UploadCloud size={18} className="text-secondary" />
                  <span className="text-secondary">
                    {referenceFile ? `Reference: ${referenceFile.name}` : 'Upload style reference audio, face photo or script'}
                  </span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => fileInputRef.current?.click()}
                  className="text-xs"
                >
                  Choose File
                </Button>
                <input
                  ref={fileInputRef}
                  type="file"
                  className="hidden"
                  onChange={(e) => {
                    if (e.target.files[0]) {
                      setReferenceFile(e.target.files[0]);
                      addToast({ title: 'Reference Loaded', message: e.target.files[0].name, type: 'info' });
                    }
                  }}
                />
              </div>

              {/* Render Progress Bar */}
              {isGenerating && (
                <div className="flex flex-col gap-1.5 p-3 rounded-xl bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800">
                  <div className="flex items-center justify-between text-xs font-bold text-sky-700 dark:text-sky-300">
                    <span className="flex items-center gap-2">
                      <Loader2 size={14} className="animate-spin" />
                      Rendering Neural Asset via {activeStudioObj.name}...
                    </span>
                    <span>{generationProgress}%</span>
                  </div>
                  <ProgressBar progress={generationProgress} variant="primary" />
                </div>
              )}

              {/* Generate Button */}
              <Button
                variant="primary"
                size="lg"
                disabled={isGenerating}
                icon={Wand2}
                onClick={handleGenerate}
                className="w-full font-bold shadow-md shadow-sky-500/20"
              >
                {isGenerating ? 'Synthesizing Neural Asset...' : `Generate via ${activeStudioObj.name}`}
              </Button>
            </CardBody>
          </Card>
        </div>

        {/* Right Output & Recent Vault Library (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {/* Active Generated Output Preview */}
          <Card className="border shadow-sm">
            <CardHeader title="Studio Canvas Monitor" subtitle="Live synthesis preview viewport" />
            <CardBody className="p-4 flex flex-col items-center justify-center">
              {generatedAsset ? (
                <div className="w-full flex flex-col gap-3">
                  <div className="relative rounded-xl overflow-hidden border border-border group aspect-video bg-black flex items-center justify-center">
                    <img
                      src={generatedAsset.url}
                      alt={generatedAsset.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                      <button
                        type="button"
                        onClick={() => addToast({ title: 'Playing Preview', message: 'Streaming 4K preview.', type: 'info' })}
                        className="p-3 rounded-full bg-white text-slate-900 shadow-lg cursor-pointer hover:scale-110 transition-transform"
                      >
                        <Play size={20} className="fill-current" />
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <div>
                      <span className="font-bold text-primary block">{generatedAsset.title}</span>
                      <span className="text-tertiary text-[11px]">{generatedAsset.studio} • Just now</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Button
                        variant="outline"
                        size="sm"
                        icon={Download}
                        onClick={() => addToast({ title: 'Exporting Asset', message: 'Saved to local system.', type: 'success' })}
                      >
                        Export
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="py-12 flex flex-col items-center text-center gap-2">
                  <div className="w-12 h-12 rounded-2xl bg-surface-secondary border border-border flex items-center justify-center text-tertiary">
                    <Film size={24} />
                  </div>
                  <span className="text-xs font-bold text-secondary">Awaiting Prompt Execution</span>
                  <p className="text-[11px] text-tertiary max-w-xs">
                    Configure directives on the left to render assets in this viewport.
                  </p>
                </div>
              )}
            </CardBody>
          </Card>

          {/* Recent Vault Library */}
          <Card className="border shadow-sm flex-1">
            <CardHeader title="Recent Production Vault" subtitle="Saved multi-studio assets" />
            <CardBody className="p-3 space-y-2">
              {savedLibrary.map((item) => (
                <div
                  key={item.id}
                  className="p-2.5 rounded-xl border border-border bg-surface hover:border-sky-300 transition-all flex items-center gap-3"
                >
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-14 h-10 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-bold text-primary truncate block">{item.title}</span>
                    <span className="text-[10px] text-tertiary">{item.studio} • {item.date}</span>
                  </div>
                  <Badge variant="default" className="text-[10px] uppercase font-mono flex-shrink-0">
                    {item.type}
                  </Badge>
                </div>
              ))}
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CrmAiStudio;
