const User = require('../models/user');
const userController = {}; 

userController.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users); 
}

userController.createUser = async (req, res) => {
    const employee = new User(req.body)
    await employee.save()
    res.json({
        'status': 'User Saved'
    });
}

userController.getUser = async(req, res) => {
    const employee = await User.findById(req.params.id); 
    res.json(employee);
}

userController.editUser = async(req, res) => {
    const { id } = req.params; 
    const user = {

        codigo:req.body.codigo,
        name: req.body.name, 
        position: req.body.position,
    }

    await User.findByIdAndUpdate(id, {$set: user}, {new: true}); 

    res.json({status: 'User Updated'}); 
}

userController.deleteUser = async (req, res) => {
   await User.findByIdAndRemove(req.params.id);

   res.json({status: 'User Deleted'});      
}

module.exports = userController;