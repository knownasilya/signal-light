import Component from '@glimmer/component';
import { set } from '@ember/object';
import { create, state } from '@microstates/ember';
import BlinkingLight from '../../types/blinking-light';

let microstate = create(BlinkingLight);

export default class BlinkingLightComponent extends Component {
  @(state(microstate))
  light;

  // hack for now till microstates addon updated
  set() {
    set(this, ...arguments);
  }
}
