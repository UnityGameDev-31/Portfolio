import { createFileRoute } from '@tanstack/react-router'
import { User, Code2, Zap, Trophy } from 'lucide-react'

export const Route = createFileRoute('/about')({
  component: About,
})

const SKILLS = [
  { name: 'Unity', level: 95, color: 'blue' },
  { name: 'C#', level: 92, color: 'blue' },
  { name: 'HLSL / GLSL シェーダー', level: 88, color: 'magenta' },
  { name: 'Shader Graph', level: 90, color: 'magenta' },
  { name: 'URP / HDRP', level: 85, color: 'magenta' },
  /*{ name: 'Cinemachine', level: 80, color: 'green' },
  { name: 'DOTween', level: 85, color: 'green' },*/
  { name: 'Git / GitHub', level: 88, color: 'blue' }
  /*{ name: 'Blender（3Dモデリング）', level: 65, color: 'green' },
  { name: 'Photoshop / Illustrator', level: 70, color: 'green' },*/
]

const EXPERIENCES = [
  /*{
    icon: <Trophy size={20} style={{ color: 'var(--neon-blue)' }} />,
    title: 'ゲームジャム優勝 × 2',
    desc: '国内外のゲームジャムで2度の最優秀賞を受賞。',
  },*/
  {
    icon: <Code2 size={20} style={{ color: 'var(--neon-magenta)' }} />,
    title: 'カスタムシェーダー専門',
    desc: 'HLSL/GLSLによるポストエフェクト、ディゾルブ、ホログラムシェーダーを得意とする。',
  },
  {
    icon: <Zap size={20} style={{ color: 'var(--neon-green)' }} />,
    title: 'パフォーマンス最適化',
    desc: 'モバイル・PC問わず60FPS以上を実現する最適化手法に精通。',
  },
  {
    icon: <User size={20} style={{ color: 'var(--neon-blue)' }} />,
    title: 'フルスタックゲーム開発',
    desc: '企画からリリースまで、個人・チームを問わずゲーム全工程を担当可能。',
  },
]

function SkillBar({ name, level, color }: { name: string; level: number; color: string }) {
  const barColor =
    color === 'blue'
      ? 'linear-gradient(90deg, var(--neon-blue), rgba(0,240,255,0.6))'
      : color === 'magenta'
        ? 'linear-gradient(90deg, var(--neon-magenta), rgba(255,0,170,0.6))'
        : 'linear-gradient(90deg, var(--neon-green), rgba(0,255,136,0.6))'

  const glowColor =
    color === 'blue'
      ? 'rgba(0,240,255,0.4)'
      : color === 'magenta'
        ? 'rgba(255,0,170,0.4)'
        : 'rgba(0,255,136,0.4)'

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '0.3rem',
        }}
      >
        <span
          style={{
            fontSize: '0.82rem',
            color: 'var(--text-primary)',
            fontFamily: "'Share Tech Mono', monospace",
          }}
        >
          {name}
        </span>
        <span
          style={{
            fontSize: '0.75rem',
            color: 'var(--text-muted)',
            fontFamily: "'Share Tech Mono', monospace",
          }}
        >
          {level}%
        </span>
      </div>
      <div
        style={{
          height: '4px',
          background: 'rgba(255,255,255,0.06)',
          borderRadius: '2px',
          overflow: 'hidden',
        }}
      >
        <div
          className="progress-bar"
          style={{
            background: barColor,
            boxShadow: `0 0 8px ${glowColor}`,
            width: `${level}%`,
          }}
        />
      </div>
    </div>
  )
}

function About() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'var(--bg-primary)',
        padding: '4rem 1.5rem',
      }}
    >
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {/* Section label */}
        <p className="section-label" style={{ marginBottom: '0.75rem' }}>
          // ABOUT ME
        </p>
        <h1
          style={{
            fontFamily: "'Noto Sans JP', sans-serif",
            fontWeight: 900,
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            color: 'var(--text-primary)',
            margin: '0 0 0.5rem',
          }}
        >
          自己紹介
        </h1>
        <div className="neon-hr" />

        {/* Profile section */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'auto 1fr',
            gap: '3rem',
            marginBottom: '4rem',
            alignItems: 'start',
          }}
        >
          
          {/* Avatar */}
          
          <div
            style={{
              width: 'clamp(120px, 20vw, 200px)',
              aspectRatio: '1',
              background: `url('/headshot-on-white.jpg')`,
              backgroundSize: 'cover',
              // 3. This centers the face/subject in the frame
              backgroundPosition: 'center',
              // 4. Prevents the image from repeating if the div is larger than the file
              backgroundRepeat: 'no-repeat',
              border: '2px solid rgba(0,240,255,0.3)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
              flexShrink: 0,
              boxShadow: '0 0 30px rgba(0,240,255,0.1)',
            }}
          >
          </div>
          
          {/* Bio */}
          <div>
            <h2
              style={{
                fontFamily: "'Noto Sans JP', sans-serif",
                fontWeight: 700,
                fontSize: '1.6rem',
                color: 'var(--text-primary)',
                marginBottom: '1rem',
              }}
            >
              平山ゆうき
            </h2>
            <p
              style={{
                fontSize: '0.88rem',
                color: 'var(--text-muted)',
                lineHeight: 1.9,
                marginBottom: '1.2rem',
              }}
            >
              Unityを中心としたゲーム開発者として5年以上の経験を持っています。 C＃プログラミングとカスタムシェーダー（HLSL / GLSL）を専門に、没入感のあるビジュアルと快適なゲームプレイを両立したゲーム制作を追求しています。
            </p>
            <p
              style={{
                fontSize: '0.88rem',
                color: 'var(--text-muted)',
                lineHeight: 1.9,
                marginBottom: '1.5rem',
              }}
            >
              アクションRPG、シューティングなど幅広いジャンルの開発経験があり、国内外のゲームジャムでも数多くの経験があります。パフォーマンスの最適化とビジュアルの美しさを両立させることが自慢であり、独自のポストエフェクトやパーティクルシステムで世界観を表現することに情熱を注いでいます。
            </p>

            {/* Status indicator */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <div
                className="pulse-dot"
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: 'var(--neon-green)',
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontSize: '0.78rem',
                  color: 'var(--neon-green)',
                  fontFamily: "'Share Tech Mono', monospace",
                  letterSpacing: '0.05em',
                }}
              >
                現在、フリーランス案件を募集中です。お気軽にご相談ください。
              </span>
            </div>
          </div>
        </div>

        {/* Experience highlights */}
        <div style={{ marginBottom: '4rem' }}>
          <p className="section-label" style={{ marginBottom: '1.5rem' }}>
            // HIGHLIGHTS
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
              gap: '1rem',
            }}
          >
            {EXPERIENCES.map((exp) => (
              <div key={exp.title} className="game-card" style={{ padding: '1.25rem', borderRadius: '6px' }}>
                <div style={{ marginBottom: '0.75rem' }}>{exp.icon}</div>
                <h3
                  style={{
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '0.4rem',
                    fontFamily: "'Noto Sans JP', sans-serif",
                  }}
                >
                  {exp.title}
                </h3>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  {exp.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div>
          <p className="section-label" style={{ marginBottom: '1.5rem' }}>
            // SKILLS
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
              gap: '1rem',
            }}
          >
            {SKILLS.map((skill) => (
              <SkillBar key={skill.name} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
