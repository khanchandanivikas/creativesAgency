import "../style/footer.css";

const Footer = () => {
  return (
    <footer className="myFooter">
      <h2 className="footer-heading">sunnyside</h2>
      <ul className="footer-links">
        <li>
          <a href="/" className="footer-link">
            About
          </a>
        </li>
        <li>
          <a href="/" className="footer-link">
            Services
          </a>
        </li>
        <li>
          <a href="/" className="footer-link">
            Projects
          </a>
        </li>
      </ul>
      <ul className="social">
        <li>
          <a href="/" className="footer-link">
            <i className="fab fa-facebook-square"></i>
          </a>
        </li>
        <li>
          <a href="/" className="footer-link">
            <i className="fab fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="/" className="footer-link">
            <i className="fab fa-pinterest"></i>
          </a>
        </li>
        <li>
          <a href="/" className="footer-link">
            <i className="fab fa-twitter"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
