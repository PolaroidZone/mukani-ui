import FooterMid from "./FooterMid";

import "../../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer-main">
      <div className="footer-top"></div>
      <FooterMid />
      <div className="footer-bottom">
        <div className="footer-copy-write">
          <p>© All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
