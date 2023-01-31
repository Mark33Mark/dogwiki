/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../components/Loading";
import BreedData from "../components/BreedData";
import MorePics from "../components/MorePics";

const BreedInfo = () => {
  
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState({});

  const { name } = useParams();
  const breedSelected = { name };

  useEffect(() => {
    fetch(`/.netlify/functions/breeds`, {
      method: 'POST',
      body: JSON.stringify({ breed: `${breedSelected.name}` }),
    })
      .then( res => res.json())
      .then( data => setInfo(data))
      .then(setTimeout(() => setLoading(false), 1500));
  }, []);

  return loading ? (
    <LoadingSpinner />
  ) : (
    <>
      <Header />
      <BreedData breedInfo={info} />
      {/* <h3 style={{ padding: "0 2rem" }}>Gallery:</h3> */}
      <MorePics ninjaDb_image_link={info.image_link} />
      <Footer />
    </>
  );
};

export default BreedInfo;
