/* global Given, When, Then */
import login from '../pages/LoginPage'



Given('que o usuário esteja na página de login', () => {
    login.irSite();
    

} )

When('insere usuário juntamente com senha válidos', () => {
    login.realizaLoginValido();

} )

Then('a página home é exibida', () => {
    login.validaLogin();

} )

Given('que o usuário esteja na página de login', () => {
    login.irSite();
    

} )

When('insere um usuário ou uma senha Invalida', () => {
    login.irSite();
    login.realizaLoginivalido();
})

Then('é exibida uma menssagem de erro', () => {
    login.msgErro();
})

