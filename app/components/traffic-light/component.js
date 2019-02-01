import Component from '@ember/component';
import { create, state } from '@microstates/ember';
import TrafficLight from '../../types/traffic-light';

let microstate = create(TrafficLight);

export default Component.extend({
  tagName: '',
  light: state(microstate),

  init() {
    this._super(...arguments);
    
    setInterval(() => {
      if (this.isDestroyed || this.isDestroying) {
        return;
      }

      this.light.cycle();
    }, 1000);
  }
});
