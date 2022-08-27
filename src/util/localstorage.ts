
/**
 * LocalStorage工具
 */
export class LocalStorage {

  static get (uuidName: string): string {
    let value: string = "";
    if (window && window.localStorage) {
      let nameValue = window.localStorage.getItem(uuidName);
      if (!nameValue) {
        value = "";
      } else {
        value = nameValue;
      }
    }
    return value;
  }

  static set (uuidName: string, value: string) {
    if (uuidName && window && window.localStorage) {
      window.localStorage.setItem(uuidName, value);
    }
  }
}