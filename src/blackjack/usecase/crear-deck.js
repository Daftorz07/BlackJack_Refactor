import _ from 'underscore';


export const nombre = 'Fernando'; // Exportacion independiente

/**
 * Esta función crea un nuevo deck
 * @param { Array <String> } tiposDeCarta tipos = ['C','D','H','S'];
 * @param { Array <String> } tiposEspeciales especiales = ['A','J','Q','K'];
 * @returns { Array <String>} Retorna un nuevo deck de cartas
 */

// Esta función crea un nuevo deck
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if( !tiposDeCarta || tiposDeCarta.length === 0 ) {
        throw new Error("tiposDeCarta es obligatorio o no puede ser un arreglo vacio");
    }

    if( !tiposEspeciales || tiposEspeciales.length === 0 ) {
        throw new Error("tiposEspeciales es obligatorio o no puede ser un arreglo vacio");
    }

    let deck = [];

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
    console.log( deck );
    return deck;
}

//export default crearDeck; // Exportacion default