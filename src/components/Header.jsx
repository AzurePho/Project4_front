import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Header() {
  const navLinks = [
    { title: "Home", slug: "/" },
    { title: "Games", slug: "/Games" },
    { title: "Genres", slug: "/Genres" },
    { title: "Devs", slug: "/Devs" },
  ];

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    setLoggedIn(false);
    window.location.href = "/";
  };

  return (
    <header className="header">
      <nav>
        <ul>
          {navLinks.map((link, idx) => (
            <Link key={idx} to={link.slug}>
              <li className="header__link">{link.title}</li>
            </Link>
          ))}
          {loggedIn ? (
            <li className="header__auth-links">
              <button onClick={handleLogout}>Logout</button>
            </li>
          ) : (
            <li className="header__auth-links">
              <Link to="/">Login</Link>
              <Link to="/Register">Register</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
