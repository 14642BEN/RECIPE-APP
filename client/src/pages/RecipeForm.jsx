// client/src/pages/RecipeForm.jsx
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RecipeForm = () => {
  const [form, setForm] = useState({
    title: '',
    ingredients: '',
    instructions: '',
    category: '',
    image: null
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const data = new FormData();
    data.append('title', form.title);
    data.append('ingredients', JSON.stringify(form.ingredients.split(',')));
    data.append('instructions', form.instructions);
    data.append('category', form.category);
    if (form.image) data.append('image', form.image);

    try {
      await axios.post('/api/recipes', data, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      });
      navigate('/');
    } catch (err) {
      alert('Failed to submit recipe');
    }
  };

  return (
    <div>
      <h2>Add Recipe</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input type="text" placeholder="Title"
          value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} />
        <input type="text" placeholder="Ingredients (comma separated)"
          value={form.ingredients} onChange={e => setForm({ ...form, ingredients: e.target.value })} />
        <textarea placeholder="Instructions"
          value={form.instructions} onChange={e => setForm({ ...form, instructions: e.target.value })} />
        <select value={form.category} onChange={e => setForm({ ...form, category: e.target.value })}>
          <option value="">Select Category</option>
          <option>Breakfast</option>
          <option>Lunch</option>
          <option>Dinner</option>
          <option>Dessert</option>
        </select>
        <input type="file" onChange={e => setForm({ ...form, image: e.target.files[0] })} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RecipeForm;
