import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { Header } from '@/components/Header'

import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: '平山ゆうき | Unityゲーム開発者' },
      { name: 'description', content: 'Unity Game Developer — C# & カスタムシェーダーエキスパート' },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <HeadContent />
      </head>
      <body>
        <Header />
        <main style={{ paddingTop: '3.5rem' }}>
          {children}
        </main>
        <Scripts />
      </body>
    </html>
  )
}
