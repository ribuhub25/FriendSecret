export default function DivContentFirst({ eventDate, hostName, sortId }) {
  async function handleClick() {
    const codes = await getCodesBySort();
    const showCodesElement = document.getElementById(`showCodes${sortId}`);
    codes.forEach((code) => {
      const div = document.createElement("div");
      div.textContent = code;
      showCodesElement.appendChild(div);
    });
    console.log(codes);
    
  }
  async function getCodesBySort() {
    const response = await fetch(
      `http://localhost:3500/couple/code/${sortId}`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    return data.data.codes;
  }
  return (
    <>
      <div className="input-field col s6">
        <i className="material-icons prefix">event</i>
        <textarea
          disabled
          id="txtEventDate"
          className="materialize-textarea"
          defaultValue={eventDate}
        ></textarea>
        <label htmlFor="txtEventDate" className="active">
          Event Day
        </label>
      </div>
      <div className="input-field col s6">
        <i className="material-icons prefix">card_giftcard</i>
        <textarea
          disabled
          id="txtPrice"
          className="materialize-textarea"
          defaultValue={hostName}
        ></textarea>
        <label htmlFor="txtPrice" className="active">
          Host Name
        </label>
      </div>
      <div>
        <button className="btn" onClick={handleClick}>
          Mostrar Codigos
        </button>
      </div>
      <div id={`showCodes${sortId}`}></div>
    </>
  );
}