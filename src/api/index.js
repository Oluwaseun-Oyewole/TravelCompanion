import axios from "axios";

const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

export const getPlacesData = async (bounds) => {
  try {
    const {
      data: { data },
    } = await axios.get(URL, {
      params: {
        bl_latitude: bounds.sw.lat,
        bl_longitude: bounds.sw.lng,
        tr_longitude: bounds.ne.lat,
        tr_latitude: bounds.ne.lng,
      },
      headers: {
        "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
        "x-rapidapi-key": "cfdc008569msh6ce56edfdd1815bp1d3bb6jsndd6f60a738d4",
      },
    });
    // return data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

// import axios from "axios";

// const URL =
//   "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

// const options = {
//   params: {
//     bl_latitude: "11.847676",
//     tr_latitude: "12.838442",
//     bl_longitude: "109.095887",
//     tr_longitude: "109.149359",
//   },
//   headers: {
//     "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
//     "x-rapidapi-key": "cfdc008569msh6ce56edfdd1815bp1d3bb6jsndd6f60a738d4",
//   },
// };

// export const fetchData = async () => {
//   try {
//     const {
//       data: { data },
//     } = await axios.get(URL, options);
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };
