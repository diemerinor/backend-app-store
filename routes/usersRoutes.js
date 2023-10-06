const UsersControllers = require('../controllers/usersControllers');

module.exports = (app)=>{
    //Obtener todos los usuarios
    app.get('/api/users/getAll',UsersControllers.getAll);

    //Crear un usuario
    app.post('/api/users/create', UsersControllers.register);
}