'use strict'

const setupDatabase = require('./setupDatabase')
const stubs = require('../helper/stubs')

let database 

beforeAll(async function () {
  database = await setupDatabase()
  console.log('heys')
  console.log(database)
})

afterAll(() => {
  database.connection.close()
})

describe('Planta', () => {
  let createdPlant

  test('Crear una nueva planta', async function () {

    let fakePlant = stubs.generateFakePlant()

    createdPlant = await database.plant.create(fakePlant)

    expect(createdPlant).toEqual(fakePlant)
  })
})