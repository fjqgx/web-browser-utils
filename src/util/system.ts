import { BrowserUtil } from "./browser";

export enum SystemName {
  Unknown = "Unknown",
  MacOS = "Mac",
  Windows = "Windows",
  Windows10 =  "Windows 10",
  Windows7 = "Windows 7",
  WindowsVista = "Windows vista",
  WindowsXP = "Windows xp",
  Android = "Android",
  HarmonyOS = "HarmonyOS",
  iPhone = "iPhone",
  iPad = "iPad",
  iOS = "iOS",
  Linux = "Linux",
  ChromeOS = "ChromeOS",
}

/**
 * 系统工具，用于获取系统名称，版本等信息
 */
export class SystemUtil {

  protected static system_name: SystemName = SystemName.Unknown;
  protected static system_version: string = '';
  protected static device_id: string = '';

  /**
   * 是否是Mac系统
   */
  static get isMacOS (): boolean {
    return SystemName.MacOS === SystemUtil.systemName
  }

  /**
   * 是否是windows系统
   */
  static get isWindows (): boolean {
    return SystemUtil.systemName.indexOf(SystemName.Windows) > -1
  }

  /*
   * 判断是否是IOS系统
   */
  static get isIos (): boolean {
    return SystemName.iPhone === SystemUtil.systemName || SystemName.iPad === SystemUtil.systemName
  }

  /**
   * 判断是否是Android系统
   * @returns {boolean}
   */
  static get isAndroid (): boolean {
    return SystemName.Android === SystemUtil.systemName
  }

  static get isLinux () {
    return SystemName.Linux === SystemUtil.systemName
  }

  /**
   * 获取操作系统名称
   */
  static get systemName(): SystemName {
    SystemUtil.getSystemInfo()
    return SystemUtil.system_name
  }

  /**
   * 获取系统版本号
   */
  static get systemVersion (): string {
    SystemUtil.getSystemInfo()
    return SystemUtil.system_version
  }

  static get platform(): SystemName {
    switch (SystemUtil.systemName) {
      case SystemName.Android:
        return SystemName.Android;

      case SystemName.HarmonyOS:
        return SystemName.HarmonyOS;
        
      case SystemName.iPad:
      case SystemName.iPhone:
        return SystemName.iOS;

      case SystemName.Linux:
        return SystemName.Linux;

      case SystemName.MacOS:
        return SystemName.MacOS;

      case SystemName.ChromeOS:
        return SystemName.ChromeOS;

      case SystemName.WindowsXP:
      case SystemName.WindowsVista:
      case SystemName.Windows7:
      case SystemName.Windows10:
        return SystemName.Windows;

      default:
        break;
    }

    return SystemName.Unknown;
  }

