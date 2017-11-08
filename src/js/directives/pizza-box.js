class PizzaListController {
    constructor(PizzaListSvc){
        this.PizzaListSvc = PizzaListSvc;
        this.PizzaListSvc.get(this).getPizzaList().then(pizzas => {
            this.pizzas = pizzas;
            this.pizzaJson = JSON.stringify(pizzas);
        });
    }
}

PizzaListController.$inject =   ['PizzaListSvc'];

export default ngModule => {
    ngModule.directive('pizzaBox', () => {
        return {
            restrict: 'E',
            scope: {},
            template: require('./pizza-box.html'),
            controllerAs: 'vm',
            controller: PizzaListController
        }
    } )
}
