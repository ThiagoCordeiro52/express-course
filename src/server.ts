import express from 'express';

import mainRoutes from './routes/index';
import painelRoutes from './routes/painel';

const server = express();

server.use('/', mainRoutes);
// ou simplesmente: server.use(mainRoutes);
server.use('/painel', painelRoutes);

server.listen(3333);
