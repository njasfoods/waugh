import { randomBytes } from 'crypto';

/**
 * Generates a secure random password.
 * @param {number} length - The length of the password.
 * @returns {string} - The generated password.
 */
export function generatePassword(length = 16) {
    return randomBytes(length).toString('hex').slice(0, length);
}
