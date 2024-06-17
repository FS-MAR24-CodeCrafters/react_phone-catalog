import { useEffect, useState } from 'react';
import { KEY } from '../constants/key';
import { localStorageService } from '../service/localStorageService';

export type ThemeState = { dark: boolean } | null;
type ThemeActions = { type: 'themeDark' };
export type UpdateTheme = (action: ThemeActions) => void;

export const useThemeLocalStorage = () => {
  const { getItem, setItem } = localStorageService<ThemeState>(KEY.theme);
  const [dark, setDark] = useState<ThemeState>(null);

  const loadTheme = () => {
    const theme = getItem();

    setDark(theme);
  };

  useEffect(() => {
    loadTheme();
    window.addEventListener('storage', loadTheme);

    return () => {
      window.removeEventListener('storage', loadTheme);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateTheme: UpdateTheme = (action) => {
    const goods = getItem();
    let newState: ThemeState;

    switch (action.type) {
      case 'themeDark': {
        if (goods && 'dark' in goods) {
          newState = null;

          break;
        }

        newState = { dark: true };

        break;
      }

      default:
        newState = goods;
    }

    setItem(newState);
    setDark(newState);
  };

  const isThemeDark = !!(dark && 'dark' in dark);

  return { isThemeDark, updateTheme };
};
