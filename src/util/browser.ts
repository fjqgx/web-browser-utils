import { SystemUtil } from "./system";

export enum BrowserName {
  IE = "IE",
  Chrome = 'Chrome',
  Safari = 'Safari',
  Firefox = 'Firefox',
  Opera = 'Opera',
  Edge = "Edge",
  MicroMessenger = 'MicroMessenger',
  X5Core = 'X5Core',
  Quark = "Quark",
  QQ = 'QQ',
  QQBrowser = 'QQBrowser',
  DingTalk  = 'DingTalk',
  Electron = 'Electron',
  Sogou = "Sogou",
  Vivo = "VivoBrowser",
  Oppo = "OppoBrowser",
  UC = "UCBrowser",
  MI = "MiBrowser",
  Huawei = 'Huawei',
  Finger = 'Finger',
  Lenovo = "SLBrowser",   // 联想浏览器
  Maxthon = "Maxthon",  // 遨游浏览器
  Liebao = "Liebao",    // 猎豹浏览器
  Meizu = "MZBrowser",
  Unknown = 'unknown',
}

export class BrowserUtil {

  private static browser_name: BrowserName = BrowserName.Unknown;
  private static browser_version: string = '';

  private static mock_useragent: string = '';

  static set mockUserAgent(userAgent: string) {
    BrowserUtil.mock_useragent = userAgent;
  }

  static get isBrowser(): boolean {
    return typeof document !== 'undefined'
  }

  /**
   * 获取网页域名
   */
  static get domain(): string {
    return window?.location?.host;
  }

  /**
   * 是否使用Https协议
   * @return {boolean}
   */
  static get isHttps(): boolean {
    return this.isBrowser && document.location && ('https:' == document.location.protocol ? true : false || document.location.host.indexOf("127.0.0.1:") === 0 || document.location.host.indexOf("localhost:") === 0);
  }

  /**
   * 是否支持屏幕共享
   * @returns {boolean}
   */
  static get isSupportScreenShare(): boolean {
    if (navigator && navigator.mediaDevices && !!navigator.mediaDevices.getDisplayMedia) {
      return true;
    }
    return false;
  }

  /**
   * 是否是Chrome浏览器
   */
  static get isChrome(): boolean {
    BrowserUtil.getBrowserInfo()
    return BrowserName.Chrome === BrowserUtil.browser_name;
  }

  /**
   * 是否是Safari浏览器
   */
  static get isSafari(): boolean {
    BrowserUtil.getBrowserInfo()
    return BrowserName.Safari === BrowserUtil.browser_name
  }

  /**
   * 是否是IE浏览器
   */
  static get isIE(): boolean {
    BrowserUtil.getBrowserInfo()
    return BrowserName.IE === BrowserUtil.browser_name
  }

  static get isFirefox(): boolean {
    BrowserUtil.getBrowserInfo()
    return BrowserName.Firefox === BrowserUtil.browser_name
  }

  /**
   * 是否是Edge
   */
  static get isEdge(): boolean {
    BrowserUtil.getBrowserInfo()
    return BrowserName.Edge === BrowserUtil.browserName
  }

  /**
   * 是否是Sogou
   */
  static get isSogou(): boolean {
    BrowserUtil.getBrowserInfo()
    return BrowserName.Sogou === BrowserUtil.browserName
  }

  /**
   *  是否是Vivo浏览器
   */
  static get isVivoBroswer(): boolean {
    BrowserUtil.getBrowserInfo()
    return BrowserName.Vivo === BrowserUtil.browserName
  }

  /**
   * 是否是Oppo浏览器
   */
  static get isOppoBrowser(): boolean {
    BrowserUtil.getBrowserInfo()
    return BrowserName.Oppo === BrowserUtil.browserName
  }

  /**
   * 是否是小米浏览器
   */
  static get isMiBrowser(): boolean {
    BrowserUtil.getBrowserInfo();
    return BrowserName.MI === BrowserUtil.browserName
  }

  /**
   * 是否是联想浏览器
   */
  static get isLenovoBrowser(): boolean {
    BrowserUtil.getBrowserInfo();
    return BrowserName.Lenovo === BrowserUtil.browserName
  }

