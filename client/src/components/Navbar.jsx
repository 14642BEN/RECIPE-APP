// client/src/components/Navbar.jsx
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav style={{ padding: '10px', background: '#f0f0f0' }}>
      <Link to="/">Home</Link> |{" "}
      {isLoggedIn && <Link to="/add">Add Recipe</Link>} |{" "}
      {isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <>
          <Link to="/login">Login</Link> |{" "}
          <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
