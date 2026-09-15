import React, { useState } from 'react';
import { Globe } from 'lucide-react';
import { useToast } from '../../context/ToastContext';

export const LanguageToggle = () => {
  const [lang, setLang] = useState('EN');
  const { addToast } = useToast();

  const handleToggle = () => {
    const nextLang = lang === 'EN' ? 'ES' : 'EN';
    setLang(nextLang);
    addToast({
      title: nextLang === 'ES' ? 'Idioma Cambiado' : 'Language Updated',
      message: nextLang === 'ES' ? 'Plataforma cambiada a Español (ES).' : 'Platform switched to English (EN).',
      type: 'info',
    });
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-xs font-semibold cursor-pointer transition-all"
      style={{
        backgroundColor: 'var(--surface-secondary, #f8fafc)',
        borderColor: 'var(--border, #e2e8f0)',
        color: 'var(--text-secondary, #475569)',
      }}
      title="1-Click Language Switch (English / Spanish)"
    >
      <Globe size={14} style={{ color: '#0ea5e9' }} />
      <span>{lang}</span>
      <span
        style={{
          fontSize: '9px',
          padding: '1px 4px',
          borderRadius: '4px',
          backgroundColor: lang === 'ES' ? '#f59e0b' : '#38bdf8',
          color: '#ffffff',
          fontWeight: 700,
        }}
      >
        {lang === 'EN' ? 'ES' : 'EN'}
      </span>
    </button>
  );
};

export default LanguageToggle;
