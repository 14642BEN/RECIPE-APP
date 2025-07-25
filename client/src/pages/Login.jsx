// client/src/pages/Login.jsx
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/login', form);
      localStorage.setItem('token', res.data.token);
      navigate('/');
    } catch (err) {
      alert('Login failed');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email"
          value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
        <input type="password" placeholder="Password"
          value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
