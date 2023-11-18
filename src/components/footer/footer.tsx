import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer className="page-footer">
      <div className="logo">
        <NavLink to="/" className="logo__link logo__link--light">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </NavLink>
      </div>

      <div className="copyright">
        <p>© 2023 What to Watch Ltd.</p>
      </div>
    </footer>
  );
}

export default Footer;
