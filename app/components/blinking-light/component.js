import Component from '@ember/component';
import { create, state } from '@microstates/ember';
import BlinkingLight from '../../types/blinking-light';

let microstate = create(BlinkingLight);

export default Component.extend({
  light: state(microstate)
});
