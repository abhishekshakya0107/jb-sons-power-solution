import express from 'express';

import { getQuotations, createQuotation } from '../controllers/quotationController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', protect, getQuotations);
router.post('/', createQuotation);

export default router;
