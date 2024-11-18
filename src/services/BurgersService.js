import { dbContext } from "../db/DbContext"

class BurgersService {
  async removeBurger(burgerId) {
    const burgers = await dbContext.Burgers.findById(burgerId)
    if (burgers == null) {
      throw new Error(`Invalid id${burgerId}`)
    }
    await burgers.deleteOne()
    return burgers
  }
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