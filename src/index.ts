import { BrowserUtil } from "./util/browser";
import { SystemUtil } from "./util/system";

declare global {
  interface Window {
    BrowserUtil: BrowserUtil;
    SystemUtil: SystemUtil;
  }
}

if (window) {
  window.BrowserUtil = BrowserUtil;
  window.SystemUtil = SystemUtil;
}

export { BrowserUtil, SystemUtil };

