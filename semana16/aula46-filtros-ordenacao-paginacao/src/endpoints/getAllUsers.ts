import { Request, Response } from "express"
import { connection } from "../data/connection"
import { teachers } from "../types"

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const name = req.query.name || "%"
    const type = req.query.type || "%"
    const sort = req.query.sort || "email"
    const order = req.query.order || "asc"
    const page = Number(req.query.page) || 1
    const size = Number(req.query.size) || 5

    if (sort !== "email") {
      res.statusCode = 422
      throw new Error("'sort' must be either 'email'")
    }

    if (order !== "asc" && order !== "desc") {
      res.statusCode = 422
      throw new Error("'order' must be either 'asc' or 'desc'")
    }

    const offset = size * (page - 1) 

    const users = await connection("aula48_exercicio")
      .where("name", "LIKE", `%${name}%`)
      .where("type", "LIKE", `%${type}%`)
      .orderBy(sort, order)
      .limit(size)
      .offset(offset)

    if (!users.length) {
      res.statusCode = 404
      throw new Error("User not found")
    }

    res.status(200).send(users)

  } catch (error) {
    console.log(error)
    res.send(error.message || error.sqlMessage)
  }
}