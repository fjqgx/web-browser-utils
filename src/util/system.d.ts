declare enum SystemName {
    Unknown = "Unknown",
    MacOS = "Mac",
    Windows = "Windows",
    Windows10 = "Windows 10",
    Windows7 = "Windows 7",
    WindowsVista = "Windows vista",
    WindowsXP = "Windows xp",
    Android = "Android",
    Iphone = "iphone",
    Ipad = "ipad",
    iOS = "iOS",
    Linux = "Linux",
    ChromeOS = "ChromeOS"
}
/**
 * 系统工具，用于获取系统名称，版本等信息
 */
export declare class SystemUtil {
    private static system_name;
    private static system_version;
    /**
     * 是否是Mac系统
     */
    static get isMacOS(): boolean;
    /**
     * 是否是windows系统
     */
    static get isWindows(): boolean;
    static get isIos(): boolean;
    /**
     * 判断是否是Android系统
     * @returns {boolean}
     */
    static get isAndroid(): boolean;
    static get isLinux(): boolean;
    /**
     * 获取操作系统名称
     */
    static get systemName(): SystemName;
    /**
     * 获取系统版本号
     */
    static get systemVersion(): string;
    /**
     * 判断版本是否支持
     * @param minVersionStr 最小版本号
     */
    static compareVersion(minVersionStr: string): boolean;
    /**
     * 获取系统信息
     */
    static getSystemInfo(): void;
    /**
     * 获取iOS系统版本号
     */
    static getIosSystemVersion(ua: string): string;
    /**
     * 获取Mac系统版本号
     */
    static getMacSystemVersion(ua: string): string;
    /**
     * 获取Android系统版本号
     */
    static getAndroidSystemVersion(ua: string): string;
}
export {};
