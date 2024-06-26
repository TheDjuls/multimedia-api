const {User} = require('../models/mongoModels'); // Suponiendo que el archivo donde se encuentra el esquema se llama "User.js"

// Función para crear un nuevo usuario
async function createUser(data) {
    try {
        const newUser = new User(data);
        //busco si ya existe el usuario
        const username = await User.findOne({username: data.username});
        if(username){
            throw new  Error('El nombre de usuario ya está en la bd');
        }
        //busco si ya existe el correo
        const email = await User.findOne({email: data.email});
        if(email){
            throw new  Error('El correo ya está registrado en la bd');
        }
        const savedUser = await newUser.save();
        return savedUser;
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
        const user = await User.find({username: data.username});
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
        throw new Error('Error: ' + error.message);
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
