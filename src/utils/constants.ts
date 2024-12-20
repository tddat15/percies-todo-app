/**
 * Second in miliseconds. Value = 1000 ms
 */
export const SECOND = 1000;

/**
 * Minute in miliseconds. Value = 60000 ms
 */
export const MINUTE = 60 * SECOND;

/**
 * Hour in miliseconds. Value = 3600000 ms
 */
export const HOUR = 60 * MINUTE;

/**
 * A day in miliseconds. Value = 86400000 ms
 */
export const ONE_DAY = 24 * HOUR;

/**
 * Maintenance message: The server is under maintenance, please visit again few minutes later.
 */
export const SERVICE_UNAVAILABLE_MESSAGE =
  'The server is under maintenance, please visit again few minutes later.';

/**
 * Access token
 */
export const ACCESS_TOKEN = 'access_token';

/**
 * Access token
 */
export const ACCESS_TOKEN_EXPIRED_TIME = 'access_token_expired_time';

/**
 * ID token
 */
export const ID_TOKEN = 'id_token';

/**
 * Refresh token
 */
export const REFRESH_TOKEN = 'refresh_token';

/**
 * Refresh token
 */
export const REFRESH_TOKEN_EXPIRED_TIME = 'refresh_token_expired_time';

/**
 * It keeps the last timestamp of renew token
 */
export const TOKEN_IAT = 'token_iat';

/**
 * UUID Parttern
 */
export const UUID_PARTTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
