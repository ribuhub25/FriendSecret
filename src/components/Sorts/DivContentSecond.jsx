import "./Cardsort.css"
export default function DivContentSecond() {
    return (
      <>
        <div className="col s6 div-content-second">
          <span className="title-content">Ingresa a tus deseos</span>
          <span className="text-content">Comenta que regalos te gustaría</span>
          <img
            src="https://static-cdn.drawnames.com/Content/Assets/gifts.svg?nc=202407011621"
            className="giftBtnCrd"
          />
        </div>
        <button className="btn purple darken-4 ">Crea una Lista</button>
      </>
    );
}