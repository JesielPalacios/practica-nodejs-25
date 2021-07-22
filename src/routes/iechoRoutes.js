import { Router } from "express";
import * as textController from "../controllers/textController";

const router = Router();

router.route('/iecho')
  .get(textController.sendReverseText);

export default router;