import Koa from 'koa'
import cors from '@koa/cors'
import bodyParser from 'koa-bodyparser'
import router from './routes/cities.routes'

const App = new Koa()
const port = 8000

App.use(bodyParser()).use(cors()).use(router.routes())

App.listen(port, () => {
  console.log(`🚀 Server listening http://127.0.0.1:${port}/ 🚀`)
})
