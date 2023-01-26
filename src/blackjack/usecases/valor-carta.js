/**
 * Esta función calcula el valor de una carta
 * @param {Strign<Sring>} carta Ejemplo: '10H'
 * @returns retorna el valor de la carta
 */

export const valorCarta = ( carta ) => {
  const valor = carta.substring(0, carta.length - 1);
  return ( isNaN( valor ) ) ? 
          ( valor === 'A' ) ? 11 : 10
          : valor * 1;
}
