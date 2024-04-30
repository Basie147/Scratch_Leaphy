/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Leaphy3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Leaphy", "./Leaphy3/costumes/Leaphy.png", {
        x: 275,
        y: 292,
      }),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(98, -136);
    this.direction = 90;
    while (true) {
      if (this.colorTouching(Color.rgb(255, 0, 0), Color.rgb(0, 0, 0))) {
        this.direction -= 15;
      }
      if (this.colorTouching(Color.rgb(0, 58, 255), Color.rgb(0, 0, 0))) {
        this.direction += 15;
      }
      this.move(5);
      yield;
    }
  }
}
