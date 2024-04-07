const express = require('express');
const router = express.Router();
const {
    createCategory,
    getCategories,
    getCategoryById,
    updateCategory,
    deleteCategory,
    getCategoryByName
} = require('../controllers/categories');

router.get('/categories/name/:name', async (req, res) => {
    try {
        const category = await getCategoryByName(req.params.name);
        if (category) {
            res.json(category);
        } else {
            res.status(404).json({ message: 'Categoría no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Obtener todas las categorías
router.get('/categories', async (req, res) => {
    try {
        const categories = await getCategories();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Obtener una categoría por su ID
router.get('/categories/:id', async (req, res) => {
    try {
        const category = await getCategoryById(req.params.id);
        if (category) {
            res.json(category);
        } else {
            res.status(404).json({ message: 'Categoría no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Crear una nueva categoría
router.post('/categories', async (req, res) => {
    try {
        const newCategory = await createCategory(req.body.name);
        res.status(201).json(newCategory);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Actualizar una categoría por su ID
router.put('/categories/:id', async (req, res) => {
    try {
        const updatedCategory = await updateCategory(req.params.id, req.body.name);
        if (updatedCategory) {
            res.json(updatedCategory);
        } else {
            res.status(404).json({ message: 'Categoría no encontrada' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Eliminar una categoría por su ID
router.delete('/categories/:id', async (req, res) => {
    try {
        await deleteCategory(req.params.id);
        res.json({ message: 'Categoría eliminada exitosamente' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
