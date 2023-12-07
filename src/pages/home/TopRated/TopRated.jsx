import React, { useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/contentWrapper";
import "./TopRated.scss";
import SwitchTabs from "../../../components/SwitchTabs/SwitchTabs";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";
const TopRated = () => {
  const [endPoint, setEndPoint] = useState("movie");
  const { data, loading } = useFetch(`${endPoint}/top_rated`)
  const onTabChange = (tab) => {
    setEndPoint(tab === "Movie" ? "movie" : "tv");
  };
  // console.log(data);
  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Top Rated</span>
        <SwitchTabs onTabChange={onTabChange} data={["Movie", "Tv"]} />
      </ContentWrapper>
      <Carousel endPoint={endPoint} loading={loading} data={data} />
    </div>
  );
};

export default TopRated;