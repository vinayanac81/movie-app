import React, { useRef } from "react";

import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// import dayjs from "dayjs";

import ContentWrapper from "../contentWrapper/contentWrapper";
import Img from "../lazyLoadImage/Img";
import PosterFallback from "../../assets/no-poster.png";

import "./Carousel.scss";
import CircleRating from "../CircleRating/CircleRating";
import Genres from "../genres/Genres";


const Carousel = ({ data, loading,endPoint,title }) => {
  const carouselContainer = useRef();
  const { url } = useSelector((state) => state.home);
  const navigate = useNavigate();
  const navigation = (dir) => {
    const container = carouselContainer.current;
    const scrollAmount =
      dir === "left"
        ? container.scrollLeft - (container.offsetWidth + 20)
        : container.scrollLeft + (container.offsetWidth + 20);
  
    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };
  // console.log(useRef);
 
  const skItem = () => {
    return (
      <div className="skeletonItem">
        <div className="posterBlock skeleton"></div>
        <div className="textBlock">
          <div className="title skeleton"></div>
          <div className="date skeleton"></div>
        </div>
      </div>
    );
  };
  // console.log(data.results);
  return (
    <div className="carousel">
      <ContentWrapper>
        {title && <div className="carouselTitle">{title}</div> }
        <BsFillArrowLeftCircleFill
          onClick={() => navigation("left")}
          className="carouselLeftNav arrow"
        />
        <BsFillArrowRightCircleFill
          onClick={() => navigation("right")}
          className="carouselRightNav arrow"
        />
        {!loading ? (
          <div ref={carouselContainer} className="carouselItems">
            {data?.results?.map((item) => {
              const posterUrl = item.poster_path
                ? url.poster + item.poster_path
                : PosterFallback;
              // console.log(item);
              return (
                <div onClick={()=>navigate(`/${item.media_type || endPoint }/${item.id}`)} key={item.id} className="carouselItem">
                  <div className="posterBlock">
                    <Img src={posterUrl} />
                    <CircleRating rating={item.vote_average.toFixed(1)} />
                    <Genres  data={item.genre_ids.slice(0, 2)} />
                  </div>
                  <div className="textBlock">
                    <span className="title">{item.title || item.name}</span>
                    <span className="date">
                      {item.release_date || item.first_air_date}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="loadingSkeleton">
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
          </div>
        )}
      </ContentWrapper>
    </div>
  );
};

export default Carousel;
