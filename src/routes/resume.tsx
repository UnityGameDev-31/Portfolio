import { createFileRoute } from '@tanstack/react-router'
import { allJobs, allEducations } from 'content-collections'
import { Badge } from '@/components/ui/badge'
import { marked } from 'marked'

export const Route = createFileRoute('/resume')({
  component: Resume,
})

function Resume() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'var(--bg-primary)',
        padding: '4rem 1.5rem',
      }}
    >
      <div style={{ maxWidth: '860px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <p className="section-label" style={{ marginBottom: '0.75rem' }}>
            // RESUME
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
            職務経歴
          </h1>
          <div className="neon-hr" />
        </div>

        {/* Work Experience */}
        <section style={{ marginBottom: '4rem' }}>
          <p className="section-label" style={{ marginBottom: '1.5rem' }}>
            // WORK EXPERIENCE
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {allJobs.map((job) => (
              <div key={job.jobTitle} className="game-card" style={{ padding: '1.5rem', borderRadius: '6px' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: '1rem',
                    flexWrap: 'wrap',
                    marginBottom: '0.75rem',
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontFamily: "'Noto Sans JP', sans-serif",
                        fontSize: '1.15rem',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        margin: '0 0 0.25rem',
                      }}
                    >
                      {job.jobTitle}
                    </h3>
                    <p
                      style={{
                        fontSize: '0.85rem',
                        color: 'var(--neon-blue)',
                        fontFamily: "'Share Tech Mono', monospace",
                        margin: 0,
                      }}
                    >
                      {job.company} — {job.location}
                    </p>
                  </div>
                  <span className="skill-tag" style={{ flexShrink: 0, fontSize: '0.72rem' }}>
                    {job.startDate} — {job.endDate ?? '現在'}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: '0.85rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.75,
                    marginBottom: '1rem',
                  }}
                >
                  {job.summary}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                  {job.tags.map((tag) => (
                    <span key={tag} className="skill-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                {job.content && (
                  <div
                    style={{ marginTop: '1rem', fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.7 }}
                    dangerouslySetInnerHTML={{ __html: marked(job.content) as string }}
                  />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <p className="section-label" style={{ marginBottom: '1.5rem' }}>
            // EDUCATION
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {allEducations.map((edu) => (
              <div key={edu.school} className="game-card" style={{ padding: '1.5rem', borderRadius: '6px' }}>
                <h3
                  style={{
                    fontFamily: "'Noto Sans JP', sans-serif",
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    margin: '0 0 0.5rem',
                  }}
                >
                  {edu.school}
                </h3>
                <p
                  style={{
                    fontSize: '0.85rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.75,
                  }}
                >
                  {edu.summary}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginTop: '1rem' }}>
                  {edu.tags.map((tag) => (
                    <span key={tag} className="skill-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
