const INPUT_FIRST_NAME = '#firstname'
const INPUT_LAST_NAME = '#lastname'
const INPUT_DATE_BIRTH = '#birthdate'
const INPUT_ADDRESS = '#streetaddress'
const SELECT_COUNTRY = '#country'
const INPUT_ZIP_CODE = '#zipcode'
const INPUT_CITY = '#city'
const SELECT_OCCUPATION = '#occupation'
const CHECKBOX_HOBBIES = 'label.ideal-radiocheck-label'
//const INPUT_WEBSITE = ''
//const INPUT_PICTURE = ''
const BTN_NEXT = '#nextenterproductdata'

Cypress.Commands.add('inserirDadosInsurant', () =>{
    cy.get(INPUT_FIRST_NAME).type('Júnior')
    cy.get(LAST_NAMEST_NAME).type('Silva')
    cy.get(INPUT_DATE_BIRTH).type('01/25/2005')
    cy.get(INPUT_ADDRESS).type('Rua Das Acácias')
    cy.get(SELECT_COUNTRY).type('Brazil')
    cy.get(INPUT_ZIP_CODE).type('13050212')
    cy.get(INPUT_CITY).type('Campinas')
    cy.get(SELECT_OCCUPATION).select('Selfemployed')
    cy.get(CHECKBOX_HOBBIES).contains('Other').click()
})

Cypress.Commands.add('cliqueBtnNextProduct', () => {
    cy.get(BTN_NEXT).click()
    cy.log('Clicou no botão Next')
})
