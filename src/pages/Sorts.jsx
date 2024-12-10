import { useLocation } from "react-router-dom";
import Cardsort from "../components/Sorts/Cardsort";
import "./Sorts.css";
import { useEffect, useState } from "react";
export default function Sorts() {
  const location = useLocation();
  const user = location.state;
  console.log(user);
  
  const [sorts, setSorts] = useState([]);
  useEffect(() => {
    const fetchSorts = async () => {
      const res = await getSortsByHost();
      if (res.result === "success") {
        setSorts(res.data);
      } else {
        console.log(res.message);
      }
    };
    fetchSorts();
  },[]);
  async function getSortsByHost() {
    const response = await fetch(`http://localhost:3500/sorts/${user.email}`, {
      method: "GET",
    });
    const data = await response.json();
    console.log(data);
    
    return data;
  }  
    return (
      <section className="sort-container center-align">
        {sorts.map((el, index) => (
          <Cardsort
            key={index}
            cardNumber="1"
            title={el.name_group}
            eventDate={el.event_date}
            hostName={el.usuarioHost.nickname}
            sortId={el.sid}
          />
        ))}
        <Cardsort cardNumber="2" title={"Lista de Deseos"} />
        <Cardsort cardNumber="3" title={"Mi Amigo Secreto"} data={user} />
      </section>

      // <section className="sort-container center-align">
      //   <Cardsort cardNumber="2" title={"Lista de Deseos"} />
      //   <Cardsort cardNumber="3" title={"Mi Amigo Secreto"} />
      // </section>
    );
}