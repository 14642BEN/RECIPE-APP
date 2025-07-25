// client/src/pages/Register.jsx
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/auth/register', form);
      navigate('/login');
    } catch (err) {
      alert('Registration failed');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input type="text" placeholder="Username"
          value={form.username} onChange={e => setForm({ ...form, username: e.target.value })} />
        <input type="email" placeholder="Email"
          value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
        <input type="password" placeholder="Password"
          value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
