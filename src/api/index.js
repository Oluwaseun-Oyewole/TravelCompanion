import axios from "axios";

// const URL =
//   "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

export const getPlacesData = async (type, sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,

          // bl_latitude: "11.847676",
          // tr_latitude: "12.838442",
          // bl_longitude: "109.095887",
          // tr_longitude: "109.149359",
        },
        headers: {
          "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
          "x-rapidapi-key":
            "e35491c6e1mshf3aef44fe099f66p1576e7jsn89c8bbffd976",
        },
      }
    );
    // return data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
