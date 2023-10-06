const db = require('../config/config');

const User = {};


//OBTENER TODOS LOS USUARIOS
User.getAll = () => {
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM usuario`;
      db.query(sql, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results); // Devuelve directamente los resultados sin mapear
        }
      });
    });
  };

  //CREAR USUARIOS
  User.create = (userData) => {
    return new Promise((resolve, reject) => {
      const sql = `INSERT INTO
      usuario(
          url_imagen,
          userName,
          rut,
          telefono,
          correo,
          activo,
          id_rol,
          password)
          VALUES (?,?,?,?,?,?,?,?)`;
      const values = [userData.url_imagen, userData.userName, userData.rut, userData.telefono, userData.correo, true, 3, userData.password];
  
      db.query(sql, values, (error, results) => {
        if (error) {
          reject(error);
        } else {
          // Si la inserción fue exitosa, puedes devolver el ID del nuevo usuario creado
          resolve(results.insertId);
        }
      });
    });
  };


module.exports = User;