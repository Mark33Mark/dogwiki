import React      from "react";
import { Link }   from "react-router-dom";
import cat_face from "../assets/kitty_wiki_logo.png";

  const Footer = () => {
    return (
      <>
          <div className="footer-container" >

            <div  className="kitty-link-container">
                <Link to="https://kitty-wiki.netlify.app"  style={{cursor:"pointer"}} target="_blank">
                <img
                  alt="cat face button to go to Kitty Wiki."
                  className="cat-face-logo"
                  src={cat_face}
                  width="80%"
                  height="80%"
                  title="Dogs not your thing? Click this button for the kitty-wiki."
              />
              </Link>
            </div>

          </div>

      </>
    );
  };

export default Footer;