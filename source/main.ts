import { Canvas } from "./canvas";

const root = document.querySelector(".root");

if (root === null)
{
  throw "Root element not found!";
}

const main = new Canvas({
  parent: root
});