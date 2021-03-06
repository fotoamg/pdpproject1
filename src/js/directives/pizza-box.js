import ngModule from '../module';
import './pizza-box-top-list';
import './pizza-box-bottom-list';

console.log("box directive", ngModule);

export class PizzaBoxController {
    constructor(){

    }
}

 export default ngModule.directive('pizzaBox', () => {
        return {
            restrict: 'E',
            scope:{
                pizza: '='
            },
            template: require('./pizza-box.html'),
            controllerAs: 'vm',
            controller: PizzaBoxController
        }
    } );

