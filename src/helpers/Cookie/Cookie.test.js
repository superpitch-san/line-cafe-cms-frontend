import { createCookie, getCookie, deleteCookie } from './Cookie';

describe('[Helpers] Cookies - Create cookie', () => {
  it('don not send all value to func', () => {
    expect(createCookie()).toEqual(null);
  });

  it('don not send value and hr to func', () => {
    expect(createCookie('test_cookie')).toEqual(null);
  });

  it('don not send hr to func', () => {
    expect(createCookie('test_cookie', 'test_cookie')).toEqual(`test_cookie=test_cookie; expires=; domain=${process.env.REACT_APP_DOMAIN_COOKIE}; path=/`);
  });

  it('send all value to func', () => {
    expect(createCookie('test_cookie', 'test_cookie', 1)).toEqual(`test_cookie=test_cookie; expires=${new Date(new Date().setTime(new Date().getTime() + 3600000)).toGMTString()}; domain=${process.env.REACT_APP_DOMAIN_COOKIE}; path=/`);
  });

  // TODO case limit value cookie
});

describe('[Helpers] Cookies - Create cookie via HTTPS protocol', () => {
  const oldUrl = window.location.href;

  beforeEach(() => {
    global.window = Object.create(window);
    Object.defineProperty(window, 'location', {
      'value': {
        'href': 'https://test.mock/url',
      },
      'writable': true,
    });
  });

  afterEach(() => {
    global.window = Object.create(window);
    Object.defineProperty(window, 'location', {
      'value': {
        'href': oldUrl,
      },
      'writable': true,
    });
  });

  it('via https potocol', () => {
    expect(createCookie('test_cookie', 'test_cookie')).toEqual(`test_cookie=test_cookie; expires=; domain=${process.env.REACT_APP_DOMAIN_COOKIE}; path=/; secure`);
  });
});

describe('[Helpers] Cookies - Get cookie error case', () => {
  it('do not send cookie name', () => {
    expect(getCookie()).toEqual(null);
  });

  it('get cookie do not have cookie name', () => {
    expect(getCookie('test_cookie')).toEqual(null);
  });
});

describe('[Helpers] Cookies - Get cookie happy case', () => {
  beforeEach(() => {
    global.document = Object.create(document);
    Object.defineProperty(document, 'cookie', {
      'value': createCookie('test_cookie', 'test_cookie', 1),
      'writable': true,
    });
  });

  afterEach(() => deleteCookie('test_cookie'));

  it('get cookie success', () => {
    expect(getCookie('test_cookie')).toEqual('test_cookie');
  });
});

describe('[Helpers] Cookies - Delete cookie error case', () => {
  it('do not send cookie name to func', () => {
    expect(deleteCookie()).toEqual(null);
  });

  it('empty cookie', () => {
    expect(deleteCookie('test_cookiea')).toEqual(null);
  });
});

describe('[Helpers] Cookies - Delete cookie happy case', () => {
  beforeEach(() => {
    global.document = Object.create(document);
    Object.defineProperty(document, 'cookie', {
      'value': createCookie('test_cookie', 'test_cookie', 1),
      'writable': true,
    });
  });

  it('delete cookie success', () => {
    expect(deleteCookie('test_cookie')).toEqual(`test_cookie=; expires=${new Date(new Date().setDate(new Date().getDate() - 1)).toUTCString()}; domain=${process.env.REACT_APP_DOMAIN_COOKIE ? process.env.REACT_APP_DOMAIN_COOKIE : ''}; path=/`);
  });
});
