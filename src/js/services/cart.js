import ngModule from '../module';

console.log("cart service ngModule", ngModule);

export class Cart {
    constructor() {
        this.cart = new Map();
    }

    getCartAsArray() {
        return Array.from(this.cart);
    }

    getCartMap() {
        return this.cart;
    }

    addToCart(id, count) {
        let item = this.cart.get(id);
        if (!this.cart.has(id)) {
            item =  { 'pcs' : count };
            this.cart.set(id, item);
        } else {
            item['pcs'] += count;
        }
    }
};


export default ngModule.service('CartSvc', Cart);
