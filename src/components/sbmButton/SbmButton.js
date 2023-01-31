import "./style.css";

const SbmButton = (props) => {
  const checkedRadio = props.checkedRadio;
  const setRating = props.setRating;
  const btnText = props.btnText;

  return (
    <button
      className="btn__submit"
      onClick={() => {
        console.log("Button clicked");
        console.log("checkedRadio", checkedRadio);
        console.log("setRating", setRating);
        setRating(checkedRadio);
      }}
    >
      {btnText}
    </button>
  );
};

export default SbmButton;
