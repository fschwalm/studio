(function() {
    'use strict';

    angular
        .module('editor.ui')
        .directive('imageItem', imageItem);

    function imageItem(ImageItemWidgetFactory) {
        var ddo = {
            scope: {},
            templateUrl: 'app/editor/ui/page-item/image/image-item.html',
            retrict: 'E',
            link: function(scope, element) {
                scope.widget = scope.$parent.widget;
            }
        };

        return ddo;
    }

}());
