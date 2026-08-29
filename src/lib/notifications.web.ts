export async function configurarNotificaciones() {}

export async function pedirPermisos(): Promise<boolean> {
  return false;
}

export async function cancelarRecordatorio(_notificationId: string | null) {}

export async function programarRecordatorioDiario(
  _hour?: number,
  _minute?: number
): Promise<string | null> {
  return null;
}
