import ngModule from '../module';

console.log("pizzalist service ngModule", ngModule);

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

    getPizzaListCopy(pizzas) {
        console.log('PIZZASSSSS', pizzas);
        let copied = [];
        pizzas.forEach(
            pizza => {
                copied.push(Object.assign({}, pizza));
            }
        ) 
        console.log(copied);
        return copied;
    }
};

PizzaList.$inject =   ['$http'];

export default ngModule.service('PizzaListSvc', PizzaList);
