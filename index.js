const express = require('express');
require("./src/mongoConnection.js")
const cors = require('cors')
const categoriesRoutes = require('./src/routes/categories.js');
const themesRoutes = require('./src/routes/themes.js');


const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors())
app.use(express.json());

// Routes
app.use('/api', categoriesRoutes);
app.use('/api', themesRoutes);

// Error handler middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});