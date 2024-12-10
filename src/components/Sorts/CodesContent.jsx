import PropTypes from "prop-types";
import { useEffect } from "react";
import "./Cardsort.css"
export default function CodesContent({ couple }) {
  useEffect(() => {
    M.AutoInit();
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".datepicker");
      //var instances = M.Datepicker.init(elems, options);
      M.Datepicker.init(elems);
    });
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".collapsible");
      var instances = M.Collapsible.init(elems, options);
    });
  }, []);
  async function handleCopyCode(e) {
    var texto = document.getElementById(`code${e.target.dataset.id}`).innerHTML;
    var msg = document.getElementById(`msg${e.target.dataset.id}`);
    try {
      await navigator.clipboard.writeText(texto);
      msg.className = "chip";
      msg.innerHTML = "Copiado al portapapeles";
      setTimeout(()=>{msg.innerHTML = "", msg.classList.remove("chip") },800)
    } catch (err) {
      console.error("Error al copiar: ", err);
    }
  }
  return (
    <>
      <ul className="collapsible">
        {couple &&
          couple.map((c) => (
            <li key={c.friendSecret}>
              <div className="collapsible-header">
                <i className="material-icons">whatshot</i>
                {c.name}
              </div>
              <div className="collapsible-body">
                <span className="d-flex">
                  <span id={`code${c.friendSecret}`}>{c.friendSecret}</span>
                  <a onClick={handleCopyCode}>
                    <i className="material-icons" data-id={c.friendSecret}>
                      content_copy
                    </i>
                  </a>
                </span>
                <span id={`msg${c.friendSecret}`}></span>
              </div>
            </li>
          ))}
      </ul>
    </>
  );
}
CodesContent.propTypes = {
  couple: PropTypes.array,
};