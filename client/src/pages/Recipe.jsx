// client/src/pages/Recipe.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';

const Recipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');

  const fetchRecipes = async () => {
    const res = await axios.get('/api/recipes', {
      params: { search, category }
    });
    setRecipes(res.data);
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <div>
      <h2>All Recipes</h2>
      <div>
        <input placeholder="Search..."
          value={search} onChange={e => setSearch(e.target.value)} />
        <select value={category} onChange={e => setCategory(e.target.value)}>
          <option value="">All Categories</option>
          <option>Breakfast</option>
          <option>Lunch</option>
          <option>Dinner</option>
          <option>Dessert</option>
        </select>
        <button onClick={fetchRecipes}>Search</button>
      </div>

      <div>
        {recipes.map(recipe => (
          <div key={recipe._id} style={{ border: '1px solid gray', margin: '10px' }}>
            <h3>{recipe.title}</h3>
            <p><strong>Category:</strong> {recipe.category}</p>
            {recipe.image && (
              <img src={`http://localhost:5000/${recipe.image}`} alt={recipe.title} width="200" />
            )}
            <p>{recipe.instructions.slice(0, 100)}...</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipe;
