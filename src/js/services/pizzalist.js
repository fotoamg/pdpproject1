class PizzaList {

    constructor($http) {
        Object.assign(this, {
            $http,
        });
    }

    getPizzaList() {
        return this.$http.get('/static/pizzalist.json').then(result => result.data);
    }
};

PizzaList.$inject =   ['$http'];


export default ngModule => {
    ngModule.service('PizzaListSvc', () => {
        return PizzaList;
    })

}