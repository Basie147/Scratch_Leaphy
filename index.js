import {
  Project,
  Sprite,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Leaphy from "./Leaphy/Leaphy.js";
import Leaphy2 from "./Leaphy2/Leaphy2.js";
import Leaphy3 from "./Leaphy3/Leaphy3.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Leaphy: new Leaphy({
    x: 179.1633871104201,
    y: -17.283233105579967,
    direction: -15,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 20,
    visible: true,
    layerOrder: 2,
  }),
  Leaphy2: new Leaphy2({
    x: 171.4039183295128,
    y: -108.66319849999337,
    direction: 30,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 20,
    visible: true,
    layerOrder: 1,
  }),
  Leaphy3: new Leaphy3({
    x: 138.29934354539543,
    y: 56.20400104936848,
    direction: -45,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 20,
    visible: true,
    layerOrder: 3,
  }),
};

const project = new Project(stage, sprites, {
  frameRate: 30, // Set to 60 to make your project run faster
});
export default project;
