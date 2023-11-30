import express from 'express'
import { createCatController, getAllCatController } from './Cat.controller'

const router = express.Router()
router.post('/create-cat', createCatController)
router.get('/all-cats', getAllCatController)

export const catRouter = router
