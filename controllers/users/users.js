import _ from 'lodash';
import BaseController from '../utils/controller_factory';
import models from '../../models';

// Set up params for factory
const factoryParams = {
  //user: models.user,
  model : models.user,
 // allowedFilters: ['pending', 'active'],
};


const UsersController = function UsersController() {
  const base = !(this instanceof UsersController) ? new BaseController(factoryParams) : BaseController;

  return Object.assign(Object.create(base), {})};

const usersController = UsersController();

export { usersController };
