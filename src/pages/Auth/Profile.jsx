import PropTypes from "prop-types";
import "./Profile.css";
import { useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function Profile() {
  const location = useLocation();
  const user = location.state;
  const { isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <div className="card center-align">
        <div className="div-img">
          <img className="img-perfil" src={user?.picture} />
          <div className="title-perfil">{user.name}</div>
        </div>
        <div className="card-content">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <input id="txtName" type="text" className="validate" />
                <label htmlFor="txtName">Nombre</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="password" type="password" className="validate" />
                <label htmlFor="password">Password</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="email" type="email" className="validate" />
                <label htmlFor="email">Email</label>
              </div>
            </div>
            <a className="btn-large" disabled>Siguiente</a>
          </form>
        </div>
      </div>
    )
  );
}

Profile.propTypes = {
  isAuthenticated: PropTypes.bool,
  user: PropTypes.object,
  token: PropTypes.func
};