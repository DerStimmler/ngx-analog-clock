import { ChangeDetectionStrategy, Component } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NgxAnalogClock } from 'ngx-analog-clock';
import { interval, map } from 'rxjs';

interface ClockConfig {
  showHourHand: boolean;
  showMinuteHand: boolean;
  showSecondHand: boolean;
  showHourMarkers: boolean;
  showMinuteMarkers: boolean;
  showClockNumbers: boolean;
  showBezel: boolean;
  transitionDuration: string;
  transitionFunction: string;
  bezelThickness: string;
  pivotThickness: string;
  hourHandThickness: string;
  hourHandLength: string;
  minuteHandThickness: string;
  minuteHandLength: string;
  secondHandThickness: string;
  secondHandLength: string;
  pivotColor: string;
  hourHandColor: string;
  minuteHandColor: string;
  secondHandColor: string;
  hourMarkerColor: string;
  minuteMarkerColor: string;
  clockNumberColor: string;
  dialColor: string;
  bezelColor: string;
  markerOffsetPercent: number;
  numbersOffsetPercent: number;
  hourMarkerThickness: string;
  hourMarkerLength: string;
  minuteMarkerThickness: string;
  minuteMarkerLength: string;
  hourHandBorderRadius: string;
  minuteHandBorderRadius: string;
  secondHandBorderRadius: string;
  minuteMarkerBorderRadius: string;
  hourMarkerBorderRadius: string;
}

interface ShowcasePreset {
  title: string;
  category: string;
  description: string;
  accent: string;
  stageBackground: string;
  cardBackground: string;
  cardColor: string;
  borderColor: string;
  shadow: string;
  config: ClockConfig;
}

const defaultClockConfig: ClockConfig = {
  showHourHand: true,
  showMinuteHand: true,
  showSecondHand: true,
  showHourMarkers: true,
  showMinuteMarkers: true,
  showClockNumbers: true,
  showBezel: true,
  transitionDuration: '0.5s',
  transitionFunction: 'cubic-bezier(0.4, 2, 0.3, 1)',
  bezelThickness: '3px',
  pivotThickness: '12px',
  hourHandThickness: '9px',
  hourHandLength: '60%',
  minuteHandThickness: '6px',
  minuteHandLength: '90%',
  secondHandThickness: '3px',
  secondHandLength: '97%',
  pivotColor: '#ff0000',
  hourHandColor: '#222222',
  minuteHandColor: '#222222',
  secondHandColor: '#222222',
  hourMarkerColor: '#222222',
  minuteMarkerColor: '#222222',
  clockNumberColor: '#222222',
  dialColor: 'transparent',
  bezelColor: '#222222',
  markerOffsetPercent: 96,
  numbersOffsetPercent: 70,
  hourMarkerThickness: '2%',
  hourMarkerLength: '7%',
  minuteMarkerThickness: '1%',
  minuteMarkerLength: '3%',
  hourHandBorderRadius: '2px',
  minuteHandBorderRadius: '2px',
  secondHandBorderRadius: '2px',
  minuteMarkerBorderRadius: '2px',
  hourMarkerBorderRadius: '2px'
};

function clockConfig(config: Partial<ClockConfig>): ClockConfig {
  return { ...defaultClockConfig, ...config };
}

