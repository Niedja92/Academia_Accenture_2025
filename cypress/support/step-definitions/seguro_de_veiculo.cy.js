import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'
import('../pages/veiculos/enter_insurant_data')
import('../pages/veiculos/enter_product_data')
import('../pages/veiculos/enter_vehicle_data')
import('../pages/veiculos/select_price_option')
import('../pages/veiculos/send_quote')

Given('que o usuário acessa o site Tricentis', () => {
    cy.visit('https://sampleapp.tricentis.com')
})
