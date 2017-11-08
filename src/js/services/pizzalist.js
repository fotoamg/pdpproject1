import ngModule from '../module';

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
