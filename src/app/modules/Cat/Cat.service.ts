import { ICat } from './Cat.interface'
import { Cat } from './Cat.model'

export const addCat = async (catData: ICat) => {
  const result = await Cat.create(catData)
  return result
}

export const getCat = async () => {
  const result = await Cat.find({})
  return result
}
