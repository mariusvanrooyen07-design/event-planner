/**
 * Saves a value to localStorage under the given key.
 * @param {string} key - The localStorage key to save under.
 * @param {*} value - The data to store (will be JSON-stringified).
 */
export function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
};

/**
 * Loads and parses a value from localStorage.
 * @param {string} key - The localStorage key to read.
 * @param {*} fallback - The value to return if the key isn't found or parsing fails.
 * @returns {*} The parsed stored value, or fallback if not found/invalid.
 */
export function loadFromStorage(key, fallback) {
  try {
    const stored = localStorage.getItem(key);
    if (stored === null) {
      console.log(`User data not found in local storage!`);
      return fallback;
    } else {
      const keyParsed = JSON.parse(stored);
      return keyParsed;
    }
  } catch (error) {
      return fallback;
    }
};