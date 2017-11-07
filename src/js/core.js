import '../css/main.scss';
import angular from 'angular';
let ngModule = angular.module('app', []);
require('./services')(ngModule);
require('./directives')(ngModule);

