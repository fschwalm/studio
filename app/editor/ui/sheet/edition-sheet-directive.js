(function() {
    'use strict';

    angular
        .module('editor.ui')
        .directive('otusEditionSheet', otusSheet);

    function otusSheet() {
        var ddo = {
            restrict: 'E',
            controller: 'SheetController',
            controllerAs: 'sheetController',
            templateUrl: 'app/editor/ui/sheet/sheet.html'
        };

        return ddo;
    }

}());
