import { useEffect, useState } from "react";
import DivContentFirst from "./DivContentFirst";
import DivContentSecond from "./DivContentSecond";
import DivContentThird from "./DivContentThird";

export default function Cardsort({ title, cardNumber, eventDate, hostName, sortId, data }) {
  const [content, setContent] = useState([]);
  useEffect(() => {
    
    switch (cardNumber) {
      case "1":
        setContent([
          ...content,
          <DivContentFirst
            key={content.length}
            eventDate={eventDate}
            hostName={hostName}
            sortId={sortId}
          />,
        ]);
        break;
      case "2":
        setContent([...content, <DivContentSecond key={content.length} />]);
        break;
      case "3":
        setContent([
          ...content,
          <DivContentThird key={content.length} data={data} />,
        ]);
        break;
      default:
        break;
    }
  }, []);

  return (
    <div>
      <img
        src="https://static-cdn.drawnames.com/Content/Assets/gifts-christmas.svg?nc=202407011621"
        className="gifts"
      />
      <div className="col s12 m6 d-flex" id="dSort">
        <div className="card">
          <div className="card-content">
            <span className="title-card">{title}</span>
            <div className="input-field col12 m6" id={`dCard${cardNumber}`}>
              {content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}