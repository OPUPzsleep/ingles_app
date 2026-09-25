import { createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useState } from 'react';

import {
  cancelarRecordatorio,
  configurarNotificaciones,
  pedirPermisos,
  programarRecordatorioDiario,
} from '@/lib/notifications';
import type { ThemeName } from '@/constants/theme';
import { cargarAjustes, guardarAjustes } from '@/lib/storage';
import { Settings } from '@/types/progress';

interface SettingsContextValue {
  loading: boolean;
  reminderEnabled: boolean;
  setReminderEnabled: (enabled: boolean) => Promise<boolean>;
  focusModeEnabled: boolean;
  setFocusModeEnabled: (enabled: boolean) => void;
  textScale: number;
  setTextScale: (scale: number) => void;
  themeName: ThemeName;
  setThemeName: (name: ThemeName) => void;
}

export const TEXT_SCALE_MIN = 0.85;
export const TEXT_SCALE_MAX = 1.6;
export const TEXT_SCALE_STEP = 0.15;

const SettingsContext = createContext<SettingsContextValue | null>(null);

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<Settings>({
    reminderEnabled: false,
    reminderNotificationId: null,
    focusModeEnabled: false,
    textScale: 1,
    themeName: 'auto',
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let activo = true;
    (async () => {
      await configurarNotificaciones();
      const guardado = await cargarAjustes();
      if (!activo) return;

      if (guardado.reminderEnabled) {
        await cancelarRecordatorio(guardado.reminderNotificationId);
        const reminderNotificationId = await programarRecordatorioDiario();
        const actualizado = { ...guardado, reminderNotificationId };
        if (!activo) return;
        setSettings(actualizado);
        guardarAjustes(actualizado);
      } else {
        setSettings(guardado);
      }
      setLoading(false);
    })();
    return () => {
      activo = false;
    };
  }, []);

  const setReminderEnabled = useCallback(
    async (enabled: boolean) => {
      if (!enabled) {
        await cancelarRecordatorio(settings.reminderNotificationId);
        const next: Settings = { ...settings, reminderEnabled: false, reminderNotificationId: null };
        setSettings(next);
        guardarAjustes(next);
        return true;
      }

      const permitido = await pedirPermisos();
      if (!permitido) return false;

      const reminderNotificationId = await programarRecordatorioDiario();
      const next: Settings = { ...settings, reminderEnabled: true, reminderNotificationId };
      setSettings(next);
      guardarAjustes(next);
      return true;
    },
    [settings]
  );

  const setFocusModeEnabled = useCallback(
    (enabled: boolean) => {
      const next: Settings = { ...settings, focusModeEnabled: enabled };
      setSettings(next);
      guardarAjustes(next);
    },
    [settings]
  );

  const setTextScale = useCallback(
    (scale: number) => {
      const clamped = Math.round(Math.min(TEXT_SCALE_MAX, Math.max(TEXT_SCALE_MIN, scale)) * 100) / 100;
      const next: Settings = { ...settings, textScale: clamped };
      setSettings(next);
      guardarAjustes(next);
    },
    [settings]
  );

  const setThemeName = useCallback(
    (name: ThemeName) => {
      const next: Settings = { ...settings, themeName: name };
      setSettings(next);
      guardarAjustes(next);
    },
    [settings]
  );

  const value = useMemo<SettingsContextValue>(
    () => ({
      loading,
      reminderEnabled: settings.reminderEnabled,
      setReminderEnabled,
      focusModeEnabled: settings.focusModeEnabled,
      setFocusModeEnabled,
      textScale: settings.textScale,
      setTextScale,
      themeName: settings.themeName,
      setThemeName,
    }),
    [
      settings.themeName,
      setThemeName,
      loading,
      settings.reminderEnabled,
      setReminderEnabled,
      settings.focusModeEnabled,
      setFocusModeEnabled,
      settings.textScale,
      setTextScale,
    ]
  );

  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
}

/** Tema elegido; 'auto' si se usa fuera del provider. */
export function useThemeName(): ThemeName {
  return useContext(SettingsContext)?.themeName ?? 'auto';
}

/** Modo TDAH activo; false si se usa fuera del provider. */
export function useFocusMode(): boolean {
  return useContext(SettingsContext)?.focusModeEnabled ?? false;
}

/** Escala de texto actual; 1 si se usa fuera del provider. */
export function useTextScale() {
  return useContext(SettingsContext)?.textScale ?? 1;
}

export function useSettings() {
  const ctx = useContext(SettingsContext);
  if (!ctx) throw new Error('useSettings debe usarse dentro de SettingsProvider');
  return ctx;
}
