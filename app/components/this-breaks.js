import Component from '@glimmer/component';
import { htmlSafe } from '@ember/string';

import config from 'prod-test-spike/config/environment';

export default class ThisBreaksComponent extends Component {
  get env() {
    return config.environment;
  }

  get someString() {
    return htmlSafe('this is just a test');
  }
}
