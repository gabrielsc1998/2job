import jwt from 'jsonwebtoken';

import config from '../../config';

class Authentication {

  createToken = (id: string): string => {
    return jwt.sign(id, config.tokenKey, { expiresIn: '1h' });
  }

  verifyToken = (token: string): boolean => {
    const decoded = jwt.verify(token, config.tokenKey);
    return false;
  }

}

export default new Authentication();