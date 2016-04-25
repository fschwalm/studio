describe('QuestionFactory', function() {
    var Mock = {},

        OID = 'OID';

    /* @BeforeScenario */
    beforeEach(function() {
        module('otusjs.model');

        inject(function(_$injector_) {
            /* @InjectMocks */
            factory = _$injector_.get('QuestionFactory', {
                CalendarQuestionFactory: mockCalendarQuestionFactory(_$injector_),
                IntegerQuestionFactory: mockintegerQuestionFactory(_$injector_),
                SingleSelectionQuestionFactory: mockSingleSelectionQuestionFactory(_$injector_),
                TextQuestionFactory: mockTextQuestionFactory(_$injector_),
                TimeQuestionFactory: mockTimeQuestionFactory(_$injector_)
            });
        });
    });

    describe('Specialized factory use', function() {

        it('CalendarQuestionFactory.create should be called when parameter is calendar-question', function() {
            spyOn(Mock.CalendarQuestionFactory, 'create');

            factory.create('calendar-question', jasmine.any(String));

            expect(Mock.CalendarQuestionFactory.create).toHaveBeenCalled();
        });

        it('IntegerQuestionFactory.create should be called when parameter is integer-question', function() {
            spyOn(Mock.IntegerQuestionFactory, 'create');

            factory.create('integer-question', jasmine.any(String));

            expect(Mock.IntegerQuestionFactory.create).toHaveBeenCalled();
        });

        it('SingleSelectionQuestionFactory.create should be called when parameter is single-selection-question', function() {
            spyOn(Mock.SingleSelectionQuestionFactory, 'create');

            factory.create('single-selection-question', jasmine.any(String));

            expect(Mock.SingleSelectionQuestionFactory.create).toHaveBeenCalled();
        });

        it('TextQuestionFactory.create should be called when parameter is text-question', function() {
            spyOn(Mock.TextQuestionFactory, 'create');

            factory.create('text-question', jasmine.any(String));

            expect(Mock.TextQuestionFactory.create).toHaveBeenCalled();
        });

        it('TimeQuestionFactory.create should be called when parameter is time-question', function() {
            spyOn(Mock.TimeQuestionFactory, 'create');

            factory.create('time-question', jasmine.any(String));

            expect(Mock.TimeQuestionFactory.create).toHaveBeenCalled();
        });

    });

    describe('Question', function() {

        xit('returned object should extends Question', function() {
            var question = factory.create('calendar-question', jasmine.any(String));

            expect(question.extends).toBe('QuestionFactory');
        });

        it('returned object should have a not null templateID', function() {
            var question = factory.create('calendar-question', OID);

            expect(question.templateID).toBe(OID);
        });

        it('returned object should have a label object for ptBR locale', function() {
            var question = factory.create('calendar-question', OID);

            expect(question.label.ptBR).not.toBeNull();
            expect(question.label.ptBR).not.toBeUndefined();
        });

        it('returned object should have a label object for enUS locale', function() {
            var question = factory.create('calendar-question', OID);

            expect(question.label.enUS).not.toBeNull();
            expect(question.label.enUS).not.toBeUndefined();
        });

        it('returned object should have a label object for enUS locale', function() {
            var question = factory.create('calendar-question', OID);

            expect(question.label.esES).not.toBeNull();
            expect(question.label.esES).not.toBeUndefined();
        });

    });

    function mockCalendarQuestionFactory($injector) {
        Mock.CalendarQuestionFactory = $injector.get('CalendarQuestionFactory');
        return Mock.CalendarQuestionFactory;
    }

    function mockIntegerQuestionFactory($injector) {
        Mock.IntegerQuestionFactory = $injector.get('IntegerQuestionFactory');
        return Mock.IntegerQuestionFactory;
    }

    function mockSingleSelectionQuestionFactory($injector) {
        Mock.SingleSelectionQuestionFactory = $injector.get('SingleSelectionQuestionFactory');
        return Mock.SingleSelectionQuestionFactory;
    }

    function mockTextQuestionFactory($injector) {
        Mock.TextQuestionFactory = $injector.get('TextQuestionFactory');
        return Mock.TextQuestionFactory;
    }

    function mockTimeQuestionFactory($injector) {
        Mock.TimeQuestionFactory = $injector.get('TimeQuestionFactory');
        return Mock.TimeQuestionFactory;
    }

});
