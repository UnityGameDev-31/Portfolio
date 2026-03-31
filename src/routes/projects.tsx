import { createFileRoute } from '@tanstack/react-router'
import { allProjects } from 'content-collections'
import { ExternalLink, Github, Gamepad2 } from 'lucide-react'

export const Route = createFileRoute('/projects')({
  component: Projects,
})

const TAG_COLORS: Record<string, string> = {
  Unity: 'skill-tag',
  'C#': 'skill-tag',
  HLSL: 'skill-tag-magenta',
  GLSL: 'skill-tag-magenta',
  Shader: 'skill-tag-magenta',
  'カスタムシェーダー': 'skill-tag-magenta',
  'Shader Graph': 'skill-tag-magenta',
  'Post Processing': 'skill-tag-green',
  Physics: 'skill-tag-green',
  AI: 'skill-tag-green',
  'Particle System': 'skill-tag-green',
  DOTween: 'skill-tag-green',
  Cinemachine: 'skill-tag-green',
  'Netcode': 'skill-tag',
  'URP': 'skill-tag-magenta',
}

function tagClass(tag: string): string {
  return TAG_COLORS[tag] ?? 'skill-tag'
}

function Projects() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'var(--bg-primary)',
        padding: '4rem 1.5rem',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '3rem' }}>
          <p className="section-label" style={{ marginBottom: '0.75rem' }}>
            // PORTFOLIO
          </p>
          <h1
            style={{
              fontFamily: "'Noto Sans JP', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              color: 'var(--text-primary)',
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            プロジェクト
          </h1>
          <p
            style={{
              color: 'var(--text-muted)',
              marginTop: '0.75rem',
              fontSize: '0.9rem',
              lineHeight: 1.7,
            }}
          >
            これまでに制作したゲームや技術デモの一覧です。
          </p>
          <div className="neon-hr" />
        </div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {allProjects.map((project) => (
            <div key={project._meta.path} className="game-card" style={{ borderRadius: '6px', display: 'flex', flexDirection: 'column' }}>
              {/* Thumbnail */}
              <div
                style={{
                  height: '160px',
                  background: `linear-gradient(135deg, #0d0d20 0%, #1a0a2e 50%, #0a1020 100%)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Grid pattern */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `
                      linear-gradient(rgba(0,240,255,0.05) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(0,240,255,0.05) 1px, transparent 1px)
                    `,
                    backgroundSize: '30px 30px',
                  }}
                />
                <Gamepad2
                  size={48}
                  style={{ color: 'rgba(0,240,255,0.25)', position: 'relative', zIndex: 1 }}
                />
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                )}
              </div>

              {/* Body */}
              <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h2
                  style={{
                    fontFamily: "'Noto Sans JP', sans-serif",
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    color: 'var(--text-primary)',
                    margin: '0 0 0.6rem',
                  }}
                >
                  {project.title}
                </h2>
                <p
                  style={{
                    fontSize: '0.82rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.7,
                    flex: 1,
                    margin: '0 0 1rem',
                  }}
                >
                  {project.description}
                </p>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1rem' }}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={tagClass(tag)}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-neon-blue"
                      style={{
                        padding: '0.4rem 0.9rem',
                        borderRadius: '3px',
                        fontSize: '0.75rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        textDecoration: 'none',
                      }}
                    >
                      <Github size={13} />
                      GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-neon-magenta"
                      style={{
                        padding: '0.4rem 0.9rem',
                        borderRadius: '3px',
                        fontSize: '0.75rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        textDecoration: 'none',
                      }}
                    >
                      <ExternalLink size={13} />
                      デモを見る
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
