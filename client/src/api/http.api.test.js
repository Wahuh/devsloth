import axios from 'axios';
import {setDefaultHeader} from './http.api';

describe('httpApi', () => {
  describe('setDefaultHeader', () => {
    it('sets a default header from a passed in header and value', () => {
      const header = 'Test';
      const value = 'hello';
      setDefaultHeader(header, value);
      expect(axios.defaults.headers.common[header]).toBe(value);
    });
  });
});
