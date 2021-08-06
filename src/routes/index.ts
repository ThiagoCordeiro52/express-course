import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (request: Request, response: Response) => {
  let user = {
    name: 'Thiago',
    lastName: 'Cordeiro',
    age: 20
  }
  
  response.render('home', {
    user
  });
});

router.get('/contato', (request: Request, response: Response) => {
  response.send('Formulário de contato!');
});

router.get('/sobre', (request: Request, response: Response) => {
  response.send('Página institucional sobre a empresa!');
});

export default router;