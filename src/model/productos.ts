import { Schema, model } from "mongoose";
import { boolean } from "webidl-conversions";
// Definimos el Schema
const productosSchema = new Schema({
    _id: {
        type: Number // para acceder en la subclase
    },
    _NombreProducto: {
        type: String
    },

    _CategoriaProducto: {
        type: String
    },

    Precio: {
        type: Number
    },

    NotaMedia: {
        type: Number
    },

    _Almacenamiento: {
        type: Array
    }
})

export type iProducto = {
    _id: number | null, // para acceder en la subclase
    _NombreProducto: string | null,
    _CategoriaProducto: string | null,
    _Precio: number | null,
    _NotaMedia: Number | null,
    _Almacenamiento: Array<any> | null,
}

// La colección de la BD (Plural siempre)
export const ProductoDB = model('productos', productosSchema)