import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../../components/Auth/LoginButton";
import "./Home.css"; 
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Shared/Loader";
import { useEffect, useState } from "react";

export function Home() {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const token = async () => await getAccessTokenSilently();
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/", { state: user });
      saveUser().then((res) => console.log(res));
    }
  },[isAuthenticated])
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
      const response = await fetch(`http://localhost:3500/couple/info/${code}`, {
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
      navigate(`/wishlist`, { state: data });
    } else {
      HideLoader();
    }    
  }
  const goFriendSecret = () => {
    navigate(`/friend-secret`, { state: user });
  };
  const goSorts = () => {
    navigate(`/sorts`, { state: user });
  };
  const goProfile = () => {
    navigate(`/profile`, { state: user });
  };

  async function saveUser() {
    var tkn = await token();
    const response = await fetch(`http://localhost:3500/users/save`, {
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
  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <main className="home-container">
          {isAuthenticated ? (
            <div className="d-flex flex-column">
              <div className="col s6 div-content-second" onClick={goProfile}>
                <span className="title-content center-align">Perfil</span>
                <img
                  src="https://static-cdn.drawnames.com/Content/Assets/gifts.svg?nc=202407011621"
                  className="giftBtnCrd"
                />
              </div>
              <div className="col s6 div-content-second" onClick={goSorts}>
                <span className="title-content center-align">Sorteos Disponibles</span>
                <img
                  src="https://static-cdn.drawnames.com/Content/Assets/gifts.svg?nc=202407011621"
                  className="giftBtnCrd"
                />
              </div>
              <div
                className="col s6 div-content-second"
                onClick={goFriendSecret}
              >
                <span className="title-content center-align">Crear Sorteo</span>
                <img
                  src="https://static-cdn.drawnames.com/Content/Assets/gifts.svg?nc=202407011621"
                  className="giftBtnCrd"
                />
              </div>
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
        </main>
      )}
    </>
  );
}