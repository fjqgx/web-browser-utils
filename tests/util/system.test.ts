import { SystemUtil, SystemName } from "../../src/util/system";
import { Mac_Chrome_104_userAgent, Mac_Safari_15_5_userAgent } from "../mock/useragent";

describe('test BrowserUtil', () => {

  let systemName: string = ''
  let systemVersion: string = ''

  
  SystemUtil.mockUserAgent = Mac_Chrome_104_userAgent;
  systemName = SystemName.MacOS;
  systemVersion = '10.15.7';
  // 测试Mac端Chrome
  test('test', () => {
    expect(SystemUtil.systemName).toBe(systemName);
    expect(SystemUtil.systemVersion).toBe(systemVersion);
  })

  SystemUtil.mockUserAgent = Mac_Safari_15_5_userAgent;
  // 测试Mac端Chrome
  test('test', () => {
    expect(SystemUtil.systemName).toBe(systemName);
    expect(SystemUtil.systemVersion).toBe(systemVersion);
  })

})