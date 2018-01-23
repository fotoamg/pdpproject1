import ngModule from '../module';

console.log("cart service ngModule", ngModule);

export class Cart {
    constructor() {
        this.cart = new Map();
        
        let savedCartString = localStorage.getItem("pizzacart");
        console.log(savedCartString);

        if (savedCartString && '{}' != savedCartString) {
            let savedCart = new Map(JSON.parse(savedCartString));
            if (savedCart && savedCart.size > 0) {
                this.cart = savedCart;
            }
        }
    }

    getCartAsArray() {
        return Array.from(this.cart);
    }

    getCartMap() {
        return this.cart;
    }

    emptyCart() {
        this.cart = new Map();
        localStorage.setItem("pizzacart", "{}");
    }

    deleteItem(id) {
        this.cart.delete(id);
        localStorage.setItem("pizzacart", JSON.stringify([...this.cart]));
    }

    addToCart(id, count) {
        let item = this.cart.get(id);
        if (!this.cart.has(id)) {
            item =  { 'pcs' : count };
            this.cart.set(id, item);
        } else {
            item['pcs'] += count;
        }
        console.log('cartJSON: ' + JSON.stringify([...this.cart]));
        console.log('cart: ', this.cart);
        localStorage.setItem("pizzacart", JSON.stringify([...this.cart]));
    }
};


export default ngModule.service('CartSvc', Cart);
