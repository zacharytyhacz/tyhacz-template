import { Router } from 'express'
import session from './session'
import customer from './customer'
import user from './users'
import workOrders from './workorder'
import serviceContracts from './serviceContract'
import projects from './projects'
import messages from './messages'

const router = Router()

router.use(session)
router.use(customer)
router.use(user)
router.use(workOrders)
router.use(serviceContracts)
router.use(projects)
router.use(messages)

export default router
