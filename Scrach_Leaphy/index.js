import {
  Project,
  Sprite,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Leaphy from "./Leaphy/Leaphy.js";
import Leaphy2 from "./Leaphy2/Leaphy2.js";
import Leaphy3 from "./Leaphy3/Leaphy3.js";
import Leaphy4 from "./Leaphy4/Leaphy4.js";
import Leaphy5 from "./Leaphy5/Leaphy5.js";
import Leaphy6 from "./Leaphy6/Leaphy6.js";
import Leaphy7 from "./Leaphy7/Leaphy7.js";
import Leaphy8 from "./Leaphy8/Leaphy8.js";
import Leaphy9 from "./Leaphy9/Leaphy9.js";
import Leaphy10 from "./Leaphy10/Leaphy10.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Leaphy: new Leaphy({
    x: 150.06805127260301,
    y: 157.70766658549076,
    direction: -110,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 10,
    visible: true,
    layerOrder: 10,
  }),
  Leaphy2: new Leaphy2({
    x: 196.75649440356023,
    y: -45.52265582079654,
    direction: -30,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 10,
    visible: true,
    layerOrder: 9,
  }),
  Leaphy3: new Leaphy3({
    x: 208.85050432951584,
    y: -72.65811533170509,
    direction: -10,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 10,
    visible: true,
    layerOrder: 8,
  }),
  Leaphy4: new Leaphy4({
    x: 211.2815788168529,
    y: -102.38465488592479,
    direction: 10,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 10,
    visible: true,
    layerOrder: 7,
  }),
  Leaphy5: new Leaphy5({
    x: 202.73571018559142,
    y: -132.97222226314128,
    direction: 30,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 10,
    visible: true,
    layerOrder: 6,
  }),
  Leaphy6: new Leaphy6({
    x: 178,
    y: -150,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 10,
    visible: true,
    layerOrder: 5,
  }),
  Leaphy7: new Leaphy7({
    x: 148,
    y: -150,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 10,
    visible: true,
    layerOrder: 4,
  }),
  Leaphy8: new Leaphy8({
    x: 118,
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
    x: 56.70082444734717,
    y: -151.79947569070373,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 10,
    visible: true,
    layerOrder: 1,
  }),
};

const project = new Project(stage, sprites, {
  frameRate: 30, // Set to 60 to make your project run faster
});



export default project;
