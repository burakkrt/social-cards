'use client'
import TweetCard from './../components/tweet-card'
import NewCard from './../components/new-card'
import YoutubeCard from './../components/youtube-card'
import TiktokCard from './../components/tiktok-card'
import { useState } from 'react'
import { TiktokCardProps } from '@/components/tiktok-card/types'
import { YoutubeCardProps } from '@/components/youtube-card/types'

const data: TiktokCardProps = {
  data: {
    channelImage: 'profile-photo.svg',
    channelName: 'Channel Name',
    channelSubs: '100 B Abone',
    comments: '100.000',
    description:
      'GAZZE’DEN ETKİLENDİ MÜSLÜMAN OLDU! ABD’li bir vatandaş, katilİsrail’in Gazze’deki katliamları Lorem ipsum dolor sit ame consectetur adipisicing elit. Odio dolorum obcaecati voluptates veexplicabo magni veritatis iusto ex nesciunt laudantium',
    likes: '100.000',
    saves: '100.000',
    shareDate: '12.05.2021',
    shareImage: 'post-image.svg',
    views: '100.000',
  },
}

const YoutubeData: YoutubeCardProps = {
  data: {
    shareImage: 'post-image.svg',
    channelImage: 'profile-photo.svg',
    channelName: 'Channel Name',
    channelSubs: '100 B Abone',
    description:
      'GAZZE’DEN ETKİLENDİ MÜSLÜMAN OLDU! ABD’li bir vatandaş, katilİsrail’in Gazze’deki katliamları Lorem ipsum dolor sit ame consectetur adipisicing elit. Odio dolorum obcaecati voluptates veexplicabo magni veritatis iusto ex nesciunt laudantium',
    shareDate: '12.05.2021',
    likes: '100.000',
    views: '100.000',
  },
}

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
    { key: 'youtubeCard', component: <YoutubeCard data={YoutubeData.data} /> },
    { key: 'tiktokCard', component: <TiktokCard data={data.data} /> },
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
