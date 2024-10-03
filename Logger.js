import {rtcDrmEnvironments} from './drm/rtc-drm-transform.js';

export default class Logger {
  constructor(name) {
    this.name = name;
    console.log(
      'Read the drm environment to see if it indefinitely blocks the execution???',
    );
    const env = rtcDrmEnvironments.Production;
    console.log('DRM environment is read successfully; ', env);
  }

  print() {
    console.log('Logger :' + this.name);
  }
}
