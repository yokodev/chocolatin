import angular from 'angular';

import Home from '../app/components/home';

const moduleName = 'app.components';

angular
  .module(moduleName, [])
  .component('home', Home);

export default moduleName;
