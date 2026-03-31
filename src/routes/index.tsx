import { createFileRoute, Link } from '@tanstack/react-router'
import { ParticleCanvas } from '@/components/ParticleCanvas'
import { useEffect, useState } from 'react'

export const Route = createFileRoute('/')({
  component: Hero,
})

function TypingText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayed, setDisplayed] = useState('')
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), delay)
    return () => clearTimeout(t)
  }, [delay])

  useEffect(() => {
    if (!started) return
    let i = 0
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1))
      i++
      if (i >= text.length) clearInterval(interval)
    }, 45)
    return () => clearInterval(interval)
  }, [started, text])

  return (
    <span>
      {displayed}
      {displayed.length < text.length && (
        <span className="cursor-blink" style={{ color: 'var(--neon-blue)' }}>▋</span>
      )}
    </span>
  )
}

function Hero() {
  return (
    <div
      style={{
        position: 'relative',
        minHeight: 'calc(100vh - 3.5rem)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <ParticleCanvas />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          padding: '2rem 1.5rem',
          maxWidth: '820px',
          width: '100%',
        }}
      >
        {/* Label */}
        <p
          className="section-label fade-in-up fade-in-up-delay-1"
          style={{ marginBottom: '1.5rem' }}
        >
          Unity Game Developer
        </p>

        {/* Main name — glitch */}
        <h1
          className="glitch-text"
          data-text="平山ゆうき"
          style={{
            fontFamily: "'Noto Sans JP', sans-serif",
            fontWeight: 900,
            fontSize: 'clamp(3rem, 10vw, 6.5rem)',
            lineHeight: 1.1,
            color: 'var(--text-primary)',
            marginBottom: '1.5rem',
            letterSpacing: '-0.01em',
            display: 'inline-block',
          }}
        >
          平山ゆうき
        </h1>

        {/* Tagline */}
        <p
          className="fade-in-up fade-in-up-delay-2"
          style={{
            fontFamily: "'Share Tech Mono', monospace",
            fontSize: 'clamp(0.7rem, 2.2vw, 0.95rem)',
            color: 'var(--neon-blue)',
            textShadow: '0 0 12px rgba(0,240,255,0.4)',
            marginBottom: '2rem',
            letterSpacing: '0.04em',
          }}
        >
          「Unityゲーム開発者 | C# &amp; カスタムシェーダーエキスパート」
        </p>

        {/* Typing text */}
        <div
          className="fade-in-up fade-in-up-delay-3"
          style={{
            fontFamily: "'Share Tech Mono', monospace",
            fontSize: '0.8rem',
            color: 'var(--text-muted)',
            marginBottom: '3rem',
            minHeight: '1.4rem',
          }}
        >
          <TypingText text="> ゲームの世界を、コードとシェーダーで創り出す。" delay={600} />
        </div>

        {/* CTA buttons */}
        <div
          className="fade-in-up fade-in-up-delay-4"
          style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <Link
            to="/projects"
            className="btn-neon-blue"
            style={{
              padding: '0.7rem 1.8rem',
              borderRadius: '3px',
              fontSize: '0.83rem',
              letterSpacing: '0.06em',
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            プロジェクトを見る
          </Link>
          <Link
            to="/contact"
            className="btn-neon-magenta"
            style={{
              padding: '0.7rem 1.8rem',
              borderRadius: '3px',
              fontSize: '0.83rem',
              letterSpacing: '0.06em',
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            お問い合わせ
          </Link>
        </div>

        {/* Stats */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 'clamp(1.5rem, 5vw, 4rem)',
            marginTop: '5rem',
          }}
        >
          {[
            { value: '5+', label: '年の経験' },
            { value: '20+', label: 'ゲームプロジェクト' },
            { value: '100%', label: 'Unity製' },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <p
                style={{
                  fontFamily: "'Share Tech Mono', monospace",
                  fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
                  fontWeight: 700,
                  color: 'var(--neon-blue)',
                  textShadow: '0 0 16px rgba(0,240,255,0.5)',
                  lineHeight: 1,
                  margin: 0,
                }}
              >
                {stat.value}
              </p>
              <p
                style={{
                  fontSize: '0.7rem',
                  color: 'var(--text-muted)',
                  marginTop: '0.3rem',
                  letterSpacing: '0.05em',
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.4rem',
            marginTop: '4rem',
          }}
        >
          <span
            style={{
              fontSize: '0.62rem',
              color: 'var(--text-muted)',
              fontFamily: "'Share Tech Mono', monospace",
              letterSpacing: '0.18em',
            }}
          >
            SCROLL
          </span>
          <div
            style={{
              width: '1px',
              height: '36px',
              background: 'linear-gradient(to bottom, rgba(0,240,255,0.6), transparent)',
            }}
          />
        </div>
      </div>
    </div>
  )
}
