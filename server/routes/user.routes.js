const express = require('express'); 
const router = express.Router(); 

const userController = require('../controllers/user.controller');
router.get('/', (req, res) => {
    res.redirect('/api/users');
});
router.get('/api/users', userController.getUsers);
router.get('/api/usersByCode/:id', userController.getUserByCode)
router.post('/api/user', userController.createUser);
router.get('/api/user/:id', userController.getUser); 
router.put('/api/user/:id', userController.editUser); 
router.delete('/api/user/:id', userController.deleteUser); 

module.exports = router; 