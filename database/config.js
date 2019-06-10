'use strict'

// Import dependencies
const dotenv = require('dotenv')

// Configure dotenv
dotenv.config()

module.exports = {
  databaseUrl: process.env.DATABASE_URL
}