  /**
   * 获取设备id(机型)
   * 只有Android可以使用，其他设备调用返回空字符串
   */
  static get deviceId (): string {
    if (SystemUtil.device_id) {
      return SystemUtil.device_id;
    }
    if (navigator && navigator.userAgent) {
      if (SystemUtil.systemName === SystemName.Android) {
        let s: RegExpMatchArray | null = navigator.userAgent.match(/;\s*([^;]+?)\s*;?\s*Build\//i); //(/;\s*([^;]+?)\s+Build\//i);
        if (s && s.length > 1) {
          SystemUtil.device_id = s[1];
        }
      } else if (SystemUtil.systemName === SystemName.HarmonyOS) {
        let s: RegExpMatchArray | null = navigator.userAgent.match(/\((?:[^;]+; )*([^;]+);\s*(HMSCore\s+[\d.]+)\)/i);
        if (s) {
          if (s.length > 2) {
            SystemUtil.device_id = s[1];
            // s[2] 是设备码
          } else if ( s.length > 1) {
            SystemUtil.device_id = s[1];  
          }
          
        }
        
      }
      
    }
    return SystemUtil.device_id;
  }

  /**
   * 判断版本是否支持
   * @param minVersionStr 最小版本号
   */
  static compareVersion (minVersionStr: string): boolean {
    SystemUtil.getSystemInfo()
    if (SystemUtil.system_version) {
      let versionArr: string[] = SystemUtil.system_version.split('.');
      let minVersionArr: string[] = minVersionStr.split('.');
      let ver1: number = 0
      let ver2: number = 0
      for (let i = 0; i < versionArr.length && i < minVersionArr.length; ++i) {
        ver1 = isNaN(parseInt(versionArr[i], 10)) ? 0 : parseInt(versionArr[i], 10)
        ver2 = isNaN(parseInt(minVersionArr[i], 10)) ? 0 : parseInt(minVersionArr[i], 10)
        if (ver1 < ver2) {
          return false;
        } else if (ver1 > ver2) {
          return true
        }
      }
      return true
    }
    return true
  }

  /**
   * 获取系统信息
   */
  static getSystemInfo ():void {
    if (!SystemUtil.system_name || !SystemUtil.system_version) {
      if (navigator && navigator.userAgent) {
        let ua: string = navigator.userAgent;
        ua = ua.toLowerCase();
        if (ua.indexOf('ipad') > -1) {
          SystemUtil.system_name = SystemName.iPad
          SystemUtil.system_version = SystemUtil.getIosSystemVersion(ua)
        } else if (ua.indexOf('iphone') > -1) {
          SystemUtil.system_name = SystemName.iPhone
          SystemUtil.system_version = SystemUtil.getIosSystemVersion(ua)
        } else if (ua.indexOf('harmonyos') > -1) {
          SystemUtil.system_name = SystemName.HarmonyOS;
          SystemUtil.system_version = '0.0';
        } else if (ua.indexOf('android') > -1) {
          SystemUtil.system_name = SystemName.Android
          SystemUtil.system_version = SystemUtil.getAndroidSystemVersion(ua)
        } else if (ua.indexOf('win') > -1) {
          if (ua.indexOf('windwos nt 10') > -1 || ua.indexOf('windows 10') > -1) {
            SystemUtil.system_name = SystemName.Windows10
            SystemUtil.system_version = '10'
          } else if (ua.indexOf('windows nt 6.1') > -1 || ua.indexOf('windows 7') > -1) {
            SystemUtil.system_name = SystemName.Windows7
            SystemUtil.system_version = '7'
          } else if (ua.indexOf('windows nt 6.0') > -1 || ua.indexOf('windows vista') > -1) {
            SystemUtil.system_name = SystemName.WindowsVista
            SystemUtil.system_version = 'vista'
          } else if (ua.indexOf('widows nt 5.1') > -1 || ua.indexOf('windows xp') > -1) {
            SystemUtil.system_name = SystemName.WindowsXP
            SystemUtil.system_version = 'xp'
          } else {
            if (BrowserUtil.isOppoBrowser) {
              SystemUtil.system_name = SystemName.Android
            } else {
              SystemUtil.system_name = SystemName.Windows
            }
            SystemUtil.system_version = '0.0'
          }
        } else if (ua.indexOf('mac') > -1) {
          if (navigator && navigator.maxTouchPoints && navigator.maxTouchPoints > 0) {
            SystemUtil.system_name = SystemName.iPad
            SystemUtil.system_version = SystemUtil.getIosSystemVersion(ua)
          } else {
            SystemUtil.system_name = SystemName.MacOS
            SystemUtil.system_version = SystemUtil.getMacSystemVersion(ua)
          }
        } else if (ua.indexOf('linux') > -1) {
          SystemUtil.system_name = SystemName.Linux
          SystemUtil.system_version = '0.0'
        } else if (ua.indexOf('cros') > -1) {
          SystemUtil.system_name = SystemName.ChromeOS
          SystemUtil.system_version = '0.0'
        } else {
          SystemUtil.system_name = SystemName.Unknown
          SystemUtil.system_version = '0.0'
        }
      } else {
        SystemUtil.system_name = SystemName.Unknown
        SystemUtil.system_version = '0.0'
      }
    }
  }

  /**
   * 获取iOS系统版本号
   */
  static getIosSystemVersion (ua: string) {
    var regStr_saf = /OS [\d._]*/gi;
    var verinfo = ua.match(regStr_saf);
    return (verinfo + "").replace(/[^0-9|_.]/ig,'').replace(/_/ig,'.');
  }

  /**
   * 获取Mac系统版本号
   */
  static getMacSystemVersion (ua: string) {
    var regStr_saf = /OS X [\d._]*/gi;
    var verinfo = ua.match(regStr_saf);
    return (verinfo + "").replace(/[^0-9|_.]/ig,'').replace(/_/ig,'.');
  }

  /**
   * 获取Android系统版本号
   */
  static getAndroidSystemVersion (ua: string) {
    return ua.substr(ua.indexOf('android') + 8, ua.indexOf(";", ua.indexOf("android")) - ua.indexOf('android') - 8);
  }
}