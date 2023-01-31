import React, { useState, useEffect } from "react";
import bichon_body from "../assets/Bichon_Body.png";
import bichon_head from "../assets/Bichon_Head.png";
import InstallPWA from "../components/InstallPWA";
import { Link } from "react-router-dom";

const Startup = () => {
  const [data, setData] = useState('');

  const fetchData = async () => {
      await fetch('.netlify/functions/spinning')
        .then( response => response.json())
        .then( data => {
      console.log("results = ", data.message);
      setData(data.message);
    })
  }

  useEffect(() => {

    setTimeout(() => {
      fetchData()
    }, 800);

  }, [data]);


  return (
    <>
      <InstallPWA />
      <div className="startup">
        <header className="startup-header">

            <div className='bichon-container'>
                <img rel="preload" src={bichon_body} className="bichon-body" alt="bichon frise body" />
                <span className="head-container">
                  <img rel="preload" src={bichon_head} className="bichon-head" alt="bichon frise head" />
                </span>
            </div>

          <div>{
              !data ?  "...loading" 
            : 
              <div className= "welcome" >
                <span className="welcome-message"> 
                    {data}
                </span>
                <br />
                <Link 
                  to="api" 
                  className="welcome-button"
                >
                    Get Started?
                </Link>
              </div>
            }
          </div>
          
        </header>
      </div>
    </>
  );
};

export default Startup;
