import { Inter } from 'next/font/google'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const inter = Inter({ subsets: ['latin'] })

export default function Layout({
    children, og, title, description
  }: {
    children: React.ReactNode, og?: string, title?: string, description?: string
  }) {
  return (
    <html lang="en">
    <head>
      <link rel="icon" href="https://noobsverse-internal.s3.ap-south-1.amazonaws.com/assets/karma-street-view-removebg-preview.png" />
      <title>{title ? `${title} | Karma Street View` : 'Karma Street View'}</title>
      <meta
            property="og:image"
            content={
              og ? og : "https://noobsverse-internal.s3.ap-south-1.amazonaws.com/assets/karma-street-view-removebg-preview.png"
            }
          />
      <meta name="description" content={description ? description : 'Our platform provides a unique 360° view of businesses, allowing you to virtually step inside and experience what they have to offer.'} />
    </head>
      <body className={inter.className}>{children}</body>
      <ToastContainer/>
    </html>
  )
}