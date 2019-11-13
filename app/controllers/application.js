import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

const lights = [
  'traffic',
  'alternating',
  'blinking'
];

export default class ApplicationController extends Controller {
  @tracked
  light = 'traffic';

  @action
  rotateLights() {
    let index = lights.indexOf(this.light);

    if (index >= lights.length - 1) {
      this.light = lights[0];
    } else {
      this.light = lights[index + 1];
    }
  }
}