import angular from 'angular';
import router from 'angular-ui-router';

import providers from './app.providers';
import components from './app.components';
import routes from './app.routes';

const moduleName = 'app';

angular
  .module(moduleName, [...providers, ...components, router])
  .config(($stateProvider, $locationProvider, $urlRouterProvider) => {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise(routes.default);

    Object
      .keys(routes)
      .filter(route => route !== 'default')
      .forEach(route => $stateProvider.state(routes[route].name, routes[route]));
  });

export default moduleName;
