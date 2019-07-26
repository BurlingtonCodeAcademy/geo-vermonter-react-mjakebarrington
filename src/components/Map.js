import React from "react";
import "./Map.css";
import "./Controls.css";
import L from "leaflet";

class Map extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    // Starting pos for BCA.
    gamestate: false,
    lat: 44.4759406,
    lon: -73.2123868,
    map: L.map("map", {
    center: [this.lat, this.lon],
    zoom: 18,
    maxZoom: 19,
    minZoom: 18,
    layers: [
        L.tileLayer(
          "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
          {
            attribution:
              "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
          }
        )
      ]
    })
    };

    // Binding functions to state.
    this.start = this.start.bind(this);
    this.end = this.end.bind(this);
    this.plop = this.plop.bind(this);
    this.rLon = this.rLon.bind(this);
    this.rLat = this.rLat.bind(this);
    this.moveNorth = this.moveNorth.bind(this);
    this.moveSouth = this.moveSouth.bind(this);
    this.moveEast = this.moveEast.bind(this);
    this.moveWest = this.moveWest.bind(this);
  }

start() {
  // Start the game
}

end() {
  // End the Game
}

plop() {
  // Plops the user
}

rLon() {
  // Random longitude
}

rLat() {
  // Random latitude
}

moveNorth() {
  // Move map North
}

moveSouth() {
  // Move map South
}

moveEast() {
  // Move map East
}

moveWest() {
  // Move map West
}

  render() {
    return (
      <div>
        <br />
        <br />
        <div id="map" lat={this.props.lat} lon={this.props.lon} />
        <div id="Controls" class="grid-container">
          <div id="North" class="North">
            N
          </div>
          <div class="South">S</div>
          <div class="East">E</div>
          <div class="West">W</div>
          <div class="Button"> </div>
        </div>
      </div>
    );
  }
}

export default Map;
