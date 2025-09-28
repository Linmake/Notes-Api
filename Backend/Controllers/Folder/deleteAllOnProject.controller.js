<<<<<<< HEAD:Controllers/Folder/deleteAllOnProject.controller.js
import Project from "../../Schema/ProjectSchema.js";

const deleteAllOnProjectController = async (req, res) => {
  const { ProjectId } = req.params;
  if (!ProjectId) res.status(401).send(`Project with Id: ${ProjectId} don't exist`)
  const project = await Project.findOne({ Id: ProjectId })
  project.Folders = [];
  await project.save()
  res.status(400).send("All folders in the project succesfully deleted");
}

export default deleteAllOnProjectController
=======
import Project from "../Schema/ProjectSchema.js";

const deleteAllOnProjectController = async (req, res) => {
  const { ProjectId } = req.params;
  if (!ProjectId) res.status(401).send(`Project with Id: ${ProjectId} don't exist`)
  const project = await Project.findOne({ Id: ProjectId })
  project.Folders = [];
  await project.save()
  res.status(400).send("All folders in the project succesfully deleted");
}


export default deleteAllOnProjectController
>>>>>>> 222e6553e7ec0b346ea9b78ec6b35425247afa8e:src/Controllers/Folder/deleteAllOnProject.controller.js
