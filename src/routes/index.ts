import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (request: Request, response: Response) => {
  const user = {
    name: 'Thiago',
    lastName: 'Cordeiro',
    age: 90
  }
  let showOld: boolean = false;

  if(user.age >= 50) {
    showOld = true;
  }
  
  response.render('home', {
    user, showOld
  });
});

router.get('/contato', (request: Request, response: Response) => {
  response.send('Formulário de contato!');
});

router.get('/sobre', (request: Request, response: Response) => {
  response.send('Página institucional sobre a empresa!');
});

export default router;