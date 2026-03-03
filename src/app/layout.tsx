import "@fontsource/red-hat-text/400.css"
import "@fontsource/red-hat-text/600.css"
import "@fontsource/red-hat-text/700.css"
import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}