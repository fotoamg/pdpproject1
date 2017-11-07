const HTTP = new WeakMap();


export default ngModule => {
    'use strict';

    /*class PizzaList {
        static $inject = ['$http'];
        constructor($http) {
            this.$http = $http;
        }
        getResults() {
            return this.$http.get('../pizzalist.json');
        }
    };*/

    class PizzaList {

        constructor($http) {
            HTTP.set(this, $http);
        }

        getPizzaList() {
            return HTTP.get(this).get('/static/pizzalist.json').then(result => result.data);
        }
    };

    ngModule.service('PizzaListSvc', () => {
        return PizzaList;
    })


}