const INPUT_START_DATE = 'input[name="Start Date"]'
const SELECT_INSURANCE_SUM = '#insurancesum'
const SELECT_MERIT_RATING = '#meritrating'
const SELEC_DAMAGE_INSURANCE = '#damageinsurance'
const CHECKBOX_OPTIONAL_PRODUCTS = 'section[style="display: block;"]'
const SELECT_COURTESY_CAR = '#courtesycar'
const BTN_NEXT = '#nextselectpriceoption'

Cypress.Commands.add('inserirDadosProduto', () =>{
    cy.get(INPUT_START_DATE).type('05/07/2025')
    cy.get(SELECT_INSURANCE_SUM).select('3.000.000,00')
    cy.get(SELECT_MERIT_RATING).select('Super Bonus')
    cy.get(SELEC_DAMAGE_INSURANCE).select('Full Coverage')
    cy.get(CHECKBOX_OPTIONAL_PRODUCTS).contains('Euro Protection').click({force: true})
    cy.get(SELECT_COURTESY_CAR).select('Yes')
  
    cy.log('Dados do produto preenchidos com sucesso!')
})

Cypress.Commands.add('mensagemSucessoProduto', () => {
    cy.screenshot('Campos do produto preenchidos!')
    cy.log('Product Data preenchido e enviado')
})

Cypress.Commands.add('cliqueBtnNextPrice', () => {
    cy.get(BTN_NEXT).click()
    cy.log('Clicou no botão Next para a aba de preços')
})