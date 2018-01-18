import ngModule from '../module';
import '../services/pizzalist';
import '../services/cart';

import './pizza-box';


console.log("cart list directive", ngModule);

export class CartListController {
    constructor(PizzaListSvc, CartSvc){
        this.PizzaListSvc = PizzaListSvc;
        this.PizzaListSvc.getPizzaList().then(pizzas => {
            this.pizzas = Object.assign([], pizzas);
            this.CartSvc = CartSvc;
            this.cart = CartSvc.getCartMap();
            this.pizzas.forEach(element => {
                if (this.cart.has(element.id)) {
                    element['pcs'] = this.cart.get(element.id)['pcs'];
                } else {
                    element['pcs'] = 0;
                }
            });    
        });
        
    }
}

CartListController.$inject = ['PizzaListSvc','CartSvc'];

 export default ngModule.directive('cartListContainer', () => {
        return {
            restrict: 'E',
            scope: {},
            template: require('./cart-list-container.html'),
            controllerAs: 'CartListController',
            controller: CartListController
        }
    } );

