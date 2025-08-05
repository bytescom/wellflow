import express from 'express';
import { getPublicSessions, newSession } from '../controllers/sessionController.js';
const router = express.Router();

// GET public sessions
router.get('/my', getPublicSessions);

// POST create new session
router.post('/my', newSession);


export default router;
