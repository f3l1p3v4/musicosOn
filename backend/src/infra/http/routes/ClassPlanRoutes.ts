import { Router } from 'express'
import { ClassPlanController } from './src/infra/http/controllers/ClassPlanController'
import {
  ensureAuthenticated,
  ensureInstructor,
} from './src/infra/http/middlewares/auth'
import { ClassPlanRepository } from './src/infra/repositories/ClassPlanRepository'
import { CreateClassPlanUseCase } from './src/application/use-cases/CreateClassPlanUseCase'
import { ListClassPlansUseCase } from './src/application/use-cases/ListClassPlansUseCase'
import { UpdateClassPlanUseCase } from './src/application/use-cases/UpdateClassPlanUseCase'

const router = Router()
const classPlanRepository = new ClassPlanRepository()
const classPlanController = new ClassPlanController(
  new CreateClassPlanUseCase(classPlanRepository),
  new ListClassPlansUseCase(classPlanRepository),
  new UpdateClassPlanUseCase(classPlanRepository),
)

router.post(
  '/',
  ensureAuthenticated,
  ensureInstructor,
  classPlanController.create.bind(classPlanController),
)
router.get(
  '/',
  ensureAuthenticated,
  classPlanController.list.bind(classPlanController),
)
router.put(
  '/:id',
  ensureAuthenticated,
  ensureInstructor,
  classPlanController.update.bind(classPlanController),
)

export { router as classPlanRoutes }
