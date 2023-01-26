import { crearCartaHTML, pedirCarta, valorCarta } from './';


/**
 * Funición que simula el juego de la computadora 
 * @param {Number} puntosMinimos de la computadora necesita para ganar 
 * @param {HTMLElement} puntosHTML elemento Html para los puntos del pc
 * @param {HTMLElement} divCartasComputadora elemento html
 * @param {Array<String>} deck 
 */

export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = [] ) => {

  if (!puntosMinimos) throw new Error('puntosMinimos son necesarios')
  if (!puntosHTML) throw new Error('Argumento HTML es necesario')


  let puntosComputadora = 0

  do {
      const carta = pedirCarta(deck);

      puntosComputadora = puntosComputadora + valorCarta( carta );
      puntosHTML.innerText = puntosComputadora;
      

      const imgCarta = crearCartaHTML(carta)
      divCartasComputadora.append( imgCarta );

      if( puntosMinimos > 21 ) {
          break;
      }

  } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

  setTimeout(() => {
      if( puntosComputadora === puntosMinimos ) {
          alert('Nadie gana :(');
      } else if ( puntosMinimos > 21 ) {
          alert('Computadora gana')
      } else if( puntosComputadora > 21 ) {
          alert('Jugador Gana');
      } else {
          alert('Computadora Gana')
      }
  }, 100 );
}