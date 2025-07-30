// server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve uploaded images statically
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// ✅ Test route to confirm backend is alive
app.get('/', (req, res) => {
  res.send('✅ Recipe API is running');
});

// Optional: Load your routes here
// const authRoutes = require('./routes/authRoutes');
// const recipeRoutes = require('./routes/recipeRoutes');
// app.use('/api/auth', authRoutes);
// app.use('/api/recipes', recipeRoutes);

// Connect to MongoDB and start server
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("✅ Connected to MongoDB");

  // Important: use Render's injected PORT
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
})
.catch((err) => {
  console.error("❌ MongoDB connection error:", err);
});
