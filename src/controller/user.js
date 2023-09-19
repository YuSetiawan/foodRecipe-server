const {v4: uuidv4} = require('uuid');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const authHelper = require('../helper/auth');
const commonHelper = require('../helper/common');
const cloudinary = require('../middlewares/cloudinary');
let {selectAllUsers, selectUsers, deleteUsers, createUsers, updateUsers, findID, findEmail, countData} = require('../model/user');

let userController = {
  getAllUser: async (req, res) => {
    try {
      const page = Number(req.query.page) || 1;
      const limit = Number(req.query.limit) || 100;
      const offset = (page - 1) * limit;
      const sortby = req.query.sortby || 'name';
      const sort = req.query.sort || 'ASC';
      let result = await selectAllUsers({limit, offset, sort, sortby});
      const {
        rows: [count],
      } = await countData();
      const totalData = parseInt(count.count);
      const totalPage = Math.ceil(totalData / limit);
      const pagination = {
        currentPage: page,
        limit: limit,
        totalData: totalData,
        totalPage: totalPage,
      };
      commonHelper.response(res, result.rows, 200, 'Get User Data Success', pagination);
    } catch (err) {
      console.log(err);
    }
  },

  getselectUsers: async (req, res) => {
    const id = String(req.params.id);
    selectUsers(id)
      .then((result) => {
        commonHelper.response(res, result.rows, 200, 'Get User Detail Success');
      })
      .catch((err) => res.send(err));
  },

  registerUser: async (req, res) => {
    let {name, email, phone, password, role} = req.body;
    const {rowCount} = await findEmail(email);
    if (rowCount) {
      return res.json({message: 'Email is already taken'});
    }
    const passwordHash = bcrypt.hashSync(password);
    const id = uuidv4();
    const data = {
      id,
      name,
      email,
      phone,
      passwordHash,
    };

    const schema = Joi.object().keys({
      name: Joi.required(),
      email: Joi.string().required(),
      phone: Joi.any(),
      password: Joi.string().min(3).max(15).required(),
    });
    const {error, value} = schema.validate(req.body, {
      abortEarly: false,
    });
    if (error) {
      console.log(error);
      return res.send(error.details);
    }

    createUsers(data)
      .then((result) => commonHelper.response(res, result.rows, 201, 'Register Success'))
      .catch((err) => res.send(err));
  },

  updateUsers: async (req, res) => {
    try {
      const {name} = req.body;
      const id = String(req.params.id);
      const {rowCount} = await findID(id);
      if (!rowCount) {
        res.json({message: 'ID Not Found'});
      }
      const result = await cloudinary.uploader.upload(req.file.path);
      const photo = result.secure_url;

      const data = {
        id,
        name,
        photo,
      };

      updateUsers(data)
        .then((result) => commonHelper.response(res, result.rows, 200, 'Update Users Success'))
        .catch((err) => res.send(err));
    } catch (error) {
      console.log(error);
    }
  },

  deleteUsers: async (req, res) => {
    try {
      const id = String(req.params.id);
      const {rowCount} = await findID(id);
      if (!rowCount) {
        res.json({message: 'ID Not Found'});
      }
      deleteUsers(id)
        .then((result) => commonHelper.response(res, result.rows, 200, 'Delete Users Success'))
        .catch((err) => res.send(err));
    } catch (error) {
      console.log(error);
    }
  },

  loginUser: async (req, res) => {
    let {email, password} = req.body;
    const {
      rows: [user],
    } = await findEmail(email);
    if (!user) {
      return res.json({message: 'Email is incorrect!'});
    }
    const isValidPassword = bcrypt.compareSync(password, user.password);
    if (!isValidPassword) {
      return res.json({message: 'Password is incorrect!'});
    }
    const payload = {
      email: user.email,
      role: user.role,
    };
    user.token = authHelper.generateToken(payload);
    user.refreshToken = authHelper.generateRefreshToken(payload);

    commonHelper.response(res, user, 201, 'login is successful');
  },

  refreshToken: (req, res) => {
    const refreshToken = req.body.refreshToken;
    const decoded = jwt.verify(refreshToken, process.env.SECRETE_KEY_JWT);
    const payload = {
      users_email: decoded.users_email,
    };
    const result = {
      token_user: authHelper.generateToken(payload),
      refreshToken: authHelper.generateRefreshToken(payload),
    };
    commonHelper.response(res, result, 200);
  },
};

module.exports = userController;
