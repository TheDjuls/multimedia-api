const {Content} = require("../models/mongoModels")

// Función para crear un nuevo contenido
async function createContent(data) {
    try {
        const newContent = await Content.create(data);
        return newContent;
    } catch (error) {
        throw new Error('Error al crear el contenido: ' + error.message);
    }
}

// Función para obtener todos los contenidos
async function getAllContents() {
    try {
        const contents = await Content.find().sort({ category: 1, theme: 1 });;
        return contents;
    } catch (error) {
        throw new Error('Error al obtener los contenidos: ' + error.message);
    }
}

// Función para obtener un contenido por su ID
async function getContentById(id) {
    try {
        const content = await Content.findById(id);
        return content;
    } catch (error) {
        throw new Error('Error al obtener el contenido: ' + error.message);
    }
}

// Función para actualizar un contenido por su ID
async function updateContentById(id, newData) {
    try {
        const updatedContent = await Content.findByIdAndUpdate(id, newData, { new: true });
        return updatedContent;
    } catch (error) {
        throw new Error('Error al actualizar el contenido: ' + error.message);
    }
}

// Función para eliminar un contenido por su ID
async function deleteContentById(id) {
    try {
        await Content.findByIdAndDelete(id);
        return 'Contenido eliminado correctamente';
    } catch (error) {
        throw new Error('Error al eliminar el contenido: ' + error.message);
    }
}

// Función para obtener las estadisticas de contenido
async function getStatsContent() {
    try {
        const response = await Content.aggregate([
            {
                $group: {
                    _id: "$category",
                    count: { $sum: 1 }
                }
            }
        ])
        return response;
    } catch (error) {
        throw new Error('Error al obtener el contenido: ' + error.message);
    }
}

async function findContentsBySearchText(searchText) {
    try {
        const result = await Content.find({
            $or: [
                { name: { $regex: searchText, $options: 'i' } }, // Busca coincidencias en el campo 'name'
                { description: { $regex: searchText, $options: 'i' } }, // Busca coincidencias en el campo 'description'
                { theme: { $regex: searchText, $options: 'i' } },
                { category: { $regex: searchText, $options: 'i' } }
            ]
        }).sort({ category: 1, theme: 1, name: 1 });;
        return result;
    } catch (error) {
        throw new Error('Error al buscar los contenidos por texto de búsqueda: ' + error.message);
    }
}

module.exports = {
    createContent,
    getAllContents,
    getContentById,
    updateContentById,
    deleteContentById,
    getStatsContent,
    findContentsBySearchText
};
