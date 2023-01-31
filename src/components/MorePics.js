import React from "react";

const MorePics = (props) => {

  return (
    <div className="other-photos">
        <div className="photos"> 
        <a href={props.ninjaDb_image_link} >
          <img src={props.ninjaDb_image_link} alt="selected dog" />
        </a>
        </div>
    </div>
  );
}

export default MorePics;
