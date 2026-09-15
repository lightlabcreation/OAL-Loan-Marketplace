import React from 'react';

/**
 * AiEnergyLogo — Official Concentric Neon Energy Vortex Logo
 * Inspired directly by the client's reference graphic (image.png).
 * Features multi-layer concentric digital energy arcs with glowing neon gradients.
 */
export const AiEnergyLogo = ({ size = 38, showText = true, subtitle = 'Enterprise CRM • ERP • AI', className = '', style = {} }) => {
  return (
    <div
      className={`inline-flex items-center gap-3 select-none ${className}`}
      style={{ cursor: 'pointer', ...style }}
    >
      {/* Concentric Energy SVG Icon */}
      <div
        style={{
          width: `${size}px`,
          height: `${size}px`,
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        {/* Ambient Glow Aura behind rings */}
        <div
          style={{
            position: 'absolute',
            inset: '-15%',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(56, 189, 248, 0.35) 0%, rgba(249, 115, 22, 0.25) 45%, rgba(239, 68, 68, 0) 70%)',
            filter: 'blur(6px)',
            pointerEvents: 'none',
          }}
        />

        <svg
          viewBox="0 0 100 100"
          width={size}
          height={size}
          style={{
            transform: 'rotate(-15deg)',
            filter: 'drop-shadow(0 0 6px rgba(56, 189, 248, 0.6))',
          }}
        >
          {/* Outer Red/Crimson Arc Ring */}
          <circle
            cx="50"
            cy="50"
            r="44"
            fill="none"
            stroke="#ef4444"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeDasharray="95 30 40 25"
            strokeDashoffset="10"
            opacity="0.9"
          />

          {/* Outer Orange Accent Ring */}
          <circle
            cx="50"
            cy="50"
            r="38"
            fill="none"
            stroke="#f97316"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeDasharray="70 25 55 35"
            strokeDashoffset="45"
            opacity="0.95"
          />

          {/* Middle Amber/Yellow Track */}
          <circle
            cx="50"
            cy="50"
            r="31"
            fill="none"
            stroke="#eab308"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="50 30 40 20"
            strokeDashoffset="85"
            opacity="0.85"
          />

          {/* Core Cyan/Neon Blue AI Circuit */}
          <circle
            cx="50"
            cy="50"
            r="23"
            fill="none"
            stroke="#06b6d4"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeDasharray="45 20 30 15"
            strokeDashoffset="15"
            opacity="0.95"
          />

          {/* Inner Deep Blue Node Ring */}
          <circle
            cx="50"
            cy="50"
            r="15"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="25 15 20 10"
            strokeDashoffset="60"
            opacity="0.9"
          />

          {/* Central Reactor Core Dot */}
          <circle
            cx="50"
            cy="50"
            r="7"
            fill="#f97316"
            stroke="#38bdf8"
            strokeWidth="2"
          />
          <circle
            cx="50"
            cy="50"
            r="3"
            fill="#ffffff"
          />
        </svg>
      </div>

      {/* Brand Typography */}
      {showText && (
        <div className="flex flex-col min-w-0">
          <div className="flex items-center gap-1.5 line-height-none">
            <span
              style={{
                fontFamily: 'var(--font-display, "Plus Jakarta Sans", sans-serif)',
                fontWeight: 800,
                fontSize: size > 40 ? '19px' : '16px',
                letterSpacing: '-0.03em',
                color: 'var(--text-primary, #0f172a)',
                whiteSpace: 'nowrap',
              }}
            >
              CRM nErgy
            </span>
            <span
              style={{
                background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
                color: '#ffffff',
                fontSize: size > 40 ? '11px' : '10px',
                fontWeight: 800,
                padding: '2px 6px',
                borderRadius: '5px',
                letterSpacing: '0.05em',
                boxShadow: '0 2px 6px rgba(6, 182, 212, 0.4)',
                lineHeight: 1.1,
              }}
            >
              AI
            </span>
          </div>
          {subtitle && (
            <span
              style={{
                fontSize: '9.5px',
                color: 'var(--text-tertiary, #64748b)',
                fontWeight: 600,
                letterSpacing: '0.04em',
                marginTop: '3px',
                whiteSpace: 'nowrap',
                textTransform: 'uppercase',
              }}
            >
              {subtitle}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default AiEnergyLogo;
