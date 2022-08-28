import { BrowserUtil, BrowserName } from "../../src/util/browser";
import { Mac_Chrome_104_userAgent, Mac_Safari_15_5_userAgent } from "../mock/useragent";

describe('test BrowserUtil', () => {

  let browserName: string = ''
  let browserVersion: string = ''
  let browserMainVersion: number = 0;

  BrowserUtil.mockUserAgent = Mac_Chrome_104_userAgent;
  browserName = BrowserName.Chrome;
  browserVersion = '104.0.0.0';
  browserMainVersion = 104;
  // 测试Mac端Chrome
  test('test', () => {
    expect(BrowserUtil.browserName).toBe(browserName);
    expect(BrowserUtil.browserVersion).toBe(browserVersion);
    expect(BrowserUtil.isBrowser).toBe(true);
    expect(BrowserUtil.domain).toBe('localhost');
    expect(BrowserUtil.isHttps).toBe(false);
    expect(BrowserUtil.isSupportScreenShare).toBe(false);
    expect(BrowserUtil.browserMainVersion).toBe(browserMainVersion);
    expect(BrowserUtil.isElectron).toBe(false);
  })

  BrowserUtil.mockUserAgent = Mac_Safari_15_5_userAgent;
  browserName = BrowserName.Safari;
  browserVersion = '15.5';
  browserMainVersion = 15;
  // 测试Mac端Chrome
  test('test', () => {
    expect(BrowserUtil.browserName).toBe(browserName);
    expect(BrowserUtil.browserVersion).toBe(browserVersion);
    expect(BrowserUtil.isBrowser).toBe(true);
    expect(BrowserUtil.domain).toBe('localhost');
    expect(BrowserUtil.isHttps).toBe(false);
    expect(BrowserUtil.isSupportScreenShare).toBe(false);
    expect(BrowserUtil.browserMainVersion).toBe(browserMainVersion);
    expect(BrowserUtil.isElectron).toBe(false);
  })

})