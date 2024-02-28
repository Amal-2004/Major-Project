// src/App.js
import React, { useState, useEffect } from "react";
import { Navigation } from "./Home/navigation";
import { Header } from "./Home/header";
import { Features } from "./Home/features";
import { About } from "./Home/about";
import { Services } from "./Home/services";
import { Contact } from "./Home/contact";
import JsonData from "../data/data.json";
import './index.css'

const Home = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Features data={landingPageData.Features} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default Home;
