
let originUserAgent: string = navigator.userAgent;

export function mockUserAgent (userAgent: string): void {
  Object.defineProperty(navigator, 'userAgent', {
    value: userAgent,
    writable: true
  });
}

export function unmockUserAgent (): void {
  Object.defineProperty(navigator, 'userAgent', {
    value: originUserAgent,
    writable: true
  });
}

