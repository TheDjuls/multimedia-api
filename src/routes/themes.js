const express = require('express');
const router = express.Router();
const {
    createTheme,
    getThemes,
    getThemeById,
    updateTheme,
    deleteTheme,
    getThemeByName
} = require('../controllers/themes');

// Ruta para obtener todos los temas
router.get('/themes', async (req, res) => {
    try {
        const themes = await getThemes();
        res.json(themes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Ruta para obtener un tema por su ID
router.get('/themes/:id', async (req, res) => {
    try {
        const theme = await getThemeById(req.params.id);
        if (theme) {
            res.json(theme);
        } else {
            res.status(404).json({ message: 'Tema no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Ruta para obtener un tema por su ID
router.get('/themes/name/:name', async (req, res) => {
    try {
        const theme = await getThemeByName(req.params.name);
        if (theme) {
            res.json(theme);
        } else {
            res.status(404).json({ message: 'Tema no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Ruta para crear un nuevo tema
router.post('/themes', async (req, res) => {
    try {
        const newTheme = await createTheme(req.body);
        res.status(201).json(newTheme);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Ruta para actualizar un tema por su ID
router.put('/themes/:id', async (req, res) => {
    try {
        const updatedTheme = await updateTheme(req.params.id, req.body);
        if (updatedTheme) {
            res.json(updatedTheme);
        } else {
            res.status(404).json({ message: 'Tema no encontrado' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Ruta para eliminar un tema por su ID
router.delete('/themes/:id', async (req, res) => {
    try {
        await deleteTheme(req.params.id);
        res.json({ message: 'Tema eliminado exitosamente' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
