import React from 'react';
import './Map.css'
import L from 'leaflet';


class Map extends React.Component {
    componentDidMount() {
        this.map = L.map("map", {
            //Start on Burlington Code Academy
            center: [44.4759406, -73.2123868],
            zoom: 18,
            maxZoom: 18,
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
}
render() {
    return (
        <div>
        <br />
        <br />
        <div id="map"></div>
        </div>
    );
}
};

export default Map;