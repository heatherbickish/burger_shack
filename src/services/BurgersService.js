import { dbContext } from "../db/DbContext"

class BurgersService {
  async createBurgers(burgerData) {
    const burgers = await dbContext.Burgers.create(burgerData)
    return burgers
  }
  async getBurgers() {
    const burgers = await dbContext.Burgers.find()
    return burgers
  }

}
export const burgersService = new BurgersService()