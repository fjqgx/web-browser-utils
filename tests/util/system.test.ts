import { SystemUtil } from "../../src";
import { SystemName } from "../../src/util/system";
import { IOS_USERAGENT } from "../mock/useragent";


class SystemUtilTest extends SystemUtil {

  static clear (): void {
    SystemUtilTest.system_name = SystemName.Unknown
    SystemUtilTest.system_version = '';
  }
}

describe('test iOS BrowserUtil', () => {
  
    afterEach(() => {
      jest.restoreAllMocks(); // 清理模拟
      SystemUtilTest.clear();
    })
  
    test('IOS_USERAGENT.QQBrowser', () => {
      jest.spyOn(navigator, 'userAgent', 'get').mockReturnValue(IOS_USERAGENT.QQBrowser);
      expect(SystemUtilTest.systemName).toBe(SystemName.iPhone);
      expect(SystemUtilTest.systemVersion).toBe("18.5");
    })
  
    // test('IOS_USERAGENT.Edge_18_5', () => {
    //   jest.spyOn(navigator, 'userAgent', 'get').mockReturnValue(IOS_USERAGENT.Edge_18_5);
    //   expect(BrowserUtilTest.browserName).toBe(BrowserName.Edge);
    //   expect(BrowserUtilTest.browserVersion).toBe('138.0.3351.109');
    // })
  
    // test('IOS_USERAGENT.Chrome_18_4', () => {
    //   jest.spyOn(navigator, 'userAgent', 'get').mockReturnValue(IOS_USERAGENT.Chrome_18_4);
    //   expect(BrowserUtilTest.browserName).toBe(BrowserName.Chrome);
    //   expect(BrowserUtilTest.browserVersion).toBe('136.0.7103.91');
      
    // })
  
    // test('IOS_USERAGENT.Safari_18_4', () => {
    //   jest.spyOn(navigator, 'userAgent', 'get').mockReturnValue(IOS_USERAGENT.Safari_18_4);
    //   expect(BrowserUtilTest.browserName).toBe(BrowserName.Safari);
    //   expect(BrowserUtilTest.browserVersion).toBe('18.4');
    // })
     
    // test('IOS_USERAGENT.WeChat_18_4', () => {
    //   jest.spyOn(navigator, 'userAgent', 'get').mockReturnValue(IOS_USERAGENT.WeChat_18_4);
    //   expect(BrowserUtilTest.browserName).toBe(BrowserName.MicroMessenger);
    //   expect(BrowserUtilTest.browserVersion).toBe('8.0.59');
    // })
    
    // test('IOS_USERAGENT.DingTalk_18_4', () => {
    //   jest.spyOn(navigator, 'userAgent', 'get').mockReturnValue(IOS_USERAGENT.DingTalk_18_4);
    //   expect(BrowserUtilTest.browserName).toBe(BrowserName.DingTalk);
    //   expect(BrowserUtilTest.browserVersion).toBe('7.6.60');
    // })
  
    // test('IOS_USERAGENT.Feishu_18_4', () => {
    //   jest.spyOn(navigator, 'userAgent', 'get').mockReturnValue(IOS_USERAGENT.Feishu_18_4);
    //   // expect(BrowserUtilTest.browserName).toBe(BrowserName.Feis);
    //   expect(BrowserUtilTest.browserVersion).toBe('7.15.32');
    //   console.log(BrowserUtilTest.browserName, BrowserUtilTest.browserVersion)
    // })
  
  })


