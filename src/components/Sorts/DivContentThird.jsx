import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function DivContentThird({ data }) {
  const navigate = useNavigate();
  const location = useLocation();
  const user = location.state;
  const [sorts, setSorts] = useState([]);
  useEffect(() => {
    M.AutoInit();
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll("select");
      var instances = M.FormSelect.init(elems, options);
    }); 
    async function getData() {
      const results = await getSortsByUser();
      setSorts([...sorts,results]);
    }
    getData();
  }, []);
  
 async function getSortsByUser() {
    const response = await fetch(`http://localhost:3500/sorts/${user.email}`, {
      method: "GET",
    });
    const data = await response.json();
    return data.data;
  } 
  return (
    <>
      <div className="input-field col s12">
        <select>
          <>
            {sorts.map((s, index) => (
              <option key={index} defaultValue={s.sid}>
                {s.name_group}
              </option>
            ))}
          </>
        </select>
        <label>Sorteos en curso</label>
      </div>
      <a
        className="waves-effect waves-light btn purple darken-4"
        onClick={() => navigate("/wishlist", { state: data })}
      >
        <i className="material-icons right">person_search</i>Mi amigo secreto
        es...
      </a>
    </>
  );
}