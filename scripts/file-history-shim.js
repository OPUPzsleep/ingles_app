// "Historial virtual" para cuando la web se abre como archivo suelto (file://).
//
// Al abrir un .html desde el disco, el navegador no deja que la página cambie su propia dirección:
// history.pushState / replaceState lanzan un error de seguridad, y el enrutador de la app las usa en
// cada cambio de pantalla. Aquí se sustituyen por un historial en memoria: la navegación funciona igual,
// solo que la barra de direcciones no cambia.
//
// Con http:// o https:// no hace nada. Se incrusta en el HTML antes que el resto del código
// (lo hace scripts/build-single-html.js).
(function () {
  if (location.protocol !== 'file:') return;

  var entradas = [{ state: null }];
  var indice = 0;

  function definir(nombre, obtener) {
    Object.defineProperty(history, nombre, { get: obtener, configurable: true });
  }

  definir('state', function () {
    return entradas[indice].state;
  });
  definir('length', function () {
    return entradas.length;
  });

  history.pushState = function (state) {
    entradas = entradas.slice(0, indice + 1);
    entradas.push({ state: state === undefined ? null : state });
    indice = entradas.length - 1;
  };

  history.replaceState = function (state) {
    entradas[indice] = { state: state === undefined ? null : state };
  };

  // Igual que el navegador: solo se mueve si hay a dónde ir, y avisa con "popstate" un instante después.
  history.go = function (pasos) {
    var destino = indice + (pasos || 0);
    if (!pasos || destino < 0 || destino >= entradas.length) return;
    indice = destino;
    setTimeout(function () {
      window.dispatchEvent(new PopStateEvent('popstate', { state: entradas[indice].state }));
    }, 0);
  };

  history.back = function () {
    history.go(-1);
  };

  history.forward = function () {
    history.go(1);
  };
})();
