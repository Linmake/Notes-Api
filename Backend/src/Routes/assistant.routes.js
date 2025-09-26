import express from "express";
import { resumeAssistantController } from '../src/Controllers/Assitant/resume.controller.js';
import { testController } from "../src/Controllers/Assitant/test.controller.js";

const AssitantRouter = express.Router(); 

// CORREGIR: La ruta debe ser "/resume" sin la barra final
AssitantRouter.post("/resume", resumeAssistantController);
// AssitantRouter.post("/resume", testController);


export default AssitantRouter;