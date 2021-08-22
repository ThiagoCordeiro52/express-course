import { Request, Response } from 'express';

export const contato = (request: Request, response: Response) => {
  response.render('pages/contato');
};

export const sobre = (request: Request, response: Response) => {
  response.render('pages/sobre');
};