import React, { useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/contentWrapper";
import "./Trending.scss";
import SwitchTabs from "../../../components/SwitchTabs/SwitchTabs";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";
const Treanding = () => {
  const [endPoint, setEndPoint] = useState("day");
  const { data, loading } = useFetch(`trending/all/${endPoint}`)
  const onTabChange = (tab) => {
    setEndPoint(tab === "Day" ? "day" : "week");
  };
  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Trending</span>
        <SwitchTabs onTabChange={onTabChange} data={["Day", "Week"]} />
      </ContentWrapper>
      <Carousel endPoint={endPoint} loading={loading} data={data} />
    </div>
  );
};

export default Treanding;
