(function() {
    'use strict';

    angular
        .module('editor.database.ui')
        .service('UIMemoryService', UIMemoryService);

    function UIMemoryService() {
        var self = this;

        /* Public interface */
        self.storeData = storeData;

        function storeData(data) {
            // console.log(data);
        }
    }

}());