import User from '../models/User.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, NotFoundError } from '../errors/index.js';



const getUsers = async (req, res) => {
  const users = await User.find({});
  res.status(StatusCodes.OK).json(users);
}

const getUserDetails = async (req, res) => {
  const user = await User.findById(req.params.id);
  res.status(StatusCodes.OK).json(user);
}

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

export { getUsers, getUserDetails, deleteUser, updateUsers };
