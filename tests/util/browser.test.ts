
import { clear, mockUserAgent } from 'jest-useragent-mock'
import { Android_Browser, IOS_Browser, Mac_Browser } from '../mock/useragent';
import { BrowserName } from '../../types';
import { BrowserUtil } from '../../src';

describe('test mac browser', () => {
  beforeEach(() => {
    BrowserUtil.clear();
    clear();
  });

  test('Unknown_UserAgent', () => {
    mockUserAgent('');
    expect(BrowserUtil.browserName).toBe(BrowserName.Unknown);
  })

  test('test mac safari 15.6.1', () => {
    mockUserAgent(Mac_Browser.Safari_15_6);
    expect(BrowserUtil.isBrowser).toBe(true);
    expect(BrowserUtil.isHttps).toBe(false);
    expect(BrowserUtil.isSupportScreenShare).toBe(false);
    expect(BrowserUtil.browserName).toBe(BrowserName.Safari);
    expect(BrowserUtil.browserVersion).toEqual('15.6.1');
    expect(BrowserUtil.isChromium).toBe(false);
    expect(BrowserUtil.isIE).toBe(false);
    expect(BrowserUtil.isFirefox).toBe(false);
    expect(BrowserUtil.isElectron).toBe(false);
    expect(BrowserUtil.isEdge).toBe(false);
    expect(BrowserUtil.isSogou).toBe(false);
    expect(BrowserUtil.isVivoBroswer).toBe(false);
    expect(BrowserUtil.isOppoBrowser).toBe(false);
    expect(BrowserUtil.isMiBrowser).toBe(false);
    expect(BrowserUtil.isLenovoBrowser).toBe(false);
    expect(BrowserUtil.isMaxthonBrowser).toBe(false);
    expect(BrowserUtil.isLiebaoBrowser).toBe(false);
    expect(BrowserUtil.isHuaweiBrowser).toBe(false);
    expect(BrowserUtil.isMZBrowser).toBe(false);
    expect(BrowserUtil.isOpera).toBe(false);
    expect(BrowserUtil.isMicroMessenger).toBe(false);
    expect(BrowserUtil.isQQ).toBe(false);
    expect(BrowserUtil.isQQBrowser).toBe(false);
    expect(BrowserUtil.isX5Core).toBe(false);
    expect(BrowserUtil.isUCBrowser).toBe(false);
    expect(BrowserUtil.isQuarkBrowser).toBe(false);
    expect(BrowserUtil.isFingerBrowser).toBe(false);
    expect(BrowserUtil.isDingTalk).toBe(false);
    expect(BrowserUtil.browserMainVersion).toBe(15);
  })

  test('test mac chrome 104', () => {
    mockUserAgent(Mac_Browser.Chrome_104);
    expect(BrowserUtil.isBrowser).toBe(true);
    expect(BrowserUtil.isHttps).toBe(false);
    expect(BrowserUtil.isSupportScreenShare).toBe(false);
    expect(BrowserUtil.browserName).toBe(BrowserName.Chrome);
    expect(BrowserUtil.isUnknown).toBe(false);
    // expect(BrowserUtil.isChrome).toBe(true);
    expect(BrowserUtil.isSafari).toBe(false);
    expect(BrowserUtil.isChromium).toBe(true);
  });

  test('test mac qq browser 4.5.123.400', () => {
    mockUserAgent(Mac_Browser.QQ_Brwoser_4_5_123);
    expect(BrowserUtil.browserName).toBe(BrowserName.QQBrowser);
    // expect(BrowserUtil.browserVersion).toBe('4.5.123.400');
  })
})

describe("test android browser", () => {
  beforeEach(() => {
    BrowserUtil.clear();
    clear();
  });

  test('test android weibo', () => {
    mockUserAgent(Android_Browser.Huawei_Weibo);
    expect(BrowserUtil.isWeibo).toBe(true);
  })

  test('test android bytedance', () => {
    mockUserAgent(Android_Browser.Huawei_Douyin);
    expect(BrowserUtil.isByteDance).toBe(true);
  })

  test('test android Tmall 13.10.0', () => {
    mockUserAgent(Android_Browser.Tmall);
    expect(BrowserUtil.browserName).toBe(BrowserName.Tmall);
    expect(BrowserUtil.browserVersion).toBe('13.10.0');
  })

  test('test android Taobao 10.22.20', () => {
    mockUserAgent(Android_Browser.Taobao);
    expect(BrowserUtil.browserName).toBe(BrowserName.Taobao);
    expect(BrowserUtil.browserVersion).toBe('10.22.20');
  })

})

describe("test ios browser", () => {
  beforeEach(() => {
    BrowserUtil.clear();
    clear();
  });

  test('test safari 12.1.2', () => {
    mockUserAgent(IOS_Browser.Safari_12_1_2);
    expect(BrowserUtil.browserName).toBe(BrowserName.Safari);
    expect(BrowserUtil.browserVersion).toBe('12.1.2');
  })

  test('test ios weibo 15.6', () => {
    mockUserAgent(IOS_Browser.Weibo_15_6);
    expect(BrowserUtil.isWeibo).toBe(true);
    expect(BrowserUtil.browserVersion).toBe('')
  })
  test('test ios bytedance 15.6', () => {
    mockUserAgent(IOS_Browser.Douyin_15_6);
    expect(BrowserUtil.isByteDance).toBe(true);
    expect(BrowserUtil.browserVersion).toBe('')
  })

  test('test iOS Tmall 13.6.0.3090', () => {
    mockUserAgent(IOS_Browser.Tmall);
    expect(BrowserUtil.browserName).toBe(BrowserName.Tmall);
    expect(BrowserUtil.browserVersion).toBe('13.6.0.3090');
  })

  test('test iOS Taobao 10.23.20', () => {
    mockUserAgent(IOS_Browser.Taobao);
    expect(BrowserUtil.browserName).toBe(BrowserName.Taobao);
    expect(BrowserUtil.browserVersion).toBe('10.23.20');
  })
})