import React from "react";

const Dashboard = (props) => {

  const { info } = props;

  const colorRatings = (num) => {
    const ratingsArr = [];
    for (let i = 0; i < 5; i++) {
      if (num > 0) {
        ratingsArr.push(<div className="brown-bg" key={i} />);
      } else {
        ratingsArr.push(<div className="no-bg" key={i} />);
      }
      --num;
    }
    return ratingsArr;
  };

  return (
    <div className="info">
      <p>
        <span>Temperament: </span>
        {info.temperament}
      </p>
      <p>
        <span>Origin: </span>
        {info.origin}
      </p>
      <p>
        <span>Breed Group: </span>
        {info.breed_group}
      </p>
      <p>
        <span>Bred For: </span>
        {info.bred_for}
      </p>
      <p>
        <span>Life Span: </span>
        {info.life_span }
      </p>
      <p>
        <span>Height Range: </span>
        {info.height.metric + " cm"}
      </p>
      <p>
        <span>Weight Range: </span>
        {info.weight.metric + " kg"}
      </p>

      <br />

      <div className="rating">
        <span className="stat"> </span>
        <div className="rating-container" style={{fontSize:"0.75rem"}}>
          Not Great {"<"}----{">"} Amazing
        </div>
      </div>

      <div className="rating">
        <span className="stat">Barking: </span>
        <div className="rating-container">
          {colorRatings(info.barking)}
        </div>
      </div>

      <div className="rating">
        <span className="stat">Coat Length: </span>
        <div className="rating-container">
          {colorRatings(info.coat_length)}
        </div>
      </div>

      <div className="rating">
        <span className="stat">Drooling: </span>
        <div className="rating-container">
          {colorRatings(info.drooling)}
        </div>
      </div>

      <div className="rating">
        <span className="stat">Energy: </span>
        <div className="rating-container">
          {colorRatings(info.energy)}
        </div>
      </div>

      <div className="rating">
        <span className="stat">Good with children: </span>
        <div className="rating-container">
          {colorRatings(info.good_with_children)}
        </div>
      </div>

      <div className="rating">
        <span className="stat">Good with other dogs: </span>
        <div className="rating-container">
          {colorRatings(info.good_with_other_dogs)}
        </div>
      </div>

      <div className="rating">
        <span className="stat">Good with strangers: </span>
        <div className="rating-container">
          {colorRatings(info.good_with_strangers)}
        </div>
      </div>

      <div className="rating">
        <span className="stat">Grooming: </span>
        <div className="rating-container">{colorRatings(info.grooming)}</div>
      </div>

      <div className="rating">
        <span className="stat">Playfulness: </span>
        <div className="rating-container">
          {colorRatings(info.playfulness)}
        </div>
      </div>

      <div className="rating">
        <span className="stat">Protectiveness: </span>
        <div className="rating-container">
          {colorRatings(info.protectiveness)}
        </div>
      </div>

      <div className="rating">
        <span className="stat">Shedding: </span>
        <div className="rating-container">
          {colorRatings(info.shedding)}
        </div>
      </div>

      <div className="rating">
        <span className="stat">Trainability: </span>
        <div className="rating-container">
          {colorRatings(info.trainability)}
        </div>
      </div>
      
      <div className="rating">
        <span className="stat"> </span>
        <div className="rating-container" style={{fontSize:"0.75rem"}}>
          Not Great {"<"}----{">"} Amazing
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
