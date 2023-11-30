import User from '../models/User.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, NotFoundError } from '../errors/index.js';



const getUsers = async (req, res) => {

  const queryObject = {
    createdBy: req.user.createdBy,
  };
  // no awit
  let result = User.find(queryObject);

  // setup pagination
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  result = result.skip(skip).limit(limit);

  const users = await result;

  const totalUsers = await User.countDocuments({});
  const numOfPages = Math.ceil(totalUsers / limit);

  res.status(StatusCodes.OK).json({ users, totalUsers, numOfPages });

}

const getUserDetails = async (req, res) => {
  const user = await User.findById(req.params.id);
  res.status(StatusCodes.OK).json(user);
}

const createUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError('please provide all values');
  }
  
  const userAlreadyExists = await User.findOne({ email });
  if (userAlreadyExists) {
    throw new BadRequestError('Email already in use');
  }
  req.body.createdBy = req.user.createdBy;

  const user = await User.create(req.body);

  res.status(StatusCodes.CREATED).json({ user });

};

const updateUsers = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.isPartner = Boolean(req.body.isPartner);
    user.isAdmin = Boolean(req.body.isAdmin);
    const updatedUser = await user.save();
    res.status(StatusCodes.OK).json({ msg: 'Success! User updated', user: updatedUser });

    res.send({ message: 'User Updated', user: updatedUser });
  } else {
    throw new NotFoundError(`No user found`);
  }
}

const deleteUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    if (user.email === 'admin@example.com') {
      throw new BadRequestError('Can Not Delete Admin User');
    }
    const deleteUser = await user.remove();
    res.status(StatusCodes.OK).json({ msg: 'Success! User removed', user: deleteUser });
  } else {
    throw new NotFoundError(`No user found`);
  }
}

export { getUsers, getUserDetails, createUser, deleteUser, updateUsers };
