import { Link } from 'react-router';

export const Menu = () => {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <Link to="/" className="nav-link">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/crews/list" className="nav-link">
              Crews
            </Link>
          </li>
          <li>
            <Link to="/band" className="nav-link">
              Band
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
