# Mastersul_Teste2_Payments

## Notas
- Para que as aplicações funcionem corretamente, você deve clonar o repositório, entrar em cada projeto (PaymentsClient e Payments) e rodar individualmente
- O projeto PaymentsClient representa o projeto front-end feito em React.js e o projeto Payments é um projeto back-end feito com .NET 6
- Como nos requisitos do teste dizia para que os dados fossem obrigatoriamente fornecidos através de um documento xlsx, você irá precisar ter esse arquivo .xlsx na sua máquina (irei providenciar o arquivo para download) 
- Como o projeto back-end (Payments) depende de um arquivo xlsx para buscar os dados, você terá de configurar um path válido com o arquivo para a aplicação funcionar corretamente. na seção **Detalhes** explico como fazer isso.
- **OBS:** Eu tentei criar uma pasta na própria aplicação com o arquivo .xslx dentro para falicitar o uso, mas estavam ocorrendo erros de permissão.

## Detalhes
### Payments (back-end)
- Para que o projeto funcione corretamente você deve entrar no arquivo "appsettings.json" e substituir o valor da propriedade "PathToData" para um caminho onde o arquivo .xlsx se encontra na sua máquina
- Você deve buildar a solução antes de rodar
- **ATENÇÂO** as portas que a aplicação irá usar estão configuradas no arquivo "launchSettings.json" dentro do diretório "Properties", caso você precise alterar alguma porta, lembre-se de mudar as portas de chamadas HTTP no projeto front-end (PDFReaderClient) também, para que as requisições funcionem corretamente

### PaymentsClient (front-end)
- Para que o projeto funcione corretamente, você deve instalar as dependências do projeto, rodando o comando:
 - `npm install` caso estiver usando o NPM como seu gerenciador de pacotes ou `yarn` caso esteja usando o YARN
- Para rodar o projeto no localhost, você deve usar este comando:
  - `npm run dev` caso esteja usando o NPM ou `yarn dev` caso esteja usando o YARN
- Para ver em que porta a aplicação está rodando, você deve consultar o terminal onde rodou os comandos
