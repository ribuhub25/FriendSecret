import "./Footer.css";

export default function Footer() {
    return (
      <footer className="page-footer purple darken-4 center-align">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Friend Secret</h5>
              <p className="description-section-1">
                ¿Planeas un sorteo del Amigo Secreto? Haz el Sorteo del Amigo
                Secreto desde aquí fácil ✅ y rápido 🚀.
              </p>
              <p className="grey-text text-lighten-4">
                <img src="/src/assets/reactIcon.png" className="icons" />
                <img src="/src/assets/nodeJsIcon.png" className="icons" />
              </p>
            </div>

            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">Repository</h5>
              <ul>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    <img src="/src/assets/github.png" className="icons" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container">
          © 2024 Copyright Desarrollado por ribuHub25
        </div>
        <br></br>
      </footer>
    );
}