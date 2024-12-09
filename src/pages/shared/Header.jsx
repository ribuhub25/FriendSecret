import { useLocation, useNavigate } from "react-router-dom";
import LogoutButton from "../../components/Auth/LogoutButton";
import "./Header.css";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const user = location.state;
    return (
      <nav className="purple darken-4">
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">
            <img src="/src/assets/agentSecret.png" className="logo" />
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="/">
                <i className="material-icons">home</i>
              </a>
            </li>
            <li>
              <a onClick={() => navigate(`/sorts`, { state: user })}>
                <i className="material-icons">cyclone</i>
              </a>
            </li>
            <li>
              <LogoutButton></LogoutButton>
            </li>
          </ul>
        </div>
      </nav>
    );
}