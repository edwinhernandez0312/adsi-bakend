import Usuario from '../models/usuario.js'
import bcryptjs from 'bcryptjs';

const usuariocontroller = {
    //me va alistar todo mostrar todo el listado de usuarios
   usuarioget: async (req, res) => {
    const query=req.query.value
    //para buscar
       const usuarios=await Usuario.find({
           $or:[
               {nombre:new RegExp(query, 'i')},
               {email: new RegExp(query, 'i') },
               {rol: new RegExp(query, 'i') }
            ]
       });
      
       res.json({
           usuarios
       })
   },
   usuariogetById: async (req, res) => {
   const {id}=req.params
   const usuario=await Usuario.findById(id)

   res.json({
       usuario
   })
   },
   usuariospost: async (req, res) => {
       const {nombre,email,password,rol}=req.body;
       const usuario=new Usuario({nombre,email,password,rol});
       //aca estoy haciendo la variable que me dira cuanto va a encriptar si la dejo vacia sera por default 10
       const salt=bcryptjs.genSaltSync();
        // aca le encripto la password
       usuario.password=bcryptjs.hashSync(password,salt)
       
       usuario.save();

       res.json({
           usuario
       })
   },
   login: async (req, res) => {
   const {email,password}=req.body;
   //verificar el email en la base de datos
   const usuario=await Usuario.findOne({email})
   if(! usuario){
    return res.json({
           msg:'usuario/password no son correctos email'
       })
       
   }
   //verificar el estado activo o inactivo
   if(usuario.estado===0){
    return res.json({
        msg:'usuario/password no son correctos estado'
    })
   }
   //verificar la contraseña 
   //el primer parametro en la contraseña que me llega la desincriptada
   const validarPassword=bcryptjs.compareSync(password,usuario.password);
   if(! validarPassword){
    return res.json({
        msg:'usuario/password no son correctos password'
    })
   }
   //generar el inicio de sesion
   
   },
   usuarioput: async (req, res) => {
       const {id}=req.params

       const {_id,email, createdAt,estado,__v,rol,password,...resto}=req.body

       if (password){
        const salt=bcryptjs.genSaltSync();
       resto.password=bcryptjs.hashSync(password,salt)
       }

       const usuario=await Usuario.findByIdAndUpdate(id, resto)

       res.json({
           usuario
       })
   },
   usuarioputactivar: async (req, res) => {
       const {id}=req.params
       const usuario=await Usuario.findByIdAndUpdate(id,{estado:1}) 

       res.json({usuario})
   },
   usuarioputdesactivar: async (req, res) => {
    const {id}=req.params
    const usuario=await Usuario.findByIdAndUpdate(id,{estado:0}) 

    res.json({usuario})
}
}

export default usuariocontroller;