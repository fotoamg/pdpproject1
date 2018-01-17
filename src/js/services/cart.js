import ngModule from '../module';

console.log("service", ngModule);

export class Cart {
    constructor() {
        this.cart = {};
    }

    getCart() {
        return this.cart;
    }

    addToCart(id, count) {
        
    }
};


export default ngModule.service('CartSvc', CartList);
