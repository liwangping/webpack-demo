import _ from "lodash";
import "./index.less";
import iconPng from "./icon.png";

function component() {
  const element = document.createElement("div");

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(["Hello", "webpack"], " ");

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = iconPng;

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());
