const { Router } = require('express')

const { mongooseController } = require('../controller/mongoose.controller')

const router = Router()

router.get('/students', mongooseController.getMongoose)
router.post('/students', mongooseController.postMongoose)
router.delete('/students/:id', mongooseController.deleteMongoose)
router.patch('/students/:id', mongooseController.patchMongoose)

module.exports = router
