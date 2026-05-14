import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import type { Preset, Density } from '../context/ThemeContext';
import styles from './ThemeSettings.module.css';
import { Palette, Droplet, Type, LayoutTemplate, RotateCcw, Save } from 'lucide-react';
import { PreviewDashboard } from '../components/PreviewDashboard'; // For live preview

const HSLSliderGroup: React.FC<{ label: string; value: string; onChange: (val: string) => void }> = ({ label, value, onChange }) => {
  // Parse "H S% L%"
  const match = value.match(/(\d+)\s+(\d+)%\s+(\d+)%/);
  const h = match ? parseInt(match[1]) : 0;
  const s = match ? parseInt(match[2]) : 0;
  const l = match ? parseInt(match[3]) : 0;

  const handleH = (e: React.ChangeEvent<HTMLInputElement>) => onChange(`${e.target.value} ${s}% ${l}%`);
  const handleS = (e: React.ChangeEvent<HTMLInputElement>) => onChange(`${h} ${e.target.value}% ${l}%`);
  const handleL = (e: React.ChangeEvent<HTMLInputElement>) => onChange(`${h} ${s}% ${e.target.value}%`);

  return (
    <div className={styles.sliderGroup}>
      <div className={styles.sliderHeader}>
        <label>{label}</label>
        <span className={styles.sliderValueText}>{h} {s}% {l}%</span>
        <div className={styles.colorPreviewSmall} style={{backgroundColor: `hsl(${value})`}}></div>
      </div>
      
      <div className={styles.sliderRow}>
        <span>H</span>
        <input type="range" min="0" max="360" value={h} onChange={handleH} className={styles.rangeInputH} style={{background: `linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%)`}} />
        <span className={styles.sliderVal}>{h}</span>
      </div>
      <div className={styles.sliderRow}>
        <span>S</span>
        <input type="range" min="0" max="100" value={s} onChange={handleS} className={styles.rangeInputS} style={{background: `linear-gradient(to right, hsl(${h}, 0%, ${l}%), hsl(${h}, 100%, ${l}%))`}} />
        <span className={styles.sliderVal}>{s}</span>
      </div>
      <div className={styles.sliderRow}>
        <span>L</span>
        <input type="range" min="0" max="100" value={l} onChange={handleL} className={styles.rangeInputL} style={{background: `linear-gradient(to right, hsl(${h}, ${s}%, 0%), hsl(${h}, ${s}%, 50%), hsl(${h}, ${s}%, 100%))`}} />
        <span className={styles.sliderVal}>{l}</span>
      </div>
    </div>
  );
};

const PRESETS: Record<Preset, { primary: string; sidebar: string; accent: string }> = {
  'Vet Teal': { primary: '174 72% 32%', sidebar: '218 40% 25%', accent: '174 72% 92%' },
  'Clinic Blue': { primary: '212 100% 48%', sidebar: '222 47% 11%', accent: '212 100% 95%' },
  'Forest': { primary: '142 71% 29%', sidebar: '145 63% 15%', accent: '142 71% 90%' },
  'Paw Violet': { primary: '262 83% 58%', sidebar: '260 60% 15%', accent: '262 83% 95%' },
  'Sunrise': { primary: '24 94% 50%', sidebar: '20 50% 20%', accent: '24 94% 90%' },
  'Rose Care': { primary: '346 87% 60%', sidebar: '340 50% 20%', accent: '346 87% 95%' },
  'Warm Amber': { primary: '43 96% 56%', sidebar: '35 50% 20%', accent: '43 96% 90%' },
  'Graphite': { primary: '210 10% 40%', sidebar: '210 20% 15%', accent: '210 10% 90%' },
  'Ocean': { primary: '199 89% 48%', sidebar: '200 60% 15%', accent: '199 89% 90%' },
  'Emerald': { primary: '160 84% 39%', sidebar: '160 60% 15%', accent: '160 84% 90%' },
  'Crimson': { primary: '348 83% 47%', sidebar: '350 60% 15%', accent: '348 83% 90%' },
  'Midnight': { primary: '228 60% 50%', sidebar: '230 60% 15%', accent: '228 60% 90%' }
};

