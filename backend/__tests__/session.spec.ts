import _ from 'lodash';
import chai from 'chai';
const expect = chai.expect;

import session from '../src/domains/session/modules';

const mockSession = {
  id: '1',
  token: 'abcd1234ffff0000'
}

describe('Testing the session module', function () {
  
  it('Should create a session', async () => {
    const createSession = session.createNewSession(mockSession);
    expect(createSession).true;
  });

  it('Should get the session by id', async () => {
    const getSession = session.getSession(mockSession.id);
    expect(getSession).to.equal(mockSession.token);
  });

});