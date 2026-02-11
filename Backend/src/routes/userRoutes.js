const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { validateUser, validateUserUpdate} = require ('../validators/userValidator');

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', validateCreateUser, userController.createUser);
router.put('/:id', validateUpdateUser, userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;