# [API] Simple creat/read api

Projeto criado para matéria de banco de dados da pós graduação em Desenvolvimento Web;

Proposta:
  - Criação de um projeto create/read usando conceitos de POO
  - Para o critério de aceite __não__ devemos utilizar qualquer tipo de __ORM__ 
  
## Instalação do projeto

```bash
  $ yarn
```

ou se preferir:

```bash
  $ npm install
```
## Utilização

Para rodar o basta executar o comando 

```javascript
$ yarn dev
```

ou se preferir:

```javascript
$ npm dev
```
## Rotas

Para executar as rotas é necessário utilizar um API Client exemplo [__Insomnia__](https://insomnia.rest/) ou [__Postman__](https://www.postman.com/)



| Rotas     | Params   | HTTP Method    | Descrição |
| :-------: | :------: | :-----------: | :------- |
| `/person` | :x:        |  POST         |     Rota para criação de uma pessoa      |
| `/car` | :x:         |  POST         |     Rota para criação de um carro      |
| `/school` | :x:         |  POST         |     Rota para criação de um aluno      |
| `/stock` | :x:        |  POST         |     Rota para criação de produto      |
| `/person` | :x:       |  GET         |     Rota para retornar todas pessoas      |
| `/car` | :x:     |  GET         |     Rota para retornar todos carros      |
| `/school` | :x:         |  GET         |     Rota para retornar todos alunos      |
| `/stock` | :x:     |  GET         |     Rota para retornar todos produtos do estoque      |
| `/person/:id` | `:id`    |  GET         |     Rota para retornar uma pessoa específica      |
| `/car/:id` | `:id`    |  GET         |     Rota para retornar um carro específico      |
| `/school/:id` | `:id`    |  GET         |     Rota para retornar um aluno específico      |
| `/stock/:id` | `:id`    |  GET         |     Rota para retornar um produto específico      | 


  
## Autor

- [Gustavo Oliveira](https://www.github.com/dogustavo)

  
