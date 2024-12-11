import { useLocation, useNavigate } from "react-router-dom";
import LogoutButton from "../../components/Auth/LogoutButton";
import "./Header.css";
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function Header() {
  useEffect(() => {
    M.AutoInit();
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".sidenav");
      var instances = M.Sidenav.init(elems, options);
    });
  },[])
  const navigate = useNavigate();
  const { logout, isAuthenticated, user } = useAuth0();
  return (
    <>
      <nav className="purple darken-4">
        <div className="nav-wrapper">
          <a onClick={()=>{navigate("/",{state: user})}} className="brand-logo">
            <img src="/assets/agentSecret.png" className="logo" />
          </a>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
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
      <ul className="sidenav" id="mobile-demo">
        <li className="active">
          <a>
            {isAuthenticated ? (
              <div className="chip">
                <img src={user?.picture} alt={user.name} />
                <b>User</b>: {user.name}
              </div>
            ) : (
              <div className="chip">
                <img src="/assets/agentSecret.png" alt="user" />
                <b>User</b>: usuario Secreto 😎
              </div>
            )}
          </a>
        </li>
        <li>
          <a onClick={() => navigate("/profile", { state: user })}>Perfil 🕵️</a>
        </li>
        <li>
          <a onClick={() => navigate("/", { state: user })}>Inicio 🏠</a>
        </li>
        <li>
          <a onClick={() => navigate(`/sorts`, { state: user })}>Sorteos 🍀</a>
        </li>
        <li>
          <a
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Salir 🔙
          </a>
        </li>
      </ul>
    </>
  );
}