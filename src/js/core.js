import '../css/main.scss';
/*import angular from 'angular';*/
let angular = require('angular');
let ngModule = angular.module('app', []);
require('./directives')(ngModule);

/*
let app = () => {
    return {
        template: require('../index.html'),
        controller: 'AppCtrl',
        controllerAs: 'app'
    }
};

class AppCtrl {
    constructor() {
        this.url = 'https://epam.com';
    }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [])
    .directive('app', app)
    .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;
*/