import { BrowserUtil, BrowserName } from "../../src/util/browser";
import { SystemUtil } from "../../src/util/system";
import { Android_USERAGENT, IOS_USERAGENT, MAC_USERAGENT, WINDOWS_USERAGENT } from "../mock/useragent";


class BrowserUtilTest extends BrowserUtil {

  static clear (): void {
    BrowserUtil.browser_name = BrowserName.NULL;
    BrowserUtil.browser_version = '';
  }
}


describe('test Mac BrowserUtil', () => {

  afterEach(() => {
    jest.restoreAllMocks(); // 清理模拟
    BrowserUtilTest.clear();
  })

  test('none', () => {
    expect(BrowserUtilTest.isBrowser).toBe(true);
    expect(BrowserUtilTest.domain).toBe("localhost");
    expect(BrowserUtilTest.isHttps).toBe(false);
    expect(BrowserUtilTest.isSupportScreenShare).toBe(false);
    expect(BrowserUtilTest.isElectron).toBe(false);
  });

  // 测试Mac端Chrome
  test('MAC_USERAGENT.Chrome_104', () => {
    jest.spyOn(navigator, 'userAgent', 'get').mockReturnValue(MAC_USERAGENT.Chrome_104);
    expect(BrowserUtilTest.browserName).toBe(BrowserName.Chrome);
    expect(BrowserUtilTest.browserVersion).toBe('104.0.0.0');
    expect(BrowserUtilTest.browserMainVersion).toBe(104);
  })

  
  // 测试Mac端Chrome
  test('MAC_USERAGENT.Safari_15_5', () => {
    jest.spyOn(navigator, 'userAgent', 'get').mockReturnValue(MAC_USERAGENT.Safari_15_5);
    expect(BrowserUtilTest.browserName).toBe(BrowserName.Safari);
    expect(BrowserUtilTest.browserVersion).toBe('15.5');
    
  })

  test('MAC_USERAGENT.QQBrowser', () => {
    jest.spyOn(navigator, 'userAgent', 'get').mockReturnValue(MAC_USERAGENT.QQBrowser);
    jest.spyOn(SystemUtil, 'isMacOS', 'get').mockReturnValue(true);
    expect(BrowserUtilTest.browserName).toBe(BrowserName.QQBrowser);
    expect(BrowserUtilTest.browserVersion).toBe('123.0.0.0');
  })
})

describe('test Windows BrowserUtil', () => {

  afterEach(() => {
    jest.restoreAllMocks(); // 清理模拟
    BrowserUtilTest.clear();
  })

  test('WINDOWS_USERAGENT.IE8', () => {
    jest.spyOn(navigator, 'userAgent', 'get').mockReturnValue(WINDOWS_USERAGENT.IE8);
    expect(BrowserUtilTest.browserName).toBe(BrowserName.IE);
  })

  test('WINDOWS_USERAGENT.Sougou', () => {
    jest.spyOn(navigator, 'userAgent', 'get').mockReturnValue(WINDOWS_USERAGENT.Sougou);
    expect(BrowserUtilTest.browserName).toBe(BrowserName.Sogou);
    expect(BrowserUtilTest.browserMainVersion).toBe(78);
    expect(BrowserUtilTest.browserVersion).toBe('78.0.3904.108');
  })
})

