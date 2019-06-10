'use strict'

const mongoose = require('mongoose')
const setupPlantModel = require('./models/plant')
const setupPlant = require('./lib/plant')
const dotenv = require('dotenv')

if (!process.env.PRODUCTION) {
  dotenv.config()
}

async function setupDatabase (setupDatabaseConfig) {
  try {
    console.log('simon si entras')
    if (mongoose.connection.readyState !== 1){
      console.log('simon, si entre')
       mongoose.connect(setupDatabaseConfig.databaseUrl)
    }
  } catch (err) {
    console.log(err)
  } 

  const plantModel = setupPlantModel()

  const plant = setupPlant(plantModel)

  return {
    plant,
    Database: mongoose
  }
}

console.log('**********************')
console.log(process.env.DATABASE_URL)
console.log('**********************')

module.exports = setupDatabase({databaseUrl: process.env.DATABASE_URL})
