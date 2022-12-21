import { Context } from 'koa';
import { findCities } from '../helpers/cities.helpers'

const getCities = async (ctx: Context) => {
  try {
    ctx.body = await findCities(ctx.params.sentence)
    ctx.status = 200
  } catch (err) {
    console.log(err)
    ctx.status = 500
    ctx.body = 'Error!'
  }
}

export { getCities }