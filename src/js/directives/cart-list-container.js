import ngModule from '../module';
import '../services/pizzalist';
import '../services/cart';

import './pizza-box';


console.log("cart list directive", ngModule);

export class CartListController {
    constructor(PizzaListSvc, CartSvc) {
        this.PizzaListSvc = PizzaListSvc;
        this.CartSvc = CartSvc;
        this.PizzaListSvc.getPizzaList().then(pizzas => {
            this.pizzasInitial = this.PizzaListSvc.getPizzaListCopy(pizzas);
            this.initItems();
        });
    }

    initItems() {
        this.pizzas = this.PizzaListSvc.getPizzaListCopy(this.pizzasInitial);
        this.cart = this.CartSvc.getCartMap();
        console.log('cart', this.cart);
        this.pizzas.forEach(element => {
            if (this.cart.has(element.id)) {
                element['pcs'] = this.cart.get(element.id)['pcs'];
            } else {
                element['pcs'] = 0;
            }
        });
        console.log('Cart:' + this.cart.size);
    }

    emptyCart() {
        console.log('emptyCart...');
        console.log(this.pizzasInitial);
        console.log(this.pizzas);
        this.pizzas = this.PizzaListSvc.getPizzaListCopy(this.pizzasInitial);
        console.log(this.pizzas);
        this.CartSvc.emptyCart();
        this.cart = this.CartSvc.getCartMap();
    }

    deleteFromCart(id) {
        this.CartSvc.deleteItem(id);
        this.initItems();
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

