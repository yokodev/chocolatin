// Place extra-vendor her and Angular 2 polyfills
// Like :
//
// import 'jquery';
// import 'materialize/dist/materialize.min.js';
import 'core-js/es6';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';

declare const ENV: string;

if (ENV === 'development') {
  Error.stackTraceLimit = Infinity;

  require('zone.js/dist/long-stack-trace-zone');
}
