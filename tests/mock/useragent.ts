/**
 * mock不同的浏览器的userAgent
 */


/**
 * Mac端浏览器
 */
export enum Mac_Browser {
  Chrome_104 = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36',

  Chrome_114 = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',

  Safari_15_7 = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.6 Safari/605.1.15',

  QQ_Brwoser_4_5_123 = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_16_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.81 Safari/537.36 QQBrowser/4.5.123.400',

  Edge_105_0_1343_27 = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36 Edg/105.0.1343.27',

  Safari_15_6 = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.6.1 Safari/605.1.15'
}

/**
 * iOS端浏览器
 */
export enum IOS_Browser {
  // iOS Safari
  Safari_12_1_2 = 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_4_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.2 Mobile/15E148 Safari/604.1',

  // iOS 微博
  Weibo_15_6 = 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Weibo (iPhone8,2__weibo__12.11.0__iphone__os15.6)',

  // iOS 抖音
  Douyin_15_6 = 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 aweme_22.9.0 Region/CN AppTheme/light NetType/WIFI JsSdk/2.0 Channel/App ByteLocale/zh ByteFullLocale/zh-Hans-CN BulletTag/BA025AF2-780B-4489-8B0E-94C3460B68C7 WKWebView/1 Bullet/1 aweme/22.9.0 BytedanceWebview/d8a21c6 FalconTag/D27677C2-5464-44FF-8577-289778874A3D',

  // iOS 微信
  MicroMessage_15_7_3 = 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_7_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.32(0x18002034) NetType/WIFI Language/zh_CN',

  // iOS 天猫
  Tmall = 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_7_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/19H332 AliApp(TM/13.6.0.3090) WindVane/8.7.2 T-UA=iPhone_13.6.0.3090_1242x2208_201200 TMIOS/201200@tmall_iphone_13.6.0.3090 UT4Aplus/0.0.6 1242x2208 Winding(WV_1) WK',

  // iOS 淘宝
  Taobao = 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_7_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/19H332 AliApp(TB/10.23.20) WindVane/8.7.2 UT4Aplus/0.0.4 1242x2208 Winding(WV_1) WK',
}

export enum IPad_Browser {
  Safari = 'Mozilla/5.0 (iPad; CPU OS 11_0 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) Version/11.0 Mobile/15A5341f Safari/604.1',
}

/**
 * android端浏览器
 */
export enum Android_Browser {
  Huawei_83_0_4103_106 = 'Mozilla/5.0 (Linux; Android 10; CLT-AL01; HMSCore 3.0.3.303; GMSCore 20.15.16) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.106 HuaweiBrowser/11.0.7.303 Mobile Safari/537.36',
  Huawei_Weibo = 'Mozilla/5.0 (Linux; Android 10; BAH3-W59 Build/HUAWEIBAH3-W59; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/88.0.4324.93 Safari/537.36 Weibo (HUAWEI-BAH3-W59__weibo__12.11.0__android__android10)',
  Huawei_Douyin = 'Mozilla/5.0 (Linux; Android 10; BAH3-W59 Build/HUAWEIBAH3-W59; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/75.0.3770.156 Mobile Safari/537.36 aweme_220900 JsSdk/1.0 NetType/WIFI Channel/huawei_1128_64 AppName/aweme app_version/22.9.0 ByteLocale/zh-Hans-CN Region/CN AppSkin/white AppTheme/light BytedanceWebview/d8a21c6 TTWebView/0751130041403',

  Samsung_S8_Chrome = 'Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36',
  Samsun_s20_Chrome = 'Mozilla/5.0 (Linux; Android 10; SM-G981B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.162 Mobile Safari/537.36',

  Samsung_GalaxyFold_Chrome = 'Mozilla/5.0 (Linux; Android 9.0; SAMSUNG SM-F900U Build/PPR1.180610.011) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Mobile Safari/537.36',

  Samsung_Galaxy_A51_Chrome = 'Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36',

  Tmall = 'Mozilla/5.0 (Linux; U; Android 10; zh-CN; BAH3-W59 Build/HUAWEIBAH3-W59) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/69.0.3497.100 UWS/3.22.1.229 Mobile Safari/537.36 AliApp(TM/13.10.0) UCBS/2.11.1.1 TTID/227200@tmall_android_13.10.0 WindVane/8.5.0 T-UA=android_13.10.0_1200x2000_227200 TMANDROID/227200@tmall_android_13.10.0,UT4Aplus/0.2.29',

  Taobao = 'Mozilla/5.0 (Linux; U; Android 10; zh-CN; BAH3-W59 Build/HUAWEIBAH3-W59) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/69.0.3497.100 UWS/3.22.1.248 Mobile Safari/537.36 AliApp(TB/10.22.20) UCBS/2.11.1.1 TTID/227200@taobao_android_10.22.20 WindVane/8.5.0 1200X2000 UT4Aplus/0.2.29',
}

/**
 * Windows端浏览器
 */
export enum Windows_Brwoser {
  Chrome_67_0_3396_99 = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36',
}