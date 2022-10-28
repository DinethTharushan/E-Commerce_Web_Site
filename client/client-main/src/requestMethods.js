import axios from "axios";

// const BASE_URL = "http://localhost:5004/api/v1/";
const BASE_URL = "https://apibuy.herokuapp.com/api/v1/";
const BASE_URL_USER = "https://apiuserbuyer.herokuapp.com/api/v1/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyY2JlMjE5NzQ3YTI4NWM0ZTJmMzFiYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1Nzc0NDY5OCwiZXhwIjoxNjU4MDAzODk4fQ.7daxD3CSubuHEJPl-IMtp_lguXimAIULd46BbJ-I8PQ";
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

// if(!TOKEN){
//   const navigation = useNavigate();
//   navigation("/login");
// }

// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;
// Access-Control-Allow-Origin
export const publicRequest = axios.create({
  baseURL: BASE_URL,
  headers: { "Access-Control-Allow-Origin": "origin-list" },
});
export const publicRequestUser = axios.create({
  baseURL: BASE_URL_USER,
  headers: { "Access-Control-Allow-Origin": "origin-list" },
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { "Access-Control-Allow-Origin": "origin-list", token: `Bearer ${TOKEN}` },
});
