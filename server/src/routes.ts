import express from "express";

import ClassesController from "./controllers/ClassesController";
import ConnectionsController from "./controllers/ConnectionsController";

const routes = express.Router();
const classesController = new ClassesController;
const connectionsController = new ConnectionsController;

//Corpo(Request Body): Dados para criação/atualização de registro
//Route params: identificar qual recurso irá atualizar/deletar
//Query params: Paginação, filtros, ordenação
routes.post('/classes', classesController.create);
routes.get('/classes', classesController.index);

routes.post('/connections', connectionsController.create);
routes.get('/connections', connectionsController.index);

export default routes;