import { type RefObject, useEffect, useState } from 'react';
import { Keyboard, Platform, type View } from 'react-native';

/**
 * Cuánto hay que subir una pantalla con una caja de texto abajo para que el teclado no la tape (en puntos; 0 si el
 * teclado no se ve o no tapa nada). Se mide dónde termina `contenedor` en la ventana y dónde empieza el teclado:
 * en Android con la pantalla «de borde a borde» el sistema no achica la app cuando sale el teclado y hay que
 * subirla a mano; si el sistema sí la achica, no tapa nada y da 0. En la web no hay teclado en pantalla.
 */
export function useSubirConElTeclado(contenedor: RefObject<View | null>): number {
  const [subir, setSubir] = useState(0);

  useEffect(() => {
    const ios = Platform.OS === 'ios';
    const alMostrar = Keyboard.addListener(ios ? 'keyboardWillChangeFrame' : 'keyboardDidShow', (evento) => {
      contenedor.current?.measureInWindow((_x, y, _ancho, alto) => {
        setSubir(Math.max(0, y + alto - evento.endCoordinates.screenY));
      });
    });
    const alOcultar = Keyboard.addListener(ios ? 'keyboardWillHide' : 'keyboardDidHide', () => setSubir(0));
    return () => {
      alMostrar.remove();
      alOcultar.remove();
    };
  }, [contenedor]);

  return subir;
}
