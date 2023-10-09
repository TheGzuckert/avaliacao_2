## Bem vindo professor essa é minha ativiade avaliativa
- Utilizei o insomnia para testar as rotas da minha API contido abaixo de todos os métodos que irei explicar deixarei a rota explicita abaixo de cada método.

### O projeto esta ultilizando as seguintes tecnologias:

`Node 16.14.0`

`Express`

`Sequelize`

`nodemon`

`mysql2`

### Para rodar o pojeto:
- Execute o comando 
`npm intall`
- Execute o comeando 
`npm start`

### Arquitetura do projeto
- A pasta modela consiste em construir e configurar nossa tabela no banco de dados

- O arquivo config.js na raiz do projeto é responsável para fazer a conexão com o banco de dados, ou seja, a conexão do sequelize.

- A pasta public é onde foi improvisado uma página index.html para podermos visualizar os alunos cadastrados, entretanto só tive tempo de fazer ela listar e cadastrar, as opções de editar, e remover não foram desenvolvidas no front-end.

### Explicando as funcionalidades da API

[x] GET (Obter informações de um aluno) => Lista todos os alunos 
http://localhost:3000/alunos/

[x] GET (Obtem informações de um unico aluno) => Lista somente um com base no id
http://localhost:3000/alunos/

[x] POST (Criar um novo aluno) => Cria um novo usuário
http://localhost:3000/alunos
```json
{
  "id": 1,
  "nome": "Guilherme",
  "idade": 21
}
```

[x] PUT (Atualizar informações de um aluno) => Atualiza aluno com base no id
http://localhost:3000/alunos/1
```json
{
	"nome": "Guuu"
}
```

[x] DELETE (Excluir um aluno) => Exclui aluno com base no id
http://localhost:3000/alunos/1

### Atenciosamente, Gustavo Zuckert
