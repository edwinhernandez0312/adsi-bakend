import mongoose from 'mongoose';

const categoriaSchema =mongoose.Schema({
    nombre: {type:String, required:true,maxlength:50,unique:true},
    descripcion: {type:String, maxlength:255},
    estado:{type:Number, default:1}, // 1 activo 0 inactivo
    createdAt:{type:Date, default:Date.now}
})
//al exportar estoy creando un modelo apartir de lo que cree y el alias de eso es Categoria 
export default mongoose.model('Categoria', categoriaSchema)