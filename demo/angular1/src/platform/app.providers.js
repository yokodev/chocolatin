import angular from 'angular';

import TestService from '../app/services/test.service';

const moduleName = 'app.providers';

angular
  .module(moduleName, [])
  .service('test', TestService);

export default moduleName;
