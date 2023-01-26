/**
 * 
 * @param {String} carta 
 * @returns {HTMLElement} imagen de retorno
 */
export const crearCartaHTML = (carta) => {
  
  if (!carta) throw new Error('carta es un argumentos obligatorio')

  const imgCarta = document.createElement('img');
  imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
  imgCarta.classList.add('carta');

  return imgCarta
}