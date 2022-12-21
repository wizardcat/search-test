import prisma from '../../prisma'

const { findMany } = prisma.cities

const findCities = async (sentence: string) => {
  try {

    const cities = await findMany({
      select: {
        id: true,
        name: true,
      },
      where: {
        name: {
          contains: sentence,
          mode: 'insensitive'
        },
      },
    })

    return cities

  } catch (err) {
    console.log(err)
  }
}



export { findCities }