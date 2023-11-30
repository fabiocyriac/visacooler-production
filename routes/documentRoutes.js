import express from 'express';
const router = express.Router();
import { upload }from '../middleware/multer-upload.js';
import { createDocument, deleteDocument, getAllDocuments, getDocumentDetails, updateDocument } from '../controllers/documentController.js';


router.route('/').post(upload.single("image"), createDocument).get(getAllDocuments);
router.route('/:id').get(getDocumentDetails);
router.route('/:id/:key').delete(deleteDocument);
router.route('/:id').patch(updateDocument);

export default router;
