import { useEffect, useState } from "react";
import "./Cardsort.css";
import CodesContent from "./CodesContent";

export default function DivContentFirst({ eventDate, hostName, sortId }) {
  const [codes, setCodes] = useState([])
  const [statebutton, setStatebutton] = useState(false);
  async function getCodes() {
    const data = await getCodesBySort();
    setCodes([...codes, data]);
  };
  useEffect(() => {
    if (statebutton) {
     getCodes()
    } else {
      setCodes([]);
   }
 },[statebutton] )

  async function handleClick(e) {
    const btnId = document.getElementById(`btn${sortId}`);
    if (!statebutton) {
        btnId.innerText = "Ocultar Códigos"
    } else {
        btnId.innerText = "Mostrar Códigos"
      }
    setStatebutton(!statebutton);
  }

  async function getCodesBySort() {
    const response = await fetch(
      `https://friendsecretback.onrender.com/couple/code/${sortId}`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    return data.data;
  }
  
  return (
    <>
      <div className="input-field col s6">
        <i className="material-icons prefix">event</i>
        <textarea
          disabled
          id="txtEventDate"
          className="materialize-textarea"
          defaultValue={eventDate}
        ></textarea>
        <label htmlFor="txtEventDate" className="active">
          Event Day
        </label>
      </div>
      <div className="input-field col s6">
        <i className="material-icons prefix">card_giftcard</i>
        <textarea
          disabled
          id="txtPrice"
          className="materialize-textarea"
          defaultValue={hostName}
        ></textarea>
        <label htmlFor="txtPrice" className="active">
          Host Name
        </label>
      </div>
      <div>
        <button
          className="btn purple darken-4 w-100"
          id={`btn${sortId}`}
          onClick={handleClick}
        >
          Mostrar Códigos
        </button>
      </div>
      <div>
        {codes &&
          codes.map((c) => <CodesContent couple={c} key={c.friendSecret} />)}
      </div>
    </>
  );
}
