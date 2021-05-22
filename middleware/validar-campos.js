import {validationResult} from 'express-validator'

// me devuelve todos los posibles errores al momento de ejecutar cualquiera de las rutas 
const validarcampos=(req, res,next)=>{
    //el next es para que siga validando
const errors=validationResult(req)
if( ! errors.isEmpty()){
    return res.status(400).json(errors)
}
next();
}

export default validarcampos;