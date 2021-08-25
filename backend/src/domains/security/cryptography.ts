import crypto, { Hmac } from 'crypto';

class Cryptography {

  constructor() {}

  createHash = (salt: string): Hmac => {
    return crypto.createHmac('sha512', salt);
  }
  
  createSalt = (): string => {
    return crypto.randomBytes(Math.ceil(16))
					 .toString('hex')
					 .slice(0,16);
  }

  encryptWithSHA512 = (password: string, salt: string): string => {
    const hash = this.createHash(salt);
    hash.update(password);
    return hash.digest('hex');
  };

  encryptThePassword = (password: string): {salt: string, password: string} => {
    const salt = this.createSalt();
    return {
      salt,
      password: this.encryptWithSHA512(password, salt)
    };
  }

}

export default new Cryptography();