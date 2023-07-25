import { clear, mockUserAgent } from 'jest-useragent-mock'
import { SystemName } from '../../types';
import { SystemUtil } from '../../src';
import { Mac_Browser, Android_Browser, IPad_Browser, Windows_Brwoser, IOS_Browser } from '../mock/useragent';


describe('test mac broswer', () => {
  beforeEach(() => {
    SystemUtil.clear();
    clear();
  })

  test('test unknown', () => {
    mockUserAgent('');
    expect(SystemUtil.isUnknown).toBe(true);
  })

  test('test safari 15.6', () => {
    mockUserAgent(Mac_Browser.Safari_15_6);
    expect(SystemUtil.isMacOS).toBe(true);
    expect(SystemUtil.isWindows).toBe(false);
    expect(SystemUtil.isIos).toBe(false);
    expect(SystemUtil.isAndroid).toBe(false);
    expect(SystemUtil.isLinux).toBe(false);
    expect(SystemUtil.systemName).toBe(SystemName.MacOS);
    expect(SystemUtil.systemVersion).toBe('10.15.6');
    expect(SystemUtil.isUnknown).toBe(false);
  })

  test('test Mac Chrome 114', () => {
    mockUserAgent(Mac_Browser.Chrome_114);
  })
})

describe('test android browser', () => {
  beforeEach(() => {
    SystemUtil.clear();
    clear();
  })

  test('test huawei ', () => {
    mockUserAgent(Android_Browser.Huawei_83_0_4103_106);
    expect(SystemUtil.isAndroid).toBe(true);
    expect(SystemUtil.systemVersion).toBe('10');
    expect(SystemUtil.systemName).toBe(SystemName.Android);
  })

  test('test samsung s8+', () => {
    mockUserAgent(Android_Browser.Samsung_S8_Chrome);
    expect(SystemUtil.isAndroid).toBe(true);
    expect(SystemUtil.systemVersion).toBe('8.0.0');
    expect(SystemUtil.systemName).toBe(SystemName.Android);
    expect(SystemUtil.deviceType).toBe('SM-G955U');
  })

  test('test samsung s20', () => {
    mockUserAgent(Android_Browser.Samsun_s20_Chrome);
    expect(SystemUtil.deviceType).toBe('SM-G981B');
  })

  test('test samsung galaxy fold', () => {
    mockUserAgent(Android_Browser.Samsung_GalaxyFold_Chrome);
    expect(SystemUtil.deviceType).toBe('SAMSUNG SM-F900U');
  })

  test('test samsung galaxy A51 Chrome', () => {
    mockUserAgent(Android_Browser.Samsung_Galaxy_A51_Chrome);
    expect(SystemUtil.deviceType).toBe('SM-G955U');
  })
})

describe('test windows browser', () => {
  beforeEach(() => {
    SystemUtil.clear();
    clear();
  })

  test('test huawei ', () => {
    mockUserAgent(Windows_Brwoser.Chrome_67_0_3396_99);
    expect(SystemUtil.isWindows).toBe(true);
    expect(SystemUtil.systemVersion).toBe('10');
  })
})

describe('test ipad browser', () => {
  beforeEach(() => {
    SystemUtil.clear();
    clear();
  })

  test('test ipad', () => {
    mockUserAgent(IPad_Browser.Safari);
    expect(SystemUtil.isIPad).toBe(true);
  })
})

describe('test iOS browser', () => {
  beforeEach(() => {
    SystemUtil.clear();
    clear();
  })

  test('test micromessage 15.7.1', () => {
    // MicroMessage_15_7_3
    mockUserAgent(IOS_Browser.MicroMessage_15_7_3);
  })
})