import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Option from "./option";

export default function DivContentThird({ data }) {
  const navigate = useNavigate();
  const location = useLocation();
  const user = location.state;
  const [sorts, setSorts] = useState([]);
  useEffect(() => {
    const fetchSorts = async () => {
      const res = await getSortsByUser();
      if (res.result === "success") {
        setSorts(res.data);
      } else {
        console.log(res.message);
      }
    };
    fetchSorts();
  }, []);
  useEffect(() => {
    M.AutoInit();
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll("select");
      var instances = M.FormSelect.init(elems, options);
    });
  },[sorts]) 

 async function getSortsByUser() {
    const response = await fetch(`http://localhost:3500/sorts/${user.email}`, {
      method: "GET",
    });
    const data = await response.json();
    return data;
  } 

  async function handleClick() {
    var sortId = document.getElementById("ddlSort").value;
    const codes = await getCodesBySort(sortId);
    const host = getHostInfo(codes);
    const data = await getInfoCouple(host.friendSecret);
    navigate("/wishlist", { state: data });
  }
  function getHostInfo(data) {
    const host = data.filter((u) => u.host === true);
    return host[0];
  }
  async function getCodesBySort(sortId) {
    const response = await fetch(
      `http://localhost:3500/couple/code/${sortId}`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    return data.data;
  }
  async function getInfoCouple(code) {
    try {
      const response = await fetch(`http://localhost:3500/couple/info/${code}`, {
        method: "GET",
      });
      const data = await response.json();
      return data;
    } catch (e) {
      //setTimeout(() => HideLoader(), 1000);
      console.log(e.message);
    }
  }

  return (
    <>
      <div className="input-field col s12">
        <select id="ddlSort">
            {sorts.map((s) => (
              <Option key={s.sid} sid={s.sid} name_group={s.name_group}/>
            ))}
        </select>
        <label>Sorteos en curso</label>
      </div>
      <a
        className="waves-effect waves-light btn purple darken-4"
        onClick={handleClick}
      >
        <i className="material-icons right">person_search</i>Mi amigo secreto
        es...
      </a>
    </>
  );
}