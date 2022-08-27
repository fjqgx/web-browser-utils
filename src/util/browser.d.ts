export declare class BrowserUtil {
    private static browser_name;
    private static browser_version;
    static get isBrowser(): boolean;
    /**
     * 获取网页域名
     */
    static get domain(): string;
    /**
     * 是否使用Https协议
     * @return {boolean}
     */
    static get isHttps(): boolean;
    /**
     * 是否支持屏幕共享
     * @returns {boolean}
     */
    static get isSupportScreenShare(): boolean;
    /**
     * 是否是Chrome浏览器
     */
    static get isChrome(): boolean;
    /**
     * 是否是Safari浏览器
     */
    static get isSafari(): boolean;
    /**
     * 是否是IE浏览器
     */
    static get isIE(): boolean;
    static get isFirefox(): boolean;
    /**
     * 是否是Edge
     */
    static get isEdge(): boolean;
    /**
     * 是否是Sogou
     */
    static get isSogou(): boolean;
    /**
     *  是否是Vivo浏览器
     */
    static get isVivoBroswer(): boolean;
    /**
     * 是否是Oppo浏览器
     */
    static get isOppoBrowser(): boolean;
    /**
     * 是否是小米浏览器
     */
    static get isMiBrowser(): boolean;
    /**
     * 是否是联想浏览器
     */
    static get isLenovoBrowser(): boolean;
    /**
     * 是否是遨游浏览器
     */
    static get isMaxthonBrowser(): boolean;
    /**
     * 是否是猎豹浏览器
     */
    static get isLiebaoBrowser(): boolean;
    /**
     * 是否是华为浏览器
     */
    static get isHuaweiBrowser(): boolean;
    /**
     * 是否是魅族浏览器
     */
    static get isMZBrowser(): boolean;
    /**
     * 是否是Opera浏览器
     */
    static get isOpera(): boolean;
    /**
     * 是否是微信
     */
    static get isMicroMessenger(): boolean;
    /**
     * 是否是QQ内置
     */
    static get isQQ(): boolean;
    static get isQQBrowser(): boolean;
    /**
     * 是否是X5内核
     */
    static get isX5Core(): boolean;
    static get isUCBrowser(): boolean;
    static get isQuarkBrowser(): boolean;
    static get isFingerBrowser(): boolean;
    /**
     * 是否是钉钉
     */
    static get isDingTalk(): boolean;
    static get isUnknown(): boolean;
    /**
     * 获取浏览器名称
     */
    static get browserName(): string;
    /**
     * 获取浏览器版本号
     */
    static get browserVersion(): string;
    /**
     * 获取浏览器主版本号
     */
    static get browserMainVersion(): Number;
    /**
     * 判断是否是Electron
     */
    static get isElectron(): boolean;
    static get userAgent(): string;
    /**
     * 判断版本是否支持
     * @param minVersionStr 最小版本号
     */
    static compareVersion(minVersionStr: string): boolean;
    /**
     * 获取系统信息
     */
    private static getBrowserInfo;
    private static isChromeBrowser;
    private static isSafariBrowser;
    private static updateBrowserInfo;
}
