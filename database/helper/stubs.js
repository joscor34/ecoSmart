'use strict'

const faker = require('faker')

function generateFakePlant() {
  return {
    name: faker.name.findName(),
    ligth: 1, 
    temp: faker.random.number(),
    water: faker.random.number()
  }
}

module.exports = {
  generateFakePlant
}