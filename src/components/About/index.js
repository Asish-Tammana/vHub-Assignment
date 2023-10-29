import {Component} from 'react'
import Header from '../Header'
import './index.css'

const songsList = [
  {
    songNumber: 1,
    songTitle: 'Jai Ho',
    singer: 'A R Rehman',
    releaseDate: '2008-12-16',
    songDuration: '05:19',
    youtubeLink: 'https://www.youtube.com/watch?v=cM5A1K6TxxM',
  },
  {
    songNumber: 2,
    songTitle: 'Tum Mile',
    singer: 'A R Rehman',
    releaseDate: '2009-08-26',
    songDuration: '05:54',
    youtubeLink: 'https://www.youtube.com/watch?v=zN92rxhJJfU',
  },
  {
    songNumber: 3,
    songTitle: 'Khwaja Mere Khwaja',
    singer: 'A R Rehman',
    releaseDate: '2008-11-12',
    songDuration: '06:52',
    youtubeLink: 'https://www.youtube.com/watch?v=y5xLquhyN8M',
  },
  {
    songNumber: 4,
    songTitle: 'Vande Mataram',
    singer: 'A R Rehman',
    releaseDate: '1997-08-15',
    songDuration: '04:38',
    youtubeLink: 'https://www.youtube.com/watch?v=Z-gurXouBYo',
  },
  {
    songNumber: 5,
    songTitle: 'Kun Faya Kun',
    singer: 'A R Rehman',
    releaseDate: '2011-06-24',
    songDuration: '07:45',
    youtubeLink: 'https://www.youtube.com/watch?v=9Yw5jkAHgME',
  },
  {
    songNumber: 6,
    songTitle: 'Roja Janeman',
    singer: 'A R Rehman',
    releaseDate: '1992-01-15',
    songDuration: '05:44',
    youtubeLink: 'https://www.youtube.com/watch?v=xy1wbsWQogM',
  },
  {
    songNumber: 7,
    songTitle: 'Tere Bina',
    singer: 'A R Rehman',
    releaseDate: '2006-04-26',
    songDuration: '04:48',
    youtubeLink: 'https://www.youtube.com/watch?v=zk4Fx7J4cRc',
  },
  {
    songNumber: 8,
    songTitle: 'Mitwa',
    singer: 'A R Rehman',
    releaseDate: '2004-04-30',
    songDuration: '06:55',
    youtubeLink: 'https://www.youtube.com/watch?v=BWqgQT4Oz6M',
  },
  {
    songNumber: 9,
    songTitle: 'Dil Se Re',
    singer: 'A R Rehman',
    releaseDate: '1998-07-21',
    songDuration: '05:05',
    youtubeLink: 'https://www.youtube.com/watch?v=TVae1n7YcS8',
  },
  {
    songNumber: 10,
    songTitle: 'Hamma Hamma',
    singer: 'A R Rehman',
    releaseDate: '1995-09-15',
    songDuration: '05:36',
    youtubeLink: 'https://www.youtube.com/watch?v=I6nY4jPb53I',
  },

  {
    songNumber: 11,
    songTitle: 'Adiye',
    singer: 'Sid Sriram',
    releaseDate: '2017-05-15',
    duration: '04:30',
    youtubeLink: 'https://www.youtube.com/watch?v=sample1',
  },
  {
    songNumber: 12,
    songTitle: 'Kadalalle',
    singer: 'Sid Sriram',
    releaseDate: '2019-03-10',
    duration: '05:42',
    youtubeLink: 'https://www.youtube.com/watch?v=sample2',
  },
  {
    songNumber: 13,
    songTitle: 'Thalli Pogathey',
    singer: 'Sid Sriram',
    releaseDate: '2016-01-17',
    duration: '05:14',
    youtubeLink: 'https://www.youtube.com/watch?v=sample3',
  },
  {
    songNumber: 14,
    songTitle: 'Ennai Maatrum Kadhale',
    singer: 'Sid Sriram',
    releaseDate: '2016-07-22',
    duration: '04:30',
    youtubeLink: 'https://www.youtube.com/watch?v=sample4',
  },
  {
    songNumber: 15,
    songTitle: 'Maruvaarthai',
    singer: 'Sid Sriram',
    releaseDate: '2017-04-10',
    duration: '05:19',
    youtubeLink: 'https://www.youtube.com/watch?v=sample5',
  },
  {
    songNumber: 16,
    songTitle: 'Inaye',
    singer: 'Sid Sriram',
    releaseDate: '2015-11-12',
    duration: '04:45',
    youtubeLink: 'https://www.youtube.com/watch?v=sample6',
  },
  {
    songNumber: 17,
    songTitle: 'High On Love',
    singer: 'Sid Sriram',
    releaseDate: '2018-02-13',
    duration: '03:38',
    youtubeLink: 'https://www.youtube.com/watch?v=sample7',
  },
  {
    songNumber: 18,
    songTitle: 'Mellisaiye',
    singer: 'Sid Sriram',
    releaseDate: '2016-08-25',
    duration: '05:13',
    youtubeLink: 'https://www.youtube.com/watch?v=sample8',
  },
  {
    songNumber: 19,
    songTitle: 'Vaan',
    singer: 'Sid Sriram',
    releaseDate: '2019-02-14',
    duration: '04:51',
    youtubeLink: 'https://www.youtube.com/watch?v=sample9',
  },
  {
    songNumber: 20,
    songTitle: 'Yennai Maatrum Kadhale',
    singer: 'Sid Sriram',
    releaseDate: '2016-07-22',
    duration: '04:43',
    youtubeLink: 'https://www.youtube.com/watch?v=sample10',
  },
  {
    songNumber: 31,
    songTitle: 'Why This Kolaveri Di',
    singer: 'Anirudh Ravichander',
    releaseDate: '2011-11-16',
    songDuration: '04:15',
    youtubeLink: 'https://www.youtube.com/watch?v=YR12Z8f1Dh8',
  },
  {
    songNumber: 32,
    songTitle: "Don'u Don'u Don'u",
    singer: 'Anirudh Ravichander',
    releaseDate: '2015-06-12',
    songDuration: '04:04',
    youtubeLink: 'https://www.youtube.com/watch?v=3GSMoxEl8wY',
  },
  {
    songNumber: 33,
    songTitle: 'Aaluma Doluma',
    singer: 'Anirudh Ravichander',
    releaseDate: '2015-10-16',
    songDuration: '05:20',
    youtubeLink: 'https://www.youtube.com/watch?v=5p0QtJMKt1s',
  },
  {
    songNumber: 34,
    songTitle: 'Thangamey',
    singer: 'Anirudh Ravichander',
    releaseDate: '2015-02-11',
    songDuration: '04:35',
    youtubeLink: 'https://www.youtube.com/watch?v=V1rMKVMi7GQ',
  },
  {
    songNumber: 35,
    songTitle: 'Velaiilla Pattadhari',
    singer: 'Anirudh Ravichander',
    releaseDate: '2014-02-14',
    songDuration: '04:48',
    youtubeLink: 'https://www.youtube.com/watch?v=X8FZCDu4w4o',
  },
  {
    songNumber: 36,
    songTitle: 'Maari Thara Local',
    singer: 'Anirudh Ravichander',
    releaseDate: '2015-05-25',
    songDuration: '03:20',
    youtubeLink: 'https://www.youtube.com/watch?v=mv2pR6Zav9w',
  },
  {
    songNumber: 37,
    songTitle: 'Senjitaley',
    singer: 'Anirudh Ravichander',
    releaseDate: '2016-01-04',
    songDuration: '04:37',
    youtubeLink: 'https://www.youtube.com/watch?v=0PDbJf_sMVQ',
  },
  {
    songNumber: 38,
    songTitle: 'Kalyaana Vayasu',
    singer: 'Anirudh Ravichander',
    releaseDate: '2018-05-17',
    songDuration: '03:34',
    youtubeLink: 'https://www.youtube.com/watch?v=dQ0KbUKsA4c',
  },
  {
    songNumber: 39,
    songTitle: 'Rowdy Baby',
    singer: 'Anirudh Ravichander',
    releaseDate: '2018-11-02',
    songDuration: '04:44',
    youtubeLink: 'https://www.youtube.com/watch?v/x6Q7c9RyMzk',
  },
  {
    songNumber: 40,
    songTitle: 'Master the Blaster',
    singer: 'Anirudh Ravichander',
    releaseDate: '2021-01-15',
    songDuration: '04:15',
    youtubeLink: 'https://www.youtube.com/watch?v=pK1hZ82EYrU',
  },
  {
    songNumber: 41,
    songTitle: 'Ringa Ringa',
    singer: 'Devi Sri Prasad',
    releaseDate: '2008-05-01',
    songDuration: '4:34',
    youtubeLink: 'https://www.youtube.com/watch?v=XXXXXXX1',
  },
  {
    songNumber: 42,
    songTitle: 'Aa Ante Amalapuram',
    singer: 'Devi Sri Prasad',
    releaseDate: '2003-03-21',
    songDuration: '4:47',
    youtubeLink: 'https://www.youtube.com/watch?v=XXXXXXX2',
  },
  {
    songNumber: 43,
    songTitle: 'Pakka Local',
    singer: 'Devi Sri Prasad',
    releaseDate: '2016-03-26',
    songDuration: '4:26',
    youtubeLink: 'https://www.youtube.com/watch?v=XXXXXXX3',
  },
  {
    songNumber: 44,
    songTitle: 'Gudilo Badilo Madilo',
    singer: 'Devi Sri Prasad',
    releaseDate: '2017-03-05',
    songDuration: '4:24',
    youtubeLink: 'https://www.youtube.com/watch?v=XXXXXXX4',
  },
  {
    songNumber: 45,
    songTitle: 'Seeti Maar',
    singer: 'Devi Sri Prasad',
    releaseDate: '2017-05-22',
    songDuration: '4:04',
    youtubeLink: 'https://www.youtube.com/watch?v=XXXXXXX5',
  },
  {
    songNumber: 46,
    songTitle: 'Lage Lage',
    singer: 'Devi Sri Prasad',
    releaseDate: '2007-01-16',
    songDuration: '4:45',
    youtubeLink: 'https://www.youtube.com/watch?v=XXXXXXX6',
  },
  {
    songNumber: 47,
    songTitle: 'Cinema Choopistha Mava',
    singer: 'Devi Sri Prasad',
    releaseDate: '2015-07-03',
    songDuration: '4:19',
    youtubeLink: 'https://www.youtube.com/watch?v=XXXXXXX7',
  },
  {
    songNumber: 48,
    songTitle: 'Mira Mira Meesam',
    singer: 'Devi Sri Prasad',
    releaseDate: '2017-01-11',
    songDuration: '3:55',
    youtubeLink: 'https://www.youtube.com/watch?v=XXXXXXX8',
  },
  {
    songNumber: 49,
    songTitle: 'Follow Follow',
    singer: 'Devi Sri Prasad',
    releaseDate: '2016-02-05',
    songDuration: '4:15',
    youtubeLink: 'https://www.youtube.com/watch?v=XXXXXXX9',
  },
  {
    songNumber: 50,
    songTitle: 'Violin Song (Girl Just)',
    singer: 'Devi Sri Prasad',
    releaseDate: '2009-07-22',
    songDuration: '3:55',
    youtubeLink: 'https://www.youtube.com/watch?v=XXXXXXX10',
  },
]

const singersList = [
  {singer: 'A R Rehman', path: '/ar-rehman'},
  {singer: 'Sid Sriram', path: '/sid-sriram'},
  {singer: 'Anirudh Ravichander', path: '/anirudh'},
  {singer: 'Devi Sri Prasad', path: '/dsp'},
]

class About extends Component {
  state = {
    activeList: [],
  }

  componentDidMount() {
    this.getSongs()
  }

  getSongs = () => {
    const {location} = this.props
    const {pathname} = location
    const obj = singersList.filter(each => each.path === pathname)
    const {singer} = obj[0]

    const activeList = songsList.filter(each => each.singer === singer)

    this.setState({
      activeList,
    })
  }

  render() {
    const {activeList} = this.state

    return (
      <div>
        <Header />
        <div className="songs-list-container">
          {activeList.map(each => (
            <a
              target="_blank"
              rel="noreferrer"
              href={each.youtubeLink}
              key={each.songNumber}
              className="song-item"
            >
              <h3>{each.songTitle}</h3>
              <h3>{each.singer}</h3>
              <p>{each.releaseDate}</p>
              <p>{each.songDuration}</p>
            </a>
          ))}
        </div>
      </div>
    )
  }
}
export default About
