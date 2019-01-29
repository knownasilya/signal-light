import { create } from '@microstates/ember';

import Union from './union';

const LONG_TIME = 8;
const SHORT_TIME = 3;


export const Color = Union({
  Red: Color => class extends Color {
    change() {
      return this.type.toGreen();
    }
  },
  Yellow: Color => class extends Color {
    change() {
      return this.type.toRed();
    }
  },
  Green: Color => class extends Color {
    change() {
      return this.type.toYellow();
    }
  }
});


export default class TrafficLight {
  color = Color.Red.create();
  timer = create(Number, LONG_TIME);

  initialize(value = {}) {
    if (this.color.isYellow && value.timer === undefined) {
      return this.timer.set(SHORT_TIME);
    }
    return this;
  }

  get isBlinking() {
    return this.color.isGreen && this.timer.state < 7;
  }

  changeColor(color) {
    switch(color) {
      case 'red': return this.color.type.toRed();
      case 'green': return this.color.type.toGreen();
      case 'yellow': return this.color.type.toYellow();
    }
  }

  cycle() {
    let next = this.timer.decrement();
    if (next.timer.state <= 0) {
      // when the time expired, change the color
      let changed = next.color.change();
      if (changed.color.isYellow) {
        // yellow only runs for 5 seconds
        return changed.timer.set(SHORT_TIME);
      } else {
        // all other run for full 15 seconds
        return changed.timer.set(LONG_TIME);
      }
    } else {
      return next;
    }
  }
}