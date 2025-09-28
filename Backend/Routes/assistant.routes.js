<<<<<<< HEAD:Routes/assistant.routes.js
import express from "express";
import { resumeAssistantController } from '../src/Controllers/Assitant/resume.controller.js';
import { testController } from "../src/Controllers/Assitant/test.controller.js";

const AssitantRouter = express.Router(); 

// CORREGIR: La ruta debe ser "/resume" sin la barra final
AssitantRouter.post("/resume", resumeAssistantController);
// AssitantRouter.post("/resume", testController);


export default AssitantRouter;
=======
import express from "express";
import { resumeAssistantController } from '../Controllers/Assitant/resume.controller.js';
import { testController } from "../Controllers/Assitant/test.controller.js";

const AssitantRouter = express.Router(); 

// CORREGIR: La ruta debe ser "/resume" sin la barra final
AssitantRouter.post("/resume", resumeAssistantController);
// AssitantRouter.post("/resume", testController);



export default AssitantRouter;
>>>>>>> 222e6553e7ec0b346ea9b78ec6b35425247afa8e:src/Routes/assistant.routes.js
