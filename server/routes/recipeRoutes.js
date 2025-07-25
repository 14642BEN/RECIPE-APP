const express = require('express');
const { createRecipe, getRecipes, deleteRecipe } = require('../controllers/recipeController');
const auth = require('../middleware/authMiddleware');
const upload = require('../middleware/uploadMiddleware');

const router = express.Router();

router.get('/', getRecipes);
router.post('/', auth, upload.single('image'), createRecipe);
router.delete('/:id', auth, deleteRecipe);

module.exports = router;
