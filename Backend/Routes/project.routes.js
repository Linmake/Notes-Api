<<<<<<< HEAD:Routes/project.routes.js
import express from 'express'
import validateProject from '../src/DTO/ProjectValidation.js'
import editFolderInsideController from '../src/Controllers/Proyect/editFolderInside.controller.js'
import createController from '../src/Controllers/Proyect/create.controller.js'
import getAllProjectsController from '../src/Controllers/Proyect/getAllProjects.controller.js'
import editProjectController from '../src/Controllers/Proyect/editProject.controller.js'
import deleteProjectController from '../src/Controllers/Proyect/deleteProject.controller.js'
import getProjectController from '../src/Controllers/Proyect/getProject.controller.js'
import deleteAllProjectsController from '../src/Controllers/Proyect/deleteAllProjects.controller.js'
import userJWTDTO from '../src/DTO/userJWTDTO.js'

const ProjectRouter = express.Router()

ProjectRouter.get('/all', userJWTDTO, getAllProjectsController)

ProjectRouter.get('/:ProjectId', getProjectController)

ProjectRouter.post('/create', validateProject, userJWTDTO, createController)

ProjectRouter.put('/edit/:ProjectId', editProjectController);

ProjectRouter.put('/edit-folder/:ProjectId', editFolderInsideController)

ProjectRouter.delete('/delete/:ProjectId', deleteProjectController)

ProjectRouter.delete('/all/delete', deleteAllProjectsController)

export default ProjectRouter
=======
import express from 'express'
import validateProject from '../DTO/ProjectValidation.js'
import editFolderInsideController from '../Controllers/Proyect/editFolderInside.controller.js'
import createController from '../Controllers/Proyect/create.controller.js'
import getAllProjectsController from '../Controllers/Proyect/getAllProjects.controller.js'
import editProjectController from '../Controllers/Proyect/editProject.controller.js'
import deleteProjectController from '../Controllers/Proyect/deleteProject.controller.js'
import getProjectController from '../Controllers/Proyect/getProject.controller.js'
import deleteAllProjectsController from '../Controllers/Proyect/deleteAllProjects.controller.js'
import userJWTDTO from '../DTO/userJWTDTO.js'

const ProjectRouter = express.Router()

ProjectRouter.get('/all', userJWTDTO, getAllProjectsController)

ProjectRouter.get('/:ProjectId', getProjectController)

ProjectRouter.post('/create', validateProject, userJWTDTO, createController)

ProjectRouter.put('/edit/:ProjectId', editProjectController);

ProjectRouter.put('/edit-folder/:ProjectId', editFolderInsideController)

ProjectRouter.delete('/delete/:ProjectId', deleteProjectController)

ProjectRouter.delete('/all/delete', deleteAllProjectsController)


export default ProjectRouter
>>>>>>> 222e6553e7ec0b346ea9b78ec6b35425247afa8e:src/Routes/project.routes.js
