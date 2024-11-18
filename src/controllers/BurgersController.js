import { burgersService } from "../services/BurgersService";
import BaseController from "../utils/BaseController";

export class BurgersController extends BaseController {
  constructor() {
    super('api/burgers');
    this.router
      .get('/test', this.getTest)
      .get('', this.getBurgers)
      .post('', this.createBurgers)
      .delete('/:burgerId', this.removeBurger)
  }

  async getTest(request, response, next) {
    try {
      response.send('🍔 test worked!')
    } catch (error) {
      next(error)
    }
  }

  async getBurgers(request, response, next) {
    try {
      const burgers = await burgersService.getBurgers()
      response.send(burgers)
    } catch (error) {
      next(error)
    }
  }

  async createBurgers(request, response, next) {
    try {
      const burgerData = request.body
      const burgers = await burgersService.createBurgers(burgerData)
      response.send('Deleted burger!')
    } catch (error) {
      next(error)
    }
  }

  async removeBurger(request, response, next) {
    try {
      const burgerId = request.params.burgerId
      const burgers = await burgersService.removeBurger(burgerId)
      response.send(burgers)
    } catch (error) {
      next(error)
    }
  }


}