import React, { useState } from 'react';
import {
  Video,
  Mic,
  Image as ImageIcon,
  FileText,
  Link2,
  Volume2,
  Sparkles,
  Sliders,
  Share2,
  Download,
  Play,
  CheckCircle2,
  Layers,
  Clock,
  Settings,
  ChevronRight,
  Palette,
  Film,
  Globe,
  Radio,
  UserCheck
} from 'lucide-react';
import { Breadcrumb, Button, Card, CardHeader, CardBody, Badge, Select } from '../../../components/ui';
import { useToast } from '../../../context/ToastContext';

export const AiVideoAgent = () => {
  const { addToast } = useToast();

  // 4 Core Pipeline Steps requested by Client
  const steps = [
    { id: 1, label: 'SAY IT', subtitle: 'Input Concept & Script' },
    { id: 2, label: 'SEE IT', subtitle: 'Scene Generation & Storyboard' },
    { id: 3, label: 'SHAPE IT', subtitle: 'Audio, Voice & Branding' },
    { id: 4, label: 'SHIP IT', subtitle: 'Export & Multi-Channel Publish' },
  ];

  const [currentStep, setCurrentStep] = useState(1);
  const [videoMode, setVideoMode] = useState('text-to-video');
  const [scriptText, setScriptText] = useState(
    'Introducing CRM nErgy AI — the all-in-one Enterprise CRM, ERP, and AI SuperHouse designed for high-growth logistics, auto dealerships, and modern corporations.'
  );
  const [voiceModel, setVoiceModel] = useState('Sarah - US Executive Professional');
  const [aspectRatio, setAspectRatio] = useState('16:9');
  const [targetPlatform, setTargetPlatform] = useState('youtube');
  const [isProcessing, setIsProcessing] = useState(false);

  const videoModes = [
    { id: 'text-to-video', label: 'Text → Video', icon: FileText, desc: 'Generate from concept prompt' },
    { id: 'script-to-video', label: 'Script → Video', icon: Film, desc: 'Paste full scene breakdown' },
    { id: 'image-to-video', label: 'Image → Video', icon: ImageIcon, desc: 'Animate products & headshots' },
    { id: 'url-to-video', label: 'URL → Video', icon: Link2, desc: 'Turn web page into promo video' },
    { id: 'audio-to-video', label: 'Audio → Video', icon: Volume2, desc: 'Podcast & voice sync' },
    { id: 'talking-image', label: 'Talking Avatar', icon: UserCheck, desc: 'Photorealistic spokesperson' },
    { id: 'voice-dubbing', label: 'AI Dubbing', icon: Globe, desc: 'Translate voice in 40+ accents' },
  ];

  const scenes = [
    { id: 1, title: 'Scene 1: Futuristic Autonomous Headquarters', duration: '0:05', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop&q=80', status: 'Rendered' },
    { id: 2, title: 'Scene 2: Real-time Sales Pipeline & AI Desking', duration: '0:07', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80', status: 'Rendered' },
    { id: 3, title: 'Scene 3: Integrated ERP & Global Fleet Analytics', duration: '0:06', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&auto=format&fit=crop&q=80', status: 'Ready' },
  ];

  const handleNext = () => {
    if (currentStep < 4) {
      setIsProcessing(true);
      setTimeout(() => {
        setIsProcessing(false);
        setCurrentStep((prev) => prev + 1);
      }, 500);
    }
  };

  const handleShip = () => {
    addToast({
      title: 'Video Asset Shipped!',
      message: 'Published to configured enterprise channels with automated SEO tags.',
      type: 'success',
    });
  };

  return (
    <div className="flex flex-col gap-6 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <Breadcrumb items={[{ label: 'CRM nErgy AI' }, { label: 'AI SuperHouse' }, { label: 'AI Video Agent' }]} />
          <div className="flex items-center gap-3 mt-1">
            <h1 className="text-2xl font-bold font-display tracking-tight text-primary flex items-center gap-2">
              AI Video Agent Pipeline
            </h1>
            <Badge variant="primary" className="bg-sky-500 text-white font-bold text-xs uppercase tracking-wider">
              SAY IT → SEE IT → SHAPE IT → SHIP IT
            </Badge>
          </div>
          <p className="text-xs text-secondary mt-0.5">
            Turn words, ideas, and URLs into broadcast-quality 4K enterprise videos in four structured stages.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-semibold">
          <span className="text-tertiary">Rendering Engine:</span>
          <span className="px-2.5 py-1 rounded-md bg-surface-secondary border border-border font-mono text-primary font-bold">
            Bestie CinemaCore 4.0
          </span>
        </div>
      </div>

      {/* 4-Step Pipeline Stepper Bar */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        {steps.map((step) => {
          const isCurrent = currentStep === step.id;
          const isPassed = currentStep > step.id;
          return (
            <div
              key={step.id}
              onClick={() => setCurrentStep(step.id)}
              className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center gap-3 ${
                isCurrent
                  ? 'border-sky-500 bg-sky-50/50 dark:bg-sky-950/40 shadow-sm ring-2 ring-sky-500/20'
                  : isPassed
                  ? 'border-emerald-500/60 bg-emerald-50/30 dark:bg-emerald-950/20'
                  : 'border-border bg-surface opacity-75'
              }`}
            >
              <div
                className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm flex-shrink-0 ${
                  isPassed
                    ? 'bg-emerald-500 text-white'
                    : isCurrent
                    ? 'bg-sky-500 text-white shadow-md'
                    : 'bg-surface-secondary text-secondary'
                }`}
              >
                {isPassed ? <CheckCircle2 size={18} /> : step.id}
              </div>
              <div className="min-w-0">
                <span className="text-xs font-black tracking-wider block text-primary">{step.label}</span>
                <span className="text-[11px] text-tertiary truncate block">{step.subtitle}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Interactive Stage Body */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Stage Controls (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          {/* STEP 1: SAY IT */}
          {currentStep === 1 && (
            <Card className="border shadow-sm">
              <CardHeader title="Stage 1: SAY IT" subtitle="Define the source input and voice script" />
              <CardBody className="p-5 flex flex-col gap-4">
                {/* Input Mode Selector */}
                <div>
                  <label className="text-xs font-bold text-primary mb-2 block">Select Creative Input Source</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {videoModes.map((m) => {
                      const Icon = m.icon;
                      const isSelected = videoMode === m.id;
                      return (
                        <button
                          key={m.id}
                          type="button"
                          onClick={() => setVideoMode(m.id)}
                          className={`p-2.5 rounded-xl border text-left flex flex-col gap-1 transition-all cursor-pointer ${
                            isSelected
                              ? 'border-sky-500 bg-sky-50/50 dark:bg-sky-950/30'
                              : 'border-border bg-surface hover:border-sky-300'
                          }`}
                        >
                          <Icon size={16} className={isSelected ? 'text-sky-500' : 'text-secondary'} />
                          <span className="text-xs font-bold text-primary">{m.label}</span>
                          <span className="text-[10px] text-tertiary line-clamp-1">{m.desc}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Script Area */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-primary flex items-center justify-between">
                    <span>Narrator Script / Storyboard Prompt</span>
                    <span className="text-tertiary font-normal text-[11px]">{scriptText.length} characters</span>
                  </label>
                  <textarea
                    rows={5}
                    value={scriptText}
                    onChange={(e) => setScriptText(e.target.value)}
                    className="w-full p-3 rounded-xl border border-border bg-surface text-sm text-primary placeholder:text-tertiary focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 font-medium"
                    placeholder="Enter narration script or talking points..."
                  />
                </div>

                {/* Aspect Ratio & Format */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-primary mb-1 block">Aspect Ratio</label>
                    <Select
                      value={aspectRatio}
                      onChange={(e) => setAspectRatio(e.target.value)}
                      options={[
                        { value: '16:9', label: '16:9 Landscape (YouTube / Desktop)' },
                        { value: '9:16', label: '9:16 Vertical (TikTok / Reels / Shorts)' },
                        { value: '1:1', label: '1:1 Square (LinkedIn / Instagram)' },
                      ]}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-primary mb-1 block">Resolution Quality</label>
                    <Select
                      value="4k"
                      onChange={() => {}}
                      options={[
                        { value: '4k', label: '4K Ultra HD (3840x2160)' },
                        { value: '1080p', label: '1080p Full HD (1920x1080)' },
                      ]}
                    />
                  </div>
                </div>

                <div className="pt-2 flex justify-end">
                  <Button variant="primary" icon={ChevronRight} onClick={handleNext}>
                    Proceed to SEE IT (Storyboard)
                  </Button>
                </div>
              </CardBody>
            </Card>
          )}

          {/* STEP 2: SEE IT */}
          {currentStep === 2 && (
            <Card className="border shadow-sm">
              <CardHeader title="Stage 2: SEE IT" subtitle="Inspect generated visual scenes and camera directions" />
              <CardBody className="p-5 flex flex-col gap-4">
                <div className="space-y-3">
                  {scenes.map((sc) => (
                    <div key={sc.id} className="p-3 rounded-xl border border-border bg-surface flex items-center gap-3.5">
                      <img src={sc.image} alt={sc.title} className="w-20 h-14 rounded-lg object-cover flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <span className="text-xs font-bold text-primary block">{sc.title}</span>
                        <div className="flex items-center gap-2 mt-1 text-[11px] text-tertiary">
                          <span className="flex items-center gap-1"><Clock size={12} /> {sc.duration}</span>
                          <span>•</span>
                          <span className="text-emerald-500 font-semibold">{sc.status}</span>
                        </div>
                      </div>
                      <Badge variant="success">Scene Locked</Badge>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex justify-between items-center">
                  <Button variant="outline" onClick={() => setCurrentStep(1)}>
                    Back to SAY IT
                  </Button>
                  <Button variant="primary" icon={ChevronRight} onClick={handleNext}>
                    Proceed to SHAPE IT (Audio & Style)
                  </Button>
                </div>
              </CardBody>
            </Card>
          )}

          {/* STEP 3: SHAPE IT */}
          {currentStep === 3 && (
            <Card className="border shadow-sm">
              <CardHeader title="Stage 3: SHAPE IT" subtitle="Audio synthesis, voiceover narrator and sonic identity" />
              <CardBody className="p-5 flex flex-col gap-4">
                <div>
                  <label className="text-xs font-bold text-primary mb-1 block">Neural Voiceover Narrator</label>
                  <Select
                    value={voiceModel}
                    onChange={(e) => setVoiceModel(e.target.value)}
                    options={[
                      { value: 'Sarah - US Executive Professional', label: 'Sarah - US Executive Professional (Warm & Confident)' },
                      { value: 'Alexander - British Documentary Lead', label: 'Alexander - British Documentary Lead (Authoritative)' },
                      { value: 'Mateo - Spanish Enterprise Bilingual', label: 'Mateo - Spanish Enterprise Bilingual (Bilingual ES/EN)' },
                      { value: 'Elena - Dynamic Tech Presenter', label: 'Elena - Dynamic Tech Presenter (High Energy)' },
                    ]}
                  />
                </div>

                <div className="p-3 rounded-xl bg-surface-secondary border border-border flex items-center justify-between">
                  <div className="flex items-center gap-2.5 text-xs text-primary">
                    <Volume2 size={16} className="text-sky-500" />
                    <span>Background Audio: <strong>AAI Muzik Corporate Anthem #4</strong></span>
                  </div>
                  <span className="text-xs font-semibold text-sky-600">Volume: 24%</span>
                </div>

                <div className="pt-2 flex justify-between items-center">
                  <Button variant="outline" onClick={() => setCurrentStep(2)}>
                    Back to SEE IT
                  </Button>
                  <Button variant="primary" icon={ChevronRight} onClick={handleNext}>
                    Proceed to SHIP IT (Final Render)
                  </Button>
                </div>
              </CardBody>
            </Card>
          )}

          {/* STEP 4: SHIP IT */}
          {currentStep === 4 && (
            <Card className="border shadow-sm">
              <CardHeader title="Stage 4: SHIP IT" subtitle="Export 4K master asset and trigger multi-channel distribution" />
              <CardBody className="p-5 flex flex-col gap-4">
                <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 flex items-center gap-3">
                  <CheckCircle2 size={24} className="text-emerald-500 flex-shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-emerald-800 dark:text-emerald-300">4K Master Asset Ready for Broadcast</h4>
                    <p className="text-[11px] text-emerald-700 dark:text-emerald-400 mt-0.5">
                      All 3 scenes rendered, voiceover synced, and brand energy graphics composite complete.
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-primary block">Select Distribution Destination</label>
                  <div className="grid grid-cols-2 gap-2">
                    {['YouTube 4K Channel', 'Enterprise Client Portal', 'LinkedIn Corporate Feed', 'Email Campaign Video Embed'].map((dest, i) => (
                      <div key={i} className="p-2.5 rounded-xl border border-border bg-surface flex items-center gap-2 text-xs font-semibold text-primary">
                        <CheckCircle2 size={14} className="text-sky-500" />
                        <span>{dest}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex justify-between items-center">
                  <Button variant="outline" onClick={() => setCurrentStep(3)}>
                    Back to SHAPE IT
                  </Button>
                  <Button variant="primary" icon={Share2} onClick={handleShip}>
                    Ship & Publish Asset Now
                  </Button>
                </div>
              </CardBody>
            </Card>
          )}
        </div>

        {/* Right Canvas Monitor (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <Card className="border shadow-sm">
            <CardHeader title="Live Monitor Viewport" subtitle="Real-time rendering canvas" />
            <CardBody className="p-4 flex flex-col gap-3">
              <div className="relative rounded-2xl overflow-hidden border border-border aspect-video bg-black flex items-center justify-center group">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80"
                  alt="Video Canvas"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <button
                    type="button"
                    onClick={() => addToast({ title: 'Playing 4K Video Preview', message: 'Duration: 0:18 • Codec: ProRes 422', type: 'info' })}
                    className="p-3.5 rounded-full bg-white text-slate-900 shadow-xl cursor-pointer hover:scale-110 transition-transform"
                  >
                    <Play size={22} className="fill-current" />
                  </button>
                </div>
                <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[11px] text-white/90 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-lg">
                  <span>0:00 / 0:18</span>
                  <span className="font-mono text-[10px] text-sky-400 font-bold">4K 60FPS</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-surface-secondary border border-border text-xs space-y-1">
                <div className="flex justify-between">
                  <span className="text-secondary font-semibold">Active Mode:</span>
                  <span className="font-bold text-primary uppercase">{videoMode}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary font-semibold">Voice Model:</span>
                  <span className="font-bold text-primary truncate max-w-[200px]">{voiceModel}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary font-semibold">Format:</span>
                  <span className="font-bold text-primary">{aspectRatio} Widescreen</span>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AiVideoAgent;
