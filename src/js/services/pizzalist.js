import ngModule from '../module';
/*import angular from 'angular';
let ngModule = angular.module('app', []);*/

console.log("service", ngModule);

export class PizzaList {
    constructor($http) {
        Object.assign(this, {
            $http,
        });
    }

    getPizzaList() {
        return this.$http.get('/static/pizzalist.json').then(result => result.data);
    }
};

PizzaList.$inject =   ['$http'];

export default ngModule.service('PizzaListSvc', PizzaList);
