import { it, expect } from "vitest"
import request from 'supertest';
import { app } from '../src/api';

it('Deve retornar uma mensagem de boas-vindas na raiz', async () => {
  const response = await request(app).get('/');
  expect(response.status).toBe(200);
  expect(response.body).toEqual({ message: 'Bem-vindo à API!' });
});

it('Deve criar um novo usuário com sucesso', async () => {
  const novoUsuario = { id: '1', nome: 'John Doe', email: 'john@example.com' };
  const response = await request(app).post('/users').send(novoUsuario);
  expect(response.status).toBe(200);
  expect(response.body).toEqual({ message: 'Novo usuário criado com sucesso!' });
});

it('Deve obter detalhes do usuário por ID', async () => {
  const response = await request(app).get('/users/1');
  expect(response.status).toBe(200);
  expect(response.body).toEqual({ id: '1', nome: 'John Doe', email: 'john@example.com' });
});

it('Deve atualizar um usuário existente com sucesso', async () => {
  const dadosAtualizados = { nome: 'John Doe Atualizado', email: 'john.updated@example.com' };
  const response = await request(app).put('/users/1').send(dadosAtualizados);
  expect(response.status).toBe(200);
  expect(response.body).toEqual({ message: 'Usuário 1 atualizado com sucesso!' });
});

it('Deve remover um usuário existente com sucesso', async () => {
  const response = await request(app).delete('/users/1');
  expect(response.status).toBe(200);
  expect(response.body).toEqual({ message: 'Usuário 1 removido com sucesso!' });
});
