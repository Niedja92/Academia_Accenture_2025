const SELECT_PRICE = '#selectultimate'
const BTN_NEXT = '#nextsendquote'

Cypress.Commands.add('selecionePreco', () => {
  // Seleciona a opção Ultimate (sem esperar visibilidade)
  cy.get(SELECT_PRICE).click({ force: true })

  // Força o clique no botão "Next", ignorando estado invisível
  cy.get(BTN_NEXT).click({ force: true })

  cy.log('Avançou para Send Quote forçadamente')

  cy.get('#pricePlans', { timeout: 0 }).then(($section) => {   // pega o elemento do ID sem esperar
    if ($section.is(':visible')) {                             // acessa o método :visible tornando o elemento true 
      cy.log('Section visível normalmente')                    // o log é usado para depurar o código
    } else {
      cy.log('Section invisível, mas ignorando')
    }
  })
  
})
