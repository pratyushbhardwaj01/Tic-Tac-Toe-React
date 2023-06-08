import React from "react";
import "./Footer.css";

interface FooterProps {
  winner: string;
  onReset: () => void;
}
const Footer: React.FC<FooterProps> = ({ winner, onReset }): JSX.Element => {
  return (
    <div className="footerWrapper">
      <div className="footerContainer">
        <p>Player A</p>
      </div>
      <div className="resetBtnContainer" onClick={onReset}>
        <button className="resetBtn">Reset</button>
        {winner !== "" && (
          <p style={{ textAlign: 'center' }}>{`${winner} wins`}</p>
        )}
      </div>
      <div className="footerContainer">
        <p>Player B</p>
      </div>
    </div>
  );
}

export default Footer;
