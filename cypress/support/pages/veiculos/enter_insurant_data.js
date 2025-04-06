import 'cypress-file-upload'

const INPUT_FIRST_NAME = '#firstname'
const INPUT_LAST_NAME = '#lastname'
const INPUT_DATE_BIRTH = '#birthdate'
const INPUT_ADDRESS = '#streetaddress'
const SELECT_COUNTRY = '#country'
const INPUT_ZIP_CODE = '#zipcode'
const INPUT_CITY = '#city'
const SELECT_OCCUPATION = '#occupation'
const CHECKBOX_HOBBIES = 'label.ideal-radiocheck-label'
const FILE_IMAGE = 'input[type=file]'
const INPUT_WEBSITE = 'input[name="Website"]'
const BTN_NEXT = '#nextenterproductdata'

Cypress.Commands.add('inserirDadosInsurant', () =>{
    cy.get(INPUT_FIRST_NAME, {timeout: 10000}).type('Junior')
    cy.get(INPUT_LAST_NAME).type('Silva')
    cy.get(INPUT_DATE_BIRTH).type('01/25/2005')
    cy.get(INPUT_ADDRESS).type('Rua Das Acácias')
    cy.get(SELECT_COUNTRY).type('Brazil')
    cy.get(INPUT_ZIP_CODE).type('13050212')
    cy.get(INPUT_CITY).type('Campinas')
    cy.get(SELECT_OCCUPATION).select('Selfemployed')
    cy.get(INPUT_WEBSITE).type('https://website@fake.com')
    cy.get(FILE_IMAGE).attachFile('fake_image.jpg')
    cy.get(CHECKBOX_HOBBIES).contains('Other').click()
    cy.log('Dados do segurado preenchidos com sucesso!')
})

Cypress.Commands.add('mensagemSucesso', () => {
    cy.screenshot('Campos do cadastro do segurado preenchidos!')
})

Cypress.Commands.add('cliqueBtnNextProduct', () => {
    cy.get(BTN_NEXT).click()
    cy.log('Clicou no botão Next')
})
