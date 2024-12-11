import { useLocation } from "react-router-dom";
import Cardwish from "../components/Wishlist/Cardwish";
import "./Wishlist.css";

export default function Wishlist({ user = "ROOT" }) {
  const location = useLocation();
  const data = location.state;
  console.log(data);
  
    return (
      <>
        {data != null ? (
          <section className="sort-container center-align">
            <Cardwish data={data} count="0" />
          </section>
        ) : (
          <section className="sort-container center-align">
            <Cardwish user={`${user}`} count="0" />
          </section>
        )}
      </>
    );
}