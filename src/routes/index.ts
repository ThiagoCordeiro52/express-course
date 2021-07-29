import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (request: Request, response: Response) => {
  response.send('Olá mundo!');
});

router.get('/contato', (request: Request, response: Response) => {
  response.send('Formulário de contato!');
});

router.get('/sobre', (request: Request, response: Response) => {
  response.send('Página institucional sobre a empresa!');
});

export default router;