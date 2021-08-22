import { Router, Request, Response } from 'express';

import * as homeController from '../controllers/homeController';
import * as infoController from '../controllers/infoController';
import * as userController from '../controllers/userController'

const router = Router();

router.get('/', homeController.home);

router.get('/contato', infoController.contato);
router.get('/sobre', infoController.sobre);

router.get('/nome', userController.nome);
router.get('/idade', userController.idadeForm);
router.post('/idade-resultado', userController.idadeAction);

export default router;