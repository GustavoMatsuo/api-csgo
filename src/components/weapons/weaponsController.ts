import {Request, Response} from 'express'
import WeaponsDAO from './weaponsDAO'

class GunsController {
  async index(req:Request, res:Response) {
    const dao = new WeaponsDAO()
    
    return dao.index(req, res)
  }

  async search(req:Request, res:Response) {
    const dao = new WeaponsDAO()
    
    return dao.search(req, res)
  }

  async list(req:Request, res:Response) {
    const dao = new WeaponsDAO()
    
    return dao.list(req, res)
  }
}

export default GunsController