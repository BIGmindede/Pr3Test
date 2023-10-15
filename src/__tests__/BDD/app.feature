Feature: Values Converter

  Scenario: User opens web-application (generateInputFields)
    Given a started web-application
    When User opens web-application
    Then input fields appear filled with stub values

  Scenario: User selects parameters (popup labels when selected not default value)
    Given a convertor of values from SI, Old Russian and American systems
    When user selects any params of convertor
    Then label of appropriate parameter pops up and parameter saves in state

  Scenario: User chooses systems and type of value parameters (unitPicker)
    Given a convertor of values from SI, Old Russian and American systems
    When user selects source and result system and type of value parameters
    Then units of measurement determined

  Scenario: User applies the selected parameters and converts values (converter)
    Given a convertor of values from SI, Old Russian and American systems
    When user selects all parameters and clicks the apply button
    Then the app calls appropriate function and sets its return value into appropriate state