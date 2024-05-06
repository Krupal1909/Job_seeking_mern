/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Context } from "./../../main";
import { Navigate } from "react-router-dom";
import HeroSection from "./HeroSection";
import HowitWorks from "./HowitWorks";
import PopularCategory from "./PopularCategory";
import PopularCompanies from "./PopularCompanies";
const Home = () => {
  const { isAuthorized } = useContext(Context);
  if (!isAuthorized) {
    return <Navigate to={"/login"} />;
  }
  return (
    <section className="homePage page">
      <HeroSection />
      <HowitWorks />
      <PopularCategory />
      <PopularCompanies />
    </section>
  );
};

export default Home;
