import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-hmac' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

const Hmac = NativeModules.Hmac
  ? NativeModules.Hmac
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

/**
 * @param message The message to hash.
 * @param key The secret key.
 * @return The HMAC (encoded in hex).
 *
 * @example const result = hmacMD5(message, key);
 */
export const hmacMD5 = async (message: string, key: string) =>
  Hmac.hmacMD5(message, key);

/**
 * @param message The message to hash.
 * @param key The secret key.
 * @return The HMAC (encoded in hex).
 *
 * @example const result = hmacSHA1(message, key);
 */
export const hmacSHA1 = async (message: string, key: string) =>
  Hmac.hmacSHA1(message, key);

/**
 * @param message The message to hash.
 * @param key The secret key.
 * @return The HMAC (encoded in hex).
 *
 * @example const result = hmacSHA256(message, key);
 */
export const hmacSHA256 = async (message: string, key: string) =>
  Hmac.hmacSHA256(message, key);
