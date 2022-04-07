/// <reference types="cypress"/>


describe('test de login', () => {

    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/login')
    })
    it('valid user can login', () =>{
        cy.get('#username').type("tomsmith")
        cy.get('#password').type("SuperSecretPassword!")
        cy.get('.fa').click()
        cy.get('#flash').contains("You logged into a secure area!")
    })

    it('usuario no valido no puede loguearse', () =>{
        cy.get('#username').type("tomsmi")
        cy.get('#password').type("SuperSecretPassword!")
        cy.get('.fa').click()
        cy.get('#flash').contains("Your username is invalid!")
    })
    
    
    it.skip('password incorrecto, no puede loguearse', () =>{
        cy.get('#username').type("tomsmith")
        cy.get('#password').type("SuperSecretPas")
        cy.get('.fa').click()
        cy.get('#flash').contains("Your password is invalid!")
    })
}) 


// skip para saltarse una prueba




