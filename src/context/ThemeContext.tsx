import React, { createContext, useContext, useState, useEffect } from 'react';

export type Preset = 'Vet Teal' | 'Clinic Blue' | 'Forest' | 'Paw Violet' | 'Sunrise' | 'Rose Care' | 'Warm Amber' | 'Graphite' | 'Ocean' | 'Emerald' | 'Crimson' | 'Midnight';
export type Density = 'Compact' | 'Cozy' | 'Comfortable';

interface ThemeState {
  preset: Preset;
  isDark: boolean;
  fontFamily: string;
  density: Density;
  radius: number;
  colors: {
    primary: string;
    accent: string;
    background: string;
    sidebar: string;
  };
}

const defaultTheme: ThemeState = {
  preset: 'Vet Teal',
  isDark: false,
  fontFamily: 'Manrope',
  density: 'Comfortable',
  radius: 8,
  colors: {
    primary: '174 72% 32%',
    accent: '174 72% 92%',
    background: '0 0% 98%',
    sidebar: '218 40% 25%',
  }
};

interface ThemeContextType {
  theme: ThemeState;
  setTheme: (theme: ThemeState) => void;
  updateTheme: (updates: Partial<ThemeState>) => void;
  resetTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeState>(defaultTheme);

  useEffect(() => {
    // Apply CSS Variables
    const root = document.documentElement;
    if (theme.isDark) {
      root.setAttribute('data-theme', 'dark');
    } else {
      root.removeAttribute('data-theme');
    }

    root.style.setProperty('--primary', theme.colors.primary);
    root.style.setProperty('--accent', theme.colors.accent);
    root.style.setProperty('--bg-sidebar', theme.colors.sidebar);
    root.style.setProperty('--bg-main', theme.colors.background);
    
    root.style.setProperty('--font-family', theme.fontFamily === 'System' ? 'system-ui, sans-serif' : `"${theme.fontFamily}", sans-serif`);
    root.style.setProperty('--radius', `${theme.radius}px`);
    
    const densityMap = {
      'Compact': '0.5rem',
      'Cozy': '0.75rem',
      'Comfortable': '1rem'
    };
    root.style.setProperty('--spacing-density', densityMap[theme.density]);

  }, [theme]);

  const updateTheme = (updates: Partial<ThemeState>) => {
    setThemeState(prev => ({ ...prev, ...updates }));
  };

  const resetTheme = () => setThemeState(defaultTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme: setThemeState, updateTheme, resetTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};
