import { Guid } from "./util/guid";
import { BrowserUtil } from "./util/browser";
import { SystemUtil } from "./util/system";
import { LocalStorage } from "./util/localstorage";

declare global {
  interface Window {
    BrowserUtil: BrowserUtil;
    SystemUtil: SystemUtil;
    Guid: Guid;
    LocalStorage: LocalStorage;
  }
}

if (window) {
  window.BrowserUtil = BrowserUtil;
  window.SystemUtil = SystemUtil;
  window.Guid = Guid;
  window.LocalStorage = LocalStorage;
}

export { BrowserUtil, SystemUtil, Guid, LocalStorage };

