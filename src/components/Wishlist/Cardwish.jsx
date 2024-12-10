import { useLocation } from "react-router-dom";
import "./Cardwish.css";
export default function Cardwish({data}) {
  const location = useLocation();
  const user = location.state;
  console.log(data);
  
  return (
    <>
      {!user ? (
        <div>
          <img
            src="https://static-cdn.drawnames.com/Content/Assets/gifts-christmas.svg?nc=202407011621"
            className="gifts"
          />
          <div className="blue darken-1 title-container">
            <span className="title-wish-first">{data.data.name}</span>
          </div>
          <div className="col s12 m6 d-flex flex-column" id="dSort">
            <div className="card">
              <div className="blue darken-1 title-container">
                <span className="title-wish">
                  Lista de deseos para {data.data.name} ⭐
                </span>
              </div>
              <div className="card-content">
                <div className="col s6 div-content-second">
                  <span className="title-content">No hay regalos aún..</span>
                  <span className="text-content">
                    Pregunta que le pueda gustar..
                  </span>
                  <img
                    src="https://static-cdn.drawnames.com/Content/Assets/gifts.svg?nc=202407011621"
                    className="giftBtnCrd"
                  />
                </div>
              </div>
            </div>
            <div className="card">
              <div className="blue darken-1 title-container">
                <span className="title-wish">
                  Agrega regalos para {data.data.name} 🎁
                </span>
              </div>
              <div className="card-content">
                <div className="col s6 div-content-second">
                  <span className="title-content">Encontrar Regalos..</span>
                  <span className="text-content">
                    Encuentra regalos aquí...
                  </span>
                  <button className="btn purple darken-4">Buscar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <img
            src="https://static-cdn.drawnames.com/Content/Assets/gifts-christmas.svg?nc=202407011621"
            className="gifts"
          />
          <div className="blue darken-1 title-container">
            <span className="title-wish-first">{user.name}</span>
          </div>
          <div className="col s12 m6 d-flex flex-column" id="dSort">
            <div className="card">
              <div className="blue darken-1 title-container">
                <span className="title-wish">
                  Lista de deseos para {user.name} ⭐
                </span>
              </div>
              <div className="card-content">
                <div className="col s6 div-content-second">
                  <span className="title-content">No hay regalos aún..</span>
                  <span className="text-content">
                    Pregunta que le pueda gustar..
                  </span>
                  <img
                    src="https://static-cdn.drawnames.com/Content/Assets/gifts.svg?nc=202407011621"
                    className="giftBtnCrd"
                  />
                </div>
              </div>
            </div>
            <div className="card">
              <div className="blue darken-1 title-container">
                <span className="title-wish">
                  Agrega regalos para {user.name} 🎁
                </span>
              </div>
              <div className="card-content">
                <div className="col s6 div-content-second">
                  <span className="title-content">Encontrar Regalos..</span>
                  <span className="text-content">
                    Encuentra regalos aquí...
                  </span>
                  <button className="btn purple darken-4">Buscar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}