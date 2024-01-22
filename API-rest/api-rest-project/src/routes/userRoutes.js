import { Router } from 'express';
import userController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não deveria existir, normalmente os sistemas nçao usam
router.get('/', loginRequired, userController.index);
router.get('/show/', loginRequired, userController.show);

router.post('/', loginRequired, userController.create);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;
