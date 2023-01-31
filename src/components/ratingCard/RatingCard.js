import "./style.css";
import star from "./../../img/icon-star.svg";
import { useEffect, useState } from "react";
import SbmButton from "../sbmButton/SbmButton";

const RatingCard = (props) => {
  const setRating = props.setRating;

  const [checkedRadio, setCheckedRadio] = useState(0);

  useEffect(() => {
    // Находим все инпуты на странице
    const inputs = document.querySelectorAll("input");
    console.log(inputs);

    // Вешаем прослушку на инпуты

    inputs.forEach((radio) => {
      radio.addEventListener("input", function () {
        console.log(checkedRadio);

        //const checkedRadioZ = parseInt(this.value);

        //console.log("checkedRadioZ", checkedRadioZ);

        setCheckedRadio(parseInt(this.value));
        /* checkedRadio = parseInt(this.value); */

        console.log(checkedRadio);
      });
    });
  }, []);

  return (
    <div className="card__wrapper">
      <div className="card">
        <div className="star__wrapper">
          <div className="star">
            <img src={star} alt="icon-star" />
          </div>
        </div>

        <div className="main__text">
          <h1 className="title">How did we do?</h1>
          <div className="text">
            Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
          </div>
        </div>

        <div className="rating">
          <input type="radio" name="rating" value="1" className="radio__rating" id="rating_1" />
          <label for="rating_1" className="radio__label">
            <span className="rating__digit">1</span>
          </label>

          <input type="radio" name="rating" value="2" className="radio__rating" id="rating_2" />
          <label for="rating_2" className="radio__label">
            <span className="rating__digit">2</span>
          </label>

          <input type="radio" name="rating" value="3" className="radio__rating" id="rating_3" />
          <label for="rating_3" className="radio__label">
            <span className="rating__digit">3</span>
          </label>

          <input type="radio" name="rating" value="4" className="radio__rating" id="rating_4" />
          <label for="rating_4" className="radio__label">
            <span className="rating__digit">4</span>
          </label>

          <input type="radio" name="rating" value="5" className="radio__rating" id="rating_5" />
          <label for="rating_5" className="radio__label">
            <span className="rating__digit">5</span>
          </label>
        </div>

        <div className="submit__block">
          <SbmButton checkedRadio={checkedRadio} setRating={setRating} btnText={"SUBMIT"} />

          {/* <button
            checkedRadio={checkedRadio}
            className="btn__submit"
            onClick={() => {
              console.log("Button clicked");
              setRating(checkedRadio);
            }}
          >
            SUBMIT
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default RatingCard;
