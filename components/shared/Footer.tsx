"use client"

import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <Link href="/" className="footer-logo">
          DRCV
        </Link>
        <div className="footer-copyright">
          {currentYear} Desarrollado con dedicación y mucha creatividad.
        </div>
        <div className="footer-links">
          <a href="https://github.com/drcvmx" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/dante-ricardo-chavez-verdeja-501388361" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="mailto:drcv.work.code@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  )
}
