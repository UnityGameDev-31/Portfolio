import { useEffect, useRef } from 'react'

export function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let w = (canvas.width = window.innerWidth)
    let h = (canvas.height = window.innerHeight)

    // Grid lines
    const GRID_SIZE = 60
    const PARTICLE_COUNT = 80

    interface Particle {
      x: number
      y: number
      vx: number
      vy: number
      size: number
      color: string
      alpha: number
      life: number
      maxLife: number
    }

    const particles: Particle[] = []

    const colors = ['#00f0ff', '#ff00aa', '#00ff88']

    function spawnParticle(): Particle {
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.6 + 0.2,
        life: 0,
        maxLife: Math.random() * 300 + 200,
      }
    }

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(spawnParticle())
    }

    let t = 0

    function draw() {
      ctx.clearRect(0, 0, w, h)

      // Dark bg
      ctx.fillStyle = '#0a0a0f'
      ctx.fillRect(0, 0, w, h)

      // Grid
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.04)'
      ctx.lineWidth = 1
      for (let x = 0; x < w; x += GRID_SIZE) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, h)
        ctx.stroke()
      }
      for (let y = 0; y < h; y += GRID_SIZE) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(w, y)
        ctx.stroke()
      }

      // Particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy
        p.life++

        const lifeRatio = p.life / p.maxLife
        const a = lifeRatio < 0.1
          ? (lifeRatio / 0.1) * p.alpha
          : lifeRatio > 0.8
            ? ((1 - lifeRatio) / 0.2) * p.alpha
            : p.alpha

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.globalAlpha = a
        ctx.fill()
        ctx.globalAlpha = 1

        // Glow
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2)
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3)
        grad.addColorStop(0, p.color.replace(')', ', 0.15)').replace('rgb', 'rgba').replace('#00f0ff', 'rgba(0,240,255,').replace('#ff00aa', 'rgba(255,0,170,').replace('#00ff88', 'rgba(0,255,136,') + '0.15)')
        grad.addColorStop(1, 'transparent')
        ctx.fillStyle = p.color
        ctx.globalAlpha = a * 0.2
        ctx.fill()
        ctx.globalAlpha = 1

        if (p.life >= p.maxLife || p.x < 0 || p.x > w || p.y < 0 || p.y > h) {
          particles[i] = spawnParticle()
        }
      }

      // Draw connections
      ctx.lineWidth = 0.5
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(0, 240, 255, ${(1 - dist / 120) * 0.08})`
            ctx.stroke()
          }
        }
      }

      t++
      animId = requestAnimationFrame(draw)
    }

    draw()

    const onResize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  )
}
