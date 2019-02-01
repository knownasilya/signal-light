import { create } from '@microstates/ember';
import Union from './union';

export const Color = Union({
  Red: Color => class extends Color {
    change() {
      return this.type.toYellow();
    }
  },
  Yellow: Color => class extends Color {
    change() {
      return this.type.toRed();
    }
  }
});

export default class TrafficLight {
  color = Color.Yellow.create();
  isBlinking = create(Boolean, true);
}