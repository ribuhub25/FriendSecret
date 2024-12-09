import { useLocation } from "react-router-dom";
import Cardwish from "../components/Wishlist/Cardwish";
import "./Wishlist.css";

export default function Wishlist({ user = "Carlos" }) {
  const location = useLocation();
  const data = location.state;
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