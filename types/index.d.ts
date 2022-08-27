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

  /**
   * 获取网页域名
   */
  static get domain (): string;

  /**
   * 是否使用Https协议
   * @return {boolean}
   */
  static get isHttps (): boolean;


  static get isSupportScreenShare (): boolean;

  /**
   * 是否是Chrome浏览器
   */
  static get isChrome (): boolean;

  /**
   * 是否是Safari浏览器
   */
  static get isSafari (): boolean;

  /**
   * 是否是IE浏览器
   */
   static get isIE (): boolean

  /**
   * 是否是Firefox浏览器
   */
  static get isFirefox (): boolean;

  /**
   * 是否是UC浏览器
   */
  static get isUCBrowser (): boolean;

  /**
   * 是否是夸克浏览器
   */
   static get isQuarkBrowser (): boolean;

  /**
   * 是否是Finger浏览器
   */
  static get isFingerBrowser (): boolean;

  /**
   * 是否是Opera浏览器
   */
  static get isOpera (): boolean;

  /**
   * 是否是微信
   */
  static get isMicroMessenger (): boolean;

  /**
   * 是否是QQ内置
   */
  static get isQQ (): boolean;

  /**
   * 是否是QQ浏览器
   */
  static get isQQBrowser (): boolean

  /**
   * 是否是X5
   */
  static get isX5Core (): boolean;

  /**
   * 是否是钉钉
   */
  static get isDingTalk (): boolean;

  /**
   * 是否是Edge
   */
  static get isEdge (): boolean;

  /**
   * 是否是Sogou
   */
  static get isSogou (): boolean;

  /**
   *  是否是Vivo浏览器
   */
  static get isVivoBroswer (): boolean;

  /**
   * 是否是Oppo浏览器
   */
  static get isOppoBrowser (): boolean

  /**
   * 是否是小米浏览器
   */
  static get isMiBrowser (): boolean;

  /**
   * 是否是联想浏览器
   */
  static get isLenovoBrowser (): boolean;

  /**
   * 是否是遨游浏览器
   */
   static get isMaxthonBrowser (): boolean;

  /**
   * 是否是猎豹浏览器
   */
  static get isLiebaoBrowser (): boolean;

  /**
   * 是否是华为浏览器
   */
  static get isHuaweiBrowser (): boolean;

  /**
   * 是否是魅族浏览器
   */
  static get isMZBrowser (): boolean;

  static get isUnknown (): boolean;

  /**
   * 获取浏览器名称
   */
  static get browserName(): BrowserName;

  /**
   * 获取浏览器版本号
   */
  static get browserVersion (): string;

  /**
   * 获取浏览器主版本号，内核版本
   */
  static get browserMainVersion (): Number;

  /**
   * 判断是否是Electron
   */
  static get isElectron (): boolean;

  /**
   * 判断版本是否支持
   * @param minVersionStr 最小版本号
   */
  static compareVersion (minVersionStr: string): boolean;
}

/**
 * 系统平台
 */
export enum SystemName {
  Unknown = "Unknown",
  MacOS = "Mac",
  Windows = "Windows",
  Windows10 =  "Windows 10",
  Windows7 = "Windows 7",
  WindowsVista = "Windows vista",
  WindowsXP = "Windows xp",
  Android = "Android",
  Iphone = "iphone",
  Ipad = "ipad",
  iOS = "iOS",
  Linux = "Linux",
  ChromeOS = "ChromeOS",
}

export class SystemUtil {
  /**
   * 是否是Mac系统
   */
  static get isMacOS (): boolean;

  /**
   * 是否是windows系统
   */
  static get isWindows (): boolean;

  /*
   * 判断是否是iOS系统
   */
  static get isIos (): boolean;

  /**
   * 判断是否是Android系统
   * @returns {boolean}
   */
  static get isAndroid (): boolean;

  /**
   * 判断是否是Linux系统
   */
  static get isLinux (): boolean;

  /**
   * 获取操作系统名称
   */
  static get systemName(): SystemName;

  /**
   * 获取系统版本号
   */
  static get systemVersion (): string;

  /**
   * 获取平台
   */
  static get platform (): string;

  static get isUnknown (): boolean;

  /**
   * 判断版本是否支持
   * @param minVersionStr 最小版本号
   */
  static compareVersion (minVersionStr: string): boolean;
}

export declare class Guid {
  static create (len: number, radix?: number): string
}

export declare class LocalStorage {
  static get uuid (): string
}

export declare class ApiRequest {
  static ajaxPost(url: string, param: any): Promise<any>;
}



