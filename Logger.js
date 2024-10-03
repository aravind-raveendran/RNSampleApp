import {rtcDrmEnvironments} from './drm/rtc-drm-transform.js';

export default class Logger {
  constructor(name) {
    this.name = name;
    console.log('Init Logger !!!');
    const env = rtcDrmEnvironments.Production;
    console.log('env !!!', env);
  }

  print() {
    console.log('Logger :' + this.name);
  }
}
