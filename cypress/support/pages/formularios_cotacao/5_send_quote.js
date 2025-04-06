const INPUT_EMAIL = 'input[name="E-Mail"]'
const INPUT_PHONE = '#phone'
const INPUT_USERNAME = '#username'
const INPUT_PASSWORD = '#password'
const INPUT_CONFIRM_PASSWORD = '#confirmpassword'
const TEXTAREA = '#Comments'
const BTN_SEND = '#sendemail'
const ALERT_MESSAGE = '.sweet-alert'

Cypress.Commands.add('preencherFormEmail', () => {
    cy.get('section#sendQuoteForm', { timeout: 10000 })
    .should('be.visible');
  

    cy.get(INPUT_EMAIL, { timeout: 10000 })
      .should('be.visible')
      .type(Cypress.env('email'), { log: false });

    cy.get(INPUT_PHONE).type(Cypress.env('phone'), { log: false });
    cy.get(INPUT_USERNAME).type(Cypress.env('username'), { log: false });
    cy.get(INPUT_PASSWORD).type(Cypress.env('password'), { log: false });
    cy.get(INPUT_CONFIRM_PASSWORD).type(Cypress.env('repeatPassword'), { log: false });
    cy.get(TEXTAREA).type('Testando');

    cy.log('Formulário preenchido!');
    cy.screenshot('formulario_send_quote_preenchido');
});

Cypress.Commands.add('enviarForm', () => {
    cy.get(BTN_SEND).click()  
    cy.screenshot('Envio do e-mail!')
})


Cypress.Commands.add('enviarForm', () => {
    cy.get(BTN_SEND).click()  
    cy.screenshot('Envio do e-mail!')
})

Cypress.Commands.add('validarMsgSucesso', () => {
    cy.get(ALERT_MESSAGE, {timeout: 15000})
    .should('be.visible')
    .and('contain', 'Sending e-mail success!')
    cy.pause()
    //cy.get('.confirm').click()
    cy.screenshot('Validação do envio do e-mail com sucesso')
})