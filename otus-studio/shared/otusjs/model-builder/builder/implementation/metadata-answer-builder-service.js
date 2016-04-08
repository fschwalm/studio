(function(){
	'use strict';
	
	angular
    .module('otusjs.modelBuilder')
    .service('MetadataAnswerBuilderService', MetadataAnswerBuilderService);
	
	MetadataAnswerBuilderService.$inject = ['MetadataAnswerFactory'];

	function MetadataAnswerBuilderService(MetadataAnswerFactory) {
		var self = this,
			 observers = [],
	         workResult = null;
		
		 /* Public interface */
        self.runValidations = runValidations;
		self.execute = execute;
        self.getWorkResult = getWorkResult;
        
        /* Observable interface */
        self.registerObserver = registerObserver;

        // TODO: Implement validator to run here
        function runValidations(work) {
            workResult = true;
        }

        function getWorkResult() {
            return {
                result: workResult
            };
        }
        
        function execute(work) {
        	var metadataOption = null;
        	
        	 if (work.type.isAddData()) {
        		 metadataOption = addOption(work);
             } else if (work.type.isRemoveData()) {
            	 metadataOption = removeOption(work);
             } else if (work.type.isUpdateData()) {
            	 metadataOption = updateOption(work);
             }

             notifyObservers(metadataOption, work.type);
        }
        
        function addOption(work) {
            var selectedQuestion = extractQuestionReference(work.target);
            var nextOID = Object.keys(work.survey.getQuestionContainer()[selectedQuestion].metadata.option).length;

            var newOption = MetadataAnswerFactory.create(nextOID, selectedQuestion);
            work.survey.getQuestionContainer()[selectedQuestion].metadata.option[nextOID] = newOption;

            return newOption;
        } 
        
        function removeOption(work) {
        	var selectedQuestion = extractQuestionReference(work.target),
                indexToRemove = Object.keys(work.survey.getQuestionContainer()[selectedQuestion].metadata.option).length - 1,
                optionNameToRemove = Object.keys(work.survey.getQuestionContainer()[selectedQuestion].metadata.option)[indexToRemove],
                optionToRemove = work.survey.getQuestionContainer()[selectedQuestion].metadata.option[optionNameToRemove];

            delete work.survey.getQuestionContainer()[selectedQuestion].metadata.option[optionNameToRemove];
            return optionToRemove;
        }
        
        function updateOption(work) {
        	var selectedQuestion = extractQuestionReference(work.target),
                selectedOption = work.target.split('.')[5],
                optionToUpdate = work.survey.getQuestionContainer()[selectedQuestion].metadata.option[selectedOption];

            optionToUpdate.label.ptBR.plainText = work.data.plainText || work.data.value;
            optionToUpdate.label.ptBR.formattedText = work.data.formattedText;
            return optionToUpdate;
        }
        
        function extractQuestionReference(target) {
            return target.split('.')[2];
        }
        
        function notifyObservers(metadata, workType) {
            workType.data = metadata;
            observers.forEach(function(observer) {
                observer.update(workType);
            });
        }

        function registerObserver(observer) {
            observers.push(observer);
        }
        
	}
	
}()); 