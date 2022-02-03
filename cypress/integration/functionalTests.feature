Feature: Singnup

Scenario: Testar todos os Filtros
    When seleciona um dos filtros
    Then a ordenação é exibida de acordo com o filtro escolhido

Scenario: Adicionar produto
    When  o usuário adiciona um produto ao carrinho
    Then o produto é adicionado

Scenario: Checkout
    Given que o usuário esteja na página Your Cart
    When clica em checkout
    And preenche as informações
    And clica em finish
    Then  é exibida a mensagem "THANK YOU FOR YOUR ORDER" 







