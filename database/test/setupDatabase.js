'use strict'

const db = require('../index')
const config = require('../config')

let  database 

module.exports = async function setupDatabase () {
  if(database) {
    return database
  } else {
    database = await db.config
    return database
  }
}