export const ThemeSettings: React.FC = () => {
  const { theme, updateTheme, resetTheme } = useTheme();
  const [activeTab, setActiveTab] = useState<'presets' | 'colors' | 'type' | 'layout'>('presets');

  const handlePresetSelect = (preset: Preset) => {
    updateTheme({
      preset,
      colors: {
        ...theme.colors,
        primary: PRESETS[preset].primary,
        sidebar: PRESETS[preset].sidebar,
        accent: PRESETS[preset].accent
      }
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <div className={styles.iconWrapper}>
            <Palette size={24} color="white" />
          </div>
          <div>
            <h1>Theme</h1>
            <p>Personalize your dashboard. Changes preview live and apply only to you.</p>
            <div className={styles.meta}>
              Active: <strong>{theme.preset}</strong> • {theme.isDark ? 'Dark Mode' : 'Light Mode'} • {theme.density}
            </div>
          </div>
        </div>
        <div className={styles.headerActions}>
          <button className={styles.resetBtn} onClick={resetTheme}>
            <RotateCcw size={16} /> Reset
          </button>
          <button className={styles.saveBtn} onClick={() => alert('Theme Saved!')}>
            <Save size={16} /> Save changes
          </button>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.settingsPanel}>
          <div className={styles.tabs}>
            <button className={`${styles.tab} ${activeTab === 'presets' ? styles.activeTab : ''}`} onClick={() => setActiveTab('presets')}>
              <Palette size={16} /> Presets
            </button>
            <button className={`${styles.tab} ${activeTab === 'colors' ? styles.activeTab : ''}`} onClick={() => setActiveTab('colors')}>
              <Droplet size={16} /> Colors
            </button>
            <button className={`${styles.tab} ${activeTab === 'type' ? styles.activeTab : ''}`} onClick={() => setActiveTab('type')}>
              <Type size={16} /> Type
            </button>
            <button className={`${styles.tab} ${activeTab === 'layout' ? styles.activeTab : ''}`} onClick={() => setActiveTab('layout')}>
              <LayoutTemplate size={16} /> Layout
            </button>
          </div>

          <div className={styles.tabContent}>
            {activeTab === 'presets' && (
              <div className={styles.presetsGrid}>
                <div className={styles.modeToggle}>
                  <span className={styles.label}>Appearance</span>
                  <div className={styles.toggleGroup}>
                    <button className={`${styles.toggleBtn} ${!theme.isDark ? styles.activeToggle : ''}`} onClick={() => updateTheme({ isDark: false })}>Light</button>
                    <button className={`${styles.toggleBtn} ${theme.isDark ? styles.activeToggle : ''}`} onClick={() => updateTheme({ isDark: true })}>Dark</button>
                  </div>
                </div>
                
                <div className={styles.presetList}>
                  {Object.entries(PRESETS).map(([name, colors]) => (
                    <button 
                      key={name}
                      className={`${styles.presetCard} ${theme.preset === name ? styles.activePreset : ''}`}
                      onClick={() => handlePresetSelect(name as Preset)}
                    >
                      <div className={styles.presetPreview}>
                        <div className={styles.presetSidebar} style={{backgroundColor: `hsl(${colors.sidebar})`}}></div>
                        <div className={styles.presetMain}>
                          <div className={styles.presetHeader} style={{backgroundColor: `hsl(${colors.primary})`}}></div>
                        </div>
                      </div>
                      <span className={styles.presetName}>{name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'colors' && (
              <div className={styles.colorSettings}>
                 <p className={styles.helpText}>Editing <strong>{theme.isDark ? 'Dark' : 'Light'} mode</strong> tokens. Switch mode in Presets tab.</p>
                 
                 <HSLSliderGroup label="Primary" value={theme.colors.primary} onChange={(v) => updateTheme({ colors: { ...theme.colors, primary: v }})} />
                 <HSLSliderGroup label="Accent" value={theme.colors.accent} onChange={(v) => updateTheme({ colors: { ...theme.colors, accent: v }})} />
                 <HSLSliderGroup label="Background" value={theme.colors.background} onChange={(v) => updateTheme({ colors: { ...theme.colors, background: v }})} />
                 <HSLSliderGroup label="Sidebar" value={theme.colors.sidebar} onChange={(v) => updateTheme({ colors: { ...theme.colors, sidebar: v }})} />
                 
              </div>
            )}

            {activeTab === 'type' && (
              <div className={styles.typeSettings}>
                <label className={styles.label}>Font Family</label>
                <div className={styles.fontGrid}>
                  {['Inter', 'Geist', 'Manrope', 'System'].map(font => (
                    <button 
                      key={font}
                      className={`${styles.fontCard} ${theme.fontFamily === font ? styles.activeFont : ''}`}
                      onClick={() => updateTheme({ fontFamily: font })}
                      style={{fontFamily: font === 'System' ? 'system-ui' : font}}
                    >
                      <span className={styles.fontName}>{font}</span>
                      <span className={styles.fontSample}>The quick brown fox</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'layout' && (
              <div className={styles.layoutSettings}>
                <div className={styles.settingGroup}>
                  <label className={styles.label}>Corner radius</label>
                  <input type="range" min="0" max="24" value={theme.radius} onChange={(e) => updateTheme({ radius: parseInt(e.target.value) })} className={styles.rangeInput} />
                  <div className={styles.radiusPreviewGrid}>
                    <div className={styles.radiusPreviewBox} style={{borderRadius: 0}}></div>
                    <div className={styles.radiusPreviewBox} style={{borderRadius: '8px'}}></div>
                    <div className={styles.radiusPreviewBox} style={{borderRadius: '16px'}}></div>
                  </div>
                </div>

                <div className={styles.settingGroup}>
                  <label className={styles.label}>Density</label>
                  <div className={styles.densityGrid}>
                    {(['Compact', 'Cozy', 'Comfortable'] as Density[]).map(d => (
                      <button 
                        key={d}
                        className={`${styles.densityCard} ${theme.density === d ? styles.activeDensity : ''}`}
                        onClick={() => updateTheme({ density: d })}
                      >
                        <div className={styles.densityIcon} data-density={d}>
                          <div className={styles.line}></div>
                          <div className={styles.line}></div>
                          <div className={styles.line}></div>
                        </div>
                        {d}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className={styles.previewPanel}>
          <div className={styles.previewHeader}>
            <div>
              <h3>Live preview</h3>
              <p>See changes across the entire dashboard</p>
            </div>
          </div>
          
          <div className={styles.previewFrameWrapper}>
            <div className={styles.previewFrame}>
              <div className={styles.browserBar}>
                 <div className={styles.dots}><span></span><span></span><span></span></div>
                 <div className={styles.urlBar}>app.vet/dashboard</div>
              </div>
              <div className={styles.previewContent}>
                <div className={styles.scaledDashboard}>
                  <PreviewDashboard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
