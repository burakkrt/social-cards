'use client'
import TweetCard from './../components/tweet-card'
import NewCard from './../components/new-card'
import YoutubeCard from './../components/youtube-card'
import { useState } from 'react'

export default function Home() {
  const [selectCard, setSelectCard] = useState('tweetCard')
  const options = [
    { value: 'tweetCard', label: 'Tweet Card' },
    { value: 'newCard', label: 'Haber Card' },
    { value: 'youtubeCard', label: 'Youtube Card' },
  ]
  const renderCard = [
    { key: 'tweetCard', component: <TweetCard /> },
    { key: 'newCard', component: <NewCard /> },
    { key: 'youtubeCard', component: <YoutubeCard /> },
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
      {renderCard.map((card) => card.key === selectCard && card.component)}
    </main>
  )
}
