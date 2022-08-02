import { React } from "react";
import qrCode from "../images/qrCode.png";

export const Home = () => {
  return (
    <div className="container-fluid">
      <div className="box">
        <img alt="..." src={qrCode} className="img" />
        <div className="text text-center">
          <h5>Improve your Frontend skills by building projects</h5>
          <p>
            Scan the QR code to visit Frontend Mentor and take coding skills to
            the next level
          </p>
        </div>
      </div>
    </div>
  );
};
