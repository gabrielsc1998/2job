import _ from 'lodash';
import crypto, { Hmac } from 'crypto';

interface IComparePassword { 
  password : string;
  storedSalt: string; 
  storedPassword: string;
}

class Cryptography {

  constructor() {}

  private _createHash = (salt: string): Hmac | undefined => {
    try {
      return crypto.createHmac('sha512', salt);
    } catch(error) {
      console.log(` _createHash => error: ${error}`);
    }
  }
  
  private _createSalt = (): string | undefined => {
    try {
      return crypto.randomBytes(Math.ceil(16))
             .toString('hex')
             .slice(0,16);
    } catch(error) {
      console.log(` _createSalt => error: ${error}`);
    }
  }

  private _encryptWithSHA512 = (password: string, salt: string): string | undefined => {
    try {
      const hash = this._createHash(salt);
      if(!_.isUndefined(hash)) {
        hash.update(password);
        return hash.digest('hex');
      }
    } catch(error) {
      console.log(` _encryptWithSHA512 => error: ${error}`);
    }
  };

  encryptThePassword = (password: string): {salt: string, password: string} | undefined => {
    try {
      const salt = this._createSalt();
      if(!_.isUndefined(salt)) {
        const encryptedPassword = this._encryptWithSHA512(password, salt);
        if(!_.isUndefined(encryptedPassword)) {
          return { salt, password: encryptedPassword };
        }
      }
    } catch(error) {
      console.log(` encryptThePassword => error: ${error}`);
    }
  }

  comparePassword = ({ password, storedPassword, storedSalt }: IComparePassword): boolean | undefined => {
    try {
      return this._encryptWithSHA512(password, storedSalt) === storedPassword;
    } catch(error) {
      console.log(` comparePassword => error: ${error}`);
    }
  }

}

export default new Cryptography();