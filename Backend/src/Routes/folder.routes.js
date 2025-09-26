import validateFolder from '../src/DTO/FolderValidation.js';
import express from "express";
import createController from '../src/Controllers/Folder/Create.controller.js';
import deleteController from '../src/Controllers/Folder/delete.controller.js';
import deleteAllOnProjectController from '../src/Controllers/Folder/deleteAllOnProject.controller.js';
import editController from '../src/Controllers/Folder/edit.controller.js';
import deleteAllController from '../src/Controllers/Folder/deleteAll.controller.js';
import getAllOnProjectController from '../src/Controllers/Folder/getAllOnProject.controller.js';
import getAllFoldersController from '../src/Controllers/Folder/getAllFolders.controller.js';
import userJWTDTO from '../src/DTO/userJWTDTO.js';

  const FolderRouter = express.Router();

  FolderRouter.get("/all", userJWTDTO, getAllFoldersController);

  FolderRouter.get("/all/:ProjectId", userJWTDTO, getAllOnProjectController);

  FolderRouter.post("/create/", validateFolder, userJWTDTO, createController);

  FolderRouter.put("/edit/:ProjectId/:FolderId", userJWTDTO, editController);

  FolderRouter.delete("/delete/:ProjectId/:FolderId/", userJWTDTO, deleteController);

  FolderRouter.delete("/delete/all/:ProjectId", userJWTDTO, deleteAllOnProjectController)

  FolderRouter.delete("/all/delete", userJWTDTO, deleteAllController)

  export default FolderRouter;