describe('test Android BrowserUtil', () => {
  afterEach(() => {
    jest.restoreAllMocks(); // 清理模拟
    BrowserUtilTest.clear();
  })
  
  test('Android_USERAGENT.Mate50Pro_WeChat', () => {
    jest.spyOn(navigator, 'userAgent', 'get').mockReturnValue(Android_USERAGENT.Mate50Pro_WeChat);
    expect(BrowserUtilTest.browserName).toBe(BrowserName.MicroMessenger);
    expect(BrowserUtilTest.browserMainVersion).toBe(8);
    expect(BrowserUtilTest.browserVersion).toBe('8.0.58.2841')
  })
  
  test('Android_USERAGENT.Mate50Pro_Huawei', () => {
    jest.spyOn(navigator, 'userAgent', 'get').mockReturnValue(Android_USERAGENT.Mate50Pro_Huawei);
    expect(BrowserUtilTest.browserName).toBe(BrowserName.Huawei);
    expect(BrowserUtilTest.browserMainVersion).toBe(114);
    expect(BrowserUtilTest.browserVersion).toBe('114.0.5735.196')
  })
  
  test('Android_USERAGENT.Mate50Pro_QQBrowser', () => {
    jest.spyOn(navigator, 'userAgent', 'get').mockReturnValue(Android_USERAGENT.Mate50Pro_QQBrowser);
    expect(BrowserUtilTest.browserName).toBe(BrowserName.QQBrowser);
    expect(BrowserUtilTest.browserMainVersion).toBe(121);
    expect(BrowserUtilTest.browserVersion).toBe('121.0.6167.71');
  })

  test('Android_USERAGENT.Mate50Pro_DingTalk', () => {
    jest.spyOn(navigator, 'userAgent', 'get').mockReturnValue(Android_USERAGENT.Mate50Pro_DingTalk);
    expect(BrowserUtilTest.browserName).toBe(BrowserName.DingTalk);
    expect(BrowserUtilTest.browserMainVersion).toBe(7);
    expect(BrowserUtilTest.browserVersion).toBe('7.6.60');
  })
  

  test('Android_USERAGENT.Mate40Pro_Firefox', () => {
    jest.spyOn(navigator, 'userAgent', 'get').mockReturnValue(Android_USERAGENT.Mate40Pro_Firefox);
    expect(BrowserUtilTest.browserName).toBe(BrowserName.Firefox);
    expect(BrowserUtilTest.browserMainVersion).toBe(134);
    expect(BrowserUtilTest.browserVersion).toBe('134.0')
  })

  test('Android_USERAGENT.Mate40Pro_Edge', () => {
    jest.spyOn(navigator, 'userAgent', 'get').mockReturnValue(Android_USERAGENT.Mate40Pro_Edge);
    expect(BrowserUtilTest.browserName).toBe(BrowserName.Edge);
    expect(BrowserUtilTest.browserMainVersion).toBe(136);
    expect(BrowserUtilTest.browserVersion).toBe('136.0.0.0')
  })

  test('Android_USERAGENT.Sougou', () => {
    jest.spyOn(navigator, 'userAgent', 'get').mockReturnValue(Android_USERAGENT.Sougou);
    expect(BrowserUtilTest.browserName).toBe(BrowserName.Sogou);
    expect(BrowserUtilTest.browserMainVersion).toBe(46);
    expect(BrowserUtilTest.browserVersion).toBe('46.0.2490.92');
  })

  test('Android_USERAGENT.Vivo', () => {
    jest.spyOn(navigator, 'userAgent', 'get').mockReturnValue(Android_USERAGENT.Vivo);
    // expect(BrowserUtilTest.browserName).toBe(BrowserName.Vivo);
    // expect(BrowserUtilTest.browserMainVersion).toBe(102);
    // expect(BrowserUtilTest.browserVersion).toBe('102.0.5005.62');
  })

  test('Android_USERAGENT.Oppo', () => {
    jest.spyOn(navigator, 'userAgent', 'get').mockReturnValue(Android_USERAGENT.Oppo);
    // expect(BrowserUtilTest.browserName).toBe(BrowserName.Oppo);
    // expect(BrowserUtilTest.browserMainVersion).toBe(123);
    // expect(BrowserUtilTest.browserVersion).toBe('123.0.6312.118');
  })

  test('Android_USERAGENT.Mate40Pro_QQBrowser', () => {
    jest.spyOn(navigator, 'userAgent', 'get').mockReturnValue(Android_USERAGENT.Mate40Pro_QQBrowser);
    expect(BrowserUtilTest.browserName).toBe(BrowserName.QQBrowser);
    expect(BrowserUtilTest.browserVersion).toBe('121.0.6167.71');
  })

})

describe('test iOS BrowserUtil', () => {

  afterEach(() => {
    jest.restoreAllMocks(); // 清理模拟
    BrowserUtilTest.clear();
  })

  test('IOS_USERAGENT.QQBrowser', () => {
    jest.spyOn(navigator, 'userAgent', 'get').mockReturnValue(IOS_USERAGENT.QQBrowser);
    jest.spyOn(SystemUtil, 'isIos', 'get').mockReturnValue(true);
    expect(BrowserUtilTest.browserName).toBe(BrowserName.QQBrowser);
    expect(BrowserUtilTest.browserVersion).toBe('19.2.7');
  })

  test('IOS_USERAGENT.Edge_18_5', () => {
    jest.spyOn(navigator, 'userAgent', 'get').mockReturnValue(IOS_USERAGENT.Edge_18_5);
    expect(BrowserUtilTest.browserName).toBe(BrowserName.Edge);
    expect(BrowserUtilTest.browserVersion).toBe('138.0.3351.109');
  })

  test('IOS_USERAGENT.Chrome_18_4', () => {
    jest.spyOn(navigator, 'userAgent', 'get').mockReturnValue(IOS_USERAGENT.Chrome_18_4);
    expect(BrowserUtilTest.browserName).toBe(BrowserName.Chrome);
    expect(BrowserUtilTest.browserVersion).toBe('136.0.7103.91');
    
  })

  test('IOS_USERAGENT.Safari_18_4', () => {
    jest.spyOn(navigator, 'userAgent', 'get').mockReturnValue(IOS_USERAGENT.Safari_18_4);
    expect(BrowserUtilTest.browserName).toBe(BrowserName.Safari);
    expect(BrowserUtilTest.browserVersion).toBe('18.4');
  })
   
  test('IOS_USERAGENT.WeChat_18_4', () => {
    jest.spyOn(navigator, 'userAgent', 'get').mockReturnValue(IOS_USERAGENT.WeChat_18_4);
    expect(BrowserUtilTest.browserName).toBe(BrowserName.MicroMessenger);
    expect(BrowserUtilTest.browserVersion).toBe('8.0.59');
  })
  
  test('IOS_USERAGENT.DingTalk_18_4', () => {
    jest.spyOn(navigator, 'userAgent', 'get').mockReturnValue(IOS_USERAGENT.DingTalk_18_4);
    expect(BrowserUtilTest.browserName).toBe(BrowserName.DingTalk);
    expect(BrowserUtilTest.browserVersion).toBe('7.6.60');
  })

  // test('IOS_USERAGENT.Feishu_18_4', () => {
  //   jest.spyOn(navigator, 'userAgent', 'get').mockReturnValue(IOS_USERAGENT.Feishu_18_4);
  //   // expect(BrowserUtilTest.browserName).toBe(BrowserName.Feis);
  //   expect(BrowserUtilTest.browserVersion).toBe('7.15.32');
  //   console.log(BrowserUtilTest.browserName, BrowserUtilTest.browserVersion)
  // })

})