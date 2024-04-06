const {Theme} = require("../models/mongoModels")

async function createTheme(themeData) {
    try {
        const newTheme = new Theme(themeData);
        const savedTheme = await newTheme.save();
        console.log('Tema creado exitosamente:', savedTheme);
        return savedTheme;
    } catch (error) {
        console.error('Error al crear el tema:', error);
        throw error;
    }
}

// Función para obtener todos los temas
async function getThemes() {
    try {
        const themes = await Theme.find({});
        console.log('Temas encontrados:', themes);
        return themes;
    } catch (error) {
        console.error('Error al obtener los temas:', error);
        throw error;
    }
}

// Función para obtener un tema por su ID
async function getThemeById(themeId) {
    try {
        const theme = await Theme.findById(themeId);
        console.log('Tema encontrado por ID:', theme);
        return theme;
    } catch (error) {
        console.error('Error al obtener el tema por ID:', error);
        throw error;
    }
}

// Función para actualizar un tema por su ID
async function updateTheme(themeId, newData) {
    try {
        const updatedTheme = await Theme.findByIdAndUpdate(themeId, newData, { new: true });
        console.log('Tema actualizado:', updatedTheme);
        return updatedTheme;
    } catch (error) {
        console.error('Error al actualizar el tema:', error);
        throw error;
    }
}

// Función para eliminar un tema por su ID
async function deleteTheme(themeId) {
    try {
        await Theme.findByIdAndDelete(themeId);
        console.log('Tema eliminado exitosamente');
    } catch (error) {
        console.error('Error al eliminar el tema:', error);
        throw error;
    }
}

module.exports = {
    createTheme,
    getThemes,
    getThemeById,
    updateTheme,
    deleteTheme
};