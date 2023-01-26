import _ from 'underscore'

/**
 * Esta función crear un nuevo dekc
 * @param {Array<String>} tiposDeCarta Ejemplo: ['C','D','H','S']
 * @param {Array<String>} tiposEspeciales Ejemplo: ['A','J','Q','K']
 * @returns {Array<String>} retorna un deck mezclado
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

  if (!tiposDeCarta || tiposDeCarta.length === 0)
  if (!tiposEspeciales || tiposEspeciales.length === 0)
     throw new Error('tiposEspeciales es obligatiorio como un arreglo de stings')

  let deck = []

  for( let i = 2; i <= 10; i++ ) {
      for( let tipo of tiposDeCarta ) {
          deck.push( i + tipo);
      }
  }

  for( let tipo of tiposDeCarta ) {
      for( let esp of tiposEspeciales ) {
          deck.push( esp + tipo);
      }
  }
  // console.log( deck );
  deck = _.shuffle( deck );
  return deck;
}