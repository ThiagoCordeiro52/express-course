import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (request: Request, response: Response) => {
  const user = {
    name: 'Thiago',
    lastName: 'Cordeiro',
    age: 20,
  }
  let showOld: boolean = false;

  if(user.age >= 50) {
    showOld = true;
  }
  
  response.render('pages/home', {
    user, 
    showOld,  
    products: [
      {title: 'Produto X', price: 10},
      {title: 'Produto Y', price: 15},
      {title: 'Produto Z', price: 20}
    ],
    frasesdoDia: []
  });
});

router.get('/contato', (request: Request, response: Response) => {
  response.render('pages/contato');
});

router.get('/sobre', (request: Request, response: Response) => {
  response.render('pages/sobre');
});

router.get('/nome', (request: Request, response: Response) => {
  const nome: string = request.query.nome as string;
  const idade: string = request.query.idade as string;

  response.render('pages/nome', {
    nome,
    idade
  });
});

router.get('/idade', (request: Request, response: Response) => {
  response.render('pages/idade')
});

router.post('/idade-resultado', (request: Request, response: Response) => {
  let showAge: boolean = false;
  let idade: number = 0;
  if (request.body.ano) {
    const anoNascimento: number = Number.parseInt(request.body.ano as string);
    const anoAtual: number = new Date().getFullYear();
    idade = anoAtual - anoNascimento;
    showAge = true;
  }
  response.render('pages/idade', {
    idade,
    showAge
  })
});

export default router;