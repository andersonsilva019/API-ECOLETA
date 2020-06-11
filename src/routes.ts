import express from 'express';

const routes = express.Router();

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/itemsController';

routes.get('/items', ItemsController.index);

routes.post('/points', PointsController.store);
routes.get('/points/:id', PointsController.show);

export default routes;