import { Inter } from 'next/font/google'
import './global.css'
import { logo_url } from './config'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: logo_url,
  title: 'Karma Street View',
  description: 'Our platform provides a unique 360° view of businesses, allowing you to virtually step inside and experience what they have to offer.',
  openGraph: {
    images: logo_url,
  },
  icon: logo_url
}

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <html lang="en">
    <head>
      <link rel="icon" href={logo_url} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
    rel="stylesheet"
  />
  <link
    rel="stylesheet"
    href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
    integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
    crossOrigin=""
  />
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/gh/Loopple/loopple-public-assets@main/motion-tailwind/css/leaflet.css"
  />
  <link rel="stylesheet" href="https://cdn.global.noobsverse.com/karma-street/theme.css" />
  <link rel="stylesheet" href="https://cdn.global.noobsverse.com/karma-street/loopple.css" />
    </head>
      <body className={inter.className}>{children}</body>
      <ToastContainer/>
    </html>
  )
}