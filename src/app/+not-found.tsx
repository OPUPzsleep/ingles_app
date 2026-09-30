import { Redirect, Stack } from 'expo-router';

/**
 * Cualquier dirección que no sea de la app vuelve al Inicio.
 * También cubre la versión de un solo archivo (.html abierto con doble clic): su "dirección"
 * es la ruta del archivo en el disco, que no corresponde a ninguna pantalla.
 */
export default function NoEncontrada() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <Redirect href="/" />
    </>
  );
}
