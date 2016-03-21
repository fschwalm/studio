(function() {
    'use strict';

    angular
        .module('otusjs.model')
        .factory('NumericQuestionFactory', NumericQuestionFactory);

    NumericQuestionFactory.$inject = ['UnitFactory', 'MetadataGroupFactory'];

    function NumericQuestionFactory(UnitFactory, MetadataGroupFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(oid, prototype) {
            return new NumericQuestion(oid, prototype, UnitFactory, MetadataGroupFactory);
        }

        return self;
    }

    function NumericQuestion(oid, prototype, UnitFactory, MetadataGroupFactory) {
        Object.defineProperty(this, 'extends', {
            value: prototype.objectType,
            writable: false,
            enumerable: true
        });

        Object.defineProperty(this, 'objectType', {
            value: 'NumericQuestion',
            writable: false,
            enumerable: true
        });

        Object.defineProperty(this, 'oid', {
            value: prototype.oid,
            writable: false,
            enumerable: true
        });

        Object.defineProperty(this, 'dataType', {
            value: 'Integer',
            writable: false,
            enumerable: true
        });

        Object.defineProperty(this, 'label', {
            value: prototype.label,
            writable: true,
            enumerable: true
        });

        Object.defineProperty(this, 'unit', {
            value: {
                'ptBR': UnitFactory.create(),
                'enUS': UnitFactory.create(),
                'esES': UnitFactory.create()
            },
            writable: true,
            enumerable: true
        });
        
        Object.defineProperty(this, 'metadata', {
        	value: MetadataGroupFactory.create(),
        	writable : true, 
        	enumerable : true
        });
    }

}());
