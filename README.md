# 💻 Desafio Técnico Cypress

# **Este projeto consiste em um desafio técnico proposto durante a Academia Quality Engineering 2025 da Accenture**.

O desafio consiste em realizar **testes automatizados de todas as abas do site** [https://sampleapp.tricentis.com/101/app.php](https://sampleapp.tricentis.com/101/app.php), que é um **site de testes voltado para simulação de cotação de seguro de veículo**.

## ✅ Pré-requisitos
- Para executar este projeto, você precisará ter o **Node.js** instalado. Caso não tenha, você pode baixá-lo facilmente
- E também um editor de código, pode ser uma IDE de sua preferência. Recomendo o **Visual Studio Code**.

## 📁 Estrutura do Projeto (com links)

ACADEMIA_ACCENTURE_2025  
│  
├── cypress  
│   ├── e2e  
│   │   ├── testes_invalidos  
│   │   │   └── [seguro_de_veiculo_invalido.feature](cypress/e2e/testes_invalidos/seguro_de_veiculo_invalido.feature)  
│   │   └── testes_validos  
│   │       └── [seguro_de_veiculo_valido.feature](cypress/e2e/testes_validos/seguro_de_veiculo_valido.feature)  
│   ├── fixtures  
│   │   └── [fake_image.jpg](cypress/fixtures/fake_image.jpg)  
│   ├── screenshots  
│   └── support  
│       ├── pages  
│       │   └── formularios_cotacao  
│       │       ├── [1_enter_vehicle_data.js](cypress/support/pages/formularios_cotacao/1_enter_vehicle_data.js)  
│       │       ├── [2_enter_insurant_data.js](cypress/support/pages/formularios_cotacao/2_enter_insurant_data.js)  
│       │       ├── [3_enter_product_data.js](cypress/support/pages/formularios_cotacao/3_enter_product_data.js)  
│       │       ├── [4_select_price_option.js](cypress/support/pages/formularios_cotacao/4_select_price_option.js)  
│       │       └── [5_send_quote.js](cypress/support/pages/formularios_cotacao/5_send_quote.js)  
│       ├── step-definitions  
│       │   ├── [seguro_de_veiculo_valido.cy.js](cypress/support/step-definitions/seguro_de_veiculo_valido.cy.js)  
│       │   └── [seguro_veiculo_invalido.cy.js](cypress/support/step-definitions/seguro_veiculo_invalido.cy.js)  
│       ├── [commands.js](cypress/support/commands.js)  
│       └── [e2e.js](cypress/support/e2e.js)  
│  
├── node_modules  
├── [.gitattributes](.gitattributes)  
├── [.gitignore](.gitignore)  
├── [cypress.config.js](cypress.config.js)  
├── [cypress.env.json](cypress.env.json)  
├── [package-lock.json](package-lock.json)  
├── [package.json](package.json)  
└── [README.md](README.md)  

## 🖥️  Comandos úteis
- **Inicia projeto:** npm init -y
- **Instala o Cypress**: npm install cypress --save-dev
- **Instala biblioteca do Cucumber-preprocessor**: npm install -D cypress-cucumber-preprocessor
- **Comando para executar**: npx cypress open