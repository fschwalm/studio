(function() {
  'use strict';

  angular
    .module('otusjs.studio.navigationBuilder')
    .service('otusjs.studio.navigationBuilder.NavigationBuilderScopeService', service);

  service.$injects = [
    'NBEVENTS',
    'NBMESSAGES'
  ]

  function service(NBEVENTS, NBMESSAGES) {
    var self = this;
    var _scope = null;

    self.NBEVENTS = NBEVENTS;
    self.NBMESSAGES = NBMESSAGES;

    /* Public methods */
    self.initialize = initialize;
    self.onEvent = onEvent;
    self.broadcast = broadcast;
    self.emit = emit;
    self.digest = digest;

    function initialize(scope) {
      scope.events = NBEVENTS;
      scope.messages = NBMESSAGES;

      _scope = scope;
    }

    function onEvent(event, listener) {
      _scope.$on(event, listener);
    }

    function broadcast(event, data) {
      _scope.$broadcast(event, data);
    }

    function emit(event, data) {
      _scope.$emit(event, data);
    }

    function digest() {
      _scope.$digest();
    }

  }
}());
