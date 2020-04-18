const cn = require('./index')

describe('compose className string', () => {
  it('should be defined', () => {
    expect(typeof cn).toBe('function')
  })

  it('should compose a string from valid input', () => {
    expect(cn('apa', 'monkey', 'boy')).toBe('apa monkey boy')
  })

  it('should compose with nulls and undefined', () => {
    expect(cn('apa', null, 'boy')).toBe('apa boy')
    expect(cn('apa', undefined, 'boy')).toBe('apa boy')
  })

  it('should handle arrays', () => {
    expect(cn('apa', ['monkey', 'boy'], 'boy')).toBe('apa monkey boy boy')
    expect(cn('apa', ['monkey', null, 'boy'], 'boy')).toBe('apa monkey boy boy')
    expect(cn('apa', ['monkey', null, 'boy', undefined], null, 'boy')).toBe('apa monkey boy boy')
    expect(cn('apa', ['monkey', null, 'boy', undefined, ['monkey', 'boy']], null, 'boy')).toBe('apa monkey boy monkey boy boy')
  })
})