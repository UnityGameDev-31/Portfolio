import { Link } from '@tanstack/react-router'
import { useState } from 'react'

const NAV_LINKS = [
  { to: '/', label: 'ホーム' },
  { to: '/about', label: '自己紹介' },
  { to: '/gallery', label: 'ギャラリー' },
  { to: '/projects', label: 'プロジェクト' },
  /*{ to: '/contact', label: 'お問い合わせ' },*/
] as const

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header
        className="glass fixed top-0 left-0 right-0 z-50 h-14"
        style={{ zIndex: 9997 }}
      >
        <div className="max-w-6xl mx-auto px-4 h-full flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group" onClick={() => setOpen(false)}>
            <span
              className="font-mono text-sm"
              style={{
                color: 'var(--neon-blue)',
                textShadow: '0 0 10px rgba(0,240,255,0.5)',
                fontFamily: "'Share Tech Mono', monospace",
                letterSpacing: '0.08em',
              }}
            >
              平山ゆうき
            </span>
            <span
              className="cursor-blink"
              style={{ color: 'var(--neon-blue)', fontSize: '0.9rem' }}
            >
              _
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="nav-link"
                activeProps={{ 'aria-current': 'page' } as Record<string, string>}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setOpen(!open)}
            aria-label="メニュー"
            style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: 'block',
                  width: '22px',
                  height: '1.5px',
                  background: open
                    ? i === 1
                      ? 'transparent'
                      : 'var(--neon-blue)'
                    : 'var(--neon-blue)',
                  boxShadow: '0 0 6px rgba(0,240,255,0.6)',
                  transition: 'all 0.3s ease',
                  transform:
                    open
                      ? i === 0
                        ? 'rotate(45deg) translate(4px, 4px)'
                        : i === 2
                          ? 'rotate(-45deg) translate(4px, -4px)'
                          : 'none'
                      : 'none',
                }}
              />
            ))}
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`mobile-overlay ${open ? 'open' : ''}`}
        onClick={() => setOpen(false)}
      />

      {/* Mobile menu */}
      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        <nav className="flex flex-col gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="nav-link text-lg"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="neon-hr mt-8" />
        <p
          className="section-label mt-4"
          style={{ fontSize: '0.65rem' }}
        >
          Unity Game Developer
        </p>
      </div>
    </>
  )
}
