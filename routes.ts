/**
 * An array of routes that are accessible to the public
 * This routes do not require authontication
 * @type {string[]}
 */

export const publicRoutes = ['/'];

/**
 * An array of routes that are for authontication
 * This routes will redirect logged in user to /settings
 * @type {string[]}
 */

export const authRoutes = ['/auth/login', '/auth/register'];

/**
 * The prefix for API authontication routes
 * Routes that start with this prefix are used for API authontication purpose
 * @type {string}
 */

export const apiAuthPrefix = '/api/auth';

/**
 * The default redirect path after login
 * @type {string}
 */

export const DEFAULT_LOGIN_REDIRECT = '/settings';
