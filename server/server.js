require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// ✅ TEST ROUTE — required to show something at /
app.get('/', (req, res) => {
  res.send('✅ Recipe API is running');
});

// OPTIONAL: attach real API routes
// const authRoutes = require('./routes/authRoutes');
// const recipeRoutes = require('./routes/recipeRoutes');
// app.use('/api/auth', authRoutes);
// app.use('/api/recipes', recipeRoutes);

// Connect to MongoDB and start server
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("✅ Connected to MongoDB");
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
})
.catch((err) => {
  console.error("❌ MongoDB connection error:", err);
});
