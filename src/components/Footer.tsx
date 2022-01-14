import React from 'react';

import '../css/footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-links">
        <ul>
          <li>
            <i className="fab fa-instagram"></i>
          </li>
          <li>
            <i className="fab fa-facebook"></i>
          </li>
        </ul>
      </div>
      <div>
        <h6>&copy; Copyright willydownhouse</h6>
      </div>
    </div>
  );
};

export default Footer;
