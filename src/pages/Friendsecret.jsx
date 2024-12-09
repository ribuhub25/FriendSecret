import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Friendsecret.css";
import InputText from "../components/FriendSecret/inputText";
import { toast } from "materialize-css";

export default function Friendsecret() { 
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state;
  const [ showdiv , setShowdiv  ] = useState(false);
  const [ participantes, setParticipantes ] = useState([]);
  function ShowInputs() {
    var txtName = document.getElementById("p1");
    if (showdiv) {
      setShowdiv(false);
    } else {
      if (txtName.value != "") {
        setShowdiv(true);
        document.getElementById("dSecond").style.display = "block";
        txtName.disabled = true;
      } 

    }
  }
  function AddInputText() {
    if (participantes.length < 5) {
      setParticipantes([
        ...participantes,
        <InputText
          key={participantes.length + 4}
          id={participantes.length + 4}
        />,
      ]);
    } else {
      document.getElementById("msgLimit").textContent =
        "No se Puede agregar más!!.";
    }
  }
  function ShowNameGroup() {
    document.getElementById("dFirst").style.display = "none";
    document.getElementById("dSecond").style.display = "none";
    document.getElementById("dThird").style.display = "block";
  }
  function ShowDateEvent() {
    document.getElementById("dThird").style.display = "none";
    document.getElementById("dFourth").style.display = "block";
  }
  function GoSorts(obj) {
    navigate(`/sorts`, { state: obj });
  }
  async function GetUserId() {
    const response = await fetch(`http://localhost:3500/users/${user.email}`, {
      method: "GET",
    });
    const data = await response.json();
    return data.data;
  }
 
  async function CreateSort() {
    const userId  = await GetUserId();
    var sort = {
      sid: "0",
      name_group: document.getElementById("txtGroup").value,
      host: userId,
      list_names: [
        document.getElementById("p1").value,
        document.getElementById("p2").value,
        document.getElementById("p3").value,
        document.getElementById("p4").value
      ],
      event_date: document.getElementById("txtEventDate").value,
      price: 0,
    };
    console.log(sort);
    
    const response = await fetch("http://localhost:3500/sorts/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sort),
    });
    const data = response.json();
    return data;
  }
  function handleClick() {
    var p1 = document.getElementById("p1").value;
    var p2 = document.getElementById("p2").value;
    var p3 = document.getElementById("p3").value;
    var p4 = document.getElementById("p4").value;
    var group = document.getElementById("txtGroup").value;
    var date = document.getElementById("txtEventDate").value;
    if (p1 != "") {
      ShowInputs();
      if (p2 != "" && p3 != "" && p4 != "") {
        ShowNameGroup();
        if (group != "") {
          ShowDateEvent();
          if (date != "") {
            CreateSort().then((response) =>
              response.result == "success"
                ? GoSorts(user)
                : toast.error("Error!")
            );
          }
        }
      }
    }
    
  }

  return (
    <section>
      <img
        src="https://static-cdn.drawnames.com/Content/Assets/gifts.svg?nc=202407011621"
        className="gifts"
      />
      <div className="col s12 m6" id="dSort">
        <div className="card">
          <div className="card-content">
            <div className="input-field col1 m6" id="dFirst">
              <i className="material-icons prefix">account_circle</i>
              <input
                id="p1"
                type="text"
                className="validate valid"
                defaultValue={user.name}
                required
              />
              <label htmlFor="p1" className="active">
                Nombre del Creador
              </label>
              <span
                className="helper-text"
                data-error="este campo es requerido"
              ></span>
            </div>
            <div className="input-field col12 m6" id="dSecond">
              <div className="input-field col s6">
                <input id="p2" type="text" className="validate" required />
                <label htmlFor="p2">Participante 2</label>
                <span
                  className="helper-text"
                  data-error="este campo es requerido"
                ></span>
              </div>
              <div className="input-field col s6">
                <input id="p3" type="text" className="validate" required />
                <label htmlFor="p3">Participante 3</label>
                <span
                  className="helper-text"
                  data-error="este campo es requerido"
                ></span>
              </div>
              <div className="input-field col s6">
                <input id="p4" type="text" className="validate" required />
                <label htmlFor="p4">Participante 4</label>
                <span
                  className="helper-text"
                  data-error="este campo es requerido"
                ></span>
              </div>
              {participantes}
              <button
                className="btn-floating waves-effect deep-purple accent-3"
                onClick={AddInputText}
              >
                <i className="material-icons">add</i>
              </button>
              <span className="msgLimit" id="msgLimit"></span>
            </div>
            <div className="input-field col1 m6" id="dThird">
              <i className="material-icons prefix">groups</i>
              <input id="txtGroup" type="text" className="validate" required />
              <label htmlFor="txtGroup">Nombre del Grupo</label>
            </div>
            <div className="input-field col1 m6" id="dFourth">
              <input type="text" className="datepicker" id="txtEventDate" />
              <label htmlFor="txtEventDate">
                Fecha del Intercambio de regalos
              </label>
            </div>
            <div className="center-align">
              <button className="btn purple darken-4" onClick={handleClick}>
                Continuar
              </button>
            </div>
          </div>
        </div>
      </div>
      <img
        src="https://static-cdn.drawnames.com/Content/Assets/footer-gifts.svg?nc=202407011621"
        className="gifts"
      />
    </section>
  );
}
