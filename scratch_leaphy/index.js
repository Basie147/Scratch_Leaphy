import {
  Project,
  Sprite,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Leaphy from "./Leaphy/Leaphy.js";
import Leaphy2 from "./Leaphy/Leaphy2.js";
import Leaphy3 from "./Leaphy/Leaphy3.js";
import Leaphy4 from "./Leaphy/Leaphy4.js";
import Leaphy5 from "./Leaphy/Leaphy5.js";
import Leaphy6 from "./Leaphy/Leaphy6.js";
import Leaphy7 from "./Leaphy/Leaphy7.js";
import Leaphy8 from "./Leaphy/Leaphy8.js";
import Leaphy9 from "./Leaphy/Leaphy9.js";
import Leaphy10 from "./Leaphy/Leaphy10.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Leaphy: new Leaphy({
    x: 140,
    y: -150,
    direction: -110,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 10,
    visible: true,
    layerOrder: 10,
  }),
  Leaphy2: new Leaphy2({
    x: 100,
    y: -150,
    direction: -30,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 10,
    visible: true,
    layerOrder: 9,
  }),

 
  Leaphy3: new Leaphy3({
    x: 60,
    y: -150,
    direction: -10,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 10,
    visible: true,
    layerOrder: 8,
  }),
  Leaphy4: new Leaphy4({
    x: 20,
    y: -150,
    direction: 10,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 10,
    visible: true,
    layerOrder: 7,
  }),
  Leaphy5: new Leaphy5({
    x: -20,
    y: -150,
    direction: 30,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 10,
    visible: true,
    layerOrder: 6,
  }),
  Leaphy6: new Leaphy6({
    x: -60,
    y: -150,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 10,
    visible: true,
    layerOrder: 5,
  }),
  Leaphy7: new Leaphy7({
    x: -100,
    y: -150,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 10,
    visible: true,
    layerOrder: 4,
  }),
  Leaphy8: new Leaphy8({
    x: -140,
    y: -150,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 10,
    visible: true,
    layerOrder: 3,
  }),
  Leaphy9: new Leaphy9({
    x: 88,
    y: -150,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 10,
    visible: true,
    layerOrder: 2,
  }),
  Leaphy10: new Leaphy10({
    x: -180,
    y: -150,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 10,
    visible: true,
    layerOrder: 1,
  }),

  // Add additional Leaphy sprites here with their properties
};
const project = new Project(stage, sprites, { frameRate: 30 });

function showLeaphys() {
  const num = parseInt(document.getElementById('numLeaphys').value, 10);
  console.log(`Attempting to show ${num} Leaphys.`);
  Object.keys(sprites).forEach((name, index) => {
    const shouldBeVisible = index + 1 <= num;
    sprites[name].visible = shouldBeVisible;
    console.log(`${name} set to visible: ${shouldBeVisible}`);
  });

}

document.addEventListener('DOMContentLoaded', () => {
  const showButton = document.getElementById('showButton');
  if (showButton) {
    showButton.addEventListener('click', showLeaphys);
  } else {
    console.log('Failed to find showButton to attach event.');
  }
});


export default project;