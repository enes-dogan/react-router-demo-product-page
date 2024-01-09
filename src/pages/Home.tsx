import { Link, useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate('/Products');
  }

  return (
    <>
      <h1>HOME PAGE</h1>
      <p>
        <Link to="/products">Go To Products</Link>
      </p>
      <p>
        <button onClick={handleNavigate}>Navigate</button>
      </p>
    </>
  );
}
