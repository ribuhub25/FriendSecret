import PropTypes from "prop-types";
import "./Profile.css";
import { useNavigate } from "react-router-dom";

export default function Profile({ isAuthenticated, user, token }) {
  const navigate = useNavigate();
  async function api() {
    var tkn = await token();
    const response = await fetch("http://localhost:3500/users/save", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${tkn}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = response;
    return data;
  }
  api();

  const handleClick = () => {
    navigate(`/friend-secret`, { state: user });
  }
  return (
    isAuthenticated && (
      <div className="card center-align">
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src={user?.picture} />
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            {user.name}
          </span>
            <div className="navigate-container">
              <a
                className="btn-floating btn-large waves-effect deep-purple accent-3"
                href="/"
              >
                <i className="material-icons">navigate_before</i>
              </a>
              <a
                className="btn-floating btn-large waves-effect deep-purple accent-3"
                onClick={handleClick}
              >
                <i className="material-icons">navigate_next</i>
              </a>
            </div>
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