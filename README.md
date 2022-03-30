# [API] Simple creat/read api

Projeto criado para matéria de banco de dados da pós graduação em Desenvolvimento Web;

Proposta:

- Criação de um projeto create/read usando conceitos de POO
- Para o critério de aceite **não** devemos utilizar qualquer tipo de **ORM**

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

Para executar as rotas é necessário utilizar um API Client exemplo [**Insomnia**](https://insomnia.rest/) ou [**Postman**](https://www.postman.com/)

|     Rotas     | Params | HTTP Method | Descrição                                    |
| :-----------: | :----: | :---------: | :------------------------------------------- |
|   `/person`   |  :x:   |    POST     | Rota para criação de uma pessoa              |
|    `/car`     |  :x:   |    POST     | Rota para criação de um carro                |
|   `/school`   |  :x:   |    POST     | Rota para criação de um aluno                |
|   `/stock`    |  :x:   |    POST     | Rota para criação de produto                 |
|   `/person`   |  :x:   |     GET     | Rota para retornar todas pessoas             |
|    `/car`     |  :x:   |     GET     | Rota para retornar todos carros              |
|   `/school`   |  :x:   |     GET     | Rota para retornar todos alunos              |
|   `/stock`    |  :x:   |     GET     | Rota para retornar todos produtos do estoque |
| `/person/:id` | `:id`  |     GET     | Rota para retornar uma pessoa específica     |
|  `/car/:id`   | `:id`  |     GET     | Rota para retornar um carro específico       |
| `/school/:id` | `:id`  |     GET     | Rota para retornar um aluno específico       |
| `/stock/:id`  | `:id`  |     GET     | Rota para retornar um produto específico     |

## [Stock] Exemplo de utiluzação

Para testar basta importar esse curl no seu api client de preferência

```sh
curl --request POST \
  --url http://localhost:4000/stock \
  --header 'Content-Type: application/json' \
  --data '{
	"product_name": "Balas",
	"product_desc": "Lorem ipsum dolor sit amet",
	"product_qty": 12,
	"product_price": 0.70
}
'
```

```sh

curl --request GET \
  --url http://localhost:4000/stock
```

```sh
curl --request GET \
  --url http://localhost:4000/stock/2
```

## Autor

- [Gustavo Oliveira](https://www.github.com/dogustavo)
