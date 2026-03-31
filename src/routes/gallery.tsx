import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

export const Route = createFileRoute('/gallery')({
  component: Gallery,
})

const GALLERY_ITEMS = [
  {
    id: 1,
    title: 'アクションRPG — 戦闘シーン',
    category: 'RPG',
    color: ['#0a0a1a', '#1a0a30', '#0d0020'],
    accentColor: 'var(--neon-magenta)',
    desc: 'カスタムライティングシェーダーを使用した夜間戦闘シーン。',
  },
  {
    id: 2,
    title: 'シューティング — ボス戦',
    category: 'STG',
    color: ['#000a1a', '#001a2a', '#000d18'],
    accentColor: 'var(--neon-blue)',
    desc: 'プロシージャルに生成されるパーティクルバレットパターン。',
  },
  {
    id: 3,
    title: 'パズルゲーム — ステージ3',
    category: 'PZL',
    color: ['#0a0a00', '#1a1a00', '#100f00'],
    accentColor: 'var(--neon-green)',
    desc: 'ディゾルブシェーダーを活用したブロック消滅エフェクト。',
  },
  {
    id: 4,
    title: 'シェーダーデモ — ホログラム',
    category: 'DEMO',
    color: ['#000a0a', '#001a18', '#000d10'],
    accentColor: 'var(--neon-blue)',
    desc: 'HLSLで実装したリアルタイムホログラムシェーダー。',
  },
  {
    id: 5,
    title: 'プラットフォーマー — 森ステージ',
    category: 'ACT',
    color: ['#050a05', '#0a1a0a', '#061006'],
    accentColor: 'var(--neon-green)',
    desc: 'パーリンノイズによる動的な植生シェーダーを実装。',
  },
  {
    id: 6,
    title: 'ポストエフェクト集',
    category: 'VFX',
    color: ['#0a0010', '#150020', '#0d0018'],
    accentColor: 'var(--neon-magenta)',
    desc: 'クロマティックアベレーション、グリッチ、スキャンラインの組み合わせ。',
  },
  {
    id: 7,
    title: 'マルチプレイヤー対戦',
    category: 'NET',
    color: ['#000a18', '#001530', '#00091e'],
    accentColor: 'var(--neon-blue)',
    desc: 'Netcode for GameObjectsを使った2Dオンライン対戦ゲーム。',
  },
  {
    id: 8,
    title: '水面シェーダーデモ',
    category: 'SHD',
    color: ['#000a12', '#00121a', '#000810'],
    accentColor: 'var(--neon-blue)',
    desc: 'FFTウェーブ + 屈折シェーダーによるリアルタイム水面表現。',
  },
]

function PlaceholderImage({
  item,
  size = 'normal',
}: {
  item: (typeof GALLERY_ITEMS)[0]
  size?: 'normal' | 'large'
}) {
  const h = size === 'large' ? 400 : 200

  return (
    <div
      style={{
        width: '100%',
        height: `${h}px`,
        background: `linear-gradient(135deg, ${item.color[0]} 0%, ${item.color[1]} 50%, ${item.color[2]} 100%)`,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px',
        }}
      />
      {/* Category badge */}
      <div
        style={{
          fontFamily: "'Share Tech Mono', monospace",
          fontSize: size === 'large' ? '3rem' : '1.6rem',
          fontWeight: 700,
          color: item.accentColor,
          textShadow: `0 0 20px ${item.accentColor}`,
          position: 'relative',
          zIndex: 1,
          letterSpacing: '0.1em',
        }}
      >
        {item.category}
      </div>
      {/* Decorative lines */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: `linear-gradient(90deg, transparent, ${item.accentColor}, transparent)`,
          opacity: 0.6,
        }}
      />
    </div>
  )
}

