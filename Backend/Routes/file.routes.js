<<<<<<< HEAD:Routes/file.routes.js
import Express from "express"
import FileValidation from "../src/DTO/FileValidation.js"
import getAllFilesController from '../src/Controllers/File/getAll.controller.js'
import getFileByProjectController from '../src/Controllers/File/getAllByProject.controller.js'
import getFileController from '../src/Controllers/File/get.controller.js'
import createController from '../src/Controllers/File/create.controller.js'
import editTitleController from '../src/Controllers/File/editTitle.controller.js'
import editTextController from '../src/Controllers/File/editText.controller.js'
import deleteAllFilesController from '../src/Controllers/File/deleteAll.controller.js'
import deleteAllByFolderController from '../src/Controllers/File/deleteAllByFolder.controller.js'
import deleteController from '../src/Controllers/File/delete.controller.js'
import userJWTDTO from "../src/DTO/userJWTDTO.js"

const FileRouter = Express.Router()

  FileRouter.get('/all/', userJWTDTO, getAllFilesController)

  FileRouter.get('/get/:FolderId', userJWTDTO, getFileController)

  FileRouter.get('/all/:FolderId', userJWTDTO, getAllFilesController)

  FileRouter.post('/create', userJWTDTO, FileValidation, createController)

  FileRouter.put('/edit-text', userJWTDTO, editTextController)

  FileRouter.put('/edit-title', userJWTDTO, editTitleController)

  FileRouter.delete('/all/delete', userJWTDTO, deleteAllFilesController)

  FileRouter.delete('/delete/:FileId', userJWTDTO, deleteController)

  FileRouter.delete('/delete/all/:FolderId', userJWTDTO, deleteAllByFolderController)

export default FileRouter
=======
import Express from "express"
import FileValidation from "../DTO/FileValidation.js"
import getAllFilesController from '../Controllers/File/getAll.controller.js'
import getFileByProjectController from '../Controllers/File/getAllByProject.controller.js'
import getFileController from '../Controllers/File/get.controller.js'
import createController from '../Controllers/File/create.controller.js'
import editTitleController from '../Controllers/File/editTitle.controller.js'
import editTextController from '../Controllers/File/editText.controller.js'
import deleteAllFilesController from '../Controllers/File/deleteAll.controller.js'
import deleteAllByFolderController from '../Controllers/File/deleteAllByFolder.controller.js'
import deleteController from '../Controllers/File/delete.controller.js'
import userJWTDTO from "../DTO/userJWTDTO.js"

const FileRouter = Express.Router()

  FileRouter.get('/all/', userJWTDTO, getAllFilesController)

  FileRouter.get('/get/:FolderId', userJWTDTO, getFileController)

  FileRouter.get('/all/:FolderId', userJWTDTO, getAllFilesController)

  FileRouter.post('/create', userJWTDTO, FileValidation, createController)

  FileRouter.put('/edit-text', userJWTDTO, editTextController)

  FileRouter.put('/edit-title', userJWTDTO, editTitleController)

  FileRouter.delete('/all/delete', userJWTDTO, deleteAllFilesController)

  FileRouter.delete('/delete/:FileId', userJWTDTO, deleteController)

  FileRouter.delete('/delete/all/:FolderId', userJWTDTO, deleteAllByFolderController)


export default FileRouter
>>>>>>> 222e6553e7ec0b346ea9b78ec6b35425247afa8e:src/Routes/file.routes.js