@Component({
  selector: 'demo-showcase',
  imports: [NgxAnalogClock],
  templateUrl: './showcase.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Showcase {
  protected date = toSignal(interval(1000).pipe(map(() => new Date())), { initialValue: new Date() });

  protected readonly presets: ShowcasePreset[] = [
    {
      title: 'Silent Minimal',
      category: 'Minimalism',
      description: 'No numbers, no minute ticks, no seconds hand: only the essentials for calm product UI.',
      accent: '#111827',
      stageBackground: 'linear-gradient(135deg, #ffffff 0%, #f4f4f5 100%)',
      cardBackground: '#ffffff',
      cardColor: '#18181b',
      borderColor: '#d4d4d8',
      shadow: '0 24px 60px rgba(24, 24, 27, 0.08)',
      config: clockConfig({
        showSecondHand: false,
        showMinuteMarkers: false,
        showClockNumbers: false,
        dialColor: '#ffffff',
        bezelColor: '#18181b',
        bezelThickness: '1px',
        pivotColor: '#18181b',
        pivotThickness: '7px',
        hourHandColor: '#18181b',
        minuteHandColor: '#18181b',
        hourMarkerColor: '#18181b',
        hourMarkerThickness: '1.2%',
        hourMarkerLength: '5%',
        hourHandThickness: '5px',
        minuteHandThickness: '3px',
        hourHandLength: '48%',
        minuteHandLength: '76%',
        transitionDuration: '0.9s',
        transitionFunction: 'ease-out'
      })
    },
    {
      title: 'Classic',
      category: 'Everyday',
      description: 'The familiar default-style clock: high contrast, readable numbers, and a red seconds hand.',
      accent: '#ef4444',
      stageBackground: 'linear-gradient(135deg, #ffffff 0%, #e5e7eb 100%)',
      cardBackground: '#ffffff',
      cardColor: '#111827',
      borderColor: '#d1d5db',
      shadow: '0 24px 60px rgba(17, 24, 39, 0.1)',
      config: defaultClockConfig
    },
    {
      title: 'Minimal Light',
      category: 'Everyday',
      description: 'Very light UI treatment with no minute markers and subtle hand weights.',
      accent: '#94a3b8',
      stageBackground: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
      cardBackground: '#ffffff',
      cardColor: '#334155',
      borderColor: '#e2e8f0',
      shadow: '0 24px 60px rgba(15, 23, 42, 0.07)',
      config: clockConfig({
        showMinuteMarkers: false,
        dialColor: '#ffffff',
        bezelColor: '#f1f5f9',
        bezelThickness: '1px',
        pivotColor: '#94a3b8',
        pivotThickness: '8px',
        hourHandColor: '#334155',
        minuteHandColor: '#64748b',
        secondHandColor: '#94a3b8',
        hourMarkerColor: '#cbd5e1',
        clockNumberColor: '#94a3b8',
        hourHandThickness: '4px',
        minuteHandThickness: '3px',
        secondHandThickness: '1px',
        hourMarkerLength: '4%',
        transitionDuration: '1.15s',
        transitionFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
      })
    },
    {
      title: 'Minimalist Numbers',
      category: 'Typography',
      description: 'Only numbers and hands, with markers removed and numbers pushed toward the edge.',
      accent: '#111827',
      stageBackground: 'linear-gradient(135deg, #fafafa 0%, #ffffff 100%)',
      cardBackground: '#ffffff',
      cardColor: '#111827',
      borderColor: '#e5e7eb',
      shadow: '0 18px 50px rgba(17, 24, 39, 0.08)',
      config: clockConfig({
        showHourMarkers: false,
        showMinuteMarkers: false,
        dialColor: '#ffffff',
        bezelColor: 'transparent',
        pivotColor: '#111827',
        pivotThickness: '4px',
        hourHandColor: '#111827',
        minuteHandColor: '#111827',
        secondHandColor: '#dc2626',
        clockNumberColor: '#111827',
        numbersOffsetPercent: 88,
        hourHandThickness: '4px',
        minuteHandThickness: '3px',
        secondHandThickness: '1px',
        transitionDuration: '0.45s',
        transitionFunction: 'ease-in-out'
      })
    },
    {
      title: 'Neon Arcade',
      category: 'Nightlife',
      description: 'A loud sign-style preset with a hot bezel, saturated hands, and electric tick marks.',
      accent: '#39ff14',
      stageBackground:
        'radial-gradient(circle at 18% 18%, rgba(255, 0, 204, 0.52), transparent 30%), radial-gradient(circle at 86% 6%, rgba(57, 255, 20, 0.45), transparent 28%), radial-gradient(circle at 50% 100%, rgba(0, 229, 255, 0.34), transparent 34%), #040006',
      cardBackground: '#07000d',
      cardColor: '#f8fafc',
      borderColor: '#ff00cc',
      shadow: '0 0 0 1px rgba(57, 255, 20, 0.65), 0 0 44px rgba(255, 0, 204, 0.42)',
      config: clockConfig({
        dialColor:
          'radial-gradient(circle, rgba(57, 255, 20, 0.16) 0%, rgba(4, 0, 6, 0.96) 72%), repeating-radial-gradient(circle, rgba(255,255,255,0.08) 0 1px, transparent 1px 10px)',
        bezelColor: 'conic-gradient(from 20deg, #39ff14, #00e5ff, #ff00cc, #faff00, #39ff14)',
        bezelThickness: '9px',
        pivotColor: 'radial-gradient(circle, #ffffff 0%, #faff00 34%, #ff00cc 68%)',
        pivotThickness: '20px',
        hourHandColor: 'linear-gradient(to bottom, #ff00cc 70%, transparent)',
        minuteHandColor: 'linear-gradient(to bottom, #00e5ff 70%, transparent)',
        secondHandColor: '#39ff14',
        hourMarkerColor: '#faff00',
        minuteMarkerColor: '#00e5ff',
        clockNumberColor: '#ffffff',
        hourMarkerThickness: '3.5%',
        hourMarkerLength: '12%',
        minuteMarkerThickness: '1%',
        minuteMarkerLength: '5%',
        hourHandThickness: '10px',
        minuteHandThickness: '7px',
        secondHandThickness: '4px',
        transitionDuration: '0.38s',
        transitionFunction: 'cubic-bezier(0.2, 1.8, 0.2, 1)'
      })
    },
    {
      title: 'Cosmic Observatory',
      category: 'Image Dial',
      description: 'Uses a real image as the dial background with translucent markers over the scene.',
      accent: '#38bdf8',
      stageBackground:
        'radial-gradient(circle at 50% 0%, rgba(56, 189, 248, 0.22), transparent 35%), linear-gradient(145deg, #020617, #111827)',
      cardBackground: '#020617',
      cardColor: '#e0f2fe',
      borderColor: '#1e3a8a',
      shadow: '0 28px 80px rgba(14, 116, 144, 0.26)',
      config: clockConfig({
        dialColor:
          'linear-gradient(rgba(2, 6, 23, 0.1), rgba(2, 6, 23, 0.3)), url(https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=900&q=80) center / cover',
        bezelColor: 'rgba(224, 242, 254, 0.42)',
        bezelThickness: '2px',
        pivotColor: '#67e8f9',
        pivotThickness: '18px',
        hourHandColor: '#ffffff',
        minuteHandColor: '#bfdbfe',
        secondHandColor: '#67e8f9',
        hourMarkerColor: 'rgba(255, 255, 255, 0.86)',
        minuteMarkerColor: 'rgba(186, 230, 253, 0.34)',
        clockNumberColor: '#e0f2fe',
        hourMarkerThickness: '2%',
        minuteMarkerThickness: '0.6%',
        transitionDuration: '0.7s'
      })
    },
    {
      title: 'Brutalist Poster',
      category: 'Editorial',
      description: 'Chunky geometry with poster colors for a loud design-system sample.',
      accent: '#facc15',
      stageBackground:
        'linear-gradient(90deg, transparent 49%, rgba(0,0,0,0.08) 50%, transparent 51%), linear-gradient(#fff7ed, #fffbeb)',
      cardBackground: '#fff7ed',
      cardColor: '#111827',
      borderColor: '#111827',
      shadow: '10px 10px 0 #111827',
      config: clockConfig({
        showMinuteMarkers: false,
        showClockNumbers: false,
        dialColor: '#facc15',
        bezelColor: '#111827',
        bezelThickness: '10px',
        pivotColor: '#111827',
        pivotThickness: '28px',
        hourHandColor: '#ef4444',
        minuteHandColor: '#2563eb',
        secondHandColor: '#111827',
        hourMarkerColor: '#111827',
        hourMarkerThickness: '7%',
        hourMarkerLength: '12%',
        markerOffsetPercent: 90,
        hourHandThickness: '18px',
        minuteHandThickness: '12px',
        secondHandThickness: '5px',
        hourHandLength: '46%',
        minuteHandLength: '70%',
        secondHandLength: '86%',
        hourHandBorderRadius: '0',
        minuteHandBorderRadius: '0',
        secondHandBorderRadius: '0'
      })
    },
    {
      title: 'Blockhouse Bauhaus',
      category: 'Geometry',
      description: 'Primary colors, thick hands, no numbers, and bold block markers for poster-like layouts.',
      accent: '#facc15',
      stageBackground: 'linear-gradient(135deg, #f3f4f6 0%, #ffffff 100%)',
      cardBackground: '#f9fafb',
      cardColor: '#111827',
      borderColor: '#111827',
      shadow: '8px 8px 0 #111827',
      config: clockConfig({
        showMinuteMarkers: false,
        showClockNumbers: false,
        dialColor: '#f3f4f6',
        bezelColor: '#111827',
        bezelThickness: '6px',
        pivotColor: '#111827',
        pivotThickness: '18px',
        hourHandColor: '#ef4444',
        minuteHandColor: '#2563eb',
        secondHandColor: '#facc15',
        hourMarkerColor: '#111827',
        hourHandThickness: '12px',
        minuteHandThickness: '8px',
        secondHandThickness: '4px',
        hourMarkerThickness: '6%',
        hourMarkerLength: '10%',
        hourHandLength: '50%',
        minuteHandLength: '70%',
        hourHandBorderRadius: '0',
        minuteHandBorderRadius: '0',
        secondHandBorderRadius: '0',
        transitionDuration: '0.32s',
        transitionFunction: 'cubic-bezier(0.7, 0, 0.3, 1)'
      })
    },
    {
      title: 'Material You',
      category: 'App UI',
      description: 'Soft surfaces and approachable contrast for settings screens and mobile apps.',
      accent: '#6750a4',
      stageBackground: 'linear-gradient(145deg, #fffbfe 0%, #eaddff 58%, #d0bcff 100%)',
      cardBackground: '#fffbfe',
      cardColor: '#1d1b20',
      borderColor: '#e7e0ec',
      shadow: '0 24px 60px rgba(103, 80, 164, 0.18)',
      config: clockConfig({
        dialColor: '#fffbfe',
        bezelColor: '#6750a4',
        bezelThickness: '4px',
        pivotColor: '#7d5260',
        pivotThickness: '18px',
        hourHandColor: '#21005d',
        minuteHandColor: '#6750a4',
        secondHandColor: '#ba1a1a',
        hourMarkerColor: '#6750a4',
        minuteMarkerColor: '#cac4d0',
        clockNumberColor: '#49454f',
        hourHandThickness: '10px',
        minuteHandThickness: '7px',
        secondHandThickness: '3px',
        hourHandBorderRadius: '999px',
        minuteHandBorderRadius: '999px',
        secondHandBorderRadius: '999px',
        hourMarkerBorderRadius: '999px',
        minuteMarkerBorderRadius: '999px',
        transitionDuration: '0.48s',
        transitionFunction: 'cubic-bezier(0.2, 0, 0, 1)'
      })
    },
    {
      title: 'SaaS Slate',
      category: 'Website Ready',
      description: 'Neutral blue-gray styling that fits dashboards, docs pages, and B2B product sites.',
      accent: '#2563eb',
      stageBackground: 'linear-gradient(135deg, #f8fafc 0%, #dbeafe 100%)',
      cardBackground: '#ffffff',
      cardColor: '#0f172a',
      borderColor: '#cbd5e1',
      shadow: '0 24px 60px rgba(15, 23, 42, 0.11)',
      config: clockConfig({
        dialColor: '#f8fafc',
        bezelColor: '#1e293b',
        bezelThickness: '4px',
        pivotColor: '#2563eb',
        pivotThickness: '14px',
        hourHandColor: '#0f172a',
        minuteHandColor: '#334155',
        secondHandColor: '#2563eb',
        hourMarkerColor: '#1e293b',
        minuteMarkerColor: '#cbd5e1',
        clockNumberColor: '#475569',
        markerOffsetPercent: 94,
        numbersOffsetPercent: 64,
        hourMarkerLength: '8%',
        transitionDuration: '0.6s',
        transitionFunction: 'cubic-bezier(0.22, 1, 0.36, 1)'
      })
    },
    {
      title: 'Nordic Calm',
      category: 'Website Ready',
      description: 'Cool, quiet colors with rounded details for portfolios, docs, and clean landing pages.',
      accent: '#0f766e',
      stageBackground: 'linear-gradient(135deg, #f0fdfa 0%, #f8fafc 52%, #e0f2fe 100%)',
      cardBackground: '#ffffff',
      cardColor: '#134e4a',
      borderColor: '#ccfbf1',
      shadow: '0 24px 60px rgba(15, 118, 110, 0.13)',
      config: clockConfig({
        dialColor: '#f8fafc',
        bezelColor: '#99f6e4',
        bezelThickness: '3px',
        pivotColor: '#0f766e',
        pivotThickness: '10px',
        hourHandColor: '#134e4a',
        minuteHandColor: '#0f766e',
        secondHandColor: '#0284c7',
        hourMarkerColor: '#0f766e',
        minuteMarkerColor: '#bae6fd',
        clockNumberColor: '#0f766e',
        hourHandThickness: '6px',
        minuteHandThickness: '4px',
        secondHandThickness: '2px',
        hourHandBorderRadius: '999px',
        minuteHandBorderRadius: '999px',
        secondHandBorderRadius: '999px',
        hourMarkerBorderRadius: '999px',
        minuteMarkerBorderRadius: '999px',
        transitionDuration: '1.4s',
        transitionFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
      })
    },
    {
      title: 'Catppuccin Mocha',
      category: 'Developer Theme',
      description: 'Editor-theme colors with soft transitions and fully visible minute precision.',
      accent: '#f5c2e7',
      stageBackground: 'linear-gradient(135deg, #1e1e2e 0%, #313244 100%)',
      cardBackground: '#181825',
      cardColor: '#cdd6f4',
      borderColor: '#45475a',
      shadow: '0 24px 70px rgba(17, 17, 27, 0.42)',
      config: clockConfig({
        dialColor: '#1e1e2e',
        bezelColor: '#89b4fa',
        bezelThickness: '4px',
        pivotColor: '#f5c2e7',
        pivotThickness: '17px',
        hourHandColor: '#cba6f7',
        minuteHandColor: '#89b4fa',
        secondHandColor: '#f38ba8',
        hourMarkerColor: '#f5c2e7',
        minuteMarkerColor: '#6c7086',
        clockNumberColor: '#cdd6f4',
        hourMarkerThickness: '2.4%',
        minuteMarkerThickness: '0.8%',
        hourMarkerLength: '8%',
        minuteMarkerLength: '3%',
        transitionDuration: '0.65s'
      })
    },
    {
      title: 'Mint Commerce',
      category: 'Website Ready',
      description: 'A polished green theme for shops, booking flows, and friendly product pages.',
      accent: '#10b981',
      stageBackground: 'linear-gradient(135deg, #ecfdf5 0%, #d1fae5 48%, #a7f3d0 100%)',
      cardBackground: '#f0fdf4',
      cardColor: '#064e3b',
      borderColor: '#a7f3d0',
      shadow: '0 24px 60px rgba(16, 185, 129, 0.16)',
      config: clockConfig({
        dialColor: 'linear-gradient(135deg, #ffffff 0%, #ecfdf5 100%)',
        bezelColor: '#10b981',
        bezelThickness: '5px',
        pivotColor: '#065f46',
        pivotThickness: '12px',
        hourHandColor: '#064e3b',
        minuteHandColor: '#047857',
        secondHandColor: '#10b981',
        hourMarkerColor: '#047857',
        minuteMarkerColor: '#a7f3d0',
        clockNumberColor: '#065f46',
        hourMarkerThickness: '2%',
        minuteMarkerThickness: '0.6%',
        numbersOffsetPercent: 66,
        transitionDuration: '0.72s',
        transitionFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
      })
    },
    {
      title: 'Newsprint',
      category: 'Website Ready',
      description: 'Black, ivory, and red for editorial websites where the clock should feel intentional.',
      accent: '#b91c1c',
      stageBackground:
        'repeating-linear-gradient(0deg, rgba(17, 24, 39, 0.05) 0 1px, transparent 1px 9px), linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)',
      cardBackground: '#fffbeb',
      cardColor: '#1f2937',
      borderColor: '#1f2937',
      shadow: '0 22px 0 rgba(31, 41, 55, 0.08)',
      config: clockConfig({
        dialColor: '#fffbeb',
        bezelColor: '#1f2937',
        bezelThickness: '4px',
        pivotColor: '#b91c1c',
        pivotThickness: '11px',
        hourHandColor: '#1f2937',
        minuteHandColor: '#374151',
        secondHandColor: '#b91c1c',
        hourMarkerColor: '#1f2937',
        minuteMarkerColor: '#d6d3d1',
        clockNumberColor: '#1f2937',
        hourHandThickness: '7px',
        minuteHandThickness: '5px',
        secondHandThickness: '2px',
        transitionDuration: '0.28s',
        transitionFunction: 'steps(1, end)'
      })
    },
    {
      title: 'Deep Space Engine',
      category: 'Gradient Parts',
      description: 'Gradient hands, gradient hour markers, and a glowing pivot show CSS backgrounds everywhere.',
      accent: '#2dd4bf',
      stageBackground:
        'radial-gradient(circle at 50% 50%, rgba(45, 212, 191, 0.22), transparent 30%), radial-gradient(circle at 20% 15%, rgba(129, 140, 248, 0.22), transparent 28%), #020617',
      cardBackground: '#030712',
      cardColor: '#ccfbf1',
      borderColor: '#0f766e',
      shadow: '0 28px 80px rgba(20, 184, 166, 0.22)',
      config: clockConfig({
        showClockNumbers: false,
        dialColor: 'radial-gradient(circle, rgba(45, 212, 191, 0.2) 0%, rgba(15, 23, 42, 0.95) 45%, #020617 100%)',
        bezelColor: 'rgba(45, 212, 191, 0.26)',
        bezelThickness: '1px',
        pivotColor: 'radial-gradient(circle, #ccfbf1 0%, #2dd4bf 34%, rgba(45, 212, 191, 0) 72%)',
        pivotThickness: '38px',
        hourHandColor: 'linear-gradient(to bottom, #ccfbf1 0%, #2dd4bf 62%, transparent 100%)',
        minuteHandColor: 'linear-gradient(to bottom, #a5b4fc 0%, #22d3ee 66%, transparent 100%)',
        secondHandColor: 'linear-gradient(to bottom, #ffffff 0%, #f472b6 72%, transparent 100%)',
        hourMarkerColor: 'linear-gradient(to bottom, #ccfbf1, rgba(45, 212, 191, 0))',
        minuteMarkerColor: 'rgba(45, 212, 191, 0.24)',
        hourMarkerThickness: '3%',
        minuteMarkerThickness: '0.7%',
        hourMarkerLength: '18%',
        minuteMarkerLength: '6%',
        markerOffsetPercent: 94,
        hourHandThickness: '7px',
        minuteHandThickness: '5px',
        secondHandThickness: '2px',
        transitionDuration: '0.85s'
      })
    },
    {
      title: 'Candy Pop',
      category: 'Playful',
      description: 'Rounded hands and candy colors for friendly onboarding or kids products.',
      accent: '#fb7185',
      stageBackground: 'radial-gradient(circle at 50% 20%, #ffffff 0%, #fde68a 42%, #f9a8d4 100%)',
      cardBackground: '#fff1f2',
      cardColor: '#831843',
      borderColor: '#f9a8d4',
      shadow: '0 24px 70px rgba(244, 114, 182, 0.24)',
      config: clockConfig({
        dialColor: 'radial-gradient(circle, #ffffff 0%, #fff7ed 66%, #fbcfe8 100%)',
        bezelColor: '#fb7185',
        bezelThickness: '8px',
        pivotColor: '#38bdf8',
        pivotThickness: '24px',
        hourHandColor: '#fb7185',
        minuteHandColor: '#8b5cf6',
        secondHandColor: '#14b8a6',
        hourMarkerColor: '#f59e0b',
        minuteMarkerColor: '#f9a8d4',
        clockNumberColor: '#be123c',
        hourHandThickness: '12px',
        minuteHandThickness: '8px',
        secondHandThickness: '4px',
        hourHandBorderRadius: '999px',
        minuteHandBorderRadius: '999px',
        secondHandBorderRadius: '999px',
        hourMarkerBorderRadius: '999px',
        minuteMarkerBorderRadius: '999px',
        transitionDuration: '0.5s',
        transitionFunction: 'cubic-bezier(0.34, 1.7, 0.64, 1)'
      })
    },
    {
      title: 'Matrix Terminal',
      category: 'Hacker',
      description: 'A code-monitor style clock with tick motion and terminal-green focus.',
      accent: '#00ff41',
      stageBackground:
        'linear-gradient(180deg, rgba(0, 255, 65, 0.12), transparent 45%), repeating-linear-gradient(0deg, rgba(0, 255, 65, 0.08) 0 1px, transparent 1px 8px), #020403',
      cardBackground: '#020403',
      cardColor: '#bbf7d0',
      borderColor: '#166534',
      shadow: '0 24px 70px rgba(34, 197, 94, 0.16)',
      config: clockConfig({
        dialColor: 'radial-gradient(circle, #003b14 0%, #000000 72%)',
        bezelColor: '#00ff41',
        bezelThickness: '2px',
        pivotColor: '#00ff41',
        hourHandColor: '#00ff41',
        minuteHandColor: '#22c55e',
        secondHandColor: '#bbf7d0',
        hourMarkerColor: '#00ff41',
        minuteMarkerColor: 'rgba(0, 255, 65, 0.32)',
        clockNumberColor: '#86efac',
        hourHandThickness: '7px',
        minuteHandThickness: '5px',
        secondHandThickness: '3px',
        transitionDuration: '0.08s',
        transitionFunction: 'steps(1, end)'
      })
    },
    {
      title: 'Focus Timer',
      category: 'Functional',
      description: 'Only the seconds hand is visible, using linear motion for timer-like progress.',
      accent: '#0ea5e9',
      stageBackground: 'conic-gradient(from -90deg, #e0f2fe, #f8fafc, #bae6fd, #e0f2fe)',
      cardBackground: '#f8fafc',
      cardColor: '#0f172a',
      borderColor: '#bae6fd',
      shadow: '0 24px 60px rgba(14, 165, 233, 0.16)',
      config: clockConfig({
        showHourHand: false,
        showMinuteHand: false,
        showClockNumbers: false,
        dialColor: '#ffffff',
        bezelColor: '#0f172a',
        bezelThickness: '2px',
        pivotColor: '#0f172a',
        pivotThickness: '12px',
        secondHandColor: 'linear-gradient(to bottom, #0ea5e9 70%, rgba(14, 165, 233, 0.1))',
        hourMarkerColor: '#0f172a',
        minuteMarkerColor: '#cbd5e1',
        hourMarkerThickness: '1%',
        minuteMarkerThickness: '0.7%',
        hourMarkerLength: '4%',
        minuteMarkerLength: '2%',
        secondHandThickness: '6px',
        secondHandLength: '92%',
        secondHandBorderRadius: '999px',
        transitionDuration: '1s',
        transitionFunction: 'linear'
      })
    },
    {
      title: 'Metro Blocks',
      category: 'Marker Shape',
      description: 'A strictly blue preset where oversized rectangular hour markers become graphic blocks.',
      accent: '#0078d4',
      stageBackground: 'linear-gradient(135deg, #eff6ff 0%, #bfdbfe 100%)',
      cardBackground: '#eff6ff',
      cardColor: '#1d4ed8',
      borderColor: '#60a5fa',
      shadow: '0 24px 60px rgba(0, 120, 212, 0.18)',
      config: clockConfig({
        showMinuteMarkers: false,
        dialColor: '#dbeafe',
        bezelColor: '#0078d4',
        bezelThickness: '8px',
        pivotColor: '#0078d4',
        pivotThickness: '24px',
        hourHandColor: '#0078d4',
        minuteHandColor: '#1d4ed8',
        secondHandColor: '#60a5fa',
        hourMarkerColor: '#0078d4',
        clockNumberColor: '#0078d4',
        hourMarkerThickness: '8%',
        hourMarkerLength: '4%',
        hourMarkerBorderRadius: '0',
        markerOffsetPercent: 88,
        numbersOffsetPercent: 68,
        hourHandThickness: '12px',
        minuteHandThickness: '8px',
        secondHandThickness: '2px',
        transitionDuration: '0.5s',
        transitionFunction: 'cubic-bezier(0.76, 0, 0.24, 1)'
      })
    },
    {
      title: 'Aurora Glass',
      category: 'Gradient',
      description: 'Layered cool and warm gradients for an expressive hero-quality clock.',
      accent: '#67e8f9',
      stageBackground:
        'radial-gradient(circle at 12% 10%, rgba(45, 212, 191, 0.55), transparent 34%), radial-gradient(circle at 86% 30%, rgba(251, 113, 133, 0.46), transparent 34%), linear-gradient(135deg, #111827 0%, #312e81 100%)',
      cardBackground: '#111827',
      cardColor: '#f8fafc',
      borderColor: '#334155',
      shadow: '0 30px 80px rgba(49, 46, 129, 0.35)',
      config: clockConfig({
        showClockNumbers: false,
        dialColor:
          'radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.32), transparent 32%), linear-gradient(135deg, rgba(45, 212, 191, 0.82), rgba(99, 102, 241, 0.9), rgba(244, 114, 182, 0.82))',
        bezelColor: 'rgba(255, 255, 255, 0.62)',
        bezelThickness: '2px',
        pivotColor: '#ffffff',
        pivotThickness: '20px',
        hourHandColor: '#ffffff',
        minuteHandColor: '#e0f2fe',
        secondHandColor: '#fde68a',
        hourMarkerColor: '#ffffff',
        minuteMarkerColor: 'rgba(255, 255, 255, 0.42)',
        hourMarkerThickness: '2.8%',
        minuteMarkerThickness: '0.8%',
        hourMarkerLength: '12%',
        minuteMarkerLength: '5%',
        markerOffsetPercent: 92,
        transitionDuration: '0.8s'
      })
    },
    {
      title: 'Solar Flare',
      category: 'Over The Top',
      description: 'A refined version of the wild sun preset with ray-like markers and intense gradients.',
      accent: '#facc15',
      stageBackground: 'radial-gradient(circle at 50% 50%, #fef08a 0%, #fb923c 34%, #dc2626 70%, #7f1d1d 100%)',
      cardBackground: '#1c0702',
      cardColor: '#ffedd5',
      borderColor: '#fb923c',
      shadow: '0 0 0 1px rgba(250, 204, 21, 0.5), 0 30px 90px rgba(220, 38, 38, 0.32)',
      config: clockConfig({
        showClockNumbers: false,
        dialColor:
          'radial-gradient(circle at 50% 50%, #fff7ad 0%, #facc15 22%, #fb923c 48%, #dc2626 78%, #7f1d1d 100%)',
        bezelColor: 'transparent',
        bezelThickness: '0',
        pivotColor: 'radial-gradient(circle, #ffffff 0%, #fef08a 30%, #fb923c 72%)',
        pivotThickness: '58px',
        hourHandColor: 'linear-gradient(to bottom, #7f1d1d 0%, #ffffff 54%, transparent 100%)',
        minuteHandColor: 'linear-gradient(to bottom, #0f766e 0%, #ccfbf1 58%, transparent 100%)',
        secondHandColor: 'linear-gradient(to bottom, #ffffff 0%, #fde047 62%, transparent 100%)',
        hourMarkerColor: 'linear-gradient(to top, #fff7ad 0%, rgba(255, 247, 173, 0) 100%)',
        minuteMarkerColor: 'linear-gradient(to top, rgba(255, 237, 213, 0.8), rgba(255, 237, 213, 0))',
        hourMarkerThickness: '2.4%',
        minuteMarkerThickness: '0.8%',
        hourMarkerLength: '46%',
        minuteMarkerLength: '30%',
        markerOffsetPercent: 101,
        hourHandThickness: '12px',
        minuteHandThickness: '8px',
        secondHandThickness: '3px',
        transitionDuration: '0.8s'
      })
    },
    {
      title: 'Jeweler Bezel',
      category: 'Offset Layout',
      description: 'Independent offsets: markers ride the bezel while numbers pull inward to avoid collisions.',
      accent: '#d6a84f',
      stageBackground: 'linear-gradient(145deg, #0a0a0a 0%, #3b2a12 54%, #111111 100%)',
      cardBackground: '#15110c',
      cardColor: '#fef3c7',
      borderColor: '#a16207',
      shadow: '0 28px 80px rgba(133, 77, 14, 0.28)',
      config: clockConfig({
        dialColor: 'radial-gradient(circle, #111111 0%, #050505 72%)',
        bezelColor: 'conic-gradient(from 18deg, #713f12, #fef3c7, #b45309, #facc15, #713f12)',
        bezelThickness: '16px',
        pivotColor: '#fef3c7',
        pivotThickness: '13px',
        hourHandColor: 'linear-gradient(to bottom, #fef3c7, #b45309)',
        minuteHandColor: 'linear-gradient(to bottom, #ffffff, #a16207)',
        secondHandColor: '#dc2626',
        hourMarkerColor: '#fef3c7',
        minuteMarkerColor: 'rgba(253, 230, 138, 0.55)',
        clockNumberColor: '#fef3c7',
        markerOffsetPercent: 104,
        numbersOffsetPercent: 86,
        hourMarkerThickness: '2%',
        minuteMarkerThickness: '0.5%',
        hourMarkerLength: '10%',
        minuteMarkerLength: '5%',
        hourHandThickness: '9px',
        minuteHandThickness: '6px',
        secondHandThickness: '2px',
        transitionDuration: '0.7s'
      })
    },
    {
      title: 'Pocket Regulator',
      category: 'Classic',
      description: 'A porcelain pocket-watch face with a tiny enamel center instead of a heavy brass hub.',
      accent: '#1d4ed8',
      stageBackground: 'linear-gradient(145deg, #f8fafc 0%, #dbeafe 56%, #bfdbfe 100%)',
      cardBackground: '#f8fafc',
      cardColor: '#172554',
      borderColor: '#bfdbfe',
      shadow: '0 24px 70px rgba(29, 78, 216, 0.16)',
      config: clockConfig({
        dialColor:
          'radial-gradient(circle at 50% 50%, #ffffff 0%, #eff6ff 58%, #dbeafe 100%), repeating-radial-gradient(circle, rgba(29, 78, 216, 0.08) 0 1px, transparent 1px 13px)',
        bezelColor: '#1e3a8a',
        bezelThickness: '5px',
        pivotColor: 'radial-gradient(circle, #ffffff 0%, #1d4ed8 42%, #ffffff 48%)',
        pivotThickness: '16px',
        hourHandColor: '#172554',
        minuteHandColor: '#1e3a8a',
        secondHandColor: '#b91c1c',
        hourMarkerColor: '#1e3a8a',
        minuteMarkerColor: '#93c5fd',
        clockNumberColor: '#172554',
        hourMarkerThickness: '1.4%',
        minuteMarkerThickness: '0.45%',
        hourMarkerLength: '7%',
        minuteMarkerLength: '3%',
        hourHandThickness: '7px',
        minuteHandThickness: '4px',
        secondHandThickness: '2px',
        numbersOffsetPercent: 76,
        transitionDuration: '0.55s'
      })
    }
  ];
}
