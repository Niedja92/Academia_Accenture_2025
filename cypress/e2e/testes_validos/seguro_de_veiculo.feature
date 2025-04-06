#utf-8
# language: pt

Funcionalidade: tricentis-01 - Aplicação de Seguro de Veículo
Cenário: Preencher formulários de seguro de veículo com sucesso
Dado que o usuário acessa o site Tricentis
E preenche os campos obrigatórios na aba "Enter Vechicle Data"
Quando clica em "Next" para avançar
E preenche os campos obrigatórios da aba "Enter Insurant Data"
E clica em "Next" para preencher a próxima aba
E preenche os campos obrigatórios válidos na aba "Enter Product Data"
E clica em "Next" para o próximo formulário
E seleciona a opção de preço da cotação na aba "Select Price Option"
E clica em "Next" para concluir a cotação
Então é direcionado para a aba "Send Quote"
E a cotação é validada com sucesso