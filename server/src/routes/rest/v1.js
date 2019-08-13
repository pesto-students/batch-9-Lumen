
import { Router } from 'express'
import userController from '../../controller/apis/user'

let router = Router();
router.use('/users', userController);

export {
    router
}