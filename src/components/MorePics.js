import React from "react";

const MorePics = (props) => {

  console.log(props);

  return (

    <div className="other-photos">
        <div className="photos"> 
        <img src={props.ninjaDb_image_link} alt="selected dog" />
        </div>
    </div>
  );
}

export default MorePics;
