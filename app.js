const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize } = require('sequelize');
const config = require('./config');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

const sequelize = new Sequelize(config.development);

const Aluno = require('./models/aluno')(sequelize, Sequelize);

// Rotas para CRUD de Aluno
app.post('/alunos', async (req, res) => {
  try {
    const aluno = await Aluno.create(req.body);
    res.status(201).json(aluno);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Lista todos os usuarios
app.get('/alunos', async (req, res) => {
  const alunos = await Aluno.findAll();
  res.json(alunos);
});

// Busca usuario com base no id
app.get('/alunos/:id', async (req, res) => {
  const aluno = await Aluno.findByPk(req.params.id);
  if (aluno) {
    res.json(aluno);
  } else {
    res.status(404).json({ error: 'Aluno não encontrado' });
  }
});

// Atualiza usuario com base no id
app.put('/alunos/:id', async (req, res) => {
  const aluno = await Aluno.findByPk(req.params.id);
  if (aluno) {
    await aluno.update(req.body);
    res.json(aluno);
  } else {
    res.status(404).json({ error: 'Aluno não encontrado' });
  }
});

// Deleta usuario
app.delete('/alunos/:id', async (req, res) => {
  const aluno = await Aluno.findByPk(req.params.id);
  if (aluno) {
    await aluno.destroy();
    res.status(204).send();
  } else {
    res.status(404).json({ error: 'Aluno não encontrado' });
  }
});

// Roda porta 3000
sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
  });
});

app.use(express.static('public'));