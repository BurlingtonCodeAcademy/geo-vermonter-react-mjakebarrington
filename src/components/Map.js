import React from "react";
import "./Map.css";
import "./Controls.css";
import L from "leaflet";

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gamestarted: null,
      lat: 44.4759406,
      lon: -73.2123868,
    }
    this.moveSouth = this.moveSouth.bind(this);
    ;
  }

  moveSouth() {
    this.setState(state => ({
      lat: 0
    }));
  }

  componentDidMount() {
    let map = L.map("map").setView([this.state.lat, this.state.lon], 18);
    L.tileLayer(
      "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
      {
        attribution:
          "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
      }
    ).addTo(map);
  }

  render() {
    return (
      <div>
        <br />
        <br />
        <div id="map" />
        <div id="Controls" class="grid-container">
          <div id="North" class="North" onClick={() => this.moveNorth}>
            N
          </div>
          <div class="South" onClick={() => this.moveSouth}>
            S
          </div>
          <div class="East" onClick={() => this.moveEast}>
            E
          </div>
          <div class="West" onClick={() => this.moveWest}>
            W
          </div>
          <div class="Button"> </div>
        </div>
      </div>
    );
  }
}

// // class Map extends React.Component {
//   componentDidMount(props) {
//     super(props);

//     this.state = {
//     // Starting pos for BCA.
//     gamestate: false,
//     lat: 44.4759406,
//     lon: -73.2123868,
//     map: L.map("map", {
//     center: [this.lat, this.lon],
//     zoom: 18,
//     maxZoom: 19,
//     minZoom: 18,
//     layers: [
//         L.tileLayer(
//           "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
//           {
//             attribution:
//               "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
//           }
//         )
//       ]
//     })
//     };

//     // Binding functions to state.
//     this.start = this.start.bind(this);
//     this.end = this.end.bind(this);
//     this.plop = this.plop.bind(this);
//     this.rLon = this.rLon.bind(this);
//     this.rLat = this.rLat.bind(this);
//     this.moveNorth = this.moveNorth.bind(this);
//     this.moveSouth = this.moveSouth.bind(this);
//     this.moveEast = this.moveEast.bind(this);
//     this.moveWest = this.moveWest.bind(this);
//   }

// start() {
//   // Start the game
// }

// end() {
//   // End the Game
// }

// plop() {
//   // Plops the user
// }

// rLon() {
//   // Random longitude
// }

// rLat() {
//   // Random latitude
// }

// moveNorth() {
//   this.lat = this.lat += 0.0000100;
// }

// moveSouth() {
//   // Move map South
// }

// moveEast() {
//   // Move map East
// }

// moveWest() {
//   // Move map West
// }

//   render() {
//     return (
//       <div>
//         <br />
//         <br />
//         <div id="map"></div>

//       </div>
//     );
//   }
// }

export default Map;
