import { defineConfig, devices } from '@playwright/test'

/**
 * E2E contra el build de producción. Usa un número de WhatsApp ficticio sólo para pruebas.
 * Si el navegador de Playwright no puede descargarse, define CHROME_PATH con un Chrome local.
 */
const executablePath = process.env.CHROME_PATH
const PORT = 3200

export default defineConfig({
  testDir: 'tests/e2e',
  fullyParallel: true,
  retries: process.env.CI ? 1 : 0,
  reporter: [['list']],
  use: {
    baseURL: `http://localhost:${PORT}`,
    launchOptions: executablePath ? { executablePath } : undefined,
  },
  projects: [
    { name: 'desktop', use: { ...devices['Desktop Chrome'] } },
    { name: 'mobile', use: { ...devices['Pixel 7'] } },
  ],
  webServer: {
    command: `npm run build && npx next start -p ${PORT}`,
    url: `http://localhost:${PORT}`,
    timeout: 180_000,
    reuseExistingServer: !process.env.CI,
    env: { NEXT_PUBLIC_WHATSAPP_NUMBER: '56900000000' },
  },
})
