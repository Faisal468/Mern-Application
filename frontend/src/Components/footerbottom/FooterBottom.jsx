import React from "react";
import b1 from "../../assets/images/py.png";
import b2 from "../../assets/images/ms.png";
import b3 from "../../assets/images/am.png";
import b4 from "../../assets/images/vs.png";
import b5 from "../../assets/images/mc.png";
import "./FooterBottom.css";

export const FooterBottom = () => {
  return (
    <>
      <div className="footer-content">
        <p>
          Copyright Adventisprivatehire.com. All rights reserved. Designed by
          EmerieaSoftLtd.
        </p>
        <div className="payment-methods">
          <img src={b1} alt="PayPal" />
          <img src={b2} alt="Maestro" />
          <img src={b3} alt="American Express" />
          <img src={b4} alt="Visa" />
          <img src={b5} alt="MasterCard" />
        </div>
      </div>
    </>
  );
};
