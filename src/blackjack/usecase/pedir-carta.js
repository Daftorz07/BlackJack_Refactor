


/**
 * //Esta funcion me permite tomar una carta del deck
 * @param {Array <String>} deck Es un arreglo de strings
 * @returns { String } Carta tomada del Deck 
 */

export const pedirCarta = ( deck ) => {

    if (!deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}