const {User} = require('../models/mongoModels'); // Suponiendo que el archivo donde se encuentra el esquema se llama "User.js"

// Función para crear un nuevo usuario
async function createUser(data) {
    try {
        const newUser = await User.create(data);
        return newUser;
    } catch (error) {
        throw new Error('Error al crear el usuario: ' + error.message);
    }
}

// Función para obtener todos los usuarios
async function getAllUsers() {
    try {
        const users = await User.find();
        return users;
    } catch (error) {
        throw new Error('Error al obtener los usuarios: ' + error.message);
    }
}

// Función para obtener un usuario por su ID
async function getUserById(id) {
    try {
        const user = await User.findById(id);
        return user;
    } catch (error) {
        throw new Error('Error al obtener el usuario: ' + error.message);
    }
}

// Función para actualizar un usuario por su ID
async function updateUserById(id, newData) {
    try {
        const updatedUser = await User.findByIdAndUpdate(id, newData, { new: true });
        return updatedUser;
    } catch (error) {
        throw new Error('Error al actualizar el usuario: ' + error.message);
    }
}

// Función para eliminar un usuario por su ID
async function deleteUserById(id) {
    try {
        await User.findByIdAndDelete(id);
        return 'Usuario eliminado correctamente';
    } catch (error) {
        throw new Error('Error al eliminar el usuario: ' + error.message);
    }
}

// login
async function login(data) {
    try {
        console.log(data)
        const user = await User.find({email: data.email});
        if(user.length > 0){
            if(user[0].password === data.password){
                return user[0]
            } else {
                throw new Error("Password Incorrecto");
            }
        } else {
            throw new Error("El correo no existe");
        }
        return user;
    } catch (error) {
        throw new Error('Error al crear el usuario: ' + error.message);
    }
}

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById,
    login
};
