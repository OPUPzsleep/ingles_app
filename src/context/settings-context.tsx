import { createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useState } from 'react';

import {
  cancelarRecordatorio,
  configurarNotificaciones,
  pedirPermisos,
  programarRecordatorioDiario,
} from '@/lib/notifications';
import { cargarAjustes, guardarAjustes } from '@/lib/storage';
import { Settings } from '@/types/progress';

interface SettingsContextValue {
  loading: boolean;
  reminderEnabled: boolean;
  setReminderEnabled: (enabled: boolean) => Promise<boolean>;
  focusModeEnabled: boolean;
  setFocusModeEnabled: (enabled: boolean) => void;
}

const SettingsContext = createContext<SettingsContextValue | null>(null);

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<Settings>({
    reminderEnabled: false,
    reminderNotificationId: null,
    focusModeEnabled: false,
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

  const value = useMemo<SettingsContextValue>(
    () => ({
      loading,
      reminderEnabled: settings.reminderEnabled,
      setReminderEnabled,
      focusModeEnabled: settings.focusModeEnabled,
      setFocusModeEnabled,
    }),
    [loading, settings.reminderEnabled, setReminderEnabled, settings.focusModeEnabled, setFocusModeEnabled]
  );

  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
}

export function useSettings() {
  const ctx = useContext(SettingsContext);
  if (!ctx) throw new Error('useSettings debe usarse dentro de SettingsProvider');
  return ctx;
}
