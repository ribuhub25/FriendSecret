import PropTypes from "prop-types";

export default function InputText({id}) {
    return (
      <div className="input-field col s6">
        <input id={`p${id}`} type="text" className="validate" />
        <label htmlFor={`p${id}`}>Participante {id}</label>
      </div>
    );
}

InputText.propTypes = {
  id: PropTypes.number,
};