function Gallery() {
  const [selected, setSelected] = useState<number | null>(null)
  const [filter, setFilter] = useState<string>('ALL')

  const categories = ['ALL', ...Array.from(new Set(GALLERY_ITEMS.map((i) => i.category)))]

  const filtered =
    filter === 'ALL' ? GALLERY_ITEMS : GALLERY_ITEMS.filter((i) => i.category === filter)

  const selectedItem = selected !== null ? GALLERY_ITEMS.find((i) => i.id === selected) : null

  function prev() {
    if (selected === null) return
    const idx = filtered.findIndex((i) => i.id === selected)
    if (idx > 0) setSelected(filtered[idx - 1].id)
  }

  function next() {
    if (selected === null) return
    const idx = filtered.findIndex((i) => i.id === selected)
    if (idx < filtered.length - 1) setSelected(filtered[idx + 1].id)
  }

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
        <div style={{ marginBottom: '2.5rem' }}>
          <p className="section-label" style={{ marginBottom: '0.75rem' }}>
            // GALLERY
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
            ギャラリー
          </h1>
          <p
            style={{
              color: 'var(--text-muted)',
              marginTop: '0.75rem',
              fontSize: '0.9rem',
              lineHeight: 1.7,
            }}
          >
            ゲームスクリーンショットとシェーダーデモのギャラリーです。
          </p>
          <div className="neon-hr" />
        </div>

        {/* Filter buttons */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={filter === cat ? 'btn-neon-blue' : ''}
              style={{
                padding: '0.35rem 0.85rem',
                borderRadius: '3px',
                fontSize: '0.75rem',
                fontFamily: "'Share Tech Mono', monospace",
                letterSpacing: '0.06em',
                background: filter === cat ? undefined : 'transparent',
                color: filter === cat ? undefined : 'var(--text-muted)',
                border: filter === cat ? undefined : '1px solid rgba(255,255,255,0.1)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: '1rem',
          }}
        >
          {filtered.map((item) => (
            <div
              key={item.id}
              className="gallery-item"
              onClick={() => setSelected(item.id)}
              style={{ cursor: 'pointer' }}
            >
              <PlaceholderImage item={item} />
              <div className="gallery-overlay">
                <p
                  style={{
                    fontFamily: "'Noto Sans JP', sans-serif",
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    margin: 0,
                  }}
                >
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedItem && (
        <div
          onClick={() => setSelected(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.9)',
            zIndex: 10000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '700px',
              width: '100%',
              background: 'var(--bg-card)',
              border: '1px solid rgba(0,240,255,0.25)',
              borderRadius: '6px',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <PlaceholderImage item={selectedItem} size="large" />

            {/* Close */}
            <button
              onClick={() => setSelected(null)}
              style={{
                position: 'absolute',
                top: '0.75rem',
                right: '0.75rem',
                background: 'rgba(0,0,0,0.6)',
                border: '1px solid rgba(0,240,255,0.3)',
                borderRadius: '3px',
                color: 'var(--neon-blue)',
                padding: '0.3rem',
                cursor: 'pointer',
                display: 'flex',
              }}
            >
              <X size={18} />
            </button>

            {/* Nav buttons */}
            <button
              onClick={(e) => { e.stopPropagation(); prev() }}
              style={{
                position: 'absolute',
                top: '50%',
                left: '0.75rem',
                transform: 'translateY(-50%)',
                background: 'rgba(0,0,0,0.6)',
                border: '1px solid rgba(0,240,255,0.3)',
                borderRadius: '3px',
                color: 'var(--neon-blue)',
                padding: '0.5rem',
                cursor: 'pointer',
                display: 'flex',
              }}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next() }}
              style={{
                position: 'absolute',
                top: '50%',
                right: '0.75rem',
                transform: 'translateY(-50%)',
                background: 'rgba(0,0,0,0.6)',
                border: '1px solid rgba(0,240,255,0.3)',
                borderRadius: '3px',
                color: 'var(--neon-blue)',
                padding: '0.5rem',
                cursor: 'pointer',
                display: 'flex',
              }}
            >
              <ChevronRight size={20} />
            </button>

            {/* Info */}
            <div style={{ padding: '1.25rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', gap: '1rem' }}>
                <h3
                  style={{
                    fontFamily: "'Noto Sans JP', sans-serif",
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    margin: 0,
                  }}
                >
                  {selectedItem.title}
                </h3>
                <span className="skill-tag" style={{ flexShrink: 0 }}>
                  {selectedItem.category}
                </span>
              </div>
              <p
                style={{
                  fontSize: '0.82rem',
                  color: 'var(--text-muted)',
                  marginTop: '0.5rem',
                  lineHeight: 1.6,
                }}
              >
                {selectedItem.desc}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
