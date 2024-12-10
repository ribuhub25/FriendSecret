import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      onClick={async () => { await loginWithRedirect() } }
      className="btn-floating btn-large waves-effect deep-purple accent-3"
    >
      <i className="material-icons">touch_app</i>
    </button>
  );
};

export default LoginButton;
