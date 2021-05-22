import mongoose from 'mongoose';

const usuarioSchema=mongoose.Schema({
nombre: {type:String,required:true, maxlength:50},
email:{type:String,required:true,unique:true, maxlength:50},
password: {type:String,required:true},
rol: {type:String,required:true, maxlength:20},
//admin_rol venderor_rol almacenista_rol
estado :{type:Number,default:1},
createdat : {type:Date,default:Date.now}
})

export default mongoose.model('Usuario',usuarioSchema)