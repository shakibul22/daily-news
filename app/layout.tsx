import type { Metadata } from 'next'
import './globals.css'
import { Poppins, Inter } from 'next/font/google'

// Load Google Fonts
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Daily News',
  description: 'Stay updated with the latest news, articles, and breaking headlines from around the world.',
  generator: 'Next.js',
  keywords: ['news', 'breaking news', 'headlines', 'articles', 'world news'],
  authors: [{ name: 'Daily News Team' }],
  openGraph: {
    title: 'Daily News',
    description: 'Latest headlines, breaking news, and in-depth articles.',
    url: 'https://yournewswebsite.com',
    siteName: 'Daily News',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Daily News',
    description: 'Get the latest news updates instantly.',
    creator: '@yourtwitterhandle',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${poppins.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  )
}
