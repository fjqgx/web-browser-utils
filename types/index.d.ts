export const enum BrowserName {
  IE = 'IE',
  Chrome = 'Chrome',
  Safari = 'Safari',
  Firefox = 'Firefox',
  Opera = 'Opera',
  Edge = 'Edge',
  MicroMessenger = 'MicroMessenger',
  Tmall = 'Tmall',
  Taobao = 'Taobao',
  AliApp = 'AliApp',
  X5Core = 'X5Core',
  Quark = 'Quark',
  QQ = 'QQ',
  QQBrowser = 'QQBrowser',
  DingTalk  = 'DingTalk',
  Electron = 'Electron',
  Sogou = 'Sogou',
  Vivo = 'VivoBrowser',
  Oppo = 'OppoBrowser',
  UC = 'UCBrowser',
  MI = 'MiBrowser',
  Huawei = 'Huawei',
  Finger = 'FingerBrowser',
  Lenovo = 'SLBrowser',   // 联想浏览器
  Maxthon = 'Maxthon',  // 遨游浏览器
  Liebao = 'Liebao',    // 猎豹浏览器
  Meizu = 'MZBrowser',
  Weibo = 'Weibo',
  ByteDance = 'ByteDance',
  Unknown = 'unknown',
}

export class BrowserUtil {

  /**
   * 获取网页域名
   */
  static readonly domain: string;

  /**
   * 是否使用Https协议
   */
  static readonly isHttps: boolean;

  /**
   * 是否支持屏幕共享
   */
  static readonly isSupportScreenShare: boolean;

  /**
   * 是否是Chrome浏览器
   */
  static readonly isChrome: boolean;

  /**
   * 是否是Safari浏览器
   */
  static readonly isSafari: boolean;

  /**
   * 是否是IE浏览器
   */
   static readonly isIE: boolean

  /**
   * 是否是Firefox浏览器
   */
  static readonly isFirefox: boolean;

  /**
   * 是否是UC浏览器
   */
  static readonly isUCBrowser: boolean;

  /**
   * 是否是夸克浏览器
   */
   static readonly isQuarkBrowser: boolean;

  /**
   * 是否是Finger浏览器
   */
  static readonly isFingerBrowser: boolean;

  /**
   * 是否是Opera浏览器
   */
  static readonly isOpera: boolean;

  /**
   * 是否是微信
   */
  static readonly isMicroMessenger: boolean;

  /**
   * 是否是QQ内置
   */
  static readonly isQQ: boolean;

  /**
   * 是否是QQ浏览器
   */
  static readonly isQQBrowser: boolean

  /**
   * 是否是X5
   */
  static readonly isX5Core: boolean;

  /**
   * 是否是钉钉
   */
  static readonly isDingTalk: boolean;

  /**
   * 是否是Edge
   */
  static readonly isEdge: boolean;

  /**
   * 是否是Sogou
   */
  static readonly isSogou: boolean;

  /**
   *  是否是Vivo浏览器
   */
  static readonly isVivoBroswer: boolean;

  /**
   * 是否是Oppo浏览器
   */
  static readonly isOppoBrowser: boolean

  /**
   * 是否是小米浏览器
   */
  static readonly isMiBrowser: boolean;

  /**
   * 是否是联想浏览器
   */
  static readonly isLenovoBrowser: boolean;

  /**
   * 是否是遨游浏览器
   */
   static readonly isMaxthonBrowser: boolean;

  /**
   * 是否是猎豹浏览器
   */
  static readonly isLiebaoBrowser: boolean;

  /**
   * 是否是华为浏览器
   */
  static readonly isHuaweiBrowser: boolean;

  /**
   * 是否是魅族浏览器
   */
  static readonly isMZBrowser: boolean;

  static readonly isUnknown: boolean;

  /**
   * 获取浏览器名称
   */
  static readonly browserName: BrowserName;

  /**
   * 获取浏览器版本号
   */
  static readonly browserVersion: string;

  /**
   * 获取浏览器主版本号，内核版本
   */
  static readonly browserMainVersion: Number;

  /**
   * 判断是否是Electron
   */
  static readonly isElectron: boolean;
}

/**
 * 系统平台
 */
export const enum SystemName {
  Unknown = 'Unknown',
  MacOS = 'Mac',
  Windows = 'Windows',
  Android = 'Android',
  iPhone = 'iPhone',
  iPad = 'iPad',
  iOS = 'iOS',
  Linux = 'Linux',
  ChromeOS = 'ChromeOS',
}

export class SystemUtil {
  /**
   * 是否是Mac系统
   */
  static readonly isMacOS: boolean;

  /**
   * 是否是windows系统
   */
  static readonly isWindows: boolean;

  /*
   * 判断是否是iOS系统
   */
  static readonly isIos: boolean;

  /**
   * 判断是否是Android系统
   */
  static readonly isAndroid: boolean;

  /**
   * 判断是否是Linux系统
   */
  static readonly isLinux: boolean;

  /**
   * 获取操作系统名称
   */
  static readonly systemName: SystemName;

  /**
   * 获取系统版本号
   */
  static readonly systemVersion: string;

  /**
   * 获取平台
   */
  static readonly platform: string;

  static readonly isUnknown: boolean;

  static readonly deviceType: string;
}

