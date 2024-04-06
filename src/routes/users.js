const express = require('express');
const router = express.Router();
const {
    createUser,
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById,
    login
} = require('../controllers/users'); // Suponiendo que el archivo donde se encuentran las funciones CRUD se llama "userController.js"

// Ruta para crear un nuevo usuario
router.post('/login', async (req, res) => {
    try {
        const response = await login(req.body);
        res.status(201).json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
// Ruta para crear un nuevo usuario
router.post('/users', async (req, res) => {
    try {
        const newUser = await createUser(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Ruta para obtener todos los usuarios
router.get('/users', async (req, res) => {
    try {
        const users = await getAllUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Ruta para obtener un usuario por su ID
router.get('/users/:id', async (req, res) => {
    try {
        const user = await getUserById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Ruta para actualizar un usuario por su ID
router.put('/users/:id', async (req, res) => {
    try {
        const updatedUser = await updateUserById(req.params.id, req.body);
        res.json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Ruta para eliminar un usuario por su ID
router.delete('/users/:id', async (req, res) => {
    try {
        const result = await deleteUserById(req.params.id);
        res.json({ message: result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
