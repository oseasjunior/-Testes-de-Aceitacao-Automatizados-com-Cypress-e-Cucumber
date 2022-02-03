
Feature: Login Swag Labs

Scenario: Login Valido no Swag Labs
    Given que o usuário esteja na página de login
    When insere usuário juntamente com senha válidos
    Then a página home é exibida




    Scenario: Login Invalido no Swag Labs
    Given que o usuário esteja na página de login
    When insere um usuário ou uma senha Invalida
    Then é exibida uma menssagem de erro



