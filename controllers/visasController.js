import Visa from '../models/Visa.js';
import { StatusCodes } from 'http-status-codes';
import {
  BadRequestError,
  NotFoundError,
  UnAuthenticatedError,
} from '../errors/index.js';
import checkPermissions from '../utils/checkPermissions.js';
import mongoose from 'mongoose';
import moment from 'moment';
const createVisa = async (req, res) => {
  const { caseManager, country } = req.body;

  if (!caseManager || !country) {
    throw new BadRequestError('Please provide all values');
  }
  req.body.createdBy = req.user.userId;
  const visa = await Visa.create(req.body);
  res.status(StatusCodes.CREATED).json({ visa });
};
const getAllVisas = async (req, res) => {
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
const updateVisa = async (req, res) => {
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
const deleteVisa = async (req, res) => {
  const { id: visaId } = req.params;

  const visa = await Visa.findOne({ _id: visaId });

  if (!visa) {
    throw new NotFoundError(`No visa with id :${visaId}`);
  }

  checkPermissions(req.user, visa.createdBy);

  await visa.remove();

  res.status(StatusCodes.OK).json({ msg: 'Success! Visa removed' });
};
const showStats = async (req, res) => {
  let stats = await Visa.aggregate([
    { $match: { createdBy: mongoose.Types.ObjectId(req.user.userId) } },
    { $group: { _id: '$status', count: { $sum: 1 } } },
  ]);
  stats = stats.reduce((acc, curr) => {
    const { _id: title, count } = curr;
    acc[title] = count;
    return acc;
  }, {});

  const defaultStats = {
    pending: stats.pending || 0,
    interview: stats.interview || 0,
    approved: stats.approved || 0,
  };

  let monthlyApplications = await Visa.aggregate([
    { $match: { createdBy: mongoose.Types.ObjectId(req.user.userId) } },
    {
      $group: {
        _id: { year: { $year: '$createdAt' }, month: { $month: '$createdAt' } },
        count: { $sum: 1 },
      },
    },
    { $sort: { '_id.year': -1, '_id.month': -1 } },
    { $limit: 6 },
  ]);
  monthlyApplications = monthlyApplications
    .map((item) => {
      const {
        _id: { year, month },
        count,
      } = item;
      const date = moment()
        .month(month - 1)
        .year(year)
        .format('MMM Y');
      return { date, count };
    })
    .reverse();

  res.status(StatusCodes.OK).json({ defaultStats, monthlyApplications });
};

export { createVisa, deleteVisa, getAllVisas, updateVisa, showStats };
