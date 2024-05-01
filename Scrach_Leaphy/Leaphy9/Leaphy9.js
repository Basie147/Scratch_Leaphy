/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Leaphy9 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Leaphy", "./Leaphy9/costumes/Leaphy.png", {
        x: 273,
        y: 258,
      }),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(-180, -150);
    this.direction = 90;
    while (true) {
      if (this.colorTouching(Color.rgb(255, 247, 0), Color.rgb(255, 0, 0))) {
        yield* this.wait(5);
        for (let i = 0; i < 20; i++) {
          this.move(2);
          yield;
        }
      }
      if (this.colorTouching(Color.rgb(255, 247, 0), Color.rgb(0, 255, 21))) {
        yield* this.wait(3);
        for (let i = 0; i < 20; i++) {
          this.move(2);
          yield;
        }
      }
      if (this.colorTouching(Color.rgb(255, 247, 0), Color.rgb(0, 94, 255))) {
        yield* this.wait(2);
        for (let i = 0; i < 20; i++) {
          this.move(2);
          yield;
        }
      }
      if (this.colorTouching(Color.rgb(153, 102, 255), Color.rgb(0, 0, 0))) {
        this.direction -= 10;
      }
      if (this.colorTouching(Color.rgb(0, 255, 232), Color.rgb(0, 0, 0))) {
        this.direction += 10;
      }
      if (this.colorTouching(Color.rgb(249, 0, 255), Color.rgb(119, 180, 68))) {
        this.move(-2);
      }
      this.move(2);
      yield;
    }
  }
}
