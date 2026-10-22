/// <reference types="vite/client" />

declare module '*.png' {
  const src: string;
  export default src;
}

interface Window {
  grecaptcha?: {
    ready: (callback: () => void) => void;
    render: (
      container: string | HTMLElement,
      parameters: {
        sitekey: string;
        theme?: 'light' | 'dark';
        size?: 'normal' | 'compact';
        tabindex?: number;
        callback?: (token: string) => void;
        'expired-callback'?: () => void;
        'error-callback'?: () => void;
      }
    ) => number;
    reset: (opt_widget_id?: number) => void;
    getResponse: (opt_widget_id?: number) => string;
  };
}
