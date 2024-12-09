import { useLocation, useNavigate } from "react-router-dom";

export default function DivContentThird({ data }) {
  const navigate = useNavigate();
  const location = useLocation();
  const user = location.state;

  return (
    <>
      <a
        className="waves-effect waves-light btn purple darken-4"
        onClick={() => navigate("/wishlist",  {state: data}  )}
      >
        <i className="material-icons right">person_search</i>Mi amigo secreto
        es...
      </a>
    </>
  );
}