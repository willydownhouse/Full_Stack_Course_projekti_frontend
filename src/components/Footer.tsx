import React from 'react';

import '../css/footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-links">
        <ul className="footer-list">
          <li>
            <i className="fab fa-instagram"></i>
          </li>
          <li>
            <i className="fab fa-facebook"></i>
          </li>
        </ul>
      </div>
      <div>
        <h6>&copy; 2022 willydownhouse, Inc.</h6>
      </div>
    </div>
  );
};

export default Footer;
