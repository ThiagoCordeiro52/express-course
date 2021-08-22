import { Request, Response } from 'express';

export const nome = (request: Request, response: Response) => {
  const nome: string = request.query.nome as string;
  const idade: string = request.query.idade as string;

  response.render('pages/nome', {
    nome,
    idade
  });
};

export const idadeForm = (request: Request, response: Response) => {
  response.render('pages/idade')
};

export const idadeAction = (request: Request, response: Response) => {
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
};