import TweetCard from './../components/tweet-card'
import NewCard from './../components/new-card'

export default function Home() {
  return (
    <main style={{ margin: '48px', display: 'flex', gap: '48px' }}>
      {/*<TweetCard />*/}
      <NewCard />
    </main>
  )
}