/**
 * Configurations related to external integrations for the web app
 */
export const HELPCRUNCH_ENVIRONMENT_KEY =
  process.env.REACT_APP_HELPCRUNCH_ENVIRONMENT_KEY ||
  'dFbbYc+Bw6xmUlAjR9q5jI894XMY3n99Zyr4rWvE+JXApCmW6ma/JmzwDTPwdoboKPl1z/ul3xeIcaP4EqzZSg==';

/**
 * Application URLs
 */
export const PRIVACY_POLICY_URL =
  process.env.REACT_APP_PRIVACY_POLICY_URL ||
  'https://www.getkanda.com/privacy-policy';

export const TERMS_AND_CONDITIONS_URL =
  process.env.REACT_APP_LEGAL_PAGE || 'https://www.getkanda.com/legal-page';

export const COOKIE_POLICY_URL =
  process.env.REACT_APP_COOKIE_POLICY_URL ||
  'https://www.getkanda.com/cookie-policy';
