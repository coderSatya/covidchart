// import axios from "axios";
// import React, { useState, useEffect } from "react";

// const Api = () => {
//   const [user, setUser] = useState([]);
//   useEffect(() => {
//     const getUser = async () => {
//       const res = await axios.get("https://disease.sh/v3/covid-19/countries");

//       console.log(res.data);
//       setUser(res.data);
//     };
//     getUser();
//   }, []);

//   return (
//     <div>
//       {user.map((curr) => {
//         return (
//           <div key={curr.country}>
//             <h1>{curr.country}</h1>
//           </div>
//         );
//       })}
//     </div>
//   );
// };
// export default Api;

import axios from "axios";

const url = "https://disease.sh/v3/covid-19/countries";
const urldis = "https://disease.sh/v3/covid-19/all";
//const url = "https://disease.sh/v3/covid-19/historical/all?lastdays=120";
// const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
  const response = await axios.get(url);

  return response;
};

export const fetchCountries = async () => {
  try {
    const { data } = await axios.get(
      "https://disease.sh/v3/covid-19/countries/"
    );
    return data.map((co) => co.country);
  } catch {}
};
