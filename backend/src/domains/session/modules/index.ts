import _ from 'lodash';

import devsModule from '../../devs/modules';
import companiesModule from '../../companies/modules';

class SessionModel {

  findOne = async (query: any): Promise<Object | undefined> => {
    const findDev = await devsModule.findOne({...query});
    if(!findDev) {
      const findCompany = await companiesModule.findOne({...query});
      if(!findCompany) {
        return undefined;
      }
      return findCompany;
    } 
    return findDev;
  }
	

}

export default new SessionModel();