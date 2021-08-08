import { getItem, setItem } from './storage'

describe('Storage', () => {
  test('Test getItem, setItem  of storage method', () => {
    const key = 'A',
      value = 'B'

    expect(getItem(key)).toBe(null)
    setItem(key, value)
    expect(getItem(key)).toBe(value)
    expect(getItem(key)).toBe(null)
  })
})
