import { NavLink } from 'react-router-dom';

export default function MainNavigation() {
  return (
    <>
      <header className="header">
        <nav>
          <ul className="list">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'active' : '')}
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className={({ isActive }) => (isActive ? 'active' : '')}
                end
              >
                Products
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
