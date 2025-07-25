const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

const authRoutes = require('./routes/authRoutes');
const recipeRoutes = require('./routes/recipeRoutes');

app.use('/api/auth', authRoutes);
app.use('/api/recipes', recipeRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => app.listen(5000, () => console.log('Server running on port 5000')))
    .catch(err => console.log(err));
