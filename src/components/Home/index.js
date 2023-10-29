import {Component} from 'react'
import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const singersList = [
  {singer: 'A R Rehman', path: '/ar-rehman'},
  {singer: 'Sid Sriram', path: '/sid-sriram'},
  {singer: 'Anirudh Ravichander', path: '/anirudh'},
  {singer: 'Devi Sri Prasad', path: '/dsp'},
]

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          {singersList.map(each => (
            <Link className="link-style" to={`${each.path}`} key={each.singer}>
              <div className="card-container">
                <h1>{each.singer}</h1>
              </div>
            </Link>
          ))}
        </div>
      </div>
    )
  }
}
export default Home
