import {Router} from 'express';
import usuariocontroller from '../controllers/usuario.js';

const router=new Router();

router.get('/',usuariocontroller.usuarioget);

router.get('/:id',usuariocontroller.usuariogetById);

router.post('/',usuariocontroller.usuariospost);

router.post('/login',usuariocontroller.login);

router.put('/:id',usuariocontroller.usuarioput);

router.put('/activar/:id',usuariocontroller.usuarioputactivar);

router.put('/desactivar/:id',usuariocontroller.usuarioputdesactivar);

export default router;
