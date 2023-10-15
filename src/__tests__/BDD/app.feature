Feature: Values Converter

  Scenario: User opens web-application (generateInputFields)
    Given a started web-application
    When User opens web-application
    Then input fields appear filled with stub values

  Scenario: User selects parameters
    Given a convertor of values from SI, Old Russian and American systems
    When user selects any params of convertor
    Then label of appropriate parameter pops up and parameter saves in state

  Scenario: User chooses systems and type of value parameters (undefaultSelection)
    Given a convertor of values from SI, Old Russian and American systems
    When user selects source and result system and type of value parameters
    Then units of measurement determined

  Scenario: User applies the selected parameters and converts values
    Given a convertor of values from SI, Old Russian and American systems
    When user selects all parameters and clicks the apply button
    Then the app calls appropriate function and sets its return value into appropriate state

  Scenario: User converts from not SI system or not into SI system (converter)
    Given a converter function
    When a converter function gets source or result system arg not as SI system
    Then it translates value into SI system

  Scenario: User converts from SI system or into SI system (converter)
    Given a converter function working
    When a converter function gets source or result system arg as SI system
    Then it doesnt translate value into SI system

  Scenario: User converts from and to same systems but uses different units (converter)
    Given a converter function working
    When a converter function gets same source and result system args but different units args
    Then it doesnt return input value but normally converts it into result system

  Scenario:  User converts from and to same systems and uses same units (converter)
    Given a converter function working
    When a converter function gets same source and result system and units args  
    Then it returns input value