import React      from "react";
import { Link }   from "react-router-dom";
import doggy_face from "../assets/doggy_face.png";

  const Header = () => {
    return (
      <>
          <div className="header-container" >
            <div  className="doggy-link-container">
                <Link to="/api"  style={{cursor:"pointer"}}>
                <img
                  alt="dog face button to return to the menu of dog breeds."
                  className="doggy-face-logo"
                  src={doggy_face}
                  width="100%"
                  height="100%"
                  title="click to return to dog breeds menu."
              />
              </Link>
            </div>

          </div>

      </>
    );
  };

export default Header;