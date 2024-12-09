import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../../components/Auth/LoginButton";
import "./Home.css"; 
import Profile from "./Profile";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Shared/Loader";
import { useState } from "react";

export function Home() {
  const { user, isAuthenticated,getAccessTokenSilently } = useAuth0();
  const token = async () => await getAccessTokenSilently();
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const apiURL = import.meta.env.REACT_APP_API_URL;
  function ShowLoader(){
    setLoader(true);
  }
  function HideLoader() {
    setLoader(false);
  }

  async function getInfoCouple() {
    var code = document.getElementById("txtCode").value;
    console.log(code);
    try {
      const response = await fetch(`${apiURL}/couple/${code}`, {
        method: "GET",
      });
      const data = await response.json();
      return data;
    } catch (e) {
      setTimeout(() => HideLoader(), 1000);
      console.log(e.message);
    }
  }
  async function showFriendSecret() {
    ShowLoader();
    var data = await getInfoCouple();
    console.log(data);
    
    if (data.result == "success") {
      navigate(`/sorts`, { state: data });
    } else {
      HideLoader();
    }    
  }
  return (
    <>
    {
      loader ? <Loader /> : (<main className="home-container">
      {isAuthenticated ? (
        <div className="d-flex flex-column">
          <h1 className="center-align title">🎊WELCOME!🎊</h1>
          <Profile
            user={user}
            isAuthenticated={isAuthenticated}
            token={token}
          ></Profile>
        </div>
      ) : (
        <div>
          <h1 className="center-align title">FRIEND SECRET 🕵️</h1>
          <div className="d-flex flex-column">
            <div className="d-flex">
              <div className="input-field col s6">
                <input id="txtLogin" type="text" disabled />
                <label htmlFor="txtLogin">Logueate para iniciar</label>
              </div>
              <LoginButton />
            </div>
            <div className="d-flex">
              <div className="input-field col s6">
                <input id="txtCode" type="text" className="validate" />
                <label htmlFor="txtCode">Ingrese el Código</label>
              </div>
              <a
                className="btn-floating btn-large waves-effect deep-purple accent-1"
                onClick={showFriendSecret}
              >
                <i className="material-icons">person_4</i>
              </a>
            </div>
          </div>
        </div>
      )}
    </main>) 
    }
    </>
  );
}