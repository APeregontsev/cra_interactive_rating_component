import "./style.css";
import thanks from "./../../img/illustration-thank-you.svg";

const Submitted = (props) => {
  const rating = props.rating;

  return (
    <div className="finalstate_wrapper">
      <div className="finalstate__card">
        <div className="final_img">
          <img src={thanks} alt="thank-you-img" />
        </div>

        <div className="selected__rating">
          You selected <span className="selected__digit"> {rating} </span> out of 5
        </div>

        <div className="final__text">
          <div className="finaltext__title">
            <p>Thank you!</p>
          </div>

          <div className="finaltext__text">
            We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Submitted;
