const crypto = require('crypto');

// Generate a random secret key
const generateAuthKey = () => {
  return crypto.randomBytes(32).toString('hex'); // Generate a 256-bit (32-byte) key
};

module.exports = generateAuthKey; // Fix the export function name
