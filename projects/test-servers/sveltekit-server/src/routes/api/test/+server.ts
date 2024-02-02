import { json, type RequestHandler } from '@sveltejs/kit'
import { remult } from 'remult'
import { Task } from '../../../shared/Task'
import { api } from '../[...remult]/api'

export const GET: RequestHandler = async (event) => {
  return api.withRemult(event, async () =>
    json({ result: await remult.repo(Task).count() }),
  )
}
