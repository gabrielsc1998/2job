import jwt from 'jsonwebtoken';

import config from '../../config';

class Authentication {

  createToken = (id: string): string | undefined => {
    try {
      return jwt.sign({id}, config.tokenKey, { expiresIn: '1h' });
    } catch(error) {
      console.log(` ## createToken -> error: ${error} `);
    }
  }

  verifyToken = (token: string): boolean | undefined => {
    try {
      jwt.verify(token, config.tokenKey, (error, decodedToken) => {

      });
      return false;
    } catch(error) {
      console.log(` ## createToken -> error: ${error} `);
    }
  }

}

export default new Authentication();