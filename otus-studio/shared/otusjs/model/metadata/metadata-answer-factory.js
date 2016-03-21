(function() {
	'use strict';

	angular
		.module('otusjs.model')
		.factory('MetadataAnswerFactory', MetadataAnswerFactory);

	MetadataAnswerFactory.$inject = ['LabelFactory'];

	function MetadataAnswerFactory(LabelFactory) {
		var self = this;

		/* Public interface */
		self.create = create;

		function create(oid, questionOID) {
			return new QuestionAnswerOption(oid, questionOID, LabelFactory);
		}

		return self;
	}

	function MetadataAnswer(oid, questionOID, LabelFactory) {
		Object.defineProperty(this, 'extends', {
			value : 'StudioObject',
			writable : false,
			enumerable : true
		});

		Object.defineProperty(this, 'objectType', {
			value : 'MetadataAnswer',
			writable : false,
			enumerable : true
		});

		Object.defineProperty(this, 'oid', {
			value : oid,
			writable : false,
			enumerable : true
		});

		Object.defineProperty(this, 'dataType', {
			value : 'Integer',
			writable : false,
			enumerable : true
		});

		Object.defineProperty(this, 'parentQuestion', {
			value : questionOID,
			writable : false,
			enumerable : true
		});

		Object.defineProperty(this, 'label', {
			value : {
				'ptBR' : LabelFactory.create(),
				'enUS' : LabelFactory.create(),
				'esES' : LabelFactory.create()
			},
			writable : true,
			enumerable : true
		});
		
		Object.defineProperty(this, 'value', {
			value : null,
			writable : true,
			enumerable : true
		});
	}

}());