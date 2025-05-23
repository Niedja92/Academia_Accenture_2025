import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'
import('../pages/formularios_cotacao/1_enter_vehicle_data')
import('../pages/formularios_cotacao/2_enter_insurant_data')
import('../pages/formularios_cotacao/3_enter_product_data')
import('../pages/formularios_cotacao/4_select_price_option')
import('../pages/formularios_cotacao/5_send_quote')

Given('que o usuário acessa o site Tricentis', () => {
    cy.visit('https://sampleapp.tricentis.com/101/app.php')
})

// Dados do veículo
And('preenche os campos obrigatórios na aba {string}', () => {
    cy.inserirDadosFormVehicle()
    cy.mensagemVeiculoSucesso()
})

When('clica em {string} para avançar' , () => {
    cy.clicarBtnNext()
})

// Dados do segurado
And('preenche os campos obrigatórios da aba {string}', () => {
    cy.inserirDadosInsurant()
    cy.mensagemSucesso()
})

And('clica em {string} para preencher a próxima aba', () => {
    cy.cliqueBtnNextProduct()
})

// Dados do produto
And('preenche os campos obrigatórios válidos na aba {string}', () => {
    cy.inserirDadosProduto()
    cy.mensagemSucessoProduto()
})

And('clica em {string} para o próximo formulário', () => {
    cy.cliqueBtnNextPrice()
})

// Seleção do preço da cotação
And('seleciona a opção de preço da cotação na aba {string}', () => {
    cy.selecionePreco()
})

And('clica em {string} para concluir a cotação', () => {
    cy.selecionePreco()
})

// Envio e validação do formulário da cotação
And('é direcionado para a aba {string}', () => {
    cy.preencherFormEmail()
})

And('clica em {string}', () => {
    cy.enviarForm()
})

Then('a cotação é validada com sucesso', () => {
    cy.validarMsgSucesso()
})
