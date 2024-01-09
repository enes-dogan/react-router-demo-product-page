import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <>
      <h1>HOME PAGE</h1>
      <p>
        <Link to="/products">Go To Products</Link>
      </p>
    </>
  );
}
