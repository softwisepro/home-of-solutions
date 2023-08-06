import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: "MARIST BOYS SECONDARY SCHOOL",
    template: `%s | MARIST BOYS SECONDARY SCHOOL`,
  },
  description: "Marist Boys Secondary School",
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
      url: "https://MBSS.com",
    },
  ],
  creator: "MBSS",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://MBSS.com",
    title: "MBSS",
    description: "Marist Boys Secondary School",
    siteName: "MBSS",
  },
  twitter: {
    card: "summary_large_image",
    title: "MBSS",
    description: "Marist Boys Secondary School",
    images: [`og.jpg`],
    creator: "@MBSS",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  // manifest: `${siteConfig.url}/site.webmanifest`,
}

export default function RootLayout({ children }) {

  return (
    <html lang="en" id='html' >
      <body className={inter.className}>
        <main className='h-screen overflow-hidden'>
          {children}
        </main>
      </body>
    </html>
  )
}
