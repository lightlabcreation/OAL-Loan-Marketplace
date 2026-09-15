import React, { useState } from 'react';
import {
  MapPin,
  Users,
  Target,
  DollarSign,
  TrendingUp,
  Shield,
  Layers,
  Search,
  Plus,
  Compass,
  CheckCircle2,
  ChevronRight,
  BarChart2,
  Briefcase
} from 'lucide-react';
import { Breadcrumb, Button, Card, CardHeader, CardBody, Badge, Select, KPICard } from '../../../components/ui';
import { useToast } from '../../../context/ToastContext';

export const TerritoryManagement = () => {
  const { addToast } = useToast();
  const [selectedRegion, setSelectedRegion] = useState('All Regions');

  const territories = [
    {
      id: 'TERR-WEST',
      name: 'West Coast Commercial Corridor',
      states: 'CA, OR, WA, NV',
      director: 'Sarah Jenkins',
      activeReps: 6,
      assignedLeads: 480,
      totalPipeline: '$1.45M',
      quotaProgress: '88%',
      status: 'Exceeding Quota',
    },
    {
      id: 'TERR-TEXAS',
      name: 'Texas & Gulf Logistics Basin',
      states: 'TX, OK, LA',
      director: 'Alexander Wright',
      activeReps: 8,
      assignedLeads: 620,
      totalPipeline: '$1.92M',
      quotaProgress: '94%',
      status: 'Top Performing',
    },
    {
      id: 'TERR-MIDWEST',
      name: 'Midwest Manufacturing Hub',
      states: 'IL, OH, MI, IN',
      director: 'David Chen',
      activeReps: 5,
      assignedLeads: 390,
      totalPipeline: '$1.10M',
      quotaProgress: '76%',
      status: 'On Track',
    },
    {
      id: 'TERR-EAST',
      name: 'Atlantic Financial & Healthcare',
      states: 'NY, NJ, PA, MA',
      director: 'Elena Rostova',
      activeReps: 7,
      assignedLeads: 540,
      totalPipeline: '$1.68M',
      quotaProgress: '84%',
      status: 'On Track',
    },
  ];

  const salesReps = [
    { name: 'Sarah Jenkins', role: 'Regional Director', territory: 'West Coast', closed: '$840,000', leads: 42 },
    { name: 'Marcus Vance', role: 'Senior Account Executive', territory: 'Texas & Gulf', closed: '$620,000', leads: 38 },
    { name: 'Elena Rostova', role: 'Enterprise Account Lead', territory: 'Atlantic Financial', closed: '$540,000', leads: 29 },
    { name: 'David Chen', role: 'Midwest Logistics Specialist', territory: 'Midwest Hub', closed: '$480,000', leads: 31 },
  ];

  return (
    <div className="flex flex-col gap-6 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <Breadcrumb items={[{ label: 'CRM nErgy AI' }, { label: 'Core Modules' }, { label: 'Territory Management' }]} />
          <div className="flex items-center gap-3 mt-1">
            <h1 className="text-2xl font-bold font-display tracking-tight text-primary flex items-center gap-2">
              Territory Management & Field Distribution
            </h1>
            <Badge variant="primary" className="bg-sky-500 text-white font-bold text-xs uppercase tracking-wider">
              Regional Quotas Active
            </Badge>
          </div>
          <p className="text-xs text-secondary mt-0.5">
            Geographic sales zone mapping: Region → Territory → Manager → Sales Rep → Lead Allocation.
          </p>
        </div>

        <Button
          variant="primary"
          icon={Plus}
          onClick={() => addToast({ title: 'New Territory', message: 'Territory creation wizard launched.', type: 'info' })}
          className="text-xs font-bold"
        >
          Define New Territory
        </Button>
      </div>

      {/* KPI Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <KPICard title="Active Territories" value="4 Operating Zones" change="50 States Covered" changeType="positive" icon={Compass} />
        <KPICard title="Total Territory Pipeline" value="$6.15M" change="+14.2% YoY" changeType="positive" icon={DollarSign} />
        <KPICard title="Active Field Reps" value="26 Account Execs" change="100% Quota Assigned" changeType="positive" icon={Users} />
        <KPICard title="Average Zone Velocity" value="28 Days to Close" change="-6 Days Faster" changeType="positive" icon={TrendingUp} />
      </div>

      {/* Interactive Region Visualizer Map Mock */}
      <Card className="border shadow-sm overflow-hidden">
        <CardHeader
          title="Interactive Regional Pipeline Map"
          subtitle="Real-time territory density and rep performance across the US"
        />
        <CardBody className="p-6">
          <div className="relative w-full h-64 md:h-80 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 border border-slate-700 flex flex-col justify-between p-6 text-white overflow-hidden shadow-inner">
            {/* Background Grid Accent */}
            <div
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(#38bdf8 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            />

            {/* Map Top Indicator */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-xs font-bold font-mono tracking-wider uppercase text-sky-400">
                  Live Geographic Mesh Active
                </span>
              </div>
              <Badge variant="default" className="bg-white/10 text-white border-white/20 text-xs">
                Filter: 4 Major Sectors
              </Badge>
            </div>

            {/* Simulated Geographic Hub Nodes */}
            <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-4 my-auto">
              {territories.map((t) => (
                <div
                  key={t.id}
                  onClick={() => addToast({ title: t.name, message: `Pipeline: ${t.totalPipeline} • Leader: ${t.director}`, type: 'info' })}
                  className="p-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-600/80 backdrop-blur-sm cursor-pointer transition-all hover:scale-105"
                >
                  <div className="flex items-center justify-between text-xs text-sky-400 font-bold mb-1">
                    <span>{t.states}</span>
                    <span className="text-emerald-400">{t.quotaProgress}</span>
                  </div>
                  <h4 className="font-bold text-xs text-white truncate">{t.name}</h4>
                  <p className="text-[11px] text-slate-400 mt-1">Dir: {t.director}</p>
                  <div className="mt-2 text-xs font-black text-amber-300">{t.totalPipeline}</div>
                </div>
              ))}
            </div>

            {/* Map Bottom Legend */}
            <div className="relative z-10 flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-700/60 pt-3">
              <span>● Green: &gt;85% Quota</span>
              <span>● Amber: 75% - 85% Quota</span>
              <span>● Blue: High Lead Concentration</span>
              <span className="font-mono text-sky-300">Automated Lead Distribution Engine: ON</span>
            </div>
          </div>
        </CardBody>
      </Card>

      {/* Territories Table & Rep Roster */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Territories Directory (8 cols) */}
        <div className="lg:col-span-8">
          <Card className="border shadow-sm">
            <CardHeader title="Territory Performance Breakdown" subtitle="Detailed pipeline vs quota matrix" />
            <CardBody className="p-0 overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-border bg-surface-secondary text-secondary">
                    <th className="p-3 font-bold">Zone & States</th>
                    <th className="p-3 font-bold">Regional Director</th>
                    <th className="p-3 font-bold">Active Reps</th>
                    <th className="p-3 font-bold">Leads</th>
                    <th className="p-3 font-bold">Pipeline</th>
                    <th className="p-3 font-bold">Quota</th>
                  </tr>
                </thead>
                <tbody>
                  {territories.map((t) => (
                    <tr key={t.id} className="border-b border-border/50 hover:bg-surface-secondary transition-colors">
                      <td className="p-3">
                        <span className="font-bold text-primary block">{t.name}</span>
                        <span className="text-[11px] font-mono text-sky-600 font-semibold">{t.states}</span>
                      </td>
                      <td className="p-3 font-semibold text-secondary">{t.director}</td>
                      <td className="p-3 font-bold text-primary">{t.activeReps} reps</td>
                      <td className="p-3 font-bold text-secondary">{t.assignedLeads} leads</td>
                      <td className="p-3 font-black text-emerald-600">{t.totalPipeline}</td>
                      <td className="p-3 font-bold">
                        <Badge variant="success">{t.quotaProgress}</Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardBody>
          </Card>
        </div>

        {/* Top Reps Ranking (4 cols) */}
        <div className="lg:col-span-4">
          <Card className="border shadow-sm h-full flex flex-col">
            <CardHeader title="Field Leaderboard" subtitle="Top performing executives by zone" />
            <CardBody className="p-4 space-y-3 flex-1">
              {salesReps.map((rep, idx) => (
                <div key={idx} className="p-3 rounded-xl border border-border bg-surface flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-primary block">{rep.name}</span>
                    <span className="text-[10px] text-tertiary">{rep.territory} • {rep.leads} deals</span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-black text-emerald-600 block">{rep.closed}</span>
                    <span className="text-[10px] text-sky-600 font-semibold font-mono">Rank #{idx + 1}</span>
                  </div>
                </div>
              ))}
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TerritoryManagement;
