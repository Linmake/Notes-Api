<<<<<<< HEAD:Controllers/Proyect/deleteAllProjects.controller.js
import File from "../../Schema/FileSchema.js"
import Folder from "../../Schema/FolderSchema.js"
import Project from "../../Schema/ProjectSchema.js"

const deleteAllProjectsController = async (req, res) => {
  await Project.deleteMany({})
  await Folder.deleteMany({})
  await File.deleteMany({})
  return res.status(200).send('All projects succesfully deleted')
}

export default deleteAllProjectsController
=======
import File from "../Schema/FileSchema.js"
import Folder from "../Schema/FolderSchema.js"
import Project from "../Schema/ProjectSchema.js"

const deleteAllProjectsController = async (req, res) => {
  await Project.deleteMany({})
  await Folder.deleteMany({})
  await File.deleteMany({})
  return res.status(200).send('All projects succesfully deleted')
}


export default deleteAllProjectsController
>>>>>>> 222e6553e7ec0b346ea9b78ec6b35425247afa8e:src/Controllers/Proyect/deleteAllProjects.controller.js
