import ngModule from '../module';

console.log("box directive", ngModule);

export class PizzaBoxController {
    constructor(){
        /*this.pizza = pizza;*/
    }
}

 export default ngModule.directive('pizzaBox', () => {
        return {
            restrict: 'E',
            scope:{
                pizza: '=pizza'
            },
            template: require('./pizza-box.html'),
            controllerAs: 'vm',
            controller: PizzaBoxController
        }
    } );

