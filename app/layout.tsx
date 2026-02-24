import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Portafolio-drcv",
  description:
    "Portafolio de desarrollador full-stack especializado en React, Next.js y arquitecturas backend. Creando soluciones digitales modernas y escalables.",
  generator: "DRCV",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
