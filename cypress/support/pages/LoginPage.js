/// <reference types="Cypress" />

const url = Cypress.config("baseUrl")

class LoginPage{

    reset() {
        cy.reload();
    }

    irSite(){
        cy.visit(url);
    }

    realizaLoginValido(){
        cy.get('input[data-test="username"]').type('standard_user');
        cy.get('input[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
               
    }

    validaLogin(){
        cy.get('.title').should('have.text', 'Products');

        
    }

    realizaLoginivalido(){
        cy.get('input[data-test="username"]').type('standard_user');
        cy.get('input[data-test="password"]').type('123');
        cy.get('[data-test="login-button"]').click();
    }

    msgErro(){
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service');
    }
}

export default new LoginPage;
