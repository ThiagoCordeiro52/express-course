import express from 'express';
import path from 'path';
import mustache from 'mustache-express';

import mainRoutes from './routes/index';

const server = express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

server.use('/static',express.static(path.join(__dirname, '../public')));
// Faz a pasta ficar estática e libera rotas diretas para cada arquivo ou pasta dentro de public. Ou a partir de rotas
// especificadas como primeiro parâmetro (opcional)

server.use(express.urlencoded({extended: true}));

server.use('/', mainRoutes);
// ou simplesmente: server.use(mainRoutes);

server.use((request: express.Request, response: express.Response) => {
  response.status(404).send('Página não encontrada: error 404.');
});
// ou poderia ter importado especificamente o request e o response. 

server.listen(3333);
