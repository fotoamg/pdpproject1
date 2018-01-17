import ngModule from '../module';

console.log("service", ngModule);

export class PizzaList {
    constructor($http) {
        Object.assign(this, {
            $http,
        });
        this.pizzaList = this.$http.get('/static/pizzalist.json').then(result => result.data);
    }

    getPizzaList() {
        console.log(this.pizzaList);
        return this.pizzaList;
    }
};

PizzaList.$inject =   ['$http'];

export default ngModule.service('PizzaListSvc', PizzaList);
