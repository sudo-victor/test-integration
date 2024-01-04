import express, { Request, Response } from 'express';

const app = express();

// Array para armazenar os usuários
const usuarios: any[] = [];

app.use(express.json());

// Rota 1: Raiz
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Bem-vindo à API!' });
});

// Rota 2: Exemplo com parâmetro na URL
app.get('/users/:id', (req: Request, res: Response) => {
  const userId = req.params.id;
  const usuario = usuarios.find((u) => u.id === userId);
  res.json(usuario ? usuario : { message: 'Usuário não encontrado' });
});

// Rota 3: Exemplo de rota POST
app.post('/users', (req: Request, res: Response) => {
  const novoUsuario = req.body;
  usuarios.push(novoUsuario);
  res.json({ message: 'Novo usuário criado com sucesso!' });
});

// Rota 4: Exemplo de rota PUT
app.put('/users/:id', (req: Request, res: Response) => {
  const userId = req.params.id;
  const usuarioIndex = usuarios.findIndex((u) => u.id === userId);
  if (usuarioIndex !== -1) {
    usuarios[usuarioIndex] = { ...usuarios[usuarioIndex], ...req.body };
    res.json({ message: `Usuário ${userId} atualizado com sucesso!` });
  } else {
    res.json({ message: 'Usuário não encontrado' });
  }
});

// Rota 5: Exemplo de rota DELETE
app.delete('/users/:id', (req: Request, res: Response) => {
  const userId = req.params.id;
  const usuarioIndex = usuarios.findIndex((u) => u.id === userId);
  if (usuarioIndex !== -1) {
    usuarios.splice(usuarioIndex, 1);
    res.json({ message: `Usuário ${userId} removido com sucesso!` });
  } else {
    res.json({ message: 'Usuário não encontrado' });
  }
});

export { app }
