export const PAYMENT_PUBLISHABLE_KEY =
  process.env.REACT_APP_PAYMENT_PUBLISHABLE_KEY ||
  'pk_test_51JAZJ8FdKBoSocbs68i6MTAYiCVUDFz9Wv0BcwCzp8z1poVw6TN8ucy8XWf4hfJBCih95Mmg6ac1SuJsI38v7WIN00ZVWmeUya';

export const SHOP_PAYMENT_PUBLISHABLE_KEY =
  process.env.REACT_APP_SHOP_PAYMENT_PUBLISHABLE_KEY ||
  'pk_test_51ObrnBL3GpM44ZmcItFvrxiuWTFpi38YfZWoUBVhfrN2jrpbs6IbWVVfTJ606QoMQG2cIp0omv8Q1KQqZXxBsg0m00shh2dqlT';

export const BACS_PAYMENT_PUBLISHABLE_KEY =
  process.env.REACT_APP_BACS_PAYMENT_PUBLISHABLE_KEY ||
  'pk_test_51R3zu9RO2yNIb9WfcMVztY3Lh37bQ173yjyIjpu3btdFXpDFwEuCcILLBxim9oHqqJ9PI5mWWsD8pc4TyWzWPhXd00I5LPDvFm';

export const AMPLITUDE_API_KEY =
  process.env.REACT_APP_AMPLITUDE_API_KEY || '942e4d5d26bc46f41f1d95b65a5af0d6';

// DEV_NOTE: once proxy server is confirmed working, this will be added back in
// export const AMPLITUDE_SERVER_URL =
//   process.env.REACT_APP_AMPLITUDE_SERVER_URL ||
//   'https://events.kanda.co.uk/2/httpapi';

export const AMPLITUDE_SERVER_URL =
  process.env.REACT_APP_AMPLITUDE_SERVER_URL ||
  'https://api2.amplitude.com/2/httpapi';

export const AMPLITUDE_STORAGE_KEY =
  process.env.REACT_APP_AMPLITUDE_STORAGE_KEY || 'amplitude-kanda-ids';

export const APP_ENV = process.env.REACT_APP_ENV || 'qa';

export const RECAPTCHA_SITE_KEY =
  process.env.REACT_APP_RECAPTCHA_SITE_KEY ||
  '6Lcrc3ImAAAAAPPx3ppenG9jWLk3O5XuFRZi5Abj';
