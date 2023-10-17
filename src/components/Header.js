import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="header" id="header">
      <div className="logo-container" id="logo-container">
        <img className="image" src={LOGO_URL}></img>
      </div>

      <div className="menu" id="menu">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
