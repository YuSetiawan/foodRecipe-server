const Pool = require('../config/db');

const selectAllUsers = ({limit, offset, sort, sortby}) => {
  return Pool.query(`SELECT * FROM users ORDER BY ${sortby} ${sort} LIMIT ${limit} OFFSET ${offset}`);
};

const selectUsers = (id) => {
  return Pool.query(`SELECT * FROM users WHERE id = '${id}'`);
};

const deleteUsers = (id) => {
  return Pool.query(`DELETE FROM users WHERE id  = '${id}'`);
};

const createUsers = (data) => {
  const {id, name, email, phone, passwordHash} = data;
  return Pool.query(`INSERT INTO users(id,name,email,phone,password) 
    VALUES ('${id}','${name}','${email}','${phone}','${passwordHash}')`);
};

const updateUsers = (data) => {
  const {id, name, photo} = data;
  return Pool.query(`UPDATE users SET name = '${name}', photo = '${photo}' WHERE id = '${id}'`);
};

const findID = (id) => {
  return new Promise((resolve, reject) =>
    Pool.query(`SELECT * FROM users WHERE id= '${id}' `, (error, result) => {
      if (!error) {
        resolve(result);
      } else {
        reject(error);
      }
    })
  );
};

const findEmail = (email) => {
  return new Promise((resolve, reject) =>
    Pool.query(`SELECT * FROM users WHERE email= '${email}' `, (error, result) => {
      if (!error) {
        resolve(result);
      } else {
        reject(error);
      }
    })
  );
};

const countData = () => {
  return Pool.query(`SELECT COUNT(*) FROM users`);
};

module.exports = {
  selectAllUsers,
  selectUsers,
  deleteUsers,
  createUsers,
  updateUsers,
  findID,
  findEmail,
  countData,
};
