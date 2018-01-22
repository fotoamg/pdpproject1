import ngModule from '../module';

console.log("main menu directive", ngModule);

export class MainMenuController {
    constructor(){
    }
}


 export default ngModule.directive('mainMenu', () => {
        return {
            restrict: 'E',
            scope: {},
            template: require('./main-menu.html'),
            controllerAs: 'MainMenuController',
            controller: MainMenuController
        }
    } );

