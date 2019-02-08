import ngModule from '../module';
import '../services/cart';

//console.log("box bottom list directive", ngModule);

export class PizzaBoxBottomListController {
    constructor(CartSvc) {
        //console.log('CartSvc',CartSvc);
        this.CartSvc = CartSvc;
    }

    addToCart(item) {
        //console.log('add to cart!!! ', item);
        this.CartSvc.addToCart(item.id, item.qti);
        //console.log('In cart: ' + JSON.stringify(this.CartSvc.getCartAsArray()));
        item.qti = 0;
    }
}

PizzaBoxBottomListController.$inject = ['CartSvc'];


export default ngModule.directive('pizzaBoxBottomList', () => {
        return {
            restrict: 'E',
            scope: {
                pizza: '='
            },
            template: require('./pizza-box-bottom-list.html'),
            controllerAs: 'PizzaBoxBottomListController',
            controller: PizzaBoxBottomListController
        }
    } );

