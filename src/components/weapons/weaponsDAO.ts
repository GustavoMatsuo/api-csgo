import { Request, Response } from 'express'
import { Collection, Error, connection } from 'mongoose'

class WeaponsDAO {

  async index(req:Request, res:Response) {
    const db = new Collection("Weapons", connection)
    db.find({}).project({_id:0}).toArray().then(weapons => {
      return res.status(200).send({
        error: false, 
        message: "ok",
        weapons
      })
    }).catch((err:Error) => {
      return res.status(500).send({
        error: true,
        message: "Error search on database"
      })
    })
  }

  async search(req:Request, res:Response) {
    const type = req.params.type.toUpperCase()
    const db = new Collection("Weapons", connection)

    db.findOne({name: type},
      (err:Error, weapons) => {
        if(err){
          return res.status(500).send({
            error: true,
            message: "Error search on database"
          })
        }else if(weapons === null || weapons.length === 0){
          return res.status(404).send({
            error: false, 
            message: "Not found weapon type",
            weapons
          })
        }else{
          const {_id, ...rest} = weapons;
          return res.status(200).send({
            error: false, 
            message: "ok",
            weapons: rest
          })
        }
      }
    );
  }

  async list(req:Request, res:Response) {
    const attribute = req.params.attribute.toLowerCase()
    const db = new Collection("Weapons", connection)

    const enumWeapon = [
      'name',
      'caliber',
      'magazine'
    ]

    if(!enumWeapon.includes(attribute)){
      return res.status(400).send({
        error: false,
        message: "Attribute not found",
        list: []
      })
    }

    db.find({}).toArray().then(weapons => {
      const list:String[] = []
      weapons.map(item => {
        list.push(item[attribute])
      })

      return res.status(200).send({
        error: false, 
        message: "ok",
        list
      })
    }).catch((err:Error) => {
      return res.status(500).send({
        error: true,
        message: "Error search on database"
      })
    })
  }

}

export default WeaponsDAO