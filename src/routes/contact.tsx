import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'

export const Route = createFileRoute('/contact')({
  component: Contact,
})

function SocialLink({
  href,
  label,
  icon,
  color,
}: {
  href: string
  label: string
  icon: React.ReactNode
  color: 'blue' | 'magenta'
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={color === 'blue' ? 'btn-neon-blue' : 'btn-neon-magenta'}
      style={{
        padding: '0.6rem 1.2rem',
        borderRadius: '3px',
        fontSize: '0.8rem',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        textDecoration: 'none',
      }}
    >
      {icon}
      {label}
    </a>
  )
}

function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  if (submitted) {
    return (
      <div
        style={{
          minHeight: '100vh',
          background: 'var(--bg-primary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
        }}
      >
        <div style={{ textAlign: 'center', maxWidth: '400px' }}>
          <CheckCircle2 size={52} style={{ color: 'var(--neon-green)', margin: '0 auto 1.5rem' }} />
          <h2
            style={{
              fontFamily: "'Noto Sans JP', sans-serif",
              fontWeight: 700,
              fontSize: '1.8rem',
              color: 'var(--text-primary)',
              marginBottom: '0.75rem',
            }}
          >
            メッセージを送信しました！
          </h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: 1.7 }}>
            お問い合わせありがとうございます。できる限り早くご返信いたします。
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="btn-neon-blue"
            style={{ padding: '0.7rem 1.8rem', borderRadius: '3px', fontSize: '0.85rem' }}
          >
            戻る
          </button>
        </div>
      </div>
    )
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'var(--bg-primary)',
        padding: '4rem 1.5rem',
      }}
    >
      <div style={{ maxWidth: '680px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '3rem' }}>
          <p className="section-label" style={{ marginBottom: '0.75rem' }}>
            // CONTACT
          </p>
          <h1
            style={{
              fontFamily: "'Noto Sans JP', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              color: 'var(--text-primary)',
              margin: 0,
            }}
          >
            お問い合わせ
          </h1>
          <p
            style={{
              color: 'var(--text-muted)',
              marginTop: '0.75rem',
              fontSize: '0.9rem',
              lineHeight: 1.7,
            }}
          >
            コラボレーション、採用のご相談、またはゲーム開発についてお気軽にご連絡ください。
          </p>
          <div className="neon-hr" />
        </div>

        {/* Social links */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.75rem',
            marginBottom: '3rem',
          }}
        >
          <SocialLink
            href="https://github.com/"
            label="GitHub"
            color="blue"
            icon={
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            }
          />
          <SocialLink
            href="https://twitter.com/"
            label="Twitter / X"
            color="blue"
            icon={
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            }
          />
          <SocialLink
            href="https://itch.io/"
            label="itch.io"
            color="magenta"
            icon={
              <svg width="15" height="15" viewBox="0 0 245.37 220.72" fill="currentColor">
                <path d="M31.99 1.365C21.287 7.72.2 31.945 0 38.298v10.516c0 13.126 12.284 24.56 23.403 24.56 13.276 0 24.44-11.165 24.44-24.291 0 13.126 10.88 24.291 24.156 24.291 13.275 0 24.156-11.165 24.156-24.291 0 13.126 11.165 24.291 24.44 24.291h.28c13.277 0 24.441-11.165 24.441-24.291 0 13.126 10.88 24.291 24.156 24.291 13.275 0 24.156-11.165 24.156-24.291 0 13.126 11.164 24.291 24.44 24.291 11.12 0 23.402-11.434 23.402-24.56V38.298c-.2-6.353-21.287-30.578-31.988-36.933C160.159-.223 84.397-.223 31.99 1.365zm75.039 146.88l-2.745 24.042s-16.273 4.04-22.752 9.275c-7.09 5.686-9.09 16.82-9.09 16.82l-.2 22.34H170.1l-.33-22.34s-2-11.134-9.09-16.82c-6.478-5.235-22.752-9.275-22.752-9.275l-2.745-24.042 30.612-5.07c0 0 4.345-26.498 4.345-34.84 0-5.47-1.93-10.78-6.03-14.6-6.79-6.325-19.23-9.17-30.965-10.26-11.735 1.09-24.175 3.935-30.965 10.26-4.1 3.82-6.03 9.13-6.03 14.6 0 8.342 4.345 34.84 4.345 34.84l30.613 5.07z" />
              </svg>
            }
          />
        </div>

        {/* Contact form */}
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={(e) => {
            e.preventDefault()
            setLoading(true)
            const form = e.currentTarget
            const formData = new FormData(form)
            fetch('/contact.html', {
              method: 'POST',
              headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
              body: new URLSearchParams(
                formData as unknown as Record<string, string>,
              ).toString(),
            })
              .then(() => {
                setSubmitted(true)
                setLoading(false)
              })
              .catch(() => setLoading(false))
          }}
          style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              入力しないでください: <input name="bot-field" />
            </label>
          </p>

          <div>
            <label
              htmlFor="name"
              style={{
                display: 'block',
                fontSize: '0.78rem',
                color: 'var(--neon-blue)',
                fontFamily: "'Share Tech Mono', monospace",
                letterSpacing: '0.08em',
                marginBottom: '0.5rem',
              }}
            >
              お名前
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="neon-input"
              style={{ width: '100%', padding: '0.65rem 0.9rem', fontSize: '0.9rem' }}
              placeholder="山田 太郎"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              style={{
                display: 'block',
                fontSize: '0.78rem',
                color: 'var(--neon-blue)',
                fontFamily: "'Share Tech Mono', monospace",
                letterSpacing: '0.08em',
                marginBottom: '0.5rem',
              }}
            >
              メールアドレス
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="neon-input"
              style={{ width: '100%', padding: '0.65rem 0.9rem', fontSize: '0.9rem' }}
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              style={{
                display: 'block',
                fontSize: '0.78rem',
                color: 'var(--neon-blue)',
                fontFamily: "'Share Tech Mono', monospace",
                letterSpacing: '0.08em',
                marginBottom: '0.5rem',
              }}
            >
              件名
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="neon-input"
              style={{ width: '100%', padding: '0.65rem 0.9rem', fontSize: '0.9rem' }}
              placeholder="コラボレーションのご相談"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              style={{
                display: 'block',
                fontSize: '0.78rem',
                color: 'var(--neon-blue)',
                fontFamily: "'Share Tech Mono', monospace",
                letterSpacing: '0.08em',
                marginBottom: '0.5rem',
              }}
            >
              メッセージ
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              className="neon-input"
              style={{ width: '100%', padding: '0.65rem 0.9rem', fontSize: '0.9rem', resize: 'vertical' }}
              placeholder="お気軽にメッセージをどうぞ..."
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn-neon-blue"
            style={{
              padding: '0.8rem 2rem',
              borderRadius: '3px',
              fontSize: '0.88rem',
              letterSpacing: '0.06em',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              alignSelf: 'flex-start',
              opacity: loading ? 0.6 : 1,
            }}
          >
            <Send size={15} />
            {loading ? '送信中...' : 'メッセージを送る'}
          </button>
        </form>
      </div>
    </div>
  )
}
