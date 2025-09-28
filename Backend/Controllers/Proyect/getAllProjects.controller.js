<<<<<<< HEAD:Controllers/Proyect/getAllProjects.controller.js
import Project from "../../Schema/ProjectSchema.js"

const getAllProjectsController = async (req, res) => {
  try {
    const {UserId} = req
    const allProjects = await Project.find({ UserId: UserId })
    return res.status(200).send(allProjects)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

export default getAllProjectsController
=======
import Project from "../Schema/ProjectSchema.js"

const getAllProjectsController = async (req, res) => {
  try {
    const {UserId} = req
    const allProjects = await Project.find({ UserId: UserId })
    return res.status(200).send(allProjects)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}


export default getAllProjectsController
>>>>>>> 222e6553e7ec0b346ea9b78ec6b35425247afa8e:src/Controllers/Proyect/getAllProjects.controller.js
