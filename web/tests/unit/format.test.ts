import { describe, expect, it } from 'vitest'
import { formatCLP, formatFps } from '@/lib/format'

describe('formato', () => {
  it('formatea pesos chilenos', () => {
    expect(formatCLP(700000)).toBe('$700.000')
    expect(formatCLP(19990)).toBe('$19.990')
  })
  it('muestra rangos de FPS', () => {
    expect(formatFps(140, 170)).toBe('140–170')
    expect(formatFps(60, 60)).toBe('60')
  })
})
