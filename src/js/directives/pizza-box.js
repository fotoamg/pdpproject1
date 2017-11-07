const INIT = new WeakMap();
const PIZZALISTSVC = new WeakMap();

export default ngModule => {

    class PizzaListController {
        constructor(PizzaListSvc){
            PIZZALISTSVC.set(this, PizzaListSvc);

            INIT.set(this, () => {
                PIZZALISTSVC.get(this).getPizzaList().then(pizzas => {
                    this.pizzas = pizzas;
                    this.pizzaJson = JSON.stringify(pizzas);
                });
            });

            INIT.get(this)();
        }
    }

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
