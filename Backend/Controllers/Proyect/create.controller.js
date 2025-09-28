<<<<<<< HEAD:Controllers/Proyect/create.controller.js
import Project from "../../Schema/ProjectSchema.js"

const createController = async (req, res) => {
    try {
        const valideId = await Project.exists({ Id: req.body.Id })
        if (valideId) {
            return res.status(400).send(`Project with Id: ${req.body.Id}`)
        }
        const {Id, Title, Date, Folders} = req.body
        const {UserId} = req
        const projectData = {
            Id: Id,
            Title: Title,
            Date: Date,
            Folders: Folders,
            UserId: UserId,
        }
        const newProject = await Project.create(projectData)

        return res.status(201).send({Project: newProject, UserId: UserId})
    } catch (err) {
        return res.status(500).send(err.message)
    }
}

export default createController
=======
import Project from "../Schema/ProjectSchema.js"

const createController = async (req, res) => {
    try {
        const valideId = await Project.exists({ Id: req.body.Id })
        if (valideId) {
            return res.status(400).send(`Project with Id: ${req.body.Id}`)
        }
        const {Id, Title, Date, Folders} = req.body
        const {UserId} = req
        const projectData = {
            Id: Id,
            Title: Title,
            Date: Date,
            Folders: Folders,
            UserId: UserId,
        }
        const newProject = await Project.create(projectData)

        return res.status(201).send({Project: newProject, UserId: UserId})
    } catch (err) {
        return res.status(500).send(err.message)
    }
}


export default createController
>>>>>>> 222e6553e7ec0b346ea9b78ec6b35425247afa8e:src/Controllers/Proyect/create.controller.js
