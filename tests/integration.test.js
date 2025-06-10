import request from 'supertest';
import app from '../api/index.js';

describe('Integração: Autenticação e Treinos', () => {
  let token = '';
  let workoutId = '';

  const user = {
    name: 'Usuário Integração',
    email: 'integracao@exemplo.com',
    password: 'senhaForte123'
  };

  test('Não permite criar treino sem autenticação', async () => {
    const res = await request(app)
      .post('/api/workouts')
      .send({ title: 'Teste', description: 'Sem token', duration: 10 });

    expect(res.status).toBe(401);
  });

  test('Registrar novo usuário', async () => {
    const res = await request(app)
      .post('/api/users/register')
      .send(user);

    expect([200, 201]).toContain(res.status); // Permite 200 caso já exista
    expect(res.body).toHaveProperty('success', true);
    expect(res.body.data).toHaveProperty('email', user.email);
  });

  test('Falha ao logar com senha errada', async () => {
    const res = await request(app)
      .post('/api/users/login')
      .send({ email: user.email, password: 'errada' });

    expect(res.status).toBe(401);
    expect(res.body).toHaveProperty('success', false);
  });

  test('Login do usuário', async () => {
    const res = await request(app)
      .post('/api/users/login')
      .send({ email: user.email, password: user.password });

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('success', true);
    expect(res.body.data).toHaveProperty('token');
    token = res.body.data.token;
  });

  test('Criar treino autenticado', async () => {
    const workout = {
      title: 'Treino Integração',
      description: 'Fluxo completo',
      duration: 30
    };

    const res = await request(app)
      .post('/api/workouts')
      .set('Authorization', `Bearer ${token}`)
      .send(workout);

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('success', true);
    expect(res.body.data).toHaveProperty('title', workout.title);
    workoutId = res.body.data._id;
  });

  test('Buscar treinos autenticado', async () => {
    const res = await request(app)
      .get('/api/workouts')
      .set('Authorization', `Bearer ${token}`);

    expect(res.status).toBe(200);
    expect(Array.isArray(res.body.data)).toBe(true);
    expect(res.body.data.length).toBeGreaterThan(0);
  });

  test('Deletar treino criado', async () => {
    const res = await request(app)
      .delete(`/api/workouts/${workoutId}`)
      .set('Authorization', `Bearer ${token}`);

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('success', true);
  });
});