import express from 'express';

import { createEnquiry, getEnquiries, updateEnquiry } from '../controllers/enquiryController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', createEnquiry);
router.get('/', protect, getEnquiries);
router.put('/:id', protect, updateEnquiry);

export default router;
