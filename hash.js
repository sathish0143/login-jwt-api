const bcrypt = require("bcrypt");
const saltrounds = 5;

const hashGenerate = async (plainPassword) => {
  const salt = await bcrypt.genSalt(saltrounds);
  const hashval = await bcrypt.hash(plainPassword, salt);
  return hashval;
};

module.exports.hashGenerate = hashGenerate;
