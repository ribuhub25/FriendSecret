import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <a
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      <i className="large material-icons">exit_to_app</i>
    </a>
  );
};

export default LogoutButton;
