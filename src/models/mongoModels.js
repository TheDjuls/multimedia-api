const mongoose = require('mongoose');

// Definición del esquema del documento
const Schema = mongoose.Schema;
const categoriesSchema = new Schema({
    name: String
});

const themeSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    permission: {
        allowVideo: Boolean,
        allowImage: Boolean,
        allowText: Boolean
    },
    userPermission: {
        admin: {
            C: Boolean,
            R: Boolean,
            U: Boolean,
            D: Boolean
        },
        reader: {
            C: Boolean,
            R: Boolean,
            U: Boolean,
            D: Boolean
        },
        writer: {
            C: Boolean,
            R: Boolean,
            U: Boolean,
            D: Boolean
        }
    }
});

// Creación del modelo basado en el esquema
const Categories = mongoose.model('categories', categoriesSchema);
const Theme = mongoose.model('themes', themeSchema);

module.exports = {Categories,Theme};
