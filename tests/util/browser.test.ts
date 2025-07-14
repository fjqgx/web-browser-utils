import { BrowserUtil, BrowserName } from "../../src/util/browser";
import { mockUserAgent, unmockUserAgent } from "../mock/mock-useragent";
import { IOS_USERAGENT, MAC_USERAGENT } from "../mock/useragent";

class BrowserUtilTest extends BrowserUtil {

  static clear (): void {
    BrowserUtil.browser_name = BrowserName.NULL;
    BrowserUtil.browser_version = '';
  }
}


describe('test BrowserUtil', () => {

  beforeEach(() => {
    BrowserUtilTest.clear();
  })

  afterEach(() => {
    unmockUserAgent();
  })

  // 测试Mac端Chrome
  test('test', () => {
    mockUserAgent(MAC_USERAGENT.Chrome_104);
    expect(BrowserUtilTest.browserName).toBe(BrowserName.Chrome);
    expect(BrowserUtilTest.browserVersion).toBe('104.0.0.0');
    expect(BrowserUtilTest.isBrowser).toBe(true);
    expect(BrowserUtilTest.browserMainVersion).toBe(104);
    expect(BrowserUtilTest.isElectron).toBe(false);
  })

  
  // 测试Mac端Chrome
  test('test', () => {
    mockUserAgent(MAC_USERAGENT.Safari_15_5);
    expect(BrowserUtilTest.browserName).toBe(BrowserName.Safari);
    expect(BrowserUtilTest.browserVersion).toBe('15.5');
    expect(BrowserUtilTest.isBrowser).toBe(true);
    expect(BrowserUtilTest.browserMainVersion).toBe(15);
    expect(BrowserUtilTest.isElectron).toBe(false);
  })

})