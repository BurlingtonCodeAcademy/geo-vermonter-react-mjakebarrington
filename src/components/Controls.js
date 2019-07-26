import React from "react";
import "./Map.css";
import "../App.css";
import "./Controls.css";

export default function Controls() {
  return (
    <div id="Controls" class="grid-container">
      <div class="North">N</div>
      <div class="South">S</div>
      <div class="East">E</div>
      <div class="West">W</div>
      <div class="Button"> </div>
    </div>
  );
}
