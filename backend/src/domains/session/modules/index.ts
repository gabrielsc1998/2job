import _ from 'lodash';

import devsModule from '../../devs/modules';
import companiesModule from '../../companies/modules';

interface ISession {
  id: string;
  token: string;
};
class SessionModel {

  private _sessions: Array<ISession> = [];

  createNewSession = ({id, token}: ISession): boolean => {
    if(_.isUndefined(this.getSession(id))) {
      this._sessions.push({id, token});
      return true;
    }
    return false;
  }

  getSession = (id: string): string | undefined => {
    const session = this._sessions.find((session: ISession) => session.id === id);
    return session?.token;
  }

  findOne = async (query: any): Promise<{id: string, password: string, salt: string} | undefined> => {
    const findDev = await devsModule.findOne({...query});
    if(_.isEmpty(findDev)) {
      const findCompany = await companiesModule.findOne({...query}, ['password', 'salt']);
      if(_.isEmpty(findCompany)) {
        return undefined;
      }
      return findCompany;
    } 
    return findDev;
  }
	

}

export default new SessionModel();