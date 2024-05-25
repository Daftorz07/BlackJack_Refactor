
export { crearCartaHTML } from './crear-carta-html';
export { crearDeck } from './crear-deck'; 
export { nombre } from './crear-deck'; 
export { pedirCarta } from './pedir-carta';
export { turnoComputadora } from './turno-computadora';
export { valorCarta } from './valor-carta';


// Cuando se usa esta importacion, podemos importar de forma automatica con le Ext. TypeScript Import
// Exportacion por defecto => crearDeck
// Exportacion independiente => nombre
/* import crearDeck, { nombre } from './usecase/crear-deck'; 
import { pedirCarta } from './usecase/pedir-carta';
import { valorCarta } from './usecase/valor-carta'; */