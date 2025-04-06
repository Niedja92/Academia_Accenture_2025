import { Given, When, And, Then, Before, After, But } from 'cypress-cucumber-preprocessor/steps'
import('../pages/formularios_cotacao/1_enter_vehicle_data')
import('../pages/formularios_cotacao/2_enter_insurant_data')
import('../pages/formularios_cotacao/3_enter_product_data')
import('../pages/formularios_cotacao/4_select_price_option')
import('../pages/formularios_cotacao/5_send_quote')

And('não preenche os campos obrigatórios na aba {string}', () => {
    cy.valorIncorreto()
})

Then('uma mensagem de erro é exibida no campo obrigatório', () => {
    cy.msgErro()
})