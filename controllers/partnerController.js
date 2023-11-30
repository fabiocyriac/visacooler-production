import Partner from '../models/Partner.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, NotFoundError } from '../errors/index.js';
import checkPermissions from '../utils/checkPermissions.js';


const getAllPartners = async (req, res) => {
  const partners = await Partner.find({});
  res.status(StatusCodes.OK).json({ partners });
};

const getPartnerDetails = async (req, res) => {
  const user = await Partner.findById(req.params.id);
  res.status(StatusCodes.OK).json(user);
}

const createPartner = async (req, res) => {
  const { name, email, company, phone } = req.body;
  if (!name || !email || !company || !phone) {
    throw new BadRequestError('Please provide all values');
  }
  req.body.status = "pending";
  const partner = await Partner.create(req.body);
  res.status(StatusCodes.CREATED).json({ partner });
};


const updatePartner = async (req, res) => {
  const { id: partnerId } = req.params;
  const { name, email, company, phone, status } = req.body;

  if (!name || !email || !company || !phone || !status) {
    throw new BadRequestError('Please provide all values');
  }
  const partner = await Partner.findOne({ _id: partnerId });

  if (!partner) {
    throw new NotFoundError(`No partner with id :${partnerId}`);
  }

  //checkPermissions(req.user, visa.partner);

  const updatedPartner = await Partner.findOneAndUpdate({ _id: partnerId }, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(StatusCodes.OK).json({ updatedPartner });
};

const deletePartner = async (req, res) => {
  const { id: partnerId } = req.params;

  const partner = await Partner.findOne({ _id: partnerId });

  if (!partner) {
    throw new NotFoundError(`No partner with id :${partnerId}`);
  }

  //checkPermissions(req.user, visa.partner);

  await partner.remove();
  res.status(StatusCodes.OK).json({ msg: 'Success! Partner removed' });
};


export { createPartner, deletePartner, getAllPartners, getPartnerDetails, updatePartner };
