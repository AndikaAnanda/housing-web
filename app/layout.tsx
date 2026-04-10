import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'


const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400','500','600','700','800'],
  variable: '--font-playfair',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300','400','500','600'],
  variable: '--font-dm',
})

export const metadata: Metadata = {
  title: 'Leonel Cluster – Cluster Hunian Premium Pekanbaru',
  description: 'Temukan rumah impian Anda di Leonel Cluster, hunian premium dengan desain modern di Pekanbaru.',
  openGraph: {
    title: 'Leonel Cluster – Cluster Hunian Premium',
    description: 'Hunian premium 4 unit eksklusif di Pekanbaru',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${playfair.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}