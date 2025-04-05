const SELECT_MAKE = '#make'
const INPUT_ENGINE_PERFORMANCE = '#engineperformance'
const INPUT_DATE_MANUFACTURE = 'input[name="Date of Manufacture"]'
const SELECT_NUMBER_SEATS = '#numberofseats'
const SELECT_FUEL_TYPE = '#fuel'
const INPUT_PAYLOAD = '#payload'
const INPUT_TOTAL_WEIGHT = '#totalweight'
const INPUT_LIST_PRICE = '#listprice'
const INPUT_LICENSE_PLATE_NUMBER = '#licenseplatenumber'
const INPUT_ANNUAL_MILEAGE = '#annualmileage'
const BTN_NEXT = '#nextenterinsurantdata'

Cypress.Commands.add('inserirDadosFormVehicle', () => {
    cy.get(SELECT_MAKE).select('Renault')
    cy.get(INPUT_ENGINE_PERFORMANCE).type('77')
    cy.get(INPUT_DATE_MANUFACTURE).type(dayjs().format('MM-DD-YYYY')) // pega a data atual e formata no padrão que consta no form no portal
    cy.get(SELECT_NUMBER_SEATS).select('5')
    cy.get(SELECT_FUEL_TYPE).select('Petrol')
    cy.get(INPUT_PAYLOAD).type('450')
    cy.get(INPUT_TOTAL_WEIGHT).type('1000')
    cy.get(INPUT_LIST_PRICE).type('35000')
    cy.get(INPUT_LICENSE_PLATE_NUMBER).type('RTE4J29')
    cy.get(INPUT_ANNUAL_MILEAGE).type('20000')
})

Cypress.Commands.add('clicarBtnNext', () => {
    cy.get(BTN_NEXT).click()
    cy.log('Clicou no botão Next')
})