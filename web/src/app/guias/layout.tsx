import { guides } from '@/data/guides'
import { LocalNav } from '@/components/LocalNav'

export default function GuidesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LocalNav title="Guías" titleHref="/guias" links={[{ href: '/guias', label: 'Todas' }, ...guides.map((g) => ({ href: `/guias/${g.slug}`, label: g.navLabel }))]} />
      {children}
    </>
  )
}
