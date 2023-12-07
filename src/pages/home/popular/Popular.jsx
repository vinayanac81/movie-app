import React, { useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/contentWrapper";
import "./Popular.scss";
import SwitchTabs from "../../../components/SwitchTabs/SwitchTabs";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";
const Popular = () => {
  const [endPoint, setEndPoint] = useState("movie");
  const { data, loading } = useFetch(`${endPoint}/popular`)
  const onTabChange = (tab) => {
    setEndPoint(tab === "Movie" ? "movie" : "tv");
  };
  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">What's Popular</span>
        <SwitchTabs onTabChange={onTabChange} data={["Movie", "Tv"]} />
      </ContentWrapper>
      <Carousel endPoint={endPoint} loading={loading}  data={data} />
    </div>
  );
};

export default Popular;