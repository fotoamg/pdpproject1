import ngModule from '../module';

console.log("box bottom list directive", ngModule);

export class PizzaBoxBottomListController {
    constructor() {

    }

    addToCart() {
        console.log('add to cart!!!');
    }
}

 export default ngModule.directive('pizzaBoxBottomList', () => {
        return {
            restrict: 'E',
            scope:{
                pizza: '='
            },
            template: require('./pizza-box-bottom-list.html'),
            controllerAs: 'PizzaBoxBottomListController',
            controller: PizzaBoxBottomListController
        }
    } );