  /**
   * 是否是遨游浏览器
   */
  static get isMaxthonBrowser(): boolean {
    BrowserUtil.getBrowserInfo();
    return BrowserName.Maxthon === BrowserUtil.browserName
  }

  /**
   * 是否是猎豹浏览器
   */
  static get isLiebaoBrowser(): boolean {
    BrowserUtil.getBrowserInfo();
    return BrowserName.Liebao === BrowserUtil.browserName
  }

  /**
   * 是否是华为浏览器
   */
  static get isHuaweiBrowser(): boolean {
    BrowserUtil.getBrowserInfo();
    return BrowserName.Huawei === BrowserUtil.browserName
  }

  /**
   * 是否是魅族浏览器
   */
  static get isMZBrowser(): boolean {
    BrowserUtil.getBrowserInfo();
    return BrowserName.Meizu === BrowserUtil.browser_name
  }

  /**
   * 是否是Opera浏览器
   */
  static get isOpera(): boolean {
    BrowserUtil.getBrowserInfo()
    return BrowserName.Opera === BrowserUtil.browser_name
  }

  /**
   * 是否是微信
   */
  static get isMicroMessenger(): boolean {
    BrowserUtil.getBrowserInfo()
    return BrowserUtil.browser_name === BrowserName.MicroMessenger
  }

  /**
   * 是否是QQ内置
   */
  static get isQQ(): boolean {
    BrowserUtil.getBrowserInfo()
    return BrowserName.QQ === BrowserUtil.browserName
  }

  static get isQQBrowser(): boolean {
    BrowserUtil.getBrowserInfo()
    return BrowserName.QQBrowser === BrowserUtil.browserName
  }

  /**
   * 是否是X5内核
   */
  static get isX5Core(): boolean {
    BrowserUtil.getBrowserInfo()
    return BrowserUtil.browser_name === BrowserName.X5Core
  }

  static get isUCBrowser(): boolean {
    BrowserUtil.getBrowserInfo()
    return BrowserUtil.browser_name === BrowserName.UC
  }

  static get isQuarkBrowser(): boolean {
    BrowserUtil.getBrowserInfo()
    return BrowserUtil.browser_name === BrowserName.Quark
  }

  static get isFingerBrowser(): boolean {
    BrowserUtil.getBrowserInfo()
    return BrowserUtil.browser_name === BrowserName.Finger
  }

  /**
   * 是否是钉钉
   */
  static get isDingTalk(): boolean {
    BrowserUtil.getBrowserInfo()
    return BrowserUtil.browser_name === BrowserName.DingTalk
  }

  static get isUnknown(): boolean {
    BrowserUtil.getBrowserInfo();
    return BrowserName.Unknown === BrowserUtil.browserName
  }

  /**
   * 获取浏览器名称
   */
  static get browserName(): string {
    BrowserUtil.getBrowserInfo()
    return BrowserUtil.browser_name
  }

  /**
   * 获取浏览器版本号
   */
  static get browserVersion(): string {
    BrowserUtil.getBrowserInfo()
    return BrowserUtil.browser_version
  }

  /**
   * 获取浏览器主版本号
   */
  static get browserMainVersion(): Number {
    BrowserUtil.getBrowserInfo();
    if (BrowserUtil.browser_version) {
      return parseInt(BrowserUtil.browser_version.split('.')[0], 10)
    }
    return 0
  }

  /**
   * 判断是否是Electron
   */
  static get isElectron(): boolean {
    BrowserUtil.getBrowserInfo()
    return BrowserName.Electron === BrowserUtil.browserName
  }

  static get userAgent(): string {
    let ua: string = navigator.userAgent.toLowerCase();//Gecko
    let index: number = ua.indexOf("gecko");
    if (index > -1) {
      index = ua.indexOf(" ", index);
      ua = ua.substring(index + 1, ua.length);
      let arr: string[] = ua.split(" ");
      ua = "";
      for (let i = 0; i < arr.length; ++i) {
        let itemArr: string[] = arr[i].split('/');
        if (itemArr && itemArr.length) {
          ua += (itemArr[0] + " ");
        }
      }
    }

    return ua
  }

