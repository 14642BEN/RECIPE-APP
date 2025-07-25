exports.getRecipes = async (req, res) => {
  const { search, category } = req.query;

  let filter = {};

  if (search) {
    filter.title = { $regex: search, $options: 'i' }; // case-insensitive search
  }

  if (category) {
    filter.category = category;
  }

  const recipes = await Recipe.find(filter).populate('createdBy', 'username');
  res.json(recipes);
};
