import React from 'react'

import './index.scss'
import logo from 'assets/images/logo-green-1x.png'
export const Footer: React.FC = () => {
  return (
    <section className="footer-section p-section">
      <div className="container footer">
        <div className="footer__img-box">
          <img src={logo} alt="logo" />
        </div>
        <div className="footer__content">
          <div className="footer__content__nav">
            <ul>
              <li>Company</li>
              <li>Contact us</li>
              <li>Carrers</li>
              <li>Privacy policy</li>
              <li>Terms</li>
            </ul>
          </div>
          <p>Designed by Jonas Schmedtmann </p>
        </div>
      </div>
    </section>
  )
}
