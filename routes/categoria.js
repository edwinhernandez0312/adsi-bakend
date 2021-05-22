import { Router } from 'express';
import categoriascontrollers from "../controllers/categoria.js";
import {check} from 'express-validator'
import validarcampos from '../middleware/validar-campos.js';
import {existecategoriaBiId,existecategoriaBYnombre} from '../helpers/categoria.js';
//es un objeto donde estaran peticiones
const router=Router();
router.get('/',categoriascontrollers.categoriaGet);
//le dire a mi ruta que cuando se hable de post estara controlado por categoriaPos
//hacer validacion para saber si la id si esta en la base de datos y lo segundo es el letrero del error
router.get('/:id',[
check('id','no es una ID valida').isMongoId(),
check('id').custom(existecategoriaBiId),
validarcampos
],categoriascontrollers.categoriaGetByid);

router.post('/',[
    //siempre vamos a colocar el validar campos que es ya nuestra validacion de errores
    //el check es lo que le diremos que valide
    check('nombre','el nombre es obligatorio').not().isEmpty(),
    //validar que lo que voy a crear no se repita 
    check('nombre').custom(existecategoriaBYnombre),
    validarcampos
],categoriascontrollers.categoriaPost);

router.put('/:id',[
    check('id','no es una ID valida').isMongoId(),
    check('id').custom(existecategoriaBiId),
    check('nombre').custom(existecategoriaBYnombre),
    validarcampos
],categoriascontrollers.categoriaput);

router.put('/activar/:id',[
    check('id','no es una ID valida').isMongoId(),
check('id').custom(existecategoriaBiId),
validarcampos
],categoriascontrollers.categoriaPutactivar);

router.put('/desactivar/:id',[
    check('id','no es una ID valida').isMongoId(),
check('id').custom(existecategoriaBiId),
validarcampos
],categoriascontrollers.categoriaPutdesactivar);

router.delete('/:id',[
    check('id','no es una ID valida').isMongoId(),
check('id').custom(existecategoriaBiId),
validarcampos
],categoriascontrollers.categoriadelete);

export default router;