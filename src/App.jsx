import "./App.css";
import api from "../src/utils/api";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { API_KEY } from "./Constants";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration,getGenres } from "./store/mainSlice";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import SearchResult from "./pages/searchResult/SearchResult";
import Explore from "./pages/explore/Explore";
import PageNotFound from "./pages/404/PageNotFound";
function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);
  useEffect(() => {
    api.get(`configuration?api_key=${API_KEY}`).then((response) => {
      // console.log(response);
      const url = {
        backdrop: response.data.images.secure_base_url + "original",
        poster: response.data.images.secure_base_url + "original",
        profile: response.data.images.secure_base_url + "original",
      };
      dispatch(getApiConfiguration(url));
    });
    genresCall();
  }, []);
  const genresCall = async () => {
    let promises = [];
    let endPoints = ["tv", "movie"];
    let allGenres = {};
    endPoints.forEach((url) => {
      promises.push(
        api.get(`genre/${url}/list?api_key=${API_KEY}&language=en-US`)
      );
    });
    const res = await Promise.all(promises);
    // console.log(res[0].data);
    // data?.genres?.map((genres) => {
    //   return genres.map((item) => (allGenres[item.id] = item));
    // });
    // console.log(allGenres);
    res?.map(({data})=>{
      // console.log(data);
      return(
        data?.genres?.map((item)=>(allGenres[item.id]=item))
    
      )
    })
    // console.log(allGenres);
    dispatch(getGenres(allGenres))
  };
  return (
    // <div className="App">
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details/>} />
        <Route path="/search/:query" element={<SearchResult/>} />
        <Route path="/explore/:mediaType" element={<Explore/>} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
      <Footer />
    </Router>

    // </div>
  );
}

export default App;
