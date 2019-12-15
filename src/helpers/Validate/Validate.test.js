import { validateHTTPS, validateHaveCookieName } from './Validate';
import { createCookie, deleteCookie } from '../../helpers';

describe('[Helpers] validateHTTPS', () => {
  it('do not send value', () => {
    expect(validateHTTPS()).toEqual(false);
  });

  it('mock string is not url', () => {
    expect(validateHTTPS('teststring')).toEqual(false);
  });

  it('potocol http', () => {
    expect(validateHTTPS('http://example.url')).toEqual(false);
  });

  it('potocol https', () => {
    expect(validateHTTPS('https://example.url')).toEqual(true);
  });
});

describe('[Helpers] validateHaveCookieName - Error case', () => {
  it('do not send value to func', () => {
    expect(validateHaveCookieName()).toEqual(false);
  });

  it('do not have cookie name', () => {
    expect(validateHaveCookieName('check_cookie_name')).toEqual(false);
  });
});

describe('[Helpers] validateHaveCookieName - Happy case', () => {
  beforeEach(() => {
    global.document = Object.create(document);
    Object.defineProperty(document, 'cookie', {
      'value': createCookie('check_cookie_name', 'check_cookie_name', 1),
      'writable': true,
    });
  });

  afterEach(() => {
    global.document = Object.create(document);
    Object.defineProperty(document, 'cookie', {
      'value': deleteCookie('check_cookie_name'),
      'writable': true,
    });
  });

  it('do not have cookie name', () => {
    expect(validateHaveCookieName('check_cookie_name')).toEqual(true);
  });
});
