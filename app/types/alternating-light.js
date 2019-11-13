import { create } from '@microstates/ember';

import Union from './union';

const TIME = 5;

export const Side = Union({
  Left: Side => class extends Side {
    change() {
      return this.type.toRight();
    }
  },
  Right: Side => class extends Side {
    change() {
      return this.type.toLeft();
    }
  }
});

export default class TrafficLight {
  side = Side.Right.create();
  timer = create(Number, TIME);

  changeSide(side) {
    let res = this.timer.set(TIME);

    switch(side) {
      case 'left': return res.side.type.toRight();
      case 'right': return res.side.type.toLeft();
    }
  }

  cycle() {
    let next = this.timer.decrement();
    if (next.timer.state <= 0) {
      // when the time expired, change the side
      let changed = next.side.change();
      return changed;
    } else {
      return next;
    }
  }
}