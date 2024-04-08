const {Categories} = require("../models/mongoModels")


const getCategories = async (req, res) => {
    const categories = await Categories.find()
    return categories
};

async function createCategory(name) {
    try {
        const newCategory = new Categories({ name });
        const savedCategory = await newCategory.save();
        return savedCategory;
    } catch (error) {
        console.error('Error al crear la categoría:', error);
        throw error;
    }
}

async function getCategoryById(categoryId) {
    try {
        const category = await Categories.findById(categoryId);
        return category;
    } catch (error) {
        console.error('Error al obtener la categoría por ID:', error);
        throw error;
    }
}

async function getCategoryByName(categoryName) {
    try {
        const category = await Categories.findOne({name: categoryName});
        return category;
    } catch (error) {
        console.error('Error al obtener la categoría por ID:', error);
        throw error;
    }
}

async function updateCategory(categoryId, newName) {
    try {
        const updatedCategory = await Categories.findByIdAndUpdate(categoryId, { name: newName }, { new: true });
        return updatedCategory;
    } catch (error) {
        console.error('Error al actualizar la categoría:', error);
        throw error;
    }
}

async function deleteCategory(categoryId) {
    try {
        await Categories.findByIdAndDelete(categoryId);
    } catch (error) {
        console.error('Error al eliminar la categoría:', error);
        throw error;
    }
}

module.exports = {
    createCategory,
    getCategories,
    getCategoryById,
    updateCategory,
    deleteCategory,
    getCategoryByName
}