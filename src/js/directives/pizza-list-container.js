import ngModule from '../module';
import '../services/pizzalist';
import './pizza-box';


console.log("list directive", ngModule);

export class PizzaListController {
    constructor(PizzaListSvc){
        console.log('PizzaListSvc',PizzaListSvc);
        this.PizzaListSvc = PizzaListSvc;
        this.PizzaListSvc.getPizzaList().then(pizzas => {
            this.pizzas = pizzas;
        });
    }
}

PizzaListController.$inject = ['PizzaListSvc'];

 export default ngModule.directive('pizzaListContainer', () => {
        return {
            restrict: 'E',
            scope: {},
            template: require('./pizza-list-container.html'),
            controllerAs: 'PizzaListController',
            controller: PizzaListController
        }
    } );

