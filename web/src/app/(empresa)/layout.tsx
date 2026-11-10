import { LocalNav } from '@/components/LocalNav'

export default function CompanyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LocalNav
        title="GUGLIELMINI"
        links={[
          { href: '/about', label: 'Nosotros' },
          { href: '/contact', label: 'Contacto' },
        ]}
      />
      {children}
    </>
  )
}
