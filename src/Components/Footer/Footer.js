import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-link-brand">
        <Link to="/productos">Winehouse</Link>
      </div>
      <div className="copywrite">
        <a href="https://github.com/MichelleTicchetti">
          © 2022 by Michelle Ticchetti
        </a>
      </div>
    </footer>
  );
};
