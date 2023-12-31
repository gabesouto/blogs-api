const { Router } = require('express');
const { userController } = require('../controllers');
const { tokenValidation } = require('../middleware/token.validation');
// const { validateFields,
//    validateFieldsInvalidOrValid } = require('../middleware/loginMiddleware');

const userRouter = Router();

userRouter.post('/user', userController.createUser);

userRouter.get('/user', tokenValidation, userController.getAll);

userRouter.get('/user/:id', userController.getById);

module.exports = userRouter;
