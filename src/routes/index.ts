import {Router} from 'express'
import eventsRouter from './event.routes'

import userRouter from './user.routes'

const routes = Router()

routes.use('/users',userRouter)
routes.use('/events', eventsRouter)


export default routes
