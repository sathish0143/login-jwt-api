const bcrypt = require("bcrypt");

const validator = async (plainPass, hashPass) => {
  const result = await bcrypt.compare(plainPass, hashPass);
  return result;
};

module.exports.validator = validator;
