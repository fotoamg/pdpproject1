import ngModule from '../module';

console.log("box top list directive", ngModule);

export class PizzaBoxTopListController {
    constructor(){

    }
}

 export default ngModule.directive('pizzaBoxTopList', () => {
        return {
            restrict: 'E',
            scope:{
                pizza: '='
            },
            template: require('./pizza-box-top-list.html'),
            controllerAs: 'vm',
            controller: PizzaBoxTopListController
        }
    } );

