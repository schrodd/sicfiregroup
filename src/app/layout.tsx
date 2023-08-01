import './globals.css'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SIC Fire | Servicio integral contra incendios',
  description: 'Poveemos servicios de ingeniería contra incendios, con profesionales y técnicos con alta experiencia y notablemente calificados en el área de protección contra incendios y seguridad humana.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
