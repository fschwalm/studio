describe('UpperCaseValidatorWidgetFactory', function() {
    var Mock = {};
    var factory;
    var whoAmI;

    beforeEach(function() {
        module('studio');

        mockElement();

        inject(function(_$injector_) {
            mockWidgetScope(_$injector_);
            factory = _$injector_.get('UpperCaseValidatorWidgetFactory');
        });

        widget = factory.create(Mock.scope, Mock.element);
    });

    describe('Start a UpperCase Factory Object', function() {
        it('should return a UpperCase Validator Object', function() {
            pending();
        });

        it('should start the data field as false', function() {
            expect(widget.data).toBeDefined();
            expect(widget.data).toEqual(true);
        });
    });


    describe('updates on data', function() {
        it('should model data value be equal to self value', function() {
            expect(Mock.question.fillingRules.options['upperCase'].data.reference).toEqual(widget.data);
        });

        it('should call updateFillingRules from parente widget', function() {
            spyOn(Mock.parentWidget, 'updateFillingRules');

            widget.updateData();

            expect(Mock.parentWidget.updateFillingRules).toHaveBeenCalled();
        });

    });

    function mockElement() {
        Mock.element = {};
    }

    function mockWidgetScope($injector) {
        Mock.scope = {
            class: '',
            $parent: {
                widget: mockParentWidget($injector)
            }
        };
        return Mock.scope;
    }

    function mockParentWidget($injector) {
        mockQuestion($injector);

        Mock.parentWidget = {
            getItem: function() {
                return Mock.question;
            },
            updateFillingRules: function() {}
        };

        return Mock.parentWidget;
    }

    function mockQuestion($injector) {
        Mock.question = $injector.get('SurveyItemFactory').create('IntegerQuestion', 'Q1');
        Mock.question.fillingRules.options['upperCase'] = $injector.get('RulesFactory').create('upperCase');
        return Mock.question;
    }

    function mockAdd($injector) {
        Mock.add = $injector.get('FillingRulesEditorWidgetFactory').create();

    }

});
