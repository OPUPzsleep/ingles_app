import { type Href, type useRouter } from 'expo-router';

type Enrutador = ReturnType<typeof useRouter>;

/** Pantallas que son pestañas: se cambia de pestaña en vez de apilar otra encima del chat. */
const PESTANAS = new Set(['/', '/aprender', '/practicar', '/tarjetas', '/vocabulario']);

/** Separa una ruta como «/vocabulario?vista=frases&tema=hotel» en su dirección y sus parámetros. */
function partirRuta(ruta: string): { pathname: string; params: Record<string, string> } {
  const [pathname, consulta = ''] = ruta.split('?');
  const params: Record<string, string> = {};
  for (const par of consulta.split('&')) {
    if (!par) continue;
    const [clave, valor = ''] = par.split('=');
    params[decodeURIComponent(clave)] = decodeURIComponent(valor);
  }
  return { pathname, params };
}

/**
 * Abre una dirección de la app que dio el asistente. Las pestañas se abren cambiando de pestaña; lo demás (una
 * unidad, un concepto, el mapa de tiempos) se apila sobre el chat, para volver a él con la flecha de atrás.
 */
export function abrirRuta(router: Enrutador, ruta: string) {
  const { pathname, params } = partirRuta(ruta);
  const destino = (Object.keys(params).length > 0 ? { pathname, params } : pathname) as unknown as Href;
  if (PESTANAS.has(pathname)) router.navigate(destino);
  else router.push(destino);
}
