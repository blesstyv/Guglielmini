import { AxeBuilder } from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

const routes = ['/', '/pcs', '/pcs/pc-001-ryzen-5-5600g', '/pcs/pc-001-ryzen-5-5600g/especificaciones', '/pcs/pc-001-ryzen-5-5600g/rendimiento', '/services', '/services/armado', '/proceso-armado', '/about', '/contact', '/cart', '/guias', '/guias/como-probamos-un-pc', '/no-existe']

for (const route of routes) {
  test(`axe WCAG 2.2 AA sin violaciones: ${route}`, async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' })
    await page.goto(route)
    const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa']).analyze()
    expect(results.violations.map((v) => `${v.id}: ${v.nodes.map((n) => n.target.join(' ')).join(', ')}`)).toEqual([])
  })
}

test('se puede llegar al contenido con el teclado (skip link)', async ({ page }) => {
  await page.goto('/')
  await page.keyboard.press('Tab')
  await expect(page.getByRole('link', { name: 'Saltar al contenido' })).toBeFocused()
})
