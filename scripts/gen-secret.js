const crypto = require('crypto');

// Generate a random secret for the session
const secret = crypto.randomBytes(16).toString('hex');

console.log('Secret:', secret);

return;