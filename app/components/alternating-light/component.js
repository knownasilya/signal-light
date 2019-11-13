import Component from '@glimmer/component';
import { set } from '@ember/object';
import { create, state } from '@microstates/ember';
import AlternatingLight from '../../types/alternating-light';

let microstate = create(AlternatingLight);

export default class AlternatingLightComponent extends Component {
  @(state(microstate))
  light;

  constructor() {
    super(...arguments);
    
    setInterval(() => {
      if (this.isDestroyed || this.isDestroying) {
        return;
      }

      this.light.cycle();
    }, 1000);
  }

  // hack for now till microstates addon updated
  set() {
    set(this, ...arguments);
  }
}
