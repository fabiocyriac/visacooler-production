import User from '../models/User.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, UnAuthenticatedError } from '../errors/index.js';
import attachCookie from '../utils/attachCookie.js';

const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new BadRequestError('please provide all values');
  }
  
  const userAlreadyExists = await User.findOne({ email });
  if (userAlreadyExists) {
    throw new BadRequestError('Email already in use');
  }
  const user = await User.create({ name, email, password });

  const token = user.createJWT();
  attachCookie({ res, token });
  res.status(StatusCodes.CREATED).json({
    user: {
      email: user.email,
      lastName: user.lastName,
      location: user.location,
      name: user.name,
    }
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError('Please provide all values');
  }
  const user = await User.findOne({ email }).select('+password');
  if (!user) {
    throw new UnAuthenticatedError('Invalid Credentials');
  }

  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnAuthenticatedError('Invalid Credentials');
  }
  const token = user.createJWT();
  attachCookie({ res, token });
  user.password = undefined;

  res.status(StatusCodes.OK).json(user);
};

const updateUser = async (req, res) => {
  const { email, name, partnerName, partnerLogo, partnerDescription } = req.body;
  if (!email || !name ) {
    throw new BadRequestError('Please provide all profile values');
  }
  const user = await User.findOne({ _id: req.user.userId });

  user.email = email || user.email;
  user.name = name || user.name;
  if (user.isPartner) {
    user.partner.name = partnerName || user.partner.name;
    user.partner.logo = partnerLogo || user.partner.logo;
    user.partner.description = partnerDescription || user.partner.description;
  }
  if (req.body.password) {
    user.password = req.body.password;
  }

  const updatedUser = await user.save();

  const token = updatedUser.createJWT();
  attachCookie({ res, token });
  res.status(StatusCodes.OK).json(updatedUser);
};

const getCurrentUser = async (req, res) => {
  const user = await User.findOne({ _id: req.user.userId });
  res.status(StatusCodes.OK).json(user);
};

const logout = async (req, res) => {
  const user = null;
  res.cookie('token', 'logout', {
    httpOnly: true,
    expires: new Date(Date.now() + 1000),
  });
  res.status(StatusCodes.OK).json(user);
};

export { register, login, updateUser, getCurrentUser, logout };
