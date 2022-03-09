import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab";
import useStyles from "./styles";

const Map = ({ setCoordinates, setBounds, coordinates }) => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(min-width:600px)");

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDlp0g93o3h0XjtiE4hQ6O5Bv-Uo-azgQ4" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={""}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;

// useEffect(() => {
//   // to the the user current location
//   navigator.geolocation.getCurrentPosition(
//     ({ coords: { latitude, longitude } }) => {
//       setCoordinates({ lat: latitude, lng: longitude });
//     }
//   );
// }, []);

// useEffect(() => {
//   console.log("hello world");
//   function getLocation() {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(showPosition, showError);
//     } else {
//       return "Geolocation is not supported by this browser.";
//     }
//   }

//   function showPosition(position) {
//     console.log("showing location");
//   }

//   function showError(error) {
//     switch (error.code) {
//       case error.PERMISSION_DENIED:
//         console.log("User denied the request for Geolocation.");
//         break;
//       case error.POSITION_UNAVAILABLE:
//         console.log("Location information is unavailable.");
//         break;
//       case error.TIMEOUT:
//         console.log("The request to get user location timed out.");
//         break;
//       case error.UNKNOWN_ERROR:
//         console.log("An unknown error occurred.");
//         break;
//     }
//   }

//   getLocation();
// });
