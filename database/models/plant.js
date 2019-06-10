'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

function setupPlantModel () {
  const plantSchema = new Schema ({
    name: {
      type: String,
      required: true
    },
    ligth: {
      type: Number, 
      required: true
    },
    temp: {
      type: Number, 
      required: true
    },
    water: {
      type: Number, 
      required: true
    } 
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  }) 
  return mongoose.model('Plant',plantSchema)
}

module.exports = setupPlantModel
