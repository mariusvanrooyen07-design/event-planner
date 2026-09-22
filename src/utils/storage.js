export function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
};

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