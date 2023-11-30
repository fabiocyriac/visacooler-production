import Document from '../models/Document.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, NotFoundError } from '../errors/index.js';
import checkPermissions from '../utils/checkPermissions.js';
import getFileType from '../utils/file.js';
import { s3 } from '../middleware/multer-upload.js';


const BUCKET = process.env.S3_BUCKET

const getAllDocuments = async (req, res) => {
  // no awit
  let result = Document.find({});

  // setup pagination
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  result = result.skip(skip).limit(limit);

  const documents = await result;

  const totalDocuments = await Document.countDocuments({});
  const numOfPages = Math.ceil(totalDocuments / limit);
  res.status(StatusCodes.OK).json({ documents, totalDocuments, numOfPages });
};

const getDocumentDetails = async (req, res) => {
  const filename = req.params.id
  let x = await s3.getObject({ Bucket: "visax", Key: filename }).promise();
  res.setHeader('Content-disposition', `attachment; filename=${filename}`)
  res.setHeader('Content-type', 'application/image')
  res.send(x.Body);
}

const createDocument = async (req, res) => {
  const { originalname: file_name, key: file_type, location: file_url } = req.file;
  const uploaded_by = req.user.userId;
  const document = await Document.create({ file_name, file_type, file_url, uploaded_by });
  console.log("ppppppp"+JSON.stringify(document))
  res.status(StatusCodes.CREATED).json(req.file);

};


const updateDocument = async (req, res) => {
  const { id: documentId } = req.params;
  const { name, email, company, phone, status } = req.body;

  if (!name || !email || !company || !phone || !status) {
    throw new BadRequestError('Please provide all values');
  }
  const document = await Document.findOne({ _id: documentId });

  if (!document) {
    throw new NotFoundError(`No document with id :${documentId}`);
  }

  //checkPermissions(req.user, visa.document);

  const updatedDocument = await Document.findOneAndUpdate({ _id: documentId }, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(StatusCodes.OK).json({ updatedDocument });
};

const deleteDocument = async (req, res) => {
  const { id, key } = req.params;
  console.log("chakka"+ id, key)

  await s3.deleteObject({ Bucket: "visax", Key: key }).promise();
  
  const document = await Document.findOne({ _id: id });

  if (!document) {
    throw new NotFoundError(`No document with id :${id}`);
  }

  //checkPermissions(req.user, visa.document);

  await document.remove();
  res.status(StatusCodes.OK).json({ msg: 'Success! Document removed' });
};


export { createDocument, deleteDocument, getAllDocuments, getDocumentDetails, updateDocument };
