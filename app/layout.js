import { Kanit } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'


const oswald = Kanit({
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Mediplus',
  description: 'mediplus hospital website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={oswald.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
