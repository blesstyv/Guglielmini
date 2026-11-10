import { services } from '@/data/services'
import { LocalNav } from '@/components/LocalNav'

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LocalNav
        title="Servicios"
        titleHref="/services"
        links={[{ href: '/services', label: 'Todos' }, ...services.map((s) => ({ href: `/services/${s.id}`, label: s.title }))]}
      />
      {children}
    </>
  )
}
