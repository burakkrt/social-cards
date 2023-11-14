'use client'
import TweetCard from './../components/tweet-card'
import NewCard from './../components/new-card'
import YoutubeCard from './../components/youtube-card'
import TiktokCard from './../components/tiktok-card'
import { useState } from 'react'

export default function Home() {
  const [selectCard, setSelectCard] = useState('tweetCard')
  const [tweetMulti, setTweetMulti] = useState(false)
  const options = [
    { value: 'tweetCard', label: 'Tweet Card' },
    { value: 'newCard', label: 'Haber Card' },
    { value: 'youtubeCard', label: 'Youtube Card' },
    { value: 'tiktokCard', label: 'Tiktok Card' },
  ]
  const renderCard = [
    { key: 'tweetCard', component: <TweetCard multiple={tweetMulti} /> },
    { key: 'newCard', component: <NewCard /> },
    { key: 'youtubeCard', component: <YoutubeCard /> },
    { key: 'tiktokCard', component: <TiktokCard /> },
  ]

  return (
    <main style={{ margin: '48px' }}>
      <select
        name="cards"
        style={{ width: '200px', padding: '4px 8px', margin: '2rem 0' }}
        onChange={(e) => {
          setSelectCard(e.currentTarget.value)
        }}
        value={selectCard}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {selectCard === 'tweetCard' && (
        <div style={{ margin: '0 15px', display: 'inline-block' }}>
          <input
            type="checkbox"
            name="dads"
            onClick={(e) => setTweetMulti(!tweetMulti)}
            checked={tweetMulti}
          />
          <span>
            TweetCard : <strong>{tweetMulti ? 'Multiple' : 'Normal'}</strong>
          </span>
        </div>
      )}
      {renderCard.map((card) => card.key === selectCard && card.component)}
    </main>
  )
}
