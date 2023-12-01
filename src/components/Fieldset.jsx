import icon from "../assets/icon.svg";
import eye from "../assets/eye.svg";
import PropTypes from "prop-types";

Fieldset.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "email", "password"]).isRequired,
  inputValue: PropTypes.string,
  onInputChange: PropTypes.func,
};

function Fieldset(props) {
  const { text, type, inputValue, onInputChange } = props;
  return (
    <fieldset className="flex w-80 h-14 py-4 px-3 items-center gap-2.5 rounded-esm ml-8 mt-8 border border-solid border-neutral-500 text-neutral-500 bg-neutral-1000 focus-within:border-twitter-blue">
      <legend className="text-neutral-500 text-left ">{props.text}</legend>
      <input
        type={type}
        placeholder={text}
        value={inputValue}
        onChange={(e) => onInputChange(e.target.value)}
        className="bg-neutral-1000 placeholder:text-neutral-500 focus:outline-none"
      />
      {type === "password" && <img src={eye} className="mb-4" />}
    </fieldset>
  );
}
export default Fieldset;
