const mongoose = require('mongoose');

// Definición del esquema del documento
const Schema = mongoose.Schema;
const categoriesSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    cover: String
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

const contentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    theme: {
        type: String,
        required: true
    },
    credits: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    text: {
        type: String,
        default: ""
    }
});

const userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    fullName: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

const User = mongoose.model('User', userSchema);
const Content = mongoose.model('contents', contentSchema);
const Categories = mongoose.model('categories', categoriesSchema);
const Theme = mongoose.model('themes', themeSchema);

module.exports = {Categories,Theme,Content, User};
