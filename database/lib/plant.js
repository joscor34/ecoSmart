'use strict'

function setupPlant(plantModel) { 

  async function create(plantData){
    const foundPlant = await findByName(plantData.name)
    
    if (foundPlant) {
      throw Error('Another plant has registered with the same name')
    }

    try{
      const plant = new plantModel(plantData)

      await plant.save()

      delete plant._doc.password

      return plant._doc
    } catch (err) {
      throw err
    }
  }

  async function findById (id, complete) {
    try { 
      let plant = await plantModel.findById(id)

      if (plant) {
        if(!complete){
          delete plant._doc.password
        }

        return plant._doc
      } else {
        return null
      }
    } catch (err) {
      throw err
    }
  }

  async function findByName (name, complete) {
    try { 
      let plant = await plantModel.findOne({ name })

      if(plant) {
        if(!complete) {
          delete plant._doc.password
        }

        return plant._doc
      } else {
        return null
      }
    } catch (err) {
      throw err
    }
  }

  return {
    create,
    findById,
    findByName
  }
}

module.exports = setupPlant
