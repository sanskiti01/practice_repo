import {Router} from 'express'; import {hint,mock,stream} from '../controllers/aiController.js'; import {aiLimiter} from '../middleware/rateLimit.js';
const r=Router();r.post('/hint',aiLimiter,hint);r.get('/mock/:id',mock);r.post('/debug/stream',aiLimiter,stream);export default r;
