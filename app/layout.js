import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: "HOS",
    template: `%s | HOS`,
  },
  description: "House of descriptions",
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Radix UI",
  ],
  authors: [
    {
      name: "Home Of Solutions",
      url: "https://hos.com",
    },
  ],
  creator: "HOS",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hos.com",
    title: "HOS",
    description: "House of descriptions",
    siteName: "HOS",
  },
  twitter: {
    card: "summary_large_image",
    title: "HOS",
    description: "House of descriptions",
    images: [`og.jpg`],
    creator: "@HOS",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  // manifest: `${siteConfig.url}/site.webmanifest`,
}

export default function RootLayout({ children }) {

  const mode = 'light'

  return (
    <html lang="en" className={`${mode}`}>
      <body className={inter.className}>
          <main className='h-screen overflow-hidden'>
            {children}
          </main>
      </body>
    </html>
  )
}
