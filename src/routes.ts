import express from 'express'
import WeaponsController  from './components/weapons/weaponsController'

const routes = express.Router()

const weapons = new WeaponsController()

routes.get('/weapons/all', weapons.index)
routes.get('/weapons/:type', weapons.search)
routes.get('/weapons/list/:attribute', weapons.list)

export default routes