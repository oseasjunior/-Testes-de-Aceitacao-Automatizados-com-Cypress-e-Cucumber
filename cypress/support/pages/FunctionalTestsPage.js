/// <reference types="Cypress" />



class FunctionalTestsPage {

    validaFiltros() {
        cy.wait(3);
        cy.get('option[value="az"]').should('have.text', 'Name (A to Z)')
        cy.get('option[value="za"]').should('have.text', 'Name (Z to A)')
        cy.get('option[value="lohi"]').should('have.text', 'Price (low to high)')
        cy.get('option[value="hilo"]').should('have.text', 'Price (high to low)')

    }

    selecionaFiltro(index) {
        cy.get('.product_sort_container').select(index)

    }

    validaFiltroSelecionado(menssagem, valor) {
        cy.get('.product_sort_container > option[value="lohi"]').should('have.text', menssagem);
    }

    adicionaProduto() {
        cy.get('button[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();

    }

    validaItemCarrinho(valor) {
        cy.get('.shopping_cart_badge').should('have.text', valor);
    }

    clicaCarrinho() {
        cy.get('.shopping_cart_link').click();
    }

    validaCarrinhoPage() {
        cy.get('.cart_desc_label').should('have.text', 'DESCRIPTION');
    }

    clicaCheckout() {
        cy.get('[data-test="checkout"]').click();
    }

    preencheInformacoes(buyer) {
        cy.get('[data-test="firstName"').type(buyer.firstName);
        cy.get('[data-test="lastName"').type(buyer.lastName);
        cy.get('[data-test="postalCode"').type(buyer.postalCode);
        cy.get('[data-test="continue"]').click();
    }


    cliclaFinish() {
        cy.get('[data-test="finish"]').click();

    }

    validaMensagem() {
        cy.get('.complete-header').should('have.text', 'THANK YOU FOR YOUR ORDER');
    }

    
}

export default new FunctionalTestsPage;




