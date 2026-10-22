/// <reference types="vite/client" />

declare module '*.png' {
  const src: string;
  export default src;
}

interface Window {
  grecaptcha?: {
    ready: (callback: () => void) => void;
    execute: (siteKey: string, options: { action: string }) => Promise<string>;
  };
}
