Feature: Login to a website
  
  @thisATest
  Scenario: user can successful login
    When I login with the user 'standard_user'
    Then I should see the header 'Swag Labs'

  Scenario Outline: user can successful login
    When I login with the user '<userName>'
    Then I should see the header '<titleToValidate>'

    Examples:
      | userName                | titleToValidate |
      | standard_user           | Swag Labs       |
      | problem_user            | Swag Labs       |
      | performance_glitch_user | Swag Labs       |
      | error_user              | Swag Labs       |
      | visual_user             | Swag Labs       |

  Scenario Outline: user user can't login successfully
    When I login with the user '<userName>'
    Then I should see the warning

    Examples:
      | userName        |
      | no_exist_user   |
      | locked_out_user |
      |                 |
      | empty_password  |
