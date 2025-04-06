const INPUT_PRICE = 'input[type="radio"]'
const BTN_NEXT = '#nextsendquote'

Cypress.Commands.add('selecionarPlano', () =>{
    cy.get(INPUT_PRICE).check({force: true})  
    cy.log('Preço selecionado com sucesso!')
})

Cypress.Commands.add('mensagemSucessoPreco', () => {
    cy.screenshot('Preço selecionado!')
})

Cypress.Commands.add('cliqueBtnNextQuote', () => {
    cy.get('section[style="display: block;"]').within(() =>{
        cy.get(BTN_NEXT).should('be.visible').click()
    })
    cy.log('Clicou no botão Next')
})