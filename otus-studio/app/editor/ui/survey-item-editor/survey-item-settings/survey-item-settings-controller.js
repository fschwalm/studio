(function() {
    'use strict';

    angular
        .module('editor.ui')
        .controller('SurveyItemSettingsController', SurveyItemSettingsController);

    SurveyItemSettingsController.$inject = [
        '$scope',
        '$element',
        'TemplateLoaderService',
        'SurveyItemSettingsContentService'
    ];

    function SurveyItemSettingsController($scope, $element, TemplateLoaderService, SurveyItemSettingsContentService) {
        var self = this;

        self.navigation = navigation;

        function navigation(templateID) {
            var contentArea = $element.find('.toolbar-content-' + templateID);

            if (!contentArea.children().length) {
                SurveyItemSettingsContentService.loadNavigation(contentArea, $scope);
            } else {
                SurveyItemSettingsContentService.closeNavigation(contentArea);
            }
        }
    }

}());
