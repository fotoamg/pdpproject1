module.exports = function(ngModule) {
    ngModule.directive('pizzaBox', function() {
        return {
            restrict: 'E',
            scope: {},
            template: require('./pizza-box.html'),
            controllerAs: 'vm',
            controller: function () {
                let vm = this;
                vm.pizzaName = 'Some pizza name';
            }

        }
    } )
}