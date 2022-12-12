// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('login', (username1, username2, username3, username4, password) => {
    cy.clearCookies()
 
    cy.get('[data-test="username"]').type(username1)
    cy.get('[data-test="password"]').type(password)
    cy.wait(500)
    cy.get('[data-test="login-button"]').click()
    cy.wait(500)
    cy.get('.title').should('contain.text', 'Products')

    cy.wait(500)
    cy.get('#react-burger-menu-btn').click()
    cy.get('#logout_sidebar_link').click()
   
    cy.get('[data-test="username"]').type(username2)
    cy.get('[data-test="password"]').type(password)
    cy.get('[data-test="login-button"]').click()
    cy.get('.error-message-container').should('contain.text', 'Epic sadface: Sorry, this user has been locked out.')
    cy.get('[data-test="username"]').clear()
    cy.get('[data-test="username"]').type(username3)
    cy.get('[data-test="password"]').clear()
    cy.get('[data-test="password"]').type(password)
    cy.get('[data-test="login-button"]').click()
    cy.get('.title').should('contain.text', 'Products')
    cy.get('.shopping_cart_link').click()
    cy.get('[data-test="continue-shopping"]').click()
    cy.wait(500)
    cy.get('#react-burger-menu-btn').click()
    cy.wait(500)
    cy.get('#logout_sidebar_link').click()
 
    cy.get('[data-test="username"]').type(username4)
    cy.get('[data-test="password"]').type(password)
    cy.get('[data-test="login-button"]').click()
    cy.get('.title').should('contain.text', 'Products')
    cy.get('.shopping_cart_link').click()
    cy.get('[data-test="continue-shopping"]').click()
    cy.get('#react-burger-menu-btn').click()
    cy.get('#logout_sidebar_link').click()
})