import exp = require("constants");
import { SystemUtil } from "../../src";
import { SystemName } from "../../src/util/system";
import { Android_USERAGENT, IOS_USERAGENT } from "../mock/useragent";


class SystemUtilTest extends SystemUtil {

  static clear (): void {
    SystemUtil.system_name = SystemName.Unknown
    SystemUtil.system_version = '';
    SystemUtil.device_id = '';
  }
}

describe('test iOS SystemUtil', () => {
  beforeEach(() => {
    jest.restoreAllMocks(); // 清理模拟
    SystemUtilTest.clear();
  })
  
  test('IOS_USERAGENT.QQBrowser', () => {
    SystemUtilTest.clear();
    jest.spyOn(navigator, 'userAgent', 'get').mockReturnValue(IOS_USERAGENT.QQBrowser);
    expect(SystemUtilTest.systemName).toBe(SystemName.iPhone);
    expect(SystemUtilTest.systemVersion).toBe("18.5");
  })
  
  
  
})

describe('test Android SystemUtil', () => {

  beforeEach(() => {
    jest.restoreAllMocks(); // 清理模拟
    SystemUtilTest.clear();
  })

  test('Android_USERAGENT.Mate50Pro_WeChat', () => {
    jest.spyOn(navigator, 'userAgent', 'get').mockReturnValue(Android_USERAGENT.Mate50Pro_WeChat);
    expect(SystemUtilTest.systemName).toBe(SystemName.Android);
    expect(SystemUtilTest.systemVersion).toBe('12');
    expect(SystemUtilTest.deviceId).toBe('DCO-AL00');
  })

  test('Android_USERAGENT.Mate50Pro_Huawei', () => {
    jest.spyOn(navigator, 'userAgent', 'get').mockReturnValue(Android_USERAGENT.Mate50Pro_Huawei);
    expect(SystemUtilTest.systemName).toBe(SystemName.HarmonyOS);
    expect(SystemUtilTest.deviceId).toBe('DCO-AL00');
  })
  
  test('Android_USERAGENT.Mate50Pro_QQBrowser', () => {
    jest.spyOn(navigator, 'userAgent', 'get').mockReturnValue(Android_USERAGENT.Mate50Pro_QQBrowser);
    expect(SystemUtilTest.systemName).toBe(SystemName.Android);
    expect(SystemUtilTest.systemVersion).toBe('12');
    expect(SystemUtilTest.deviceId).toBe('DCO-AL00');
  })

  test('Android_USERAGENT.Mate50Pro_DingTalk', () => {
    jest.spyOn(navigator, 'userAgent', 'get').mockReturnValue(Android_USERAGENT.Mate50Pro_DingTalk);
    expect(SystemUtilTest.systemName).toBe(SystemName.Android);
    expect(SystemUtilTest.systemVersion).toBe('12');
    expect(SystemUtilTest.deviceId).toBe('DCO-AL00');
  })


  test('Android_USERAGENT.Mate40Pro_WeChat', () => {
    jest.spyOn(navigator, 'userAgent', 'get').mockReturnValue(Android_USERAGENT.Mate40Pro_WeChat);
    expect(SystemUtilTest.systemName).toBe(SystemName.Android);
    expect(SystemUtilTest.systemVersion).toBe('12');
    expect(SystemUtilTest.deviceId).toBe('NOH-AL10');
  })

  test('Android_USERAGENT.Mate40Pro_Huawei', () => {
    jest.spyOn(navigator, 'userAgent', 'get').mockReturnValue(Android_USERAGENT.Mate40Pro_Huawei);
    expect(SystemUtilTest.systemName).toBe(SystemName.HarmonyOS);
    // expect(SystemUtilTest.systemVersion).toBe('12');
    expect(SystemUtilTest.deviceId).toBe('NOH-AL10');
  })

  test('Android_USERAGENT.Mate40Pro_QQBrowser', () => {
    jest.spyOn(navigator, 'userAgent', 'get').mockReturnValue(Android_USERAGENT.Mate40Pro_QQBrowser);
    expect(SystemUtilTest.systemName).toBe(SystemName.Android);
    expect(SystemUtilTest.systemVersion).toBe('12');
    expect(SystemUtilTest.deviceId).toBe('NOH-AL10');
  })

  test('Android_USERAGENT.Mate40Pro_Edge', () => {
    jest.spyOn(navigator, 'userAgent', 'get').mockReturnValue(Android_USERAGENT.Mate40Pro_Edge);
    expect(SystemUtilTest.systemName).toBe(SystemName.Android);
    expect(SystemUtilTest.systemVersion).toBe('10');
    expect(SystemUtilTest.deviceId).toBe('');
  })

  test('Android_USERAGENT.Mate40Pro_QQBrowser', () => {
    jest.spyOn(navigator, 'userAgent', 'get').mockReturnValue(Android_USERAGENT.Mate40Pro_QQBrowser);
    expect(SystemUtilTest.systemName).toBe(SystemName.Android);
    expect(SystemUtilTest.systemVersion).toBe('12');
    expect(SystemUtilTest.deviceId).toBe('NOH-AL10');
  })

  test('Android_USERAGENT.Mate40Pro_Firefox', () => {
    jest.spyOn(navigator, 'userAgent', 'get').mockReturnValue(Android_USERAGENT.Mate40Pro_Firefox);
    expect(SystemUtilTest.systemName).toBe(SystemName.Android);
    expect(SystemUtilTest.systemVersion).toBe('12');
    expect(SystemUtilTest.deviceId).toBe('');
  })

  test('Android_USERAGENT.Vivo_X20A', () => {
    jest.spyOn(navigator, 'userAgent', 'get').mockReturnValue(Android_USERAGENT.Vivo_X20A);
    expect(SystemUtilTest.systemName).toBe(SystemName.Android);
    expect(SystemUtilTest.systemVersion).toBe('8.1.0');
    expect(SystemUtilTest.deviceId).toBe('vivo X20A');
  })

  test('Android_USERAGENT.Oppo_A56S', () => {
    jest.spyOn(navigator, 'userAgent', 'get').mockReturnValue(Android_USERAGENT.Oppo_A56S);
    expect(SystemUtilTest.systemName).toBe(SystemName.Android);
    expect(SystemUtilTest.systemVersion).toBe('0.0');
  })

  test('Android_USERAGENT.Sougou', () => {
    jest.spyOn(navigator, 'userAgent', 'get').mockReturnValue(Android_USERAGENT.Sougou);
    expect(SystemUtilTest.systemName).toBe(SystemName.Android);
    expect(SystemUtilTest.systemVersion).toBe('6.0.1');
    expect(SystemUtilTest.deviceId).toBe('vivo X9Plus');
  })

  test('Android_USERAGENT.SamsungBrowser', () => {
    jest.spyOn(navigator, 'userAgent', 'get').mockReturnValue(Android_USERAGENT.SamsungBrowser);
    expect(SystemUtilTest.systemName).toBe(SystemName.Android);
    expect(SystemUtilTest.deviceId).toBe('');
    expect(SystemUtilTest.systemVersion).toBe('10');
  })
  
})


