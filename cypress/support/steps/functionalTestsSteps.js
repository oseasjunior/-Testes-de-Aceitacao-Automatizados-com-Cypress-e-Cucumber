/* global Given, When, Then, And */
import login from '../pages/LoginPage'
import funcional from '../pages/FunctionalTestsPage' 
import buyerFactory from '../factories/FuncionalTestsFactory'

beforeEach(() => {
    login.reset();
    login.irSite();
    login.realizaLoginValido();
        
});

var register = buyerFactory.buyer()

When('seleciona um dos filtros', () => {
    funcional.validaFiltros();
    funcional.selecionaFiltro(2)
    

});
Then('a ordenação é exibida de acordo com o filtro escolhido', () => {
    funcional.validaFiltroSelecionado('Price (low to high)')

}); 




When('o usuário adiciona um produto ao carrinho', () => {
    funcional.adicionaProduto();
    

});


Then('o produto é adicionado', () => {
    funcional.validaItemCarrinho(1)

}); 



Given('que o usuário esteja na página Your Cart', () => {
    funcional.clicaCarrinho();
    
}) 
    
When('clica em checkout', () => {
    funcional.validaCarrinhoPage();
    funcional.clicaCheckout();

}) 

And('preenche as informações', () => {
    funcional.preencheInformacoes(register);

}) 
    
And('clica em finish', () => {
    funcional.cliclaFinish();

}) 
   
Then('é exibida a mensagem "THANK YOU FOR YOUR ORDER"', () => {
    funcional.validaMensagem();

})  


