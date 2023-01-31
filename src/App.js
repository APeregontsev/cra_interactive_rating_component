import { useState } from "react";
import "./App.css";
import RatingCard from "./components/ratingCard/RatingCard";
import Submitted from "./components/submittedCard/SubmittedCard";

function App() {
  const [rating, setRating] = useState(0);

  console.log(rating);

  return <div className="App">{rating === 0 ? <RatingCard setRating={setRating} /> : <Submitted rating={rating} />}</div>;
}

export default App;
