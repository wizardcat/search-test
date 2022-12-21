import Router from 'koa-router'
import { getCities } from '../controllers/cities.controllers'

const router = new Router()

router.get('/cities/:sentence', getCities)

export default router
