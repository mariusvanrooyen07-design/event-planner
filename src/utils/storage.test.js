import { describe, test, expect, beforeEach } from 'vitest';
import { saveToStorage, loadFromStorage } from './storage.js'

describe('storage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('returns the fallback value when no data is stored', () => {
    const result = loadFromStorage('some-key', 'fallback-value');
    expect(result).toBe('fallback-value');
  });
  test('saves and loads a value correctly', () => {
    saveToStorage('some-key', { a: 1 });
    const result = loadFromStorage('some-key', null);
    expect(result).toEqual({ a: 1 });
  });
  test('returns the fallback value when the stored data is corrupted', () => {
    localStorage.setItem('bad-key', 'not valid json{{{');
    const result = loadFromStorage('bad-key', 'fallback-value');
    expect(result).toBe('fallback-value');
  });
})