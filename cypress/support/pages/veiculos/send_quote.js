const INPUT_EMAIL = '#email'
const INPUT_PHONE = '#phone'
const INPUT_USERNAME = '#username'
const INPUT_PASSWORD = '#password'
const INPUT_CONFIRM_PASSWORD = '#confirmpassword'
const TEXTAREA = '#Comments'
const BTN_SEND = '#sendemail'
const ALERT_MESSAGE = '.sweet-alert'

Cypress.Commands.add('', () => {
    cy.get(INPUT_EMAIL).type(Cypress.env('email')), {log: false} // esta informação contendo {log: false} evita que os dados sensíveis apareçam no log do Cypress
    cy.get(INPUT_PHONE).type(Cypress.env('phone')), {log: false}
    cy.get(INPUT_USERNAME).tyoe(Cypress.env('Jose')), {log: false}
    cy.get(INPUT_PASSWORD).type(Cypress.env('password')), {log: false}
    cy.get(INPUT_CONFIRM_PASSWORD).type(Cypress.env('')), {log: false}
    cy.get(TEXTAREA).type('Testando')
})


Cypress.Commands.add('clicaEnvioEmail', () => {
    cy.get(BTN_SEND).click()
    cy.log('Clicou no botão Next')    
})

Cypress.Commands.add('validaMensagemSucesso', () => {
    cy.get(ALERT_MESSAGE).click()
    cy.screenshot('Validando envio do e-mail!')
})