const crypto = require('crypto');

class Cryptography {

  constructor() {}

  createHash(salt) {
    return crypto.createHmac('sha512', salt);
  }
  
  createSalt() {
    return crypto.randomBytes(Math.ceil(16))
					 .toString('hex')
					 .slice(0,16);
  }

  encryptWithSHA512(password, salt) {
    const hash = this.createHash(salt);
    hash.update(password);
    return hash.digest('hex');
  };

  encryptThePassword(password) {
    const salt = this.createSalt();
    return {
      salt,
      password: this.encryptWithSHA512(password, salt)
    };
  }

}

module.exports = new Cryptography();