  /**
   * 判断版本是否支持
   * @param minVersionStr 最小版本号
   */
  static compareVersion(minVersionStr: string): boolean {
    BrowserUtil.getBrowserInfo()
    if (BrowserUtil.browser_version) {
      let versionArr: string[] = BrowserUtil.browser_version.split('.');
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
  private static getBrowserInfo(): void {
    if (!BrowserUtil.browser_name || !BrowserUtil.browser_version) {
      let ua: string = '';
      if (BrowserUtil.mock_useragent) {
        ua = BrowserUtil.mock_useragent.toLocaleLowerCase();
      } else {
        ua = navigator?.userAgent.toLocaleLowerCase();
      }
      
      
      let s: RegExpMatchArray | null;
      (s = ua.match(/edg[e|a]?\/([\d.]+)/)) ? BrowserUtil.updateBrowserInfo(BrowserName.Edge, ua, s[1]) :
        (s = ua.match(/edgios\/([\d.]+)/)) ? BrowserUtil.updateBrowserInfo(BrowserName.Edge, ua, s[1]) :
          (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? BrowserUtil.updateBrowserInfo(BrowserName.IE, ua, s[1]) :
            (s = ua.match(/msie ([\d.]+)/)) ? BrowserUtil.updateBrowserInfo(BrowserName.IE, ua, s[1]) :
              (s = ua.match(/vivobrowser\/([\d.]+)/)) ? BrowserUtil.updateBrowserInfo(BrowserName.Vivo, ua, s[1]) :
                (s = ua.match(/miuibrowser\/([\d.]+)/)) ? BrowserUtil.updateBrowserInfo(BrowserName.MI, ua, s[1]) :
                  (s = ua.match(/heytapbrowser\/([\d.]+)/)) ? BrowserUtil.updateBrowserInfo(BrowserName.Oppo, ua, s[1]) :
                    (s = ua.match(/mzbrowser\/([\d.]+)/)) ? BrowserUtil.updateBrowserInfo(BrowserName.Meizu, ua, s[1]) :
                      (s = ua.match(/ucbrowser\/([\d.]+)/)) ? BrowserUtil.updateBrowserInfo(BrowserName.UC, ua, s[1]) :
                        (s = ua.match(/quark\/([\d.]+)/)) ? BrowserUtil.updateBrowserInfo(BrowserName.Quark, ua, s[1]) :
                          (s = ua.match(/slbrowser\/([\d.]+)/)) ? BrowserUtil.updateBrowserInfo(BrowserName.Lenovo, ua, s[1]) :
                            (s = ua.match(/lbbrowser\/([\d.]+)/)) ? BrowserUtil.updateBrowserInfo(BrowserName.Liebao, ua, s[1]) :
                              (s = ua.match(/fingerbrowser\/([\d.]+)/)) ? BrowserUtil.updateBrowserInfo(BrowserName.Finger, ua, s[1]) :
                                (s = ua.match(/huaweibrowser\/([\d.]+)/)) ? BrowserUtil.updateBrowserInfo(BrowserName.Huawei, ua, s[1]) :
                                  (s = ua.match(/maxthon\/([\d.]+)/)) ? BrowserUtil.updateBrowserInfo(BrowserName.Maxthon, ua, s[1]) :
                                    (s = ua.match(/firefox\/([\d.]+)/)) ? BrowserUtil.updateBrowserInfo(BrowserName.Firefox, ua, s[1]) :
                                      (s = ua.match(/electron\/([\d.]+)/)) ? BrowserUtil.updateBrowserInfo(BrowserName.Electron, ua, s[1]) :
                                        (s = ua.match(/chrome\/([\d.]+)/)) && this.isChromeBrowser(ua) ? BrowserUtil.updateBrowserInfo(BrowserName.Chrome, ua, s[1]) :
                                          (s = ua.match(/crios\/([\d.]+)/)) && this.isChromeBrowser(ua) ? BrowserUtil.updateBrowserInfo(BrowserName.Chrome, ua, s[1]) : // ios平台下chrome用的crios
                                            (s = ua.match(/metasr\s([\d.]+)/)) ? BrowserUtil.updateBrowserInfo(BrowserName.Sogou, ua, s[1]) : // windows平台下搜狗浏览器
                                              (s = ua.match(/sogoumobilebrowser\/([\d.]+)/)) ? BrowserUtil.updateBrowserInfo(BrowserName.Sogou, ua, s[1]) : // 移动端搜狗浏览器
                                                (s = ua.match(/opr.([\d.]+)/)) ? BrowserUtil.updateBrowserInfo(BrowserName.Opera, ua, s[1]) :
                                                  (s = ua.match(/micromessenger.([\d.]+)/)) ? BrowserUtil.updateBrowserInfo(BrowserName.MicroMessenger, ua, s[1]) :
                                                    (s = ua.match(/qq\/([\d.]+)/)) ? BrowserUtil.updateBrowserInfo(BrowserName.QQ, ua, s[1]) :  // 先检测 qq 可能部分android旧版qq内置也包含mqqbrowser
                                                      (s = ua.match(/m?qqbrowser\/([\d.]+)/)) ? BrowserUtil.updateBrowserInfo(BrowserName.QQBrowser, ua, s[1]) : // mqqbrowser 或 qqbrowser
                                                        (s = ua.match(/qqbrowserlite\/([\d.]+)/)) ? BrowserUtil.updateBrowserInfo(BrowserName.QQBrowser, ua, s[1]) : // mac平台下qq浏览器用的qqbrowserlite
                                                          (s = ua.match(/dingtalk.([\d.]+)/)) ? BrowserUtil.updateBrowserInfo(BrowserName.DingTalk, ua, s[1]) :
                                                            (s = ua.match(/tbs\/([\d.]+)/)) ? BrowserUtil.updateBrowserInfo(BrowserName.X5Core, ua, s[1]) :
                                                              (s = ua.match(/version\/([\d.]+).*safari/)) && this.isSafariBrowser(ua) ? BrowserUtil.updateBrowserInfo(BrowserName.Safari, ua, s[1]) : 0
    }
  }

  private static isChromeBrowser(ua: string) {
    let ualist = ua.split(/\(|\)/)
    if (ualist.length === 5) {
      let extensions = ualist[4].trim().split(" ")
      if (extensions.length === 2) {
        // pc
        if (extensions[0].indexOf('chrome') > -1 && extensions[1].indexOf('safari') > -1) {
          return true
        }
      } else if (extensions.length === 3) {
        // mobile
        if (extensions[1].indexOf('mobile') > -1 && extensions[2].indexOf('safari') > -1) {
          // android和ios
          if (extensions[0].indexOf('chrome') > -1 || extensions[0].indexOf('crios') > -1) {
            return true
          }
        }
      } else if (ua.indexOf('qianniu') > -1) {  // 千牛应用
        return true;
      }
    } else if (ua.indexOf("dingtalk") > -1) {
      return true;
    }

    return false
  }

  private static isSafariBrowser(ua: string) {
    let ualist = ua.split(/\(|\)/)
    if (ualist.length === 5) {
      let extensions = ualist[4].trim().split(" ")
      if (extensions.length === 2) {
        // mac
        if (extensions[0].indexOf('version') > -1 && extensions[1].indexOf('safari') > -1) {
          return true
        }
      } else if (extensions.length === 3) {
        // ios
        if (extensions[0].indexOf('version') > -1 && extensions[1].indexOf('mobile') > -1 && extensions[2].indexOf('safari') > -1) {
          return true
        }
      }
    }
    return false
  }

  private static updateBrowserInfo(brwoserType: BrowserName, ua: string, browserVersion: string): void {
    BrowserUtil.browser_name = brwoserType;

    let s: RegExpMatchArray | null = null;
    switch (brwoserType) {

      case BrowserName.QQBrowser:
        if (SystemUtil.isIos || SystemUtil.isMacOS) {
          s = ua.match(/version\/([\d.]+).*safari/)
          BrowserUtil.browser_version = s ? s[1] : '0.0'
        } else {
          s = ua.match(/chrome\/([\d.]+)/);
          BrowserUtil.browser_version = s ? s[1] : '0.0'
        }
        break;

      case BrowserName.Vivo:
      case BrowserName.Oppo:
      case BrowserName.Meizu:
      case BrowserName.Huawei:
      case BrowserName.Sogou:
        s = ua.match(/chrome\/([\d.]+)/);
        BrowserUtil.browser_version = s ? s[1] : '0.0'
        break;

      default:
        BrowserUtil.browser_version = browserVersion;
        break;
    }
  }
}