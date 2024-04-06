const express = require('express');
const router = express.Router();
const {
    createContent,
    getAllContents,
    getContentById,
    updateContentById,
    deleteContentById,
    getStatsContent,
    findContentsBySearchText
} = require('../controllers/contents'); // Suponiendo que el archivo donde se encuentran las funciones CRUD se llama "contentController.js"

router.get('/contents/stats', async (req, res) => {
    try {
        const result = await getStatsContent();
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Ruta para crear un nuevo contenido
router.post('/contents/search', async (req, res) => {
    try {
        const search = await findContentsBySearchText(req.body.search);
        res.status(201).json(search);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Ruta para crear un nuevo contenido
router.post('/contents', async (req, res) => {
    try {
        const newContent = await createContent(req.body);
        res.status(201).json(newContent);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Ruta para obtener todos los contenidos
router.get('/contents', async (req, res) => {
    try {
        const contents = await getAllContents();
        res.json(contents);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Ruta para obtener un contenido por su ID
router.get('/contents/:id', async (req, res) => {
    try {
        const content = await getContentById(req.params.id);
        if (!content) {
            return res.status(404).json({ message: 'Contenido no encontrado' });
        }
        res.json(content);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Ruta para actualizar un contenido por su ID
router.put('/contents/:id', async (req, res) => {
    try {
        const updatedContent = await updateContentById(req.params.id, req.body);
        res.json(updatedContent);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Ruta para eliminar un contenido por su ID
router.delete('/contents/:id', async (req, res) => {
    try {
        const result = await deleteContentById(req.params.id);
        res.json({ message: result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});



module.exports = router;
