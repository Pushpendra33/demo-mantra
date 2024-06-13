import React from "react";
import {
  Banner,
  FAQ,
  Goals,
  HowItWorks,
  RoadMap,
  SneakPeakArtwork,
  Team,
} from "../SubSection";

const HomePage = () => {
  return (
    <>
      <Banner />
      <Goals />
      <HowItWorks />
      <SneakPeakArtwork />
      <RoadMap />
      <FAQ />
      <Team />
    </>
  );
};

export default HomePage;
