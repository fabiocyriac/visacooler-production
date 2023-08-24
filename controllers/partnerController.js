import Partner from '../models/Partner.js';
import { StatusCodes } from 'http-status-codes';
import {
  BadRequestError,
  NotFoundError,
} from '../errors/index.js';
import checkPermissions from '../utils/checkPermissions.js';

const createPartner = async (req, res) => {
  const { name, logo } = req.body;

  if (!name || !logo) {
    throw new BadRequestError('Please provide all values');
  }
  const partner = await Partner.create(req.body);
  res.status(StatusCodes.CREATED).json({ partner });
};


const getAllPartners = async (req, res) => {
  const { status, visaType, sort, search } = req.query;

  const queryObject = {
    createdBy: req.user.userId,
  };
  // add stuff based on condition

  if (status && status !== 'all') {
    queryObject.status = status;
  }
  if (visaType && visaType !== 'all') {
    queryObject.visaType = visaType;
  }
  if (search) {
    queryObject.caseManager = { $regex: search, $options: 'i' };
  }
  // NO AWAIT

  let result = Visa.find(queryObject);

  // chain sort conditions

  if (sort === 'latest') {
    result = result.sort('-createdAt');
  }
  if (sort === 'oldest') {
    result = result.sort('createdAt');
  }
  if (sort === 'a-z') {
    result = result.sort('caseManager');
  }
  if (sort === 'z-a') {
    result = result.sort('-caseManager');
  }

  //

  // setup pagination
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  result = result.skip(skip).limit(limit);

  const visas = await result;

  const totalVisas = await Visa.countDocuments(queryObject);
  const numOfPages = Math.ceil(totalVisas / limit);

  res.status(StatusCodes.OK).json({ visas, totalVisas, numOfPages });
};

const updatePartner = async (req, res) => {
  const { id: visaId } = req.params;
  const { country, caseManager } = req.body;

  if (!caseManager || !country) {
    throw new BadRequestError('Please provide all values');
  }
  const visa = await Visa.findOne({ _id: visaId });

  if (!visa) {
    throw new NotFoundError(`No visa with id :${visaId}`);
  }
  // check permissions

  checkPermissions(req.user, visa.createdBy);

  const updatedVisa = await Visa.findOneAndUpdate({ _id: visaId }, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(StatusCodes.OK).json({ updatedVisa });
};

const deletePartner = async (req, res) => {
  const { id: visaId } = req.params;

  const visa = await Visa.findOne({ _id: visaId });

  if (!visa) {
    throw new NotFoundError(`No visa with id :${visaId}`);
  }

  checkPermissions(req.user, visa.createdBy);

  await visa.remove();

  res.status(StatusCodes.OK).json({ msg: 'Success! Visa removed' });
};


export { createPartner, deletePartner, getAllPartners, updatePartner };
