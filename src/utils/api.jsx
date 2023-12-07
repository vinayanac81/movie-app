import axios from "axios";
import { baseUrl } from "../Constants";

const instance = axios.create({
  baseURL: baseUrl,
});

export default instance;



// import axios from "axios"

// const BASE_URL="https://api.themoviedb.org/3/"

// const API_KEY="fa753c92f68fa493107166e849048ce5"

// const headers={
//     Authorization:"bearer"+API_KEY,
// }

// export const fetchDataFromApi=async(url,params)=>{
//     try{
//         const {data}=await axios.get(BASE_URL+url,{
//             headers,
//             params,
//         })
//         console.log(data);
//         return data
//     }catch(err){
//         console.log(err);
//         return err
//     }
// }