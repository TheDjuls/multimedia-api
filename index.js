const express = require('express');
require("./src/mongoConnection.js")
const cors = require('cors')
const categoriesRoutes = require('./src/routes/categories.js');
const themesRoutes = require('./src/routes/themes.js');
const contentsRoutes = require('./src/routes/contents.js');
const usersRoutes = require('./src/routes/users.js');


const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors())
app.use(express.json());

// Routes
const prefix = '/api'
app.use(prefix, categoriesRoutes);
app.use(prefix, themesRoutes);
app.use(prefix, contentsRoutes);
app.use(prefix, usersRoutes);

// Error handler middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});