const clp = new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 })

/** 700000 → "$700.000" */
export function formatCLP(value: number): string {
  return clp.format(value).replace(/\s/g, '')
}

export function formatFps(min: number, max: number): string {
  return min === max ? `${min}` : `${min}–${max}`
}

const dateFmt = new Intl.DateTimeFormat('es-CL', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })
export function formatDate(iso: string): string {
  return dateFmt.format(new Date(iso))
}
