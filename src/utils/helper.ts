/**
 * Generates a random ID consisting of alphanumeric characters.
 * @param length The length of the generated ID (default is 3 characters).
 * @returns A random ID string.
 */
export function getRandomId(length = 3) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomId = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomId += characters.charAt(randomIndex);
    }

    return randomId